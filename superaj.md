---
layout: signuno
title: Superaj
js:
    - folio-0c
    - sgn_vsp-0a
    - signuno-0b
css:
    - sign
---

## Superaj gestoj

(...en preparo... - ankoraŭ ne bona!)

Superaj gestoj estas faritaj per kelkaj mansignoj en manloko @63 akompanataj
de lipmovoj pronconcantaj la vorton por senambiguigi. Per lipoj oni ne povas distingi senambigue 
ĉiujn prononcitaj literojn, do ekzemple la lipbildo por m, b, kaj p estas la sama.

Malsupre vi povas krei la gestojn por la vortoj laŭ la superaj gestoj.

<!--
https://www.sutton-signwriting.io/
-->

<style>
    .akc {
        background-color: lightskyblue;
        padding: .2em;
        border-radius: 4px;
    }
</style>

Trovu en supera vortaro:
<input id="vortaro" name="vortaro" list="sgn_vrt"/>
<datalist id="sgn_vrt"></datalist>

kaj aldonu finaĵon:  
()-as ()-is ()-os ()-us ()-i ()-u  
()-o ()-on ()-oj ()-ojn  
()-a ()-an ()-aj ()-ajn  
()-e ()-en ()neniu
{: .elekto #fino}

Vorto: <span id="vorto" class="akc"></span><span id="s_signo" class="akc"></span>

<span id="ssw_signo"></span>


<script>

function vortaro() {
    const sv = document.getElementById("sgn_vrt");
    for (const v in sgn_vrt_super) {
        const o = document.createElement("option");
        o.textContent = v;
        sv.append(o)
    }
}

vortaro();

kiam("change","#vortaro",sintezo);

let gesto, fino;

elekte((elekto,valoro) => {
  console.log(elekto+':'+valoro);
  fino = valoro == "neniu"? "": valoro;
  sintezo();
});

function sintezo() {
    const vrt = document.getElementById("vortaro").value;
    document.getElementById("vorto").textContent = `${vrt||''}${fino||''}`
    let sgn = sgn_vrt_super[vrt];
    if (sgn) {
        /*
        if (fino) {
            const fin = sgn_vortaro(fino);
            if (fin) sgn += fin;
        }
        */
        sintezo_ssw(sgn);
    } else {
        document.getElementById("vorto").textContent = "?"
        malplenigu("#s_signo");
        malplenigu("#ssw_signo");
    }
}

function sintezo_ssw(sgn) {
    gesto = new SuperaGesto(sgn);
    // montru la elementojn de la Signunokodo
    document.getElementById("s_signo").textContent = sgn;

    // prezentu la geston
    document.getElementById("ssw_signo").innerHTML = gesto.gesto_svg()||"";
}

/*
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
*/
</script>
