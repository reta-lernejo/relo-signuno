---
layout: signuno
title: Signuno - sintezo
js:
    - sgn_elm
    - sgn_vrt
    - signuno
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
    const g = new Gesto(formulo);
    g.preparo();
    g.mansintezo();
    return g.gesto_fsw();
}

signune(()=> {
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
