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

    paroj = [
        // manplato supren
        ["15c10","S15a30"],
        // a
        ["S15a30",""]
    ]



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

## Alfabeto

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

