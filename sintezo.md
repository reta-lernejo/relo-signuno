---
layout: signuno
title: Signuno - sintezo
js:
    - sgn_elm
    - sgn_vrt
css:
    - sign
---

<!--

https://www.sutton-signwriting.io/signmaker
-->


## Manlokoj

<div id="gestoj">


|kio|vi|far|


<!--
|admon|akv|asert|
|ŝalm|vers|vin|

|onkl|hom|triumf|

|stult|teori|absurd|

|mi|parol|gestolingv|

|unu|tri|dek|

|tiu|kio|neniam|
-->

</div>

<script>

function sintezo(formulo) {
    re_frm = /^([a-zA-Z])@(\d\d)([*\\/\$~+-=#_^]{0,2})$/;

    // korekto de pozicio estu duona grandecdiferenco
    // tiel ke mezpunktoj koincidos
    function delta(s1,s2) {
        const g1 = ssw.ttf.fsw.symbolSize(s1);
        const g2 = ssw.ttf.fsw.symbolSize(s2);
        if (g1&&g2)
            return [g2[0]-g1[0],g2[1]-g1[1]];
    }

    // trovu simbolon de certa tipo/intervalo en gesto
    /*
    intervaloj de simboltipoj vd. ĉap. 2.3.3 en
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
    function trovu_smb(parsed,xde=0x15a,xal=0x15a,i0=0) {
        for (let i=i0; i<parsed.spatials.length; i++) {
            const s = parsed.spatials[i];
            const hex = parseInt(s.symbol.substring(1,4),16)
            if (xde <= hex && hex <= xal) {
                return i;
            };
        }
        return -1;
    }

    // distanco inter la mezpunktoj de du simboloj
    // (tiom ni ŝovas ĉiujn simbolojn, kiujn ni volas enmeti en la geston)
    function dist(s1,s2) {
        if (s1 && s2) {
            // simbolgrandcoj
            const g1 = ssw.ttf.fsw.symbolSize(s1.symbol);
            const g2 = ssw.ttf.fsw.symbolSize(s2.symbol);
            // simbolmezpunktoj
            const M1 = [s1.coord[0]+g1[0]/2,
                        s1.coord[1]+g1[1]/2];
            const M2 = [s2.coord[0]+g2[0]/2,
                        s2.coord[1]+g2[1]/2];
            return [M2[0]-M1[0],M2[1]-M1[1]];
        }
    }

    function mansintezo(lf,pf) {

        let pp = ssw.fsw.parse.sign(pf);

        if (lf[0] == 'S') {

            // analizu la literon kaj la manlokon (geston)
            const lp = ssw.fsw.parse.symbol(lf);

            pp.spatials.forEach((s,i) => {
                if (s.symbol.substring(0,4) == 'S15a') {
                    // anstataŭigu la platan manon per la speciala mansigno de la litero
                    const d = delta(s.symbol,lp.symbol); // grandecdiferenco de la du mansignoj
                    // korektu je duono de d
                    s.coord = [
                        Math.trunc(s.coord[0]-d[0]/2),
                        Math.trunc(s.coord[1]-d[1]/2)];

                    s.symbol = lp.symbol.substring(0,4)+s.symbol.substring(4,6);
                    //pp.spatials[i] = s;
                }
            });
/*
            // se la litero estas unuopa simbolo, ni povas
            // simple anstatŭigi la bazon (S999)
            // sed evtl. adaptu la poziciojn laŭ simbolgrandeco
            const gesto = pf
                .replace(/S15a([0-9a-z]{2})(\d{3})x(\d{3})/ig,
                    (m,s,l,a) => {
                        const d = delta(`S15a${s}`,lf);
                        const x = Math.trunc(parseInt(l)-d[0]/2);
                        const y = Math.trunc(parseInt(a)-d[1]/2);
                        const nova = `${lf.substring(0,4)}${s}${x}x${y}`;
                        return nova;
                    });
            return ssw.ttf.fsw.signNormalize(gesto);
            */
        } else {
            // se la litero konsistas el kelkaj simboloj (ekz-mano+movo),
            // ni devas ĉiujn kopii kune, sed reletive al la mezpunktoj
            // de la du manoj

            // ni unue trovu la mansimbolon (S100..S204) en lf
            // la aliaj estas supoze la fingro/manmovaj simboloj
            //lf.match(/S[12])...

            // analizu la litersignon kaj la manlokon (geston)
            const lp = ssw.fsw.parse.sign(lf);

            //const gmano = trovu_smb(pp,0x15a,0x15a);

            // la litersignoj havu nur unu manosimbolon
            // la aliaj estas movoj
            const li = trovu_smb(lp,0x100,0x204);
            lmano = (li>=0)? lp.spatials[li] : undefined;

            pp.spatials.forEach((s,i) => {

                // ni unue anstataŭigas la manon kaj korektas la pozicion
                if (s.symbol.substring(0,4) == 'S15a') {
                    const d = delta(s.symbol,lmano.symbol);
                    s.coord = [
                        Math.trunc(s.coord[0]-d[0]/2),
                        Math.trunc(s.coord[1]-d[1]/2)];

                    s.symbol = lmano.symbol.substring(0,4)+s.symbol.substring(4,6);

                    // ni nun aldonas ĉiujn aliajn simbolojn el lf movante ilin...
                    const dmov = dist(s,lmano);
                    let j = trovu_smb(lp,0x205,0x2fe);
                    while (j>=0) {
                        const s = lp.spatials[j];
                        const coord = [
                            Math.trunc(s.coord[0]-dmov[0]),
                            Math.trunc(s.coord[1]-dmov[1])];
                        pp.spatials.push({
                            coord: coord,
                            symbol: s.symbol
                        });
                        j = trovu_smb(lp,0x205,0x2fe,j+1);
                    }
                }
            });

/*
            // ni unue anstataŭigas la manon kaj korektas la pozicion
            let gesto = pf
                .replace(/S15a([0-9a-z]{2})(\d{3})x(\d{3})/ig,
                    (m,s,l,a) => {
                        const d = delta(`S15a${s}`,lf.substring(M2,M2+6));
                        const x = Math.trunc(parseInt(l)-d[0]/2);
                        const y = Math.trunc(parseInt(a)-d[1]/2);
                        const nova = `${lf.substring(M1,M1+4)}${s}${x}x${y}`;
                        return nova;
                    });
*/
        }
        return pp;
    }

    // trovu en vortaro
    if (formulo) try {
        const fm = re_frm.exec(formulo);

        // literformulo (a..Z)
        const lf = fm[1]? sgn_elm[fm[1]]: undefined
        // poziciformulo (manlokoj @00..@64)
        const pf = fm[2]? sgn_elm['@'+fm[2]]: undefined;
        // aldona movo/tuŝo ks
        const mf = fm[3]? sgn_elm[fm[3]]: undefined;

        console.debug("l: "+lf+ " p: "+pf);

        const gesto = mansintezo(lf,pf);

        // se ĉestas movsigno aldonu ĝin
        if (mf) {
            gesto.spatials.push({
                coord: [500,500],
                symbol: mf
            });
        }

        return ssw.ttf.fsw.signNormalize(ssw.fsw.compose.sign(gesto));

    } catch(error) {
        console.error(error)
    }
}

signune(()=>{
    const abc = document.querySelectorAll("#gestoj table tr")
        .forEach((tr) => {
            // kopiu la tabellinion
            const _tr = tr.cloneNode(true);
            // traduku al Signuno
           for (const td of _tr.children) {
              // trovu tekstojn de la ĉeloj en la vortaro
              // forigu (...) antaŭe
              const text = td.textContent;
              const frm = sgn_vrt[text];
              const sgn = sintezo(frm);

              if (frm) td.setAttribute("data-frm",frm);
              if (sgn) td.setAttribute("data-sgn",sgn); //+"-C");
           }
           tr.insertAdjacentElement("afterend",_tr)
        });
},0);
</script>
