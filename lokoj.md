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

<!--
|00|01|02|03|
|M521x539S33b00482x483S15a10493x512|M529x525S15a20517x470S15a28471x470S31500482x483|M521x525S15a02483x478S31500482x483|M528x537S31500483x483S15b00516x510S36d00479x526|

|04|05|06|07|
|M521x525S31500482x483S15a00501x498S15a00487x498|M521x529S15a10494x502S33200482x483|M535x530S15a10523x490S33000476x483S20500518x482|M524x552S15a11501x529S20500495x519S15a19476x529S2ff00482x483|

|08|09|10|11|
|M518x535S33b00482x483S15a00494x508|M528x522S15a00516x495S32b00482x483S20500517x484|M535x549S15a20523x522S2ff00482x483S36d00479x527|M521x553S15a01463x530S2ff00482x483S36d00479x527S3770a467x528|

|12|13|14|15|
|M535x549S15a00523x522S2ff00482x483S36d00479x527|M521x567S15a00500x540S2ff00482x483S36d00479x527S14726486x549|M523x518S2ff00482x483S36d00479x498S15a50511x455|M523x518S2ff00482x483S36d00479x498S15a40511x455|

|16|17|18|19|
|M523x518S2ff00482x483S36d00479x498S15a30511x455|M521x518S2ff00482x483S36d00479x498S20357499x449S3780b475x463S15a51489x461|M531x566S2ff00482x483S36d00479x527S15a10519x539|M521x568S2ff00482x483S36d00479x527S14706486x549S15a04503x541|

|20|21|22|23|
|M521x577S2ff00482x483S36d00479x527S15a10502x550S15a18485x550S21400501x542|M521x592S2ff00482x483S36d00479x527S15a00494x565S14728493x547|M522x613S2ff00482x483S36d00479x527S15a04477x586S15a0c510x586|M521x555S2ff00482x483S36d00479x527S15a00493x528S1471a491x517S20500494x533|

|24|25|26|27|
|M532x518S2ff00483x483S36d00479x498S15a50520x468S15a50470x468|M531x518S2ff00483x483S36d00479x498S15a40519x450S15a48469x450|M531x518S2ff00483x483S36d00479x498S15a30519x450S15a38469x450|M521x518S2ff00483x483S36d00479x498S14708493x446S15a50499x447S20500498x435|

|28|29|30|31|
|M535x563S2ff00482x483S36d00479x521S15a10523x536S15a18464x536|M521x577S2ff00482x483S36d00479x523S1473a490x563S15a04494x540S20500506x556|M521x518S2ff00482x483S36d00479x497S1473a478x465S20500474x453S15a32482x459|M521x518S2ff00482x483S36d00479x497S20500461x462S14c38472x448S15a52477x461|

|32|33|34|35|
|M527x552S2ff00482x483S36d00479x521S15a02500x540S15a0a473x540|M521x518S2ff00483x483S36d00479x498S15a49487x456S15a41489x456|M521x518S2ff00483x483S36d00479x498S15a58488x447S15a50500x447S20500495x437|M521x518S2ff00483x483S36d00479x498S15a48486x447S15a40503x447|

|36|37|38|39|
|M521x518S2ff00482x483S36d00479x499S20500447x452S15d48460x441S15a32458x448|M521x518S2ff00482x483S36d00479x499S14708472x459S20500459x468S15a42463x458|M521x565S2ff00482x483S36d00479x525S15a10501x538S15a18485x538|M521x518S2ff00482x483S36d00479x498S15a57486x450S15a51488x450|

|40|41|42|43|
|M528x621S2ff00481x483S36d00479x530S15a04516x594|M521x558S2ff00481x483S36d00479x530S15a11478x535S37709473x532|M521x534S2ff00481x483S36d00479x530S15a02490x518|M537x545S2ff00481x483S36d00479x527S15a02510x533S15a0a463x533|

|44|45|46|47|
|M521x561S2ff00481x483S36d00479x527S15a12473x549|M521x561S2ff00481x483S36d00479x527S15a02473x549S20500481x537|M521x559S2ff00481x483S36d00479x527S15a1e494x547|M526x608S2ff00481x483S36d00479x527S15a15472x585S15a1d503x585|

|48|49|50|51|
|M524x633S2ff00481x483S36d00479x527S15a1c512x606|M529x579S2ff00481x483S36d00479x527S15a01471x540S15a09506x539S37600488x556|M521x586S2ff00481x483S36d00479x527S17644464x570S15b12457x561S20500451x571|M525x587S2ff00481x483S36d00479x527S10028484x557S15b11502x557|

|52|53|54|55|
|M521x585S2ff00481x483S36d00479x527S14706497x568S15a00490x558|M527x569S2ff00481x483S36d00479x527S15a13504x546S15a1b471x546|M521x518S2ff00482x483S36d00479x498S15a30488x444S15a30500x444S20500495x434|M521x598S2ff00481x483S36d00479x529S15a02485x586S20500494x574|

|56|57|58|59|
|M521x566S2ff00482x483S36d00479x525S3770a467x527S37804467x549S15a52468x547|M534x518S2ff00482x483S15a10522x491S15a18466x491|M543x531S2ff00481x483S15a10531x482S36d00479x527|M533x563S2ff00481x483S36d00479x527S15c10490x553S15c1c490x540S37704509x542S3770d467x556|

|60|61|62|63|
|M518x522S2ff00482x483S15a20493x495|M518x518S2ff00482x483S15a10494x455S20500495x486|M518x518S2ff00482x483S15a12484x469|M522x521S15a20510x494S33b00482x483|
-->

