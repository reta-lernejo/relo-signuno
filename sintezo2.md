---
layout: signuno
title: Signuno - sintezo
js:
    - sgn_vrt
    - signuno
css:
    - sign
---

<!--

https://www.sutton-signwriting.io/signmaker
-->


## Signuno

<input id="vortoj" name="vortoj" list="sgn_vrt"/>

<datalist id="sgn_vrt"></datalist>

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

function vortaro() {
    const sv = document.getElementById("sgn_vrt");
    for (const v in sgn_vrt) {
        const o = document.createElement("option");
        o.textContent = v;
        sv.append(o)
    }
}

vortaro();

function sintezo(formulo) {
    const g = new Gesto(formulo);
    g.preparo();
    g.sintezo();
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
              const frm = sgn_vortaro(text);
              const sgn = sintezo(frm);

              if (frm) td.setAttribute("data-frm",frm);
              if (sgn) td.setAttribute("data-sgn",sgn); //+"-C");
           }
           tr.insertAdjacentElement("afterend",_tr)
        });
},0);
</script>
