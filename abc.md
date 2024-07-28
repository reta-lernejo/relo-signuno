---
layout: signuno
title: Alfabeto
js:
    - folio-0c
    - signuno-0a
css:
    - sign
---

<!--
https://www.sutton-signwriting.io/signmaker
-->

## Alfabeto

Signuno provizas tri alfabetojn: (a) minusklan por literumado, (b) majusklan, kiu aldone al la minuskla estas uzata por sintezi vortgestojn kaj (c) manlokan, kiun oni uzas por distanca komunikado kaj por ĥemiaj elementoj. Plurajn signojn oni povas memori per tio, ke aŭ la mano (minuskla alfabeto) aŭ la brakoj (manloka alfabeto) imitas la formon de la latina litero.

<!--
Dek literojn de la majuskla alfabeto oni uzas ankaŭ por esprimi ciferojn, sed kun turnita mano, t.e. la polmo malantaŭen.
--> 

Kelkaj signoj povas esprimi similajn literojn: ekz-e la mansignoj por supersignaj literoj estas la samaj kiel la koncernaj majusklaj literoj - kun kaj sen supersignoj (do ĉ, C kaj Ĉ havas la saman mansignon). Simile la manloka signo por y kaj ĵ, por ŭ kaj w estas la samaj.

[x]minuskla []majuskla []manloka
{: .elekto #abc}

<style>
    .signoj {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    .signo {
        padding: .2em;
        border-left: 1px dotted lightskyblue;
        border-right: 1px dotted lightskyblue;
    }
    .signo svg {
        vertical-align: middle;
    }
</style>

<div id="tbl_abc"></div>

<script>

    signune(montru_abc);
    elekte(montru_abc);

    const literoj = "abcĉdefgĝhĥijĵklmnopqrsŝtuŭvwxyz";

/*
    const nombroj = {
        "D": "7",
        "E": "5",
        "I": "1",
        "K": "2",
        "M": "3",
        "N": "6",
        "O": "0",
        "P": "8",
        "R": "4",
        "T": "9"
    }
    */

    const mnemoniko = {
        "a": "A-brakoj",
        //"b": "B-brakoj",
        "c": "C-brako",
        "f": "frunto",
        "i": "I-brako",
        "k": "kubuto",
        "l": "L-brako",
        "m": "M-kubutoj",
        "n": "nazo",
        "r": "ree",
        "t": "T-manoj",
        "x": "X-brakoj",
        "v": "V-brakoj",
        "w": "W-kubutoj",
        "y": "Y-korpo"
    };

    function montru_abc(elekto,valoro) {
        const tbl_abc = ĝi("#tbl_abc");
        tbl_abc.textContent='';

        const tbl = kreu("table");
        let trl = kreu("tr");
        let trs = kreu("tr");

        for (const l of literoj) {
            // ni metas po 5 literojn en unu vicon
            if(trl.childElementCount>=5) {
                tbl.append(trl,trs);
                trl = kreu("tr");
                trs = kreu("tr");
            }
            // montru la nomon kaj signo(j)n de la litero
            let nom = "";
            let sgn = [];
            // minuskla/majuskla/manloka
            if (ĝi("#abc_0").checked) {
                nom += l;
                sgn.push(Gesto.sgn_elm[l]);
            }
            if (ĝi("#abc_1").checked) {
                const L = l.toUpperCase();
                nom += " "+L;
                sgn.push(Gesto.sgn_elm[L]);
            }
            if (ĝi("#abc_2").checked) {
                const mnm = mnemoniko[l];
                nom += ` [${l}${mnm?" - "+mnm:""}]`;
                const ms = Gesto.sgn_lokabc[l];
                sgn.push(Gesto.sgn_elm[ms]);
            }
            // se nenio estas elektita, forigu la tabelon
            if (!nom) {
                return;
            }

            const lnom = kreu("td",{},nom);
            trl.append(lnom);
            // signoj (FSW)
            //const signoj = sgn.map((s) => kreu("span",{"class":"signo","data-fsw":s}));
            const signoj = sgn.map((s) => kreu("div",{"class":"signo","data-fsw":s}));
            const div = kreu("div",{"class":"signoj"});
            const td = kreu("td");
            div.append(...signoj);
            td.append(div);
            trs.append(td);
        }
        tbl.append(trl,trs);
        tbl_abc.append(tbl);
        montru_svg();
    }

    function montru_svg() {
        document.querySelectorAll("#tbl_abc .signo")
        .forEach((s) => {
            // traduku FSW al SVG
            const fsw = s.getAttribute("data-fsw");
            const svg = Gesto.fsw2svg(fsw);
            if (svg) {
            s.innerHTML = svg;
            }
        });
    }

</script>
