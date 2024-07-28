---
layout: signuno
title: Signuno - lokoj
js:
    - signuno-0a
css:
    - sign
---

<!--

https://www.sutton-signwriting.io/signmaker
-->

## Manlokoj

<style>
  tr:nth-child(odd) {
    background: lightskyblue;
    border-top: 2px solid black;
    vertical-align: top;
  }
  tr:nth-child(odd) td {
    text-align: left;
  }
  tr:nth-child(even) td {
    text-align: center;
  }  
  .klr {
    font-size: small;
  }
</style>

<div id="manlokoj">

|@00|@01|@02|@03|
|@04|@05|@06|@07|
|@08|@09|@10|@11|
|@12|@13|@14|@15|
|@16|@17|@18|@19|
|@20|@21|@22|@23|
|@24|@25|@26|@27|
|@28|@29|@30|@31|
|@32|@33|@34|@35|
|@36|@37|@38|@39|
|@40|@41|@42|@43|
|@44|@45|@46|@47|
|@48|@49|@50|@51|
|@52|@53|@54|@55|
|@56|@57|@58|@59|
|@60|@61|@62|@63|

</div>

<script>

    signune(()=>{
    document.querySelectorAll("dd,td,li,.sign").forEach((el) => sign_render(el));
    })

    klarigoj = {
        "@00": "Unumana, fingroj supren, alte sur la mentono tuj sub la lipoj, polmo vicflanken.",
        "@01": "Simitrie dumana, fingroj supren, polmoj antaŭen.",
        "@02": "Unumana, fingroj vicflanken, polmo malantaŭen do frunten.",
        "@03": "Unumana, fingroj iom malantaŭen, polmo iom suben.",
        "@04": "Simitrie dumana, fingroj supren, polmoj malantaŭen proksimaj al la okuloj aŭ tre alte sur la vangoj.",
        "@05": "Unumana ĉe nazo, fingroj supren, polmo vicflanken.",
        "@06": "Unumana ĉe orelo, fingroj supren, polmo vicflanken.",
        "@07": "Simitrie dumana, fingropintoj tuŝas unu la aliajn, polmoj ortaj inter si.",
        "@08": "Unumana ĉe lipoj, fingroj supren, polmo malantaŭen.",
        "@09": "Unumana, polmo pli-malpli malantaŭen apud aŭ tuŝante la vangon (inter oreloj kaj lipoj).",
        "@10": "Unumana, la ĉefmano ĉ. 20 cm antaŭ la ĉefŝultro, fingroj supren, polmo antaŭen.",
        "@11": "Unumana, tuŝante per la polmo la kontraŭan supran brakon.",
        "@12": "Unumana, la ĉefmano ĉ. 20 cm antaŭ la ĉefŝultro, fingroj supren, mandorso antaŭen.",
        "@13": "Fingroj de ĉefmano supren, polmo antaŭen. Vicmano en formo 'b' ĉ. 10 cm antaŭ la korpo, polmo malantaŭen fingroj ĉefflanken. Ĉefmano antaŭ vicmano.",
        "@14": "Unumana, fingroj antaŭen, polmo suben.",
        "@15": "Unumana, fingroj antaŭen, polmo vicflanken.",
        "@16": "Unumana, fingroj antaŭen, Polmo supren.",
        "@17": "Unumana, tuŝante la alian manartikon, polmoj suben, vicmano kiel s-mano (pugno).",
        "@18": "Unumana, fingroj supren, polmo vicflanken.",
        "@19": "Fingroj de ĉefmano suben, polmo malantaŭen. Vicmano en formo 'b', ĉ 20cm antaŭ la korpo, polmo malantaŭen, fingroj ĉefflanken. Ĉefmano malantaŭ vicmano.",
        "@20": "Simitrie dumana, fingroj de ambaŭ manoj supren. Ĉefmano antaŭ vicmano.",
        "@21": "Fingroj de ĉefmano supren, polmo pli-malpli malantaŭen. Vicmano en formo 'b', ĉ. 20 cm antaŭ vicŝultro, polmo antaŭen, fingroj supren. Ĉefmano tuŝas la fundon de la polmo de la vicmano.",
        "@22": "Simitrie dumana, manoj antaŭ la genuoj. Fingroj de manoj suben, polmoj malantaŭen.",
        "@23": "Fingroj de ĉefmano supren, polmo malantaŭen. Vicmano en formo 'b', ĉ 10 cm antaŭ la kolo, polmo suben, fingroj ĉefflanken. Ĉefmano tuŝas la polmon de la vicmano.",
        "@24": "Simitrie dumana, manoj antaŭ ŝultroj, fingroj antaŭen, polmoj suben.",
        "@25": "Simitrie dumana, fingroj antaŭen, polmoj enen je distanco.",
        "@26": "Simitrie dumana, manoj antaŭ la genuoj. Fingroj de manoj antaŭen, polmoj supren.",
        "@27": "Fingroj de ĉefmano antaŭen, polmo suben. Vicmano en formo 'b',  ĉ. 10 cm antaŭ stomako, polmo supren, fingroj antaŭen. Ĉefmano tuŝas la vicmanon.",
        "@28": "Simitrie dumana, fingroj supren, polmoj enen je distanco.",
        "@29": "Fingroj de ĉefmano suben, polmo malantaŭen. Vicmano en formo 'b', ĉ. 10 cm antaŭ la talio, polmo supren, fingroj ĉefflanken. Ĉefmano tuŝas la polmon de la vicmano.",
        "@30": "Polmoj supren, la fingroj montras al la kontraŭa flanko. La ĉefmana dorso tuŝas la polmon de 'b'-vicmano kiu troviĝas ĉ. 10 cm antaŭ la koro.",
        "@31": "Polmo de ĉefmano suben, polmo de vicmano supren. La vicmano estas en formo 'S'. La manoj ortaj, la fingroj de la ĉefmano tuŝas la polmon de la vicmano.",
        "@32": "Simitrie dumana, manoj antaŭ la brusto, polmoj malantaŭen. Fingroj de la manoj direktiĝantaj unu al la alia.",
        "@33": "Simitrie dumana, la eĝo de la ĉefmano tuŝas la eĝon de la vicmano, en kvazaŭ vertikala ikso.",
        "@34": "Simitrie dumana, fingroj antaŭen, polmoj suben. La dikfingroj tuŝas unu la alian.",
        "@35": "Simitrie dumana, fingroj antaŭen. Polmoj enen, proksimaj sed sen kontakto.",
        "@36": "Polmo de ĉefmano supren kaj fingroj vicflanken, tuŝas la vertikalan vicmanon inter la montrofingro kaj la elstaranta dikfingro.",
        "@37": "Polmo de ĉefmano pli-malpli malantaŭen, vertikale tuŝanta alsupran polmon de 'b'-vicmano.",
        "@38": "Simitrie dumana, fingroj supren. Polmoj enen tre proksimaj sed sen kontakto.",
        "@39": "Simitrie dumana, polmoj suben, la ĉefmano kuŝas sur la dorso de la vicmano, en kvazaŭ horizontala ikso.",
        "@40": "Unumana, ĉe kokso, fingroj suben, polmo koksen.",
        "@41": "Unumana ĉe ŝultro/akselo, polmo oblikve suben iom flanken.",
        "@42": "Unumana, fingroj vicflanken, polmo gorĝen.",
        "@43": "Simitrie dumana, fingroj direktiĝantaj unu al la alia, polmoj ŝultren.",
        "@44": "Unumana, fingroj vicflanken, polmo suben.",
        "@45": "Unumana, fingroj vicflanken, polmo malantaŭen tuŝante ĉe koro.",
        "@46": "Unumana, fingroj vicflanken, polmo supren.",
        "@47": "Simitrie dumana, polmoj ortaj ĉe la pubo.",
        "@48": "Unumana, malalte ĉe ingveno, fingroj suben, polmo vicflanken.",
        "@49": "Simitrie dumana, polmoj brusten, kvazaŭ surbrusta perbraka ikso.",
        "@50": "Fingroj de ĉefmano vicflanken, polmo oblikve antaŭen duone suben, tuŝanta la montro- kaj dikfingron de 'o'-vicmano.",
        "@51": "Fingroj de la ĉefmano direktitaj al la 'g'-vicmano, polmo de ĉefmano estas duone antaŭen kaj duone suben.",
        "@52": "Fingroj de ĉefmano supren, polmo malantaŭen. Vicmano en formo 'b', ĉ. 20 cm antaŭ la korpo, polmo malantaŭen, fingroj ĉefflanken. Ĉefmano malantaŭ vicmano.",
        "@53": "Simitrie dumana, ĉe la mamoj, polmoj suben kaj iom flanken.",
        "@54": "Simitrie dumana, fingroj antaŭen, polmoj supren. La eĝoj de la manoj tuŝas unu la alian.",
        "@55": "Unumana, polmo malantaŭen tuŝanta la ventron.",
        "@56": "Unumana, tuj sub la kubuto (kun kontakto), polmo kubuten.",
        "@57": "Simitrie dumana, fingroj supren tuj antaŭ la vizaĝo, ne tuŝante la vangojn sed ĉ. 10 cm antaŭ ili je nivelo de okuloj.",
        "@58": "Unumana, fingroj supren, polmo vicflanken, aere, alte, super ŝultro, ne proksime al la orelo.",
        "@59": "Simitrie dumana, fingroj antaŭen. Ĉefmano tuj super la vicmano, polmoj direktitaj unu al la alia.",
        "@60": "Unumana, fingroj supren, polmo antaŭen. La ĉefmano estas antaŭ la vizaĝo, sed ne tuŝante ĝin.",
        "@61": "Unumana, fingroj supren, polmo vicflanken. La manartiko tuŝas la frunton.",
        "@62": "Unumana, fingroj vicflanken, polmon suben. Sur aŭ tuj super la kapo.",
        "@63": "Unumana, flanke apud la lipoj, fingroj supren, polmo antaŭen."
    }

    function lokabc(loko) {
        lj = [];
        for (const [l, lok] of Object.entries(Gesto.sgn_lokabc)) {
            if (lok == loko) lj.push(l)
        }
        if (lj.length) return `(${lj.join(',')})`;
        else return ""
    }

    const abc = document.querySelectorAll("#manlokoj table tr")
        .forEach((tr) => {
            // kopiu la tabellinion
            const _tr = tr.cloneNode(true);
            tr.querySelectorAll("td").forEach((td) => {
                const loko = td.textContent;
                const sp = document.createElement("span");
                // aldonu klarigon
                sp.textContent = klarigoj[loko];
                sp.classList.add("klr");
                td.append(" ",lokabc(loko)," - ",sp);
            });
            // traduku al Signuno
           for (const td of _tr.children) {
              // trovu tekstojn de la ĉeloj en la vortaro
              const text = td.textContent;
              const sgn = Gesto.sgn_elm[text];
              if (sgn) {
                td.setAttribute("data-sgn",sgn);
              }
           }
           tr.insertAdjacentElement("afterend",_tr)
        });

</script>
