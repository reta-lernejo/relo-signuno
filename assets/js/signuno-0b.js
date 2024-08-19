/*** kelkaj helpfunkcioj por krei kaj prezenti la signojn de SuttonSignWRiting sur la paĝo ***/

function sign_wait(el) {
  // move elements content (sign FSW) to an attribute
  // and replace by a waiting symbol
  const waiting = "🖐\uFE0E";
  const sign = el.textContent;
  if (sign.match(/^(?:M\d{3}x\d{3}|S[\da-f]{5})/)) {
    el.setAttribute("data-sgn",el.textContent);
    el.textContent = waiting;
  }
}

function sign_render(el) {
  const sign = el.getAttribute("data-sgn");
  if (sign) {
    if (sign.match(/^M\d{3}/)) {
        el.setAttribute("data-sgn",sign);
        el.innerHTML = ssw.ttf.fsw.signSvg(sign);
    } else if (sign.match(/^S[\da-f]{5}/)) {
        el.setAttribute("data-sgn",sign);
        el.innerHTML = ssw.ttf.fsw.symbolSvg(sign);
    } 
  }
}

function scale_svg(svg,procent) {
  // get height and width from svg viewBox
  const viewBox = svg.getAttribute("viewBox");
  const n4 = viewBox.split(" ");
  const width = parseFloat(n4[2]);
  const height = parseFloat(n4[3]);
  // set width to a scaled value
  //svg.setAttribute("preserveAspectRatio","XMidYMin slice");
  svg.setAttribute("height",height*procent/100)
  svg.setAttribute("width",width*procent/100)
}

//let _lanĉtaskoj = []; 
let _signuntaskoj = []; 


/**
 * Kolektas funkciojn, kiuj vokiĝos tuj post kiam la dokumento estas ŝargita.
 */
// function lanĉe(tasko) {
//     _lanĉtaskoj.push(tasko);
// }


/**
 * Kolektas funkciojn, kiuj vokiĝos tuj post kiam la dokumento estas ŝargita.
 */
function signune(tasko,poz) {
    if (poz !== undefined)
    _signuntaskoj.splice(poz,0,tasko);
    else
    _signuntaskoj.push(tasko);
}


// document.body.style.cursor = 'progress';

/**
 * Plenumas lanĉo-taskojn
 */
let wol;
if (window.onload instanceof Function) {
  wol = window.onload
}
window.onload = () => {
  if (wol) wol();
  
  try {
      // plenumu ĉiujn lanĉ-taskojn
      // ni faros intence fine, t.e. post kreo de elektiloj kaj butonoj

      // set waiting symbols
      //document.querySelectorAll("dd,td,li,.sign").forEach((el) => sign_wait(el));

      // trigger sign rendering
      ssw.ttf.font.cssAppend(''); 
      ssw.ttf.font.cssLoadedLine(() => {   
        for (t of _signuntaskoj) { t(); }  
      }); 
              
      // setup scaler
      /*
      const scaler = document.getElementById("scale");
      if (scaler) scaler.addEventListener("input", (event) => {
        const procent = event.target.value||100;
        const label = document.getElementById("scale_pct");
        label.textContent = `${procent}%`;

        // scale SVGs
        document.querySelectorAll(".signs svg").forEach((svg) => {
          scale_svg(svg,procent);
        });
        // scale ul font
        document.querySelectorAll(".signs>ul").forEach((ul) => {
          ul.style.fontSize = `${24*procent/100}px`;
        });          
      });
      */
  }
  finally {
      document.body.style.cursor = 'default';
  }
}

/*
signune(()=>{
  document.querySelectorAll("dd,td,li,.sign").forEach((el) => sign_render(el));
})
*/





/**
 * Sintezas geston kiel SuttonsSignWriting el elementoj laŭ donita Signuno-kodo
 * 
 * vd. 
 * - https://web.archive.org/web/20230819144154/https://signuno.webs.com/
 * - https://web.archive.org/web/20230819151011/http://signuno.webs.com/signuno.pdf
 * - https://github.com/sutton-signwriting
 */

class Gesto {

    static re_sgn = /^([a-zA-Z])(@\d\d)([*\\/\$~+-=#_^]{0,2})$/;

    /**
     * La elementoj de signuno: manalfabeto (a-z,A-Z), movsignoj, manlokoj (@00..@63)
     */
    static sgn_elm = {

        // minuskla (ordinara) alfabeto
        "a": "S1f820",
        "b": "S14720",
        "c": "S16d20",
        "ĉ": "S17720",
        "d": "S10120",
        "e": "S14a20",
       
        "f": "S1ce20",
        "g": "S10020",
        "ĝ": "S1f520",
        "h": "S1a020",
        "ĥ": "S19c20",
        "i": "S19220",
        
        "j": "S1b020",
        "ĵ": "S12820",
        "k": "S14020",
        "l": "S1dc20",
        "m": "S20020",
        "n": "S1fe20",
       
        "o": "S17620",
        "p": "S12a20",
        "r": "S11a20",
        "s": "S20320",
        "ŝ": "S14c20",
            
        "t": "S1ea20",
        "u": "S11520",
        "ŭ": "S18c20",
        "v": "S10e20",
        "z": "S11e20",
        
        "q": "S1bb20",
        "w": "S18620",
        "x": "S10620",
        "y": "S19a20",
       
        // majuskla alfabeto, uzata por sintezo de vort-gestoj
    
        "A": "M508x514S22802494x504S17620492x486",
        "B": "M506x517S15a20494x490S22104494x483",
        "C": "S17720", "Ĉ": "S17720",
        "D": "S1e220",
        "E": "S15020",
        
        "F": "M515x513S1ef20486x498S22104487x487",
        "G": "S1f520", "Ĝ": "S1f520",
        "H": "S19c20", "Ĥ": "S19c20",
        "I": "S1c620",
        "J": "S12820", "Ĵ": "S12820",
        
        "K": "S16320",
        "L": "M512x513S1eb20488x494S22200489x487",
        "M": "S18e20",
        "N": "S12d20",
        "O": "S1eb20",
        
        "P": "S1da20",
        "R": "S14420",
        "S": "S14c20", "Ŝ": "S14c20",
        "T": "S1c528",
        "U": "S18c20", "Ŭ": "S18c20",
    
        "V": "M512x519S11820489x492S21900490x481",
        "Z": "M513x520S14c20489x489S22620487x480",
    
        "Q": "M517x515S1c120488x486S22204484x492",
        "W": "M508x517S15520493x491S22200494x483",
        "X": "M508x519S10e20493x489S22600497x482",
        "Y": "M508x517S15420493x492S22204495x483",
    
        // movoj, uzataj por gramatikaj indikoj
        // dependas iom de la manloko, ĉu okazas tuŝo, viŝo, froto aŭ nur manmovo
        "*": "S20500", // tuŝ: -o kaj -'
        "**": "S20600", // tuŝ-tuŝ: oj
        "$": "S21100", // frot (aŭ "S20e00" - viŝ?): -on, -n
        "$$": "S21200", // frot-frot (aŭ "S20f0" - viŝviŝ?): -ojn
    
        "/": ["S26506","S26512"], // alekstera moveto: adj,pron -a, -u
        "//": ["S26606","S26612"], // alekstera movo: adj,pron -aj, -uj
    
        "\\": ["S26502","S26516"], // alinterna moveto: adj,pron -an, -un
        "\\\\": ["S26602","S266162"], // alinterna movo: adj,pron -ajn, -ujn
    
        // verbaj formoj
        "\\/": ["S28806","S2881e"], // alekstera valeta movo: -is
        "--": ["S22b06","S22b12"], // alekstera rekta movo: -as
        "/\\": ["S2880a","S28812"], // alekstera monteta movo: -os
        "~~": ["S2920a","S29212"], // alekstera oscila movo: -us
        "=": ["S22f06","S22f12"], // dufoja alekstera rekta moveto: -u
        "-": ["S22a06","S22a12"], // alekstera rekta moveto: -i
    
        "~": ["S22b02","S22b16"], // alinterna rekta movo: -en (tien, hejmen...)
        "#": ["S2e300","S2e318"], // cirkla movo: -e (tie, hejme...)
    
        "_": "", // neniu aldona movo krom transiro de unu al alia gesto
        "+": ["23302","S2331a"], // krucmova transiro inter du gestoj
        "^": ["S23b0d","S23b15"], // pintmova transiro inter du gestoj
    
        // 64 manlokoj, uzataj por sintezo de vort-gestoj    
        "@00": "M521x539S33b00482x483S15a10493x512",
        "@01": "M529x525S15a20517x470S15a28471x470S31500482x483",
        "@02": "M521x525S15a02483x478S31500482x483",
        "@03": "M528x537S31500483x483S15b00516x510S36d00479x526",
        
        "@04": "M521x525S31500482x483S15a00501x498S15a00487x498",
        "@05": "M521x529S15a10494x502S33100482x483S20500495x495",
        "@06": "M535x530S15a10523x490S33000476x483S20500518x482",
        "@07": "M524x552S15a11501x529S20500495x519S15a19476x529S2ff00482x483",
        
        "@08": "M518x535S33b00482x483S15a00494x508",
        "@09": "M528x522S15a00516x495S32b00482x483S20500517x484",
        "@10": "M536x552S15a20524x525S2ff00482x483S36d00479x527",
        "@11": "M521x553S15a01463x530S2ff00482x483S36d00479x527S3770a467x528S20500456x540",
      
        "@12": "M535x549S15a00523x522S2ff00482x483S36d00479x527",
        "@13": "M521x571S15a20501x544S2ff00482x483S36d00479x527S1470a489x550",
        "@14": "M523x518S2ff00482x483S36d00479x498S15a50511x455",
        "@15": "M523x518S2ff00482x483S36d00479x498S15a40511x455",
         
        "@16": "M523x518S2ff00482x483S36d00479x498S15a30511x455",
        "@17": "M521x518S2ff00482x483S36d00479x498S20357499x449S3780b475x463S15a51489x461",
        "@18": "M531x566S2ff00482x483S36d00479x527S15a10519x539",
        "@19": "M521x568S2ff00482x483S36d00479x527S14706486x549S15a04503x541",
        
        "@20": "M521x577S2ff00482x483S36d00479x527S15a10502x550S15a18485x550S21400501x542",
        "@21": "M521x590S2ff00482x483S36d00479x527S15a00475x563S14728475x545S20500463x562",
        "@22": "M522x613S2ff00482x483S36d00479x527S15a04477x586S15a0c510x586",
        "@23": "M521x555S2ff00482x483S36d00479x527S15a00493x528S1471a491x517S20500494x533",
    
        "@24": "M532x518S2ff00483x483S36d00479x498S15a50520x468S15a50470x468",
        "@25": "M531x518S2ff00483x483S36d00479x498S15a40519x450S15a48469x450",
        "@26": "M531x518S2ff00483x483S36d00479x498S15a30519x450S15a38469x450",
        "@27": "M521x518S2ff00483x483S36d00479x498S14708493x446S15a50499x447S20500498x435",
           
        "@28": "M535x563S2ff00482x483S36d00479x521S15a10523x536S15a18464x536",
        "@29": "M521x577S2ff00482x483S36d00479x523S1473a490x563S15a04494x540S20500506x556",
        "@30": "M521x518S2ff00482x483S36d00479x497S1473a478x465S20500474x453S15a32482x459",
        "@31": "M521x518S2ff00482x483S36d00479x497S20500461x462S14c38472x448S15a52477x461",
        
        "@32": "M527x552S2ff00482x483S36d00479x521S15a02500x540S15a0a473x540",
        "@33": "M521x518S2ff00483x483S36d00479x498S15a49487x456S15a41489x456S20500495x445",
        "@34": "M521x518S2ff00483x483S36d00479x498S15a58488x447S15a50500x447S20500495x437",
        "@35": "M521x518S2ff00483x483S36d00479x498S15a48486x447S15a40503x447",
           
        "@36": "M521x518S2ff00482x483S36d00479x499S20500447x452S15d48460x441S15a32458x448",
        "@37": "M521x518S2ff00482x483S36d00479x499S14708472x459S20500459x468S15a42463x458",
        "@38": "M521x565S2ff00482x483S36d00479x525S15a10501x538S15a18485x538",
        "@39": "M521x518S2ff00482x483S36d00479x498S15a57486x450S15a51488x450S20500495x437",
            
        "@40": "M528x621S2ff00481x483S36d00479x530S15a04516x594",
        "@41": "M521x558S2ff00481x483S36d00479x530S15a11478x535S37709473x532S20500468x526",
        "@42": "M521x534S2ff00481x483S36d00479x530S15a02490x518",
        "@43": "M537x545S2ff00481x483S36d00479x527S15a02510x533S15a0a463x533",
        
        "@44": "M521x561S2ff00481x483S36d00479x527S15a12473x549",
        "@45": "M521x561S2ff00481x483S36d00479x527S15a02473x549S20500481x537",
        "@46": "M521x559S2ff00481x483S36d00479x527S15a1e494x547",
        "@47": "M526x608S2ff00481x483S36d00479x527S15a15472x585S15a1d503x585",
     
        "@48": "M524x633S2ff00481x483S36d00479x527S15a1c512x606",
        "@49": "M529x579S2ff00481x483S36d00479x527S15a01471x540S15a09506x539S37600488x556S20500495x550",
        "@50": "M521x518S2ff00483x483S36d00479x498S17644490x448S20500475x449S15a4e483x440",
        "@51": "M525x587S2ff00481x483S36d00479x527S10028484x557S15b11502x557",
        
        "@52": "M521x585S2ff00481x483S36d00479x527S14706497x568S15a00490x558",
        "@53": "M527x569S2ff00481x483S36d00479x527S15a13504x546S15a1b471x546",
        "@54": "M521x518S2ff00482x483S36d00479x498S15a30488x444S15a30500x444S20500495x434",
        "@55": "M521x598S2ff00481x483S36d00479x529S15a02485x586S20500494x574",
        
        "@56": "M521x566S2ff00482x483S36d00479x525S15a32463x544S37804468x549S3770a467x527S20500460x533",
        "@57": "M518x521S2ff00482x483S15a10502x494S15a18485x494",
        "@58": "M543x531S2ff00481x483S15a10531x482S36d00479x527",
        "@59": "M533x563S2ff00481x483S36d00479x527S15c10490x553S15c1c490x540S37704509x542S3770d467x556",
        
        "@60": "M518x522S2ff00482x483S15a20493x495",
        "@61": "M518x518S2ff00482x483S15a10494x455S20500495x486",
        "@62": "M518x518S2ff00482x483S15a12484x469",
        "@63": "M522x521S15a20510x494S33b00482x483"
        
    }    

    // aeraj manlokoj, alternative oni povus kontroli ĉu enestas tuŝsigno,
    // sed ĉu ni konsekvence aplikis ĝin?
    static sgn_aeraj = "@10@12@13@14@15@16@18@19@20@22@24@25@26@28@32@35@38@40@43@44@46@47@48@51@52@53@57@58@59@60@62@63"

    // poir distanca komunikado kaj ĥemiaj simboloj oni povas
    // signi literojn ankaŭ per manlokoj
    static sgn_lokabc = {
        "a": "@07",
        "b": "@21",
        "c": "@62",
        "ĉ": "@62",
        "d": "@40",
        "e": "@45",
        "f": "@61",
        "g": "@51",
        "ĝ": "@09",
        "h": "@25",
        "ĥ": "@25",
        "i": "@00",
        "j": "@48",
        "ĵ": "@01",
        "k": "@56",
        "l": "@58",
        "m": "@43",
        "n": "@05",
        "o": "@50",
        "p": "@41",
        "q": "@09",
        "r": "@03",
        "s": "@17",
        "ŝ": "@49",
        "t": "@23",
        "u": "@38",
        "ŭ": "@32",
        "v": "@47",
        "w": "@32",
        "x": "@49",
        "y": "@01",
        "z": "@30"
    }

    static sgn_buŝ = {
        "a": "S34c00",
        "b": "S35000", // sama kiel "p"
        "c": "S36100", // sama kiel "s", "z"
        "ĉ": "M533x518S35d00468x483S34500497x483", // "tŝ", sama kiel ĝ = dĵ
        "d": "S35d00", // sama kiel "t"
        "e": "S34700",
        "f": "S36500", // sama kiel "v"
        "g": "S35d04", // sama kiel "k", "r"
        "ĝ": "M533x518S35d00468x483S34500497x483", // "dĵ", sama kiel ĉ = tŝ
        "h": "", // oni vidas nur la postan vokalon
        "ĥ": "S35800", 
        "i": "S34800",
        "j": "S35700",
        "ĵ": "S34500", // sama kiel "ŝ"
        "k": "S35d04", // sama kiel "g", "r"
        "l": "S35c00", // sama kiel "r"
        "m": "S33b00",
        "n": "S35d00",
        "o": "S34400",
        "p": "S35000", // sama kiel "b"
        "r": "S35c00", // sama kiel "l" (langa ro), -- ĉe aliaj lingvoj pli similas al "g", "k"
        "s": "S36100", // sama kiel "c", "z"
        "ŝ": "S34500", // sama kiel "ĵ"
        "t": "S35d00", // sama kiel "d"
        "u": "S34600", // sama kiel "y"
        "ŭ": "S34600", // sama kiel "u", "y"
        "v": "S36500", // sama kiel "f", "w"
        "w": "S36500",
        "x": "M532x518S35d04468x483S36100496x483", // "ks"
        "y": "S34600", // sama kiel "u"
        "z": "S36100", // sama kiel "c", "s"
    }

    // lipmovoj, vd. Signuno 2016, p. 5, 25
    /*
    static sgn_lip = {
        p=p/b/m 
        f=f/v 
        t=t/d 
        q=kv [kiel kŭ]
        i=i 
        e=e/ej/eŭ 
        a=a/aj 
        o=o/oj/aŭ 
        u=u/uj
    }*/


    /**
     * Redonas SVG-bildon por donita simbolo aŭ signo en formo FSW
     * @param {*} fsw 
     * @returns SVG-grafikon
     */
    static fsw2svg(fsw) {
        if (fsw) {
            if (fsw[0] == 'S')
                return  ssw.ttf.fsw.symbolSvg(fsw);
            else
                return ssw.ttf.fsw.signSvg(fsw);
        }
    }

    /**
     * Redonas la grandecon de simbolo kiel [larĝo,alto]
     * @param {*} S1 
     */
    static simbolgrandeco(S) {
        return ssw.ttf.fsw.symbolSize(S);
    }


    /**
     * Testas, ĉu la simbolo havas certan simbolspecon
       Intervaloj de simboltipoj vd. ĉap. 2.3.3 en
       https://datatracker.ietf.org/doc/id/draft-slevinski-formal-signwriting-09.html#name-formal-signwriting-in-ascii

        all symbols 	S100 - S38b 	U+40001 -U+4F480
        writing 	    S100 - S37e 	U+40001 -U+4EFA0
        --
        hand 	        S100 - S204 	U+40001 -U+461E0
        movement 	    S205 - S2f6 	U+461E1 -U+4BCA0
        dynamic 	    S2f7 - S2fe 	U+4BCA1 -U+4BFA0
        head 	        S2ff - S36c 	U+4BFA1 -U+4E8E0
        hcenter 	    S2ff - S36c 	U+4BFA1 -U+4E8E0
        vcenter 	    S2ff - S375 	U+4BFA1 -U+4EC40
        trunk 	        S36d - S375 	U+4E8E1 -U+4EC40
        limb 	        S376 - S37e 	U+4EC41 -U+4EFA0
        location 	    S37f - S386 	U+4EFA1 -U+4F2A0
        punctuation 	S387 - S38b 	U+4F2A1 -U+4F480
    */
    static simbol_speco(S,speco) {
        const nro = parseInt(S.substring(1,4),16);
        const rot = parseInt(S.substring(5,6));
        return (
            speco == "mano" && nro >= 0x100 && nro <= 0x204
            || speco == "dekstra_mano" && nro >= 0x100 && nro <= 0x204 && rot < 8
            || speco == "maldekstra_mano" && nro >= 0x100 && nro <= 0x204 && rot >= 8
            || speco == "movo" && nro >= 0x205 && nro <= 0x2f6
            || speco == "tuŝo" && nro >= 0x205 && nro <= 0x213
            || speco == "sago" && nro >= 0x218 && nro <= 0x2f6 //???
            || speco == "dinamiko" && nro >= 0x2f7 && nro <= 0x2fe
            || speco == "kapo" && nro >= 0x2ff && nro <= 0x36c
            // ...
        )
    }

    /**
     * Redonas la diferencon inter la grandeco de du
     * simboloj. Ni bezonas tion, por korekti disŝovojn.
     * @param {*} S1 nomo (FSW-kodo) de la unua simbolo, ekz. S015a102
     * @param {*} S2 nomo (FSW-kodo) de la dua simbolo
     * @returns diferenco de larĝo kaj alto kiel areo de du koordinatoj 
     */
    static delto(S1,S2) {
        const g1 = ssw.ttf.fsw.symbolSize(S1);
        const g2 = ssw.ttf.fsw.symbolSize(S2);
        if (g1&&g2)
            return [
                g2[0]-g1[0],
                g2[1]-g1[1]
            ];
    }

    /**
     * Distanco inter la mezpunktoj de du simboloj
     * @param {*} smb1 la unua simbolo donita en analizita formo
     * @param {*} smb2 la dua simbolo donita en analizita formo
     * @returns 
     */
    static mezdistanco(smb1,smb2) {
        if (smb1 && smb2) {
            // simbolgrandcoj
            const g1 = ssw.ttf.fsw.symbolSize(smb1.symbol);
            const g2 = ssw.ttf.fsw.symbolSize(smb2.symbol);
            // simbolmezpunktoj
            const M1 = [smb1.coord[0]+g1[0]/2,
                        smb1.coord[1]+g1[1]/2];
            const M2 = [smb2.coord[0]+g2[0]/2,
                        smb2.coord[1]+g2[1]/2];
            return [
                M2[0]-M1[0],
                M2[1]-M1[1]
            ];
        }
    }


    /**
     * Kreas novan geston el Signuno-kodo
     * @param {*} kodo, ekz. "i@18*" (io)
     */
    constructor(kodo) {
        this.kodo = kodo;

        const fm = Gesto.re_sgn.exec(kodo);
        if (fm) {
            this.litero = fm[1];
            this.loko = fm[2];
            this.movo = fm[3];
        }
    }

    /**
     * Uzas ssw por analizi la partojn el kiu konsistas la gesto.
     * Vi nepre voku tiun ĉi funkcion antaŭ aliaj, kiuj bezonas ties rezulton
     */
    preparo() {
        if (ssw && ssw.ttf.fsw) {
            if (this.loko) {
                this.lok_fsw = Gesto.sgn_elm[this.loko];
                this.lok_ssw = ssw.fsw.parse.sign(this.lok_fsw);
                // la sintezita gesto, ni komencas per la manloko
                // kaj poste ŝanĝas ties mano(j) al la litersigno kaj
                // aldonas evtl. movojn
                // -
                // profunda kopio por ne ŝanĝi .spatials de ambaŭ samtempe!
                this.gesto_ssw = // eble tro nova ankoraŭ: structuredClone(this.lok_ssw); 
                    JSON.parse(JSON.stringify(this.lok_ssw));
            }
            if (this.litero) {
                this.lit_fsw = Gesto.sgn_elm[this.litero];
                this.lit_ssw = this.lit_fsw[0] == 'S'? ssw.fsw.parse.symbol(this.lit_fsw) : ssw.fsw.parse.sign(this.lit_fsw);
            }
            if (this.movo) {
                this.mov_fsw = Gesto.sgn_elm[this.movo];
                if (typeof this.mov_fsw == "string") {
                    this.mov_ssw = this.mov_fsw[0] == 'S'? ssw.fsw.parse.symbol(this.mov_fsw) : ssw.fsw.parse.sign(this.mov_fsw);    
                } else if (this.mov_fsw instanceof Array) {
                    this.mov_ssw = this.mov_fsw.map((f) => f[0] == 'S'? ssw.fsw.parse.symbol(f) : ssw.fsw.parse.sign(f));    
                }
            }
        }
    }

    /**
     * Redonas la geston kiel JSON-strukturo laŭ https://github.com/sutton-signwriting/core
     */
    gesto_ssw() {
        return this.gesto_ssw;
    }

    /**
     * Redonas la geston kiel FSW (Askio)
     */
    gesto_fsw() {
        return ssw.ttf.fsw.signNormalize(ssw.fsw.compose.sign(this.gesto_ssw));
    }

    /**
     * Redonas la geston kiel SVG (vektorgrafiko kun TTF-tiparo)
     */
    gesto_svg() {
        return ssw.ttf.fsw.signSvg(this.gesto_fsw());
    }

    loko_svg() {
        return ssw.ttf.fsw.signSvg(this.lok_fsw);
    }

    litero_svg() {
        if (this.lit_fsw[0] == 'S') return ssw.ttf.fsw.symbolSvg(this.lit_fsw);
        return ssw.ttf.fsw.signSvg(this.lit_fsw);
    }


    /**
     * Redonas FSW por la movo, kiu povas esti simpla simbolstrukturo
     * aŭ areo da ili
     * @param {*} i 
     */
    movo_fsw(i=0) {
        if (this.mov_fsw instanceof Array) {
            if (this.mov_fsw.length>i) return this.mov_fsw[i];
            return this.mov_fsw[0];
        } else { // objekto
            return this.mov_fsw;
        }
    }

    /**
     * Redonas objekton por la movo, kiu povas esti simpla simbolstrukturo
     * aŭ areo da ili
     * @param {*} i 
     */
    movo_ssw(i=0) {
        if (this.mov_ssw instanceof Array) {
            if (this.mov_ssw.length>i) return this.mov_ssw[i];
            return this.mov_ssw[0];
        } else { // objekto
            return this.mov_ssw;
        }
    }    

    movo_svg() {
        if (this.movo && this.mov_fsw) {
            const fsw = this.movo_fsw(0)
            if (fsw[0] == 'S') return ssw.ttf.fsw.symbolSvg(fsw);
            return ssw.ttf.fsw.signSvg(fsw);    
        }
    }


    /**
     * Trovas simbolon de certa speco en signo.
       Intervaloj de simboltipoj vd. ĉap. 2.3.3 en
       https://datatracker.ietf.org/doc/id/draft-slevinski-formal-signwriting-09.html#name-formal-signwriting-in-ascii
       */
    *simboloj(fsw, xde=0x15a, xal=0x15c) {
        for (let i=0; i<fsw.spatials.length; i++) {
            const s = fsw.spatials[i];
            const hex = parseInt(s.symbol.substring(1,4),16)
            if (xde <= hex && hex <= xal) {
                //yield [s,i];
                yield s;
            };
        }
    }    

    /**
     * Forigas ĉiujn simbolojn el la gesto, kun la donita simbolkodo
     */
    forigu_simbolon(S) {
        this.gesto_ssw.spatials = this.gesto_ssw.spatials.filter((sym) => sym.smybol != S)
    }

    /**
     * Eltrovas la poziciojn de la mano(j) en la loko-signo. Se mano nur rolas kiel
     * fiksa pozicio, kaj do ne estas simbolo de speco S15a..S15c, ĝi ne kalkuliĝas.
     */
    manoj() {
        return this.simboloj(this.lok_ssw);
    }

    /**
     * Eltrovas kie la mano(j) de la loko-signo pli-malpli montras per la pinto.
     * Tio dependas de la pozico sed ankaŭ de formo. Se mano nur rolas kiel
     * fiksa pozicio, kaj do ne estas simbolo de speco S15a..S15c, ĝi ne kalkuliĝas.
     */
    manpintoj() {
        const manoj = this.manoj();
        const pintoj = [];
        for (const m of manoj) {
            // ni bezonas la pozicion, grandecon kaj rotacion
            // de la mano
            const g = Gesto.simbolgrandeco(m.symbol);
            // FARENDA: konsideru ankaŭ la grandcon
            // de la movsimbolo, kiun ni momente ne scias
            // eble ni donu ĝin kiel argumento?
            const dx = Math.trunc(.6*g[0]);
            const dy = Math.trunc(.6*g[1]);

            let p = Array.from(m.coord); // centro
            // rotacio estas kontraŭhorloĝe 0 (supre), 1,2,...7 (supre-dekstre)
            // kaj spegule same de 8..F
            switch (m.symbol[5]) {
                case '0': case '8': p[1] -= dy; break;
                case '1': case '9': p = [p[0]-dx, p[1]-dy]; break;
                case '2': case 'a': p[0] -= dx; break;
                case '3': case 'b': p = [p[0]-dx, p[1]+dy]; break;
                case '4': case 'c': p[1] += dy; break;
                case '5': case 'd': p = [p[0]+dx, p[1]+dy]; break;
                case '6': case 'e': p[0] += dx; break;
                case '7': case 'f': p = [p[0]+dx, p[1]-dy]; break;
            }
            pintoj.push({mano: m, pinto: p});
        }
        return pintoj;
    }

    /**
     * Informas, ĉu la loko-signo estas simtetria, t.e. dumana, kies ambaŭ manoj
     * kune kaj simetrie montras la signon
     */
    simetria() {
        const mn = this.manoj.length;
        return (mn == 2);
    }

    /**
     * Informas ĉu la manloko estas aera signo. En tiu kazo tuŝoj pro la finaĵoj
     * ne okazas.
     */
    aera() {
        return Gesto.sgn_aeraj.indexOf(this.loko)>-1;
    }


    /**
     * Sintezas geston el la baza (manloko) kaj la litero (mansigno)
     */
    mansintezo() {

        const manoj = this.simboloj(this.gesto_ssw);
        for (const man of manoj) {

            if (! this.lit_ssw.spatials) {
            // se la litersigno konsistas el sola mano (sen aldonaj signoj, ekz. fingroklino)

                // anstataŭigu la platan manon per la speciala mansigno de la litero
                const litsmb = this.lit_ssw.symbol;
                const d = Gesto.delto(man.symbol,litsmb); 
                // korektu je duono de d
                man.coord = [
                    Math.trunc(man.coord[0]-d[0]/2),
                    Math.trunc(man.coord[1]-d[1]/2)];

                man.symbol = litsmb.substring(0,4) 
                    + man.symbol.substring(4,6);

            } else {
                // se la litero konsistas el kelkaj simboloj (ekz-mano+fingromovo),
                // ni devas ĉiujn kopii kune, sed relative al la mezpunktoj de la du manoj

                // ni unue trovu la mansimbolon (S100..S204) en litero
                // la aliaj estas supoze la fingro/manmovaj simboloj
                const lman = this.simboloj(this.lit_ssw,0x100,0x204).next().value; // .find()

                // ni unue anstataŭigas la manon kaj korektas la pozicion
                const d = Gesto.delto(man.symbol,lman.symbol);
                    man.coord = [
                        Math.trunc(man.coord[0]-d[0]/2),
                        Math.trunc(man.coord[1]-d[1]/2)];

                    man.symbol = lman.symbol.substring(0,4)
                        + man.symbol.substring(4,6);

                // ni nun aldonas ĉiujn aliajn simbolojn el litero movante ilin...
                const dmov = Gesto.mezdistanco(man,lman);
                const lsmbj = this.simboloj(this.lit_ssw,0x205,0x2fe);

                for (const ls of lsmbj) {
                    const coord = [
                        Math.trunc(ls.coord[0] - dmov[0]),
                        Math.trunc(ls.coord[1] - dmov[1])
                    ];
                    this.gesto_ssw.spatials.push({
                        coord: coord,
                        symbol: ls.symbol
                    });
                }
            }
        }
    }

    /**
     * Aldonas movsignojn al la gesto, se movo estas kodita
     */
    movsintezo() {
        // se ĉestas movsigno aldonu ĝin
        // KOREKTU: ni subpremu movsignon por aeraj lokoj 
        // nur se temas pri tuŝsigno, sed ne por vera movo!
        if (this.mov_ssw 
            && !(this.aera() && "**$$".indexOf(this.movo)>-1) // tuŝsigno ne eblas en aera manloko
            ) {
            // ni pozicios la movsignon ĉe la manpintoj
            const pintoj = this.manpintoj();
            const tuŝo = this.simboloj(this.gesto_ssw,0x205,0x213).next().value;

            pintoj.forEach((p,i) => {
                const sym = this.movo_ssw(i).symbol;
                let pnt = p.pinto;

                // depende de la movsigno kaj manflanko ni devas fari iujn korektojn
                if (Gesto.simbol_speco(p.mano.symbol,"dekstra_mano")) {
                    // se la loko-signo jam enhavas tuŝsignon ni anstataŭigas ĝin
                    if (tuŝo && Gesto.simbol_speco(sym,"tuŝo")) {
                        pnt = tuŝo.coord;
                        this.forigu_simbolon(tuŝo.symbol);
                    };
                    if (Gesto.simbol_speco(sym,"sago")) {
                        // por dekstra mano ŝovu la movsimbolon dekstren
                        // laŭ manlarĝeco
                        pnt[0] += Math.trunc(Gesto.simbolgrandeco(p.mano.symbol)[0])
                    }
                } else {
                    if (Gesto.simbol_speco(sym,"sago")) {
                        // por maldekstra mano ŝovu la movsimbolon maldekstren
                        // laŭ ties larĝeco
                        pnt[0] -= Math.trunc(Gesto.simbolgrandeco(sym)[0])
                    }
                }

                // aldonu la movgeston
                this.gesto_ssw.spatials.push({
                    coord: pnt,
                    symbol: sym
                });                    
            });
        }
    }

    /**
     * Sintezan geston el ĉiuj tri partoj: manloko, manlitero, movo
     */
    sintezo() {
        this.mansintezo()
        this.movsintezo()
    }

}