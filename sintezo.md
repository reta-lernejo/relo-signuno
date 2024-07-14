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
    // trovu grandon de simbolo en la gesto aŭ la de la tuta gesto
    function grando(gesto,prefikso) {
        const re = new RegExp(`${prefikso}(\\d{3})x(\\d{3})`,'i');
        const m = gesto.match(re);
        if (m) {
            // larĝo kaj alto
            const l = parseInt(m[1]);
            const a = parseInt(m[2]);
            return [l,a];
        }
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
            // sed evtl. adaptu grandecon
            const ls = ssw.ttf.fsw.symbolSize(lf);
            /*
            const mg = grando(pf,'S15a[0-9a-zA-z]{2}');
            const gg = grando(pf,'M');
            console.debug("ls: "+ls+ " mg: "+mg);
            const ex = Math.ceil(gg[0]+(mg[0]-ls[0])/2);
            const ey = Math.ceil(gg[1]+(mg[1]-ls[1])/2);
            */
            const gesto = pf
                .replace(/S15a/g,lf.substring(0,4));
                //.replace(/^M(\d{3})x(\d{3})/,`M${ex}x${ey}`);
            return ssw.ttf.fsw.signNormalize(gesto);
            //return gesto;
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
