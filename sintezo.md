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
    // korekto de pozicio estu duoana grandecdiferenco
    // tiel ke mezpunktoj koincidos
    function delta(smb1,smb2) {
        const g1 = ssw.ttf.fsw.symbolSize(smb1);
        const g2 = ssw.ttf.fsw.symbolSize(smb2);
        if (g1&&g2)
            return [g2[0]-g1[0],g2[1]-g1[1]];
    }

    // trovu en vortaro
    const formulo = sgn_vrt[vort];
    if (formulo) {
        const pj = formulo.split('@');
        const lf = sgn_elm[pj[0]]
        const pf = sgn_elm['@'+pj[1]];
        console.debug("l: "+lf+ " p: "+pf);
        if (lf[0] == 'S') {
            // se la litero estas unuopa simbolo, ni povas
            // simple anstatŭigi la bazon (S999)
            // sed evtl. adaptu la poziciojn laŭ simbolgrandeco
            // const ls = ssw.ttf.fsw.symbolSize(lf);

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
        }
        return pf; //provizore
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
