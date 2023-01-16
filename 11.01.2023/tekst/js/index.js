let result = []

function word(){
    let tekst = document.forms["form"]["tekst"].value;
    result = tekst.split(" ");
    document.getElementById("array").innerHTML=result;
    document.getElementById("which").style.display="block";
};

function choose(){
    let tekst = document.forms["wordForm"]["tall"].value;
    let tall = tekst.split(" ");
    document.getElementById("theWords").style.display="block";
    let one = tall[0]-1;
    let two = tall[1]-1;
    let three = tall[2]-1;
    let en = result[one];
    let to = result[two];
    let tre = result[three];
    document.getElementById("a").innerHTML=`Ord nr ${tall[0]}: ${en}`;
    document.getElementById("b").innerHTML=`Ord nr ${tall[1]}: ${to}`;
    document.getElementById("c").innerHTML=`Ord nr ${tall[2]}: ${tre}`;
}