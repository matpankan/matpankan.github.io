let kast = 0, m = 0, k = 0, mf = 0, kf = 0
liste = []
function kastMynt(){ 
    const data = document.getElementById("liste");
    let mynt = Math.random();
    if (mynt < 0.5){
        resultat = "M";
        m += 1
    }
    else{ 
        resultat = "K";
        k += 1
    }
    liste.push(resultat)
    kast += 1
    mf = m/kast
    kf = k/kast
    sum=m+k
    sumf=mf+kf
    //document.getElementById("rannum").innerHTML=mynt
    //document.getElementById("kast").innerHTML=kast
    document.getElementById("resultat").innerHTML=resultat
    document.getElementById("mynt").innerHTML=m
    document.getElementById("myntFrekvens").innerHTML=mf
    document.getElementById("kron").innerHTML=k
    document.getElementById("kronFrekvens").innerHTML=kf
    document.getElementById("sum").innerHTML=sum
    document.getElementById("sumf").innerHTML=sumf
    data.innerHTML = "";
    for (let i = 0; i < liste.length; i++) {
        let li = document.createElement("li");
        li.innerText = liste[i];
        data.appendChild(li); 
    }
};