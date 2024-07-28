---
layout: signuno
title: Signuno - alfabeto
js:
    - signuno
css:
    - sign
---

<!--
https://www.sutton-signwriting.io/signmaker
-->

## Alfabeto

[]minuskla []majuskla []manloka

<div id="alfabeto">

|a|b|c|ĉ|d|
|e|f|g|ĝ|h|
|ĥ|i|j|ĵ|k|
|l|m|n|o|p|
|r|s|ŝ|t|u|
|ŭ|v|z|
|q|w|x|y|

|A|B|C(ĉ)|D|E|
|F|G(ĝ)|H(ĥ)|I|J(ĵ)|
|K|L|M|N|O|
|P|R|S(ŝ)|T|U(ŭ)|
|V|Z|
|Q|W|X|Y|

</div>

<script>
    const abc = document.querySelectorAll("#alfabeto table tr")
        .forEach((tr) => {
            // kopiu la tabellinion
            const _tr = tr.cloneNode(true);
            // traduku al Signuno
           for (const td of _tr.children) {
              // trovu tekstojn de la ĉeloj en la vortaro
              // forigu (...) antaŭe
              const text = td.textContent.replace(/\(.*\)/,'');
              const sgn = Gesto.sgn_elm[text];
              if (sgn) {
                td.setAttribute("data-sgn",sgn);
              }
           }
           tr.insertAdjacentElement("afterend",_tr)
        });

</script>

<!--
|a|b|c|ĉ|d|e|
|S1f820|S14720|S16d20|S17720|S10120|S14a20|

|f|g|ĝ|h|ĥ|i|
|S1ce20|S10020|S1f520|S1a020|S19c20|S19220|

|j|ĵ|k|l|m|n|
|S1b020|S12820|S14020|S1dc20|S20020|S1fe20|

|o|p|r|s|ŝ|
|S17620|S12a20|S11a20|S20320|S14c20|

|t|u|ŭ|v|z|
|S1ea20|S11520|S18c20|S10e20|S11e20|

|q|w|x|y|
|S1bb20|S18620|S10620|S19a20|

|A|B|C(ĉ)|D|E|
|M508x514S22802494x504S17620492x486|M506x517S15a20494x490S22104494x483|S17720|S1e220|S15020|

|F|G(ĝ)|H(ĥ)|I|J(ĵ)|
|M515x513S1ef20486x498S22104487x487|S1f520|S19c20|S1c620|S12820|

|K|L|M|N|O|
|S16320|M512x513S1eb20488x494S22200489x487|S18e20|S11e20|S1eb20|

|P|R|S(ŝ)|T|U(ŭ)|
|S1da20|S14420|S14c20|S1c520|S18c20|

|Z|Q|W|X|Y|
|M513x520S14c20489x489S22620487x480|M517x515S1c120488x486S22204484x492|M508x517S15520493x491S22200494x483|M508x519S10e20493x489S22600497x482|M508x517S15420493x492S22204495x483|

-->