const p1 = 'Er personen høy eller lav?'
const p2 = 'Hvilken hårfarge har personen?'
const p3 = 'Hvilken klasse går personen i?'
const p4 = 'Hva er personen?'
const p5 = 'Er det en gutt eller jente?'
const p6 = 'Er personen fra Polen?'
const p7 = 'Har personen bokstaven "i" i fornavnet sitt?'
const p8 = 'Bruker personen briller?'
const p9 = 'Hva er lengden på håret til personen?'
const p10 = 'Hvor mange stavelser?'
const p11 = 'Hvilken gruppe er personen i?'
const promts = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11]
 

const s1 = ['høy', 'lav']
const s2 = ['brun', 'blond']
const s3 = ['a', 'b', 'c']
const s4 = ['elev', 'lærer']
const s5 = ['gutt', 'jente']
const s6 = ['ja', 'nei']
const s7 = ['ja', 'nei']
const s8 = ['ja', 'nei']
const s9 = ['kort', 'langt']
const s10 = ['2-', '3+']
const s11 = ['1', '2']
let svarsamling = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]

let tall = []
const latt = []

for (let c = 0; c < promts.length; c++ ) {
    tall.push(c)
}  

function Name(høy, hår, klasse, jobb, kjønn, polen, i, briller, hårlengde, toStavelse, gruppe, navn){ 
    this.høy = høy, 
    this.hår = hår, 
    this.klasse = klasse,
    this.jobb = jobb, 
    this.kjønn = kjønn, 
    this.polen = polen, 
    this.i = i, 
    this.briller = briller,
    this.hårlengde = hårlengde, 
    this.toStavelse = toStavelse,
    this.gruppe = gruppe
    this.navn = navn
}; 

let oliver = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Oliver'); 
let elias = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'ja', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Elias'); 
let matheo = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Matheo'); 
let julja = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'ja', /*i i fornavnet*/ 'ja', /*briller*/ 'ja', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Julja'); 
let falk = new Name(/*høyde*/ 'lav', /*hår*/ 'blond', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Falk'); 
let chen = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Chen'); 
let ylva = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Ylva'); 
let sannija = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Sannija'); 
let gregor = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'ja', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Gregor'); 
let indine = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Indine'); 
let martin = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Martin'); 
let julie = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Julie'); 
let alva = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Alva');
let theodor = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Theodor');
let sigurd = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Sigurd');
let jon = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Jon');
let olav = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Olav');
let anders = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'a', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Anders ');
let kristoffer = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Kristoffer');
let marius = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Marius');  
let axel = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Axel'); 
let ahmed = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Ahmed'); 
let vetle = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Vetle'); 
let vanessa = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Vanessa'); 
let mathias = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Mathias'); 
let andreasb = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Andreas B'); 
let rikke = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Rikke'); 
let leon = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Leon'); 
let ts = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'b', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'TS'); 
let joakime = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Joakim');
let mattis = new Name(/*høyde*/ 'høy', /*hår*/ 'blond', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Mattis');  
let felix = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Felix'); 
let yaxye = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Yaxye'); 
let kevin = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Kevin'); 
let philip = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Philip'); 
let gabriel = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'ja', /*hårlengde*/ 'langt', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Gabriel'); 
let ibrahim = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Ibrahim'); 
let lucas = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Lucas');
let silas = new Name(/*høyde*/ 'lav', /*hår*/ 'blond', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '2-', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Silas');
let andreasc = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '2', /*ddette er den siste; navn*/ 'Andreas C'); 
let benjamin = new Name(/*høyde*/ 'lav', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'elev', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Benjamin'); 
let bjorn = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'c', /*jobb*/ 'lærer', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'ja', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Bjørn'); 
let joakim = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'b', /*jobb*/ 'lærer', /*kjønn*/ 'gutt', /*polakk*/ 'nei', /*i i fornavnet*/ 'ja', /*briller*/ 'nei', /*hårlengde*/ 'kort', /*stavelser*/ '3+', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Joakim'); 
let marthe = new Name(/*høyde*/ 'høy', /*hår*/ 'brun', /*klasse*/ 'a', /*jobb*/ 'lærer', /*kjønn*/ 'jente', /*polakk*/ 'nei', /*i i fornavnet*/ 'nei', /*briller*/ 'nei', /*hårlengde*/ 'langt', /*stavelser*/ '2-', /*gruppe*/ '1', /*ddette er den siste; navn*/ 'Marthe'); 

let list = [oliver, elias, matheo, julja, falk, chen, ylva, sannija, gregor, indine, martin, julie, alva, theodor, sigurd, jon, olav, anders, kristoffer, marius, axel, ahmed, vetle, vanessa, mathias, andreasb, rikke, leon, ts, joakime, mattis, felix, yaxye, kevin, philip, gabriel, ibrahim, lucas, silas, andreasc, benjamin, bjorn, joakim, marthe]


let hoe = new Name('','',''); 
let objectLength = Object.keys(hoe).length
let x = '' 
let o = 0
let s = ''
let l = 0

    function game(){
        document.getElementById('svarthree').style.display = 'none';
        document.getElementById('svarbutton').style.display = 'flex';
        s = ''
        mamma = tall[Math.floor(Math.random() * tall.length)]
            if (latt[mamma] === mamma) {
                while (latt[mamma] === mamma) {
                    mamma = tall[Math.floor(Math.random() * tall.length)]           
                }
            }
        
        latt[mamma] = mamma
        randomElement = mamma
        document.getElementById('spors').innerHTML=promts[randomElement]

        if (svarsamling[randomElement].length === 3){
            document.getElementById('svarbutton').style.display = 'none';
            document.getElementById('svarthree').style.display = 'flex';
            document.getElementById('trel').innerHTML=svarsamling[randomElement][0]
            document.getElementById('trem').innerHTML=svarsamling[randomElement][1]
            document.getElementById('trer').innerHTML=svarsamling[randomElement][2]
        }
        else{
            // setter 'ja' til svaralternativ 1 
            document.getElementById('ja').innerHTML=svarsamling[randomElement][0]
            // setter 'nei' til svaralternativ 2
            document.getElementById('nei').innerHTML=svarsamling[randomElement][1]
        }

        if(list.length === 1){
            document.getElementById('svarthree').style.display = 'none';
            document.getElementById('svarbutton').style.display = 'flex';
            document.getElementById('ja').innerHTML='Takk'
            document.getElementById('nei').innerHTML='For Deg'
            document.getElementById('spors').innerHTML=`Du tenker på ${list[0].navn}`
        }
        if (list.length === 0) {
            document.getElementById('spors').innerHTML='Du tenkte ikke på noen'
        }
        if (l === 11){
            document.getElementById('ja').innerHTML='Takk'
            document.getElementById('nei').innerHTML='For Deg'
        }
        l += 1
    }

    function gameon() {
        if(list.length != 1) {
            x = s
            hoe[Object.keys(hoe)[randomElement]] = x
            o = 0
            while(o<list.length) {
                if (list[o][Object.keys(hoe)[randomElement]] != hoe[Object.keys(hoe)[randomElement]] && hoe[Object.keys(hoe)[randomElement]] != 'annet'){
                    list.splice(o,1)
                }
                else{
                    o += 1
                }
            }
            s = ''
            game()
        }
            
        else{
            return;
        }
    }

function start() {
    game()
    document.getElementById('startbutton').style.display = 'none';
}

function nei() {
    s = svarsamling[randomElement][1]
    gameon()
}

function ja() {
    s =svarsamling[randomElement][0]
    gameon()
}    

function mid() {
    s =svarsamling[randomElement][2]
    gameon()
}  