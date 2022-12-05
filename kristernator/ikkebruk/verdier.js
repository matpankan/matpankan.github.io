const p1 = 'Er personen høy eller lav?'
const p2 = 'Hvilken hårfarge har personen?'
const p3 = 'Hvilken klasse går personen i?'
const p4 = 'Hva er personen?'
const p5 = 'Er det en gutt eller jente?'
const p6 = 'Er personen fra Polen?'
const p7 = 'Har personen bokstaven "i" i fornavnet sitt?'
const p8 = 'Bruker personen briller?'
const p9 = 'Har personen langt hår?'
const p10 = 'Hvor mange stavelser? (2-/3+)?'
const p11 = 'Hvilken gruppe er personen i?'
const promts = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11]

let tall = []
const latt = []

for (let c = 0; c < promts.length; c++ ) {
    tall.push(c)
}  

function Name(høy, hår, klasse, jobb, kjønn, polen, i, briller, hårlengde, toStavelse, gruppe){ 
    this.høy = høy, 
    this.hår = hår, 
    this.klasse = klasse,
    this.jobb = jobb, 
    this.kjønn = kjønn, 
    this.polen = polen, 
    this.i = i, 
    this.briler = briller,
    this.hårlengde = hårlengde, 
    this.toStavelse = toStavelse,
    this.gruppe = gruppe
}; 

let oliver = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '2'); 
let elias = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'ja', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '1'); 

let list = [oliver, elias]

let hoe = new Name('','',''); 
let objectLength = Object.keys(hoe).length
let x = '' 

for(let i = 1; i!=list.length;){ 
    mamma = tall[Math.floor(Math.random() * tall.length)]
        if (latt[mamma] === mamma) {
            while (latt[mamma] === mamma) {
                mamma = tall[Math.floor(Math.random() * tall.length)]           
            }
        }
    
    latt[mamma] = mamma
    randomElement = mamma

    x = prompt(promts[randomElement]) 
    hoe[Object.keys(hoe)[randomElement]] = x
    for(let o = 0; o<list.length; o++) {
        if (list[o][Object.keys(hoe)[randomElement]] != hoe[Object.keys(hoe)[randomElement]] && hoe[Object.keys(hoe)[randomElement]] != 'annet'){
            list.splice(o,1)
        }
    }
}

console.log(list[0])