---
layout: page
title: Signuno - enkonduko
js-ext:
    - sign
---

<!--

https://www.sutton-signwriting.io/signmaker
-->

<!--<script src="https://unpkg.com/@sutton-signwriting/core@1.6.0"></script>
<script src="https://unpkg.com/@sutton-signwriting/core@1.6.0/fsw/fsw.js"></script>-->
<script src="https://unpkg.com/@sutton-signwriting/font-ttf@1.5.2/fsw/fsw.js"></script>
<script src="https://unpkg.com/@sutton-signwriting/font-ttf@1.5.2/font/font.js"></script>

<style>
    @font-face {
    font-family: "SuttonSignWritingLine";
    src: 
        local('SuttonSignWritingLine'),
        url('https://unpkg.com/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');
    }
    @font-face {
    font-family: "SuttonSignWritingFill";
    src: 
        local('SuttonSignWritingFill'),
        url('https://unpkg.com/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');
    }
    @font-face {
    font-family: "SuttonSignWritingOneD";
    src: 
        local('SuttonSignWritingOneD'),
        url('https://unpkg.com/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');
    }

    dl {
        columns: 2;
        border-left: 2px dotted black;
        column-rule: 2px dotted black;        
    }

    dt {
        font-size: xx-large;
        border-top: 1px dotted silver;
        padding-left: 1em;
    }

    dd {
        break-before: avoid;
        text-align: center;
    }

    dd span {
        display: none;
    }

    td {
        font-size: xx-large;
    }

</style>

<script>

    // vd https://github.com/sutton-signwriting/font-ttf/blob/master/src/fsw/fsw-symbol-svg.js

    function desegnu_gestojn() {
        document.querySelectorAll("table,dl").forEach((container) => {
            container.querySelectorAll("td,dd").forEach((td) => {
                const gesto = td.textContent;
                if (gesto.match(/^M\d{3}/)) {
                    td.setAttribute("data-sgn",gesto);
                    td.innerHTML = ssw.ttf.fsw.signSvg(gesto);
                } else if (gesto.match(/^S[\da-f]{5}/)) {
                    td.setAttribute("data-sgn",gesto);
                    td.innerHTML = ssw.ttf.fsw.symbolSvg(gesto);
                }
            });
        });
    }

    window.onload = () => {

        ssw.ttf.font.cssAppend(''); 
        //ssw.ttf.fsw.font.cssAppend('');
        //ssw.ttf.fsw.
        ssw.ttf.font.cssLoadedLine(
                function() {
                    desegnu_gestojn();
                }
        );
    }
</script>

## Manlokoj

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
|M521x595S2ff00482x483S36d00479x527S15a10502x550S15a18485x550S21402494x580S21406501x539|M521x592S2ff00482x483S36d00479x527S15a00494x565S14728493x547|M522x613S2ff00482x483S36d00479x527S15a04477x586S15a0c510x586|M521x555S2ff00482x483S36d00479x527S15a00493x528S1471a491x517S20500494x533|

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