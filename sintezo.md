---
layout: signuno
title: Sintezo
js:
    - folio-0c
    - sgn_vrt-0a
    - signuno-0b
css:
    - sign
---

## Sintezo

Bazaj vortoj estas sintezitaj el *unuopa* litersigno kun manloko kaj eventuala movo.
Tuŝoj ne estas montrataj por aeraj gestoj - manke de tuŝeblo.

Malsupre vi povas krei simplan frazon helpe de la baza vortaro.

<!--
https://www.sutton-signwriting.io/signmaker

FARENDA:
- sintezo ĉe oblikvaj manoj: kobalt, rentgen
- metu movsignojn ĝuste ĉe la pinto de la manoj kaj ĉe tuŝsignoj anstaŭigu evtl. jaman el la pozicio
-->

<style>
    .akc {
        background-color: lightskyblue;
        padding: .2em;
        border-radius: 4px;
    }
</style>

Trovu en baza vortaro:
<input id="vortaro" name="vortaro" list="sgn_vrt"/>
<datalist id="sgn_vrt"></datalist>

kaj aldonu finaĵon:  
()-as ()-is ()-os ()-us ()-i ()-u  
()-o ()-on ()-oj ()-ojn  
()-a ()-an ()-aj ()-ajn  
()-e ()-en ()neniu
{: .elekto #fino}

Vorto: <span id="vorto" class="akc"></span>

|litero: <span id="s_litero" class="akc"></span>|manloko: <span id="s_loko" class="akc"></span>|movo: <span id="s_movo" class="akc"></span>|sintezo <span id="s_signo" class="akc"></span>|
|<span id="ssw_litero"></span>|<span id="ssw_loko"></span>|<span id="ssw_movo"></span>|<span id="ssw_signo"></span>|

[Aldonu]
{: .butonoj #aldonu}

|Esperanto|Signuno|Gesto|
{: #teksto}


<script>

function vortaro() {
    const sv = document.getElementById("sgn_vrt");
    for (const v of Object.keys(sgn_vrt).sort()) {
        const o = document.createElement("option");
        o.textContent = v;
        sv.append(o)
    }
}

vortaro();

kiam("change","#vortaro",sintezo);
kiam("click","#ssw_signo",() => {
    const trd = revo_trd();
    ĝi("#ssw_signo").append(trd)
});

let gesto, fino;

elekte((elekto,valoro) => {
  console.log(elekto+':'+valoro);
  fino = valoro == "neniu"? "": valoro;
  sintezo();
});

butone((tasko) => {
    //console.log(tasko);
    const teksto = ĝi("#teksto");
    const tr = kreu("tr");
    const eo = kreu("td",{},ĝi("#vorto").textContent);
    const sgn = kreu("td",{},ĝi("#s_signo").textContent);
    const gst = kreu("td"); gst.innerHTML = ĝi("#ssw_signo").innerHTML;
    tr.append(eo,sgn,gst);
    teksto.append(tr);
});

function sintezo() {
    const vrt = document.getElementById("vortaro").value;
    document.getElementById("vorto").textContent = `${vrt||''}${fino||''}`
    let sgn = sgn_vortaro(vrt);
    if (sgn) {
        if (fino) {
            const fin = sgn_vortaro(fino);
            if (fin) sgn += fin;
        }
        sintezo_ssw(sgn);
    } else {
        document.getElementById("vorto").textContent = "?"
        malplenigu("#s_signo");
        malplenigu("#s_loko");
        malplenigu("#s_litero");
        malplenigu("#s_movo");
        malplenigu("#ssw_litero");
        malplenigu("#ssw_loko");
        malplenigu("#ssw_movo");
        malplenigu("#ssw_signo");
    }
}

function sintezo_ssw(sgn) {
    gesto = new Gesto(sgn);
    // montru la elementojn de la Signunokodo
    document.getElementById("s_signo").textContent = sgn;
    document.getElementById("s_loko").textContent = gesto.loko;
    document.getElementById("s_litero").textContent = gesto.litero;
    document.getElementById("s_movo").textContent = gesto.movo;

    // prezentu la geston
    gesto.preparo();
    gesto.sintezo();
    document.getElementById("ssw_litero").innerHTML = gesto.litero_svg()||"";
    document.getElementById("ssw_loko").innerHTML = gesto.loko_svg()||"";
    document.getElementById("ssw_movo").innerHTML = gesto.movo_svg()||"";
    document.getElementById("ssw_signo").innerHTML = gesto.gesto_svg()||"";
}

function revo_trd() {
    const sgn = ĝi("#s_signo").textContent;
    const fsw = ĝi("#ssw_signo").querySelector("svg>text").textContent;
    return `<trd lng="sgn" kod="${fsw}">${sgn}</trd>`;
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
