class Gesto {

    static re_sgn = /^([a-zA-Z])@(\d\d)([*\\/\$~+-=#_^]{0,2})$/;

    /**
     * Redonas la diferencon inter la grandeco de du
     * simboloj. Ni bezonas tion, por korekti disŝovojn.
     * @param {*} S1 nomo (FSW-kodo) de la unua simbolo, ekz. S015a102
     * @param {*} S2 nomo (FSW-kodo) de la dua simbolo
     * @returns diferenco de larĝo kaj alto kiel areo de du koordinatoj 
     */
    static delto(S1,S2) {
        const g1 = ssw.ttf.fsw.symbolSize(S1);
        const g2 = ssw.ttf.fsw.symbolSize(S2);
        if (g1&&g2)
            return [
                g2[0]-g1[0],
                g2[1]-g1[1]
            ];
    }

    /**
     * Distanco inter la mezpunktoj de du simboloj
     * @param {*} smb1 la unua simbolo donita en analizita formo
     * @param {*} smb2 la dua simbolo donita en analizita formo
     * @returns 
     */
    static mezdistanco(smb1,smb2) {
        if (smb1 && smb2) {
            // simbolgrandcoj
            const g1 = ssw.ttf.fsw.symbolSize(smb1.symbol);
            const g2 = ssw.ttf.fsw.symbolSize(smb2.symbol);
            // simbolmezpunktoj
            const M1 = [smb1.coord[0]+g1[0]/2,
                        smb1.coord[1]+g1[1]/2];
            const M2 = [smb2.coord[0]+g2[0]/2,
                        smb2.coord[1]+g2[1]/2];
            return [
                M2[0]-M1[0],
                M2[1]-M1[1]
            ];
        }
    }


    /**
     * Kreas novan geston el Signuno-kodo
     * @param {*} kodo, ekz. "i@18*" (io)
     */
    constructor(kodo) {
        this.kodo = kodo;

        const fm = re_sgn.exec(kodo);
        if (fm) {
            this.litero = fm[1];
            this.loko = fm[2];
            this.movo = fm[3];
        }

        // la sintezita gesto, ni komencas per la manloko
        // kaj poste ŝanĝas ties mano(j) al la litersigno kaj
        // aldonas evtl. movojn
        this.gesto = this.loko;
    }

    /**
     * Uzas ssw por analizi la partojn el kiu konsistas la gesto.
     * Vi nepre voku tiun ĉi funkcion antaŭ aliaj, kiuj bezonas ties rezulton
     */
    preparo() {
        if (ssw && ssw.ttf.fsw) {
            if (this.manloko) this.lok_fsw = ssw.fsw.parse.sign(this.loko);
            if (this.litero) this.lit_fsw = this.litero[0] == 'S'? ssw.fsw.parse.symbol(this.litero) : ssw.fsw.parse.sign(this.litero);
            if (this.movo) this.mov_fsw = this.mov[0] == 'S'? ssw.fsw.parse.symbol(this.movo) : ssw.fsw.parse.sign(this.movo);
        }
    }


    /**
     * Trovas simbolon de certa speco en signo.
       Intervaloj de simboltipoj vd. ĉap. 2.3.3 en
       https://datatracker.ietf.org/doc/id/draft-slevinski-formal-signwriting-09.html#name-formal-signwriting-in-ascii

        all symbols 	S100 - S38b 	U+40001 -U+4F480
        writing 	    S100 - S37e 	U+40001 -U+4EFA0
        --
        hand 	        S100 - S204 	U+40001 -U+461E0
        movement 	    S205 - S2f6 	U+461E1 -U+4BCA0
        dynamic 	    S2f7 - S2fe 	U+4BCA1 -U+4BFA0
        head 	        S2ff - S36c 	U+4BFA1 -U+4E8E0
        hcenter 	    S2ff - S36c 	U+4BFA1 -U+4E8E0
        vcenter 	    S2ff - S375 	U+4BFA1 -U+4EC40
        trunk 	        S36d - S375 	U+4E8E1 -U+4EC40
        limb 	        S376 - S37e 	U+4EC41 -U+4EFA0
        location 	    S37f - S386 	U+4EFA1 -U+4F2A0
        punctuation 	S387 - S38b 	U+4F2A1 -U+4F480
    */
    *simboloj(fsw, xde=0x15a, xal=0x15a) {
        for (let i=i0; i<fsw.spatials.length; i++) {
            const s = fsw.spatials[i];
            const hex = parseInt(s.symbol.substring(1,4),16)
            if (xde <= hex && hex <= xal) {
                //yield [s,i];
                yield s;
            };
        }
    }    

    /**
     * Eltrovas la poziciojn de la manoj en la loko-signo. Se mano nur rolas kiel
     * fiksa pozicio, kaj do ne estas simbolo de sepco S15a, ĝi ne kalkuliĝas.
     */
    manoj() {
        const manoj = this.simboloj(this.lok_fsw);
        return manoj.toArray();
    }

    /**
     * Informas, ĉu la loko-signo estas simtetria, t.e. dumana, kies ambaŭ manoj
     * kune kaj simetrie montras la signon
     */
    simetria() {
        const mn = this.manoj.length;
        return (mn == 2);
    }


    /**
     * Sintezas geston el la baza (manloko) kaj la litero (mansigno)
     */
    mansintezo() {

        const manoj = this.simboloj(this.gesto);
        for (const man of manoj) {

            if (this.lit_fsw.spatials) {
            // se la litersigno konsistas el sola mano (sen aldonaj signoj, ekz. fingroklino)

                // anstataŭigu la platan manon per la speciala mansigno de la litero
                const litsmb = this.lit_fsw.symbol;
                const d = Gesto.delto(man.symbol,litsmb); 
                // korektu je duono de d
                man.coord = [
                    Math.trunc(man.coord[0]-d[0]/2),
                    Math.trunc(man.coord[1]-d[1]/2)];

                man.symbol = litsmb.substring(0,4) 
                    + man.symbol.substring(4,6);

            } else {
                // se la litero konsistas el kelkaj simboloj (ekz-mano+fingromovo),
                // ni devas ĉiujn kopii kune, sed relative al la mezpunktoj de la du manoj

                // ni unue trovu la mansimbolon (S100..S204) en litero
                // la aliaj estas supoze la fingro/manmovaj simboloj
                const lman = this.simboloj(this.lit_fsw,0x100,0x204).next();

                // ni unue anstataŭigas la manon kaj korektas la pozicion
                const d = Gesto.delto(man.symbol,lman.symbol);
                    man.coord = [
                        Math.trunc(man.coord[0]-d[0]/2),
                        Math.trunc(man.coord[1]-d[1]/2)];

                    man.symbol = lman.symbol.substring(0,4)
                        + man.symbol.substring(4,6);

                // ni nun aldonas ĉiujn aliajn simbolojn el lf movante ilin...
                const dmov = Gesto.mezdistanco(man,lman);
                const lsmbj = this.simboloj(this.lit_fsw,0x205,0x2fe);

                for (const ls of lsmbj) {
                    const coord = [
                        Math.trunc(ls.coord[0] - dmov[0]),
                        Math.trunc(ls.coord[1] - dmov[1])
                    ];
                    this.gesto.push({
                        coord: coord,
                        symbol: ls.symbol
                    });
                }
            }
        }
    }

}