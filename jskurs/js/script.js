let level = 1
let ul = 1
let name = ''
let navn = ''
let alder = ''
let wOne= ''
let wThree= ''
let wTwo= ''
let wFour= ''
let wFive= ''
let wSix= ''
let wSeven= ''

let enTrue = false
let toTrue = false
let lOne = []
let lTwo= []
let lThree= []
let lFour= []
let lFive= []

function runScript(){
    switch (level) {
        case 1:
            wOne = document.forms["one"]["w_one"].value;
            break;
        case 2:
            wOne = document.forms["two"]["w_one"].value;
            wTwo = document.forms["two"]["w_two"].value;            
            break;
        case 3:
            wOne = document.forms["three"]["w_one"].value;
            wTwo = document.forms["three"]["w_two"].value;
            wThree = document.forms["three"]["w_three"].value;
            wFour = document.forms["three"]["w_four"].value;
            break;
        case 4:
            wOne = document.forms["four"]["w_one"].value;
            wTwo = document.forms["four"]["w_two"].value;
            break;
        case 5:
            wOne = document.forms["form"]["w_one"].value;
            wTwo = document.forms["form"]["w_two"].value;
            wThree = document.forms["form"]["w_three"].value;
            wFour = document.forms["form"]["w_four"].value;
            wFive = document.forms["form"]["w_five"].value;
            break;
        case 6:
            wOne = document.forms["form"]["w_one"].value;
            wTwo = document.forms["form"]["w_two"].value;
            wThree = document.forms["form"]["w_three"].value;
            wFour = document.forms["form"]["w_four"].value;
            wFive = document.forms["form"]["w_five"].value;
            wSix = document.forms["form"]["w_six"].value;       
            break;
        case 7:
            wOne = document.forms["form"]["w_one"].value;
            wTwo = document.forms["form"]["w_two"].value;
            wThree = document.forms["form"]["w_three"].value;
            wFour = document.forms["form"]["w_four"].value;
            wFive = document.forms["form"]["w_five"].value;
            wSix = document.forms["form"]["w_six"].value;
            wSeven = document.forms["form"]["w_seven"].value;
            break;
    };
    if (level===1){
        name = wOne;
        document.getElementById("printConsole").innerHTML=`Velkommen til kurset, ${name}`
        document.getElementById("nextButton").style.display="block"
    }
    else if (level===2){
        if(wOne === "'" && wTwo === "'" || wOne === '"' && wTwo === '"'){
            document.getElementById("printConsole").innerHTML=`${name} er på vei mot å lære JS`
            document.getElementById("nextButton").style.display="block"
        }
        else{
            document.getElementById("printConsole").innerHTML=`Uncaught ReferenceError: ${name} er på vei mot å lære JS is not defined`
        }
    }
    else if (level===3){
        if(ul===1){
            lOne = wOne.split(' ');
            wOne = ''
            for (let index = 0; index < lOne.length; index++) {
                wOne += lOne[index]
            }
            lOne = wOne.split('=');
            alder = lOne[lOne.length-1]
            if(lOne.length===2 && lOne[0]==='letage'){
                document.getElementById("printConsole").innerHTML=alder
                ul+=1
            }
            else if(lOne[0]!='letage'){
                document.getElementById("printConsole").innerHTML='Her må du ha tullet med definisjonen. Husket du å lage en variabel med let som het age?'
            }
            else{
                document.getElementById("printConsole").innerHTML='Dette ble bare helt feil'
            };
        }
        else if(ul===2){
            lTwo = wTwo.split(' ');
            wTwo = ''
            for (let index = 0; index < lTwo.length; index++) {
                wTwo += lTwo[index]
            }
            lTwo = wTwo.split('=');
            navn = lTwo[lTwo.length-1]
            navn = navn.split('"')
            navn = navn[1]
            if(lTwo.length===2 && lTwo[0]==='constname'){
                document.getElementById("printConsoleTwo").innerHTML=navn
                ul+=1
            }
            else if(lTwo[0]!='constname'){
                document.getElementById("printConsoleTwo").innerHTML='Husk; Const, Name'
            }
            else{
                document.getElementById("printConsoleTwo").innerHTML='Dette ble bare helt feil'
            };
        }       
        else if(ul===3){
            lThree = wThree.split(' ');
            let plussing = lThree[lThree.length-1]
            plussing = parseInt(plussing)
            alder = parseInt(alder)
            alder += plussing
            if(lThree.length===3 && lThree[0]==='age' && lThree[1]==='+='){
                document.getElementById("printConsoleThree").innerHTML=alder
                ul+=1
            }
            else if(lThree[0]!='age'){
                document.getElementById("printConsoleThree").innerHTML='Vi skulle jobbe med variabelen "age"'
            }
            else if(lThree[1]!='+='){
                document.getElementById("printConsoleThree").innerHTML='Husker du hvordan man plusser på noe på en variabel?'
            }
            else{
                document.getElementById("printConsoleThree").innerHTML='Dette ble bare helt feil'
            };
        }       
        else if(ul===4){
            lFour = wFour.split(' ');
            wFour = ''
            for (let index = 0; index < lFour.length; index++) {
                wFour += lFour[index]
            }
            lFour = wFour.split('=');
            if(lFour[0]==='letmix' && lFour[1]==='age+name'){
                document.getElementById("printConsoleFour").innerHTML=`${alder}${navn}`
                ul+=1
                document.getElementById("nextButton").style.display="block"
            }
            else if(lFour[0]==='letmix' && lFour[1]==='name+age'){
                document.getElementById("printConsoleFour").innerHTML=`${navn}${alder}`
                ul+=1
                document.getElementById("nextButton").style.display="block"
            }
            else if(lFour[0]!='letmix'){
                document.getElementById("printConsoleFour").innerHTML='Husk; let mix'
            }
            else if(lFour[1]!='age+name' || lFour[1]!='name+age'){
                document.getElementById("printConsoleFour").innerHTML='Husk; let mix'
            }
            else{
                document.getElementById("printConsoleFour").innerHTML='Dette ble bare helt feil'
            };
        }       
        else{
            console.log('sugma')
        };     
    }
    else if (level===4){
        for (let index = 0; index < wOne.length; index++) {
            if (wOne[index] == '"'){
                wOne = wOne.split('"');
                wOne=wOne[1];
                enTrue = true
            }
            else if(wOne[index] == "'"){
                wOne = wOne.split("'");
                wOne=wOne[1];
                enTrue = true
            };
        };
        if (enTrue === true) {
            wOne = wOne.split(' ');
            wOne = wOne[wOne.length-1]
        }
        else{
            wOne = wOne.split('=');
            wOne = wOne[wOne.length-1]
            wOne = parseInt(wOne)
        };
        for (let index = 0; index < wTwo.length; index++) {
            if (wTwo[index] == '"'){
                wTwo = wTwo.split('"');
                wTwo=wTwo[1];
                toTrue = true
            }
            else if(wTwo[index] == "'"){
                wTwo = wTwo.split("'");
                wTwo=wTwo[1];
                toTrue = true
            };
        };
        if (toTrue === true) {
            wTwo = wTwo.split(' ');
            wTwo = wTwo[wTwo.length-1]
        }
        else{
            wTwo = wTwo.split('=');
            wTwo = wTwo[wTwo.length-1]
            wTwo = parseInt(wTwo)
        };
        document.getElementById("printConsole").innerHTML=wOne+wTwo
        document.getElementById("nextButton").style.display="block"
    };
};

function nextLvl(){
    document.getElementById("printConsole").innerHTML=''
    document.getElementById("printConsoleTwo").innerHTML=''
    document.getElementById("printConsoleThree").innerHTML=''
    document.getElementById("printConsoleFour").innerHTML=''
    if (level===1){
        level += 1;
        document.getElementById("work_one").style.display="none"
        document.getElementById("work_two").style.display="flex"
        document.getElementById("q_one").style.display="none"
        document.getElementById("q_two").style.display="block"
        document.getElementById("nextButton").style.display="none"
        document.getElementById("wtc").innerHTML=`${name} er på vei mot å lære JS`
    }
    else if (level===2){
        level += 1;
        document.getElementById("work_two").style.display="none"
        document.getElementById("work_three").style.display="flex"
        document.getElementById("q_two").style.display="none"
        document.getElementById("q_three").style.display="block"
        document.getElementById("nextButton").style.display="none"
    }
    else if (level===3){
        level += 1;
        document.getElementById("work_four").style.display="flex"
        document.getElementById("work_three").style.display="none"
        document.getElementById("q_four").style.display="block"
        document.getElementById("q_three").style.display="none"
        document.getElementById("nextButton").style.display="none"
    }
    else if (level===4){
        level += 1;
        document.getElementById("work_four").style.display="none"
        document.getElementById("work_five").style.display="flex"
        document.getElementById("q_four").style.display="none"
        document.getElementById("q_five").style.display="block"
        document.getElementById("nextButton").style.display="none"
        document.getElementById("name_age_week").innerHTML=`let list = ["${name}", ${alder}, uker]`
    }
};

function en(){
    document.getElementById("start").style.display="none";
    document.getElementById("work_one").style.display="flex";
};

function to(){
    level = 2;
    document.getElementById("start").style.display="none"
    document.getElementById("work_two").style.display="flex"
    document.getElementById("q_one").style.display="none"
    document.getElementById("q_two").style.display="block"
    document.getElementById("nextButton").style.display="none"
    document.getElementById("wtc").innerHTML=`${name} er på vei mot å lære JS`
};

function tre(){
    level = 3;
    document.getElementById("start").style.display="none"
    document.getElementById("work_three").style.display="flex"
    document.getElementById("q_one").style.display="none"
    document.getElementById("q_three").style.display="block"
    document.getElementById("nextButton").style.display="none"
};

function fire(){
    level = 4;
    document.getElementById("start").style.display="none"
    document.getElementById("work_four").style.display="flex"
    document.getElementById("q_one").style.display="none"
    document.getElementById("q_four").style.display="block"
    document.getElementById("nextButton").style.display="none"
};

function fem(){
    level = 5;
    document.getElementById("start").style.display="none"
    document.getElementById("work_five").style.display="flex"
    document.getElementById("q_one").style.display="none"
    document.getElementById("q_five").style.display="block"
    document.getElementById("nextButton").style.display="none"
};