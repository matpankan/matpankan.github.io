let en = 0
let to = 0
let tre = 0
let fire = 0
let fem = 0
let seks = 0
let rull = 0
let tall = [en, to, tre, fire, fem, seks]
function kastTerning(){
    let sum = 0 
    for (let i = 0; i < 100; i++) {
        rull+=1
        let resultat = Math.floor(Math.random()*6+1)
        if(resultat === 1){
            en += 1
        }
        else if(resultat === 2){
            to += 1 
        }
        else if(resultat === 3){
            tre += 1
        }
        else if(resultat === 4){
            fire += 1
        }
        else if(resultat === 5){
            fem += 1
        }
        else if(resultat === 6){
            seks += 1 
        }
        tall = [en, to, tre, fire, fem, seks]
    }
    let enf = en/rull    
    let tof = to/rull 
    let tref = tre/rull 
    let firef = fire/rull 
    let femf = fem/rull 
    let seksf = seks/rull 

    for (let u = 0; u < tall.length; u++) {
        sum += tall[u]
    }

    let sumf = enf+tof+tref+firef+femf+seksf
    document.getElementById("en").innerHTML=tall[0]
    document.getElementById("to").innerHTML=tall[1]
    document.getElementById("tre").innerHTML=tall[2]
    document.getElementById("fire").innerHTML=tall[3]
    document.getElementById("fem").innerHTML=tall[4]
    document.getElementById("seks").innerHTML=tall[5]
    document.getElementById("sum").innerHTML=sum

    document.getElementById("enf").innerHTML=enf
    document.getElementById("tof").innerHTML=tof
    document.getElementById("tref").innerHTML=tref
    document.getElementById("firef").innerHTML=firef
    document.getElementById("femf").innerHTML=femf
    document.getElementById("seksf").innerHTML=seksf
    document.getElementById("sumf").innerHTML=sumf
}