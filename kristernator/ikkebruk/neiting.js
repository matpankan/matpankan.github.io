const p1 = 'Er personen høy per min diff?'
const p2 = 'Har personen brunt hår?'
const p3 = 'Går personen i A?'
const p4 = 'Er personen en gutt?'
const p5 = 'Er personen fra Polen?'
const p6 = 'Har personen godt syn?'
const p7 = 'Er personen en lærer?'
const p8 = 'Går personen i C?'
const p9 = 'Er personen blond?'
const p10 = 'Har personen bokstaven "i" i fornavnet sitt?'
const p11 = 'Går personen i B?'
const p12 = 'Har personen lyst hår?'
const p13 = 'Har personen langt hår?'
const p14 = 'Munnbind?'
const p15 = 'Er navnet på under 2 stavelser?'
const p16 = 'Går personen i gruppe 2?'
const promts = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16]

let tall = []
const latt = []

for (let c = 0; c < promts.length; c++ ) {
    tall.push(c)
}  

function Name(høy, brunt, a, gutt, polen, syn, lærer, c, blond, i, b, lyst, langt, munnbind, toStavelse, gruppeTo){ 
    this.høy = høy, 
    this.brunt = brunt, 
    this.a = a,
    this.gutt = gutt, 
    this.polen = polen, 
    this.syn = syn,
    this.lærer = lærer, 
    this.c = c, 
    this.blond = blond,
    this.i = i, 
    this.b = b, 
    this.lyst = lyst,
    this.langt = langt, 
    this.munnbind = munnbind, 
    this.toStavelse = toStavelse,
    this.gruppeTo = gruppeTo
}; 

let oliver = new Name(/*høyde*/'ja', /*brunt*/'nei', /*a*/'nei', /*gutt*/'ja', /*polen*/'nei', /*syn*/'ja',/*lærer*/'nei', /*c*/'ja', /*blond*/'ja',/*i*/'ja', /*b*/'nei', /*lyst hår*/'ja',/*langt hår*/'nei', /*munnbind*/'nei', /*2 stavelser*/'nei', /*2*/'ja'); 
let elias = new Name(/*høyde*/'ja', /*brunt*/'ja', /*a*/'ja', /*gutt*/'ja', /*polen*/'nei', /*syn*/'nei',/*lærer*/'nei', /*c*/'nei', /*blond*/'nei',/*i*/'ja', /*b*/'nei', /*lyst hår*/'ja',/*langt hår*/'ja', /*munnbind*/'nei', /*2 stavelser*/'nei', /*2*/'nei'); 

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
        if (list[o][Object.keys(hoe)[randomElement]] != hoe[Object.keys(hoe)[randomElement]]){
            list.splice(o,1)
        }
    }
}

console.log(hoe)
console.log(list)