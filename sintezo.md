---
layout: signuno
title: Signuno - lokoj
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

|admon|akv|asert|
|ŝalm|vers|vin|

|onkl|tremp|triumf|

</div>


<script>


function sintezo(vort) {
    // korekto de pozicio estu duona grandecdiferenco
    // tiel ke mezpunktoj koincidos
    function delta(smb1,smb2) {
        const g1 = ssw.ttf.fsw.symbolSize(smb1);
        const g2 = ssw.ttf.fsw.symbolSize(smb2);
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
    function trovu_smb(gesto,i0=0,xde=0x15a,xal=0x15a) {
        let i = i0;
        let S = gesto.indexOf('S',i0);
        while (S>=i) {
            const hex = parseInt(gesto.substring(S+1,S+4),16);
            if (xde <= hex && hex <= xal && S+12 < gesto.length) {
                return S;
            } else {
                i = S+12;
                S = gesto.indexOf('S',i);
            }
        }
    }

    // distanco inter la mezpunktoj de du
    // simboloj, donitaj per ties indeksoj en gestoj,
    // (tiom ni ŝovas ĉiujn
    // simbolojn, kiujn ni volas enmeti en la geston)
    function dist(S1,gesto1,S2,gesto2) {
        if (S1>0 && S2>0 && S1+12<gesto1.length && S2+12<gesto2.length) {
            const smb1 = gesto1.substring(S1,S1+12);
            const smb2 = gesto2.substring(S2,S1+12);
            // simbolgrandcoj
            const g1 = ssw.ttf.fsw.symbolSize(smb1.substring(0,6));
            const g2 = ssw.ttf.fsw.symbolSize(smb2.substring(0,6));
            // simbolmezpunktoj
            const M1 = [parseInt(smb1.substring(6,9))+g1[0]/2,
                        parseInt(smb1.substring(10,13))+g1[1]/2];
            const M2 = [parseInt(smb2.substring(6,9))+g2[0]/2,
                        parseInt(smb2.substring(10,13))+g2[1]/2];
            return [M2[0]-M1[0],M2[1]-M1[1]];
        }
    }

    // trovu en vortaro
    const formulo = sgn_vrt[vort];
    if (formulo) {
        const pj = formulo.split('@');
        // literformulo (a..Z)
        const lf = sgn_elm[pj[0]]
        // poziciformulo (@00..@64)
        const pf = sgn_elm['@'+pj[1]];
        console.debug("l: "+lf+ " p: "+pf);
        if (lf[0] == 'S') {
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
        } else {
            // se la litero konsistas el kelkaj simboloj (ekz-mano+movo),
            // ni devas ĉiujn kopii kune, sed reletive al la mezpunktoj
            // de la du manoj

            // ni unue trovu la mansimbolon (S100..S204) en lf
            // la aliaj estas supoze la fingro/manmovaj simboloj
            //lf.match(/S[12])...

            const M1 = trovu_smb(pf,8,0x15a,0x15a);
            const M2 = trovu_smb(lf,8,0x100,0x204);
            const dmov = dist(M1,pf,M2,lf);

            // ni unue anstataŭigas la manon kaj korektas la pozicion
            let gesto = pf
                .replace(/S15a([0-9a-z]{2})(\d{3})x(\d{3})/ig,
                    (m,s,l,a) => {
                        const d = delta(`S15a${s}`,lf.substring(M2,M2+6));
                        const x = Math.trunc(parseInt(l)-d[0]/2);
                        const y = Math.trunc(parseInt(a)-d[1]/2);
                        const nova = `${lf.substring(M1,3)}${s}${x}x${y}`;
                        return nova;
                    });

            // ni nun aldonas ĉiujn aliajn simbolojn el lf movante ilin...
            let i = 8;
            let S1 = trovu_smb(lf,i,0x205,0x2fe);
            while (S1>=i) {
                const x = Math.trunc(parseInt(lf.substring(S1+6,S1+3)+dmov[0]));
                const y = Math.trunc(parseInt(lf.substring(S1+10,S1+13)+dmov[1]));
                // alpendigu al gesto
                gesto += `${lf.substring(S1,5)}${x}x${y}`;
                // serĉu sekvan
                i = S1+12;
                S1 = trovu_smb(lf,i,0x205,0x2fe);
            }

            return ssw.ttf.fsw.signNormalize(gesto);
        }
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
              const sgn = sintezo(text);
              if (sgn) {
                td.setAttribute("data-sgn",sgn);
              }
           }
           tr.insertAdjacentElement("afterend",_tr)
        });
},0);
</script>
