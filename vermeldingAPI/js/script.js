let index= 9

let days=[]
//Tidlister
let dayOneTime=[]
let dayTwoTime=[]
let dayThreeTime=[]
let dayFourTime=[]
let dayFiveTime=[]
let daySixTime=[]
let daySevenTime=[]
let dayEightTime=[]
let dayNineTime=[]
let dayTenTime=[]
let dayElevenTime=[]

//Templister
let dayOneTemp=[]
let dayTwoTemp=[]
let dayThreeTemp=[]
let dayFourTemp=[]
let dayFiveTemp=[]
let daySixTemp=[]
let daySevenTemp=[]
let dayEightTemp=[]
let dayNineTemp=[]
let dayTenTemp=[]
let dayElevenTemp=[]

//Regnlister
let dayOneRain=[]
let dayTwoRain=[]
let dayThreeRain=[]
let dayFourRain=[]
let dayFiveRain=[]
let daySixRain=[]
let daySevenRain=[]
let dayEightRain=[]
let dayNineRain=[]
let dayTenRain=[]
let dayElevenRain=[]

//Vindlister
let dayOneWind=[]
let dayTwoWind=[]
let dayThreeWind=[]
let dayFourWind=[]
let dayFiveWind=[]
let daySixWind=[]
let daySevenWind=[]
let dayEightWind=[]
let dayNineWind=[]
let dayTenWind=[]
let dayElevenWind=[]

//Vinddirectionlister
let dayOneWindDirection=[]
let dayTwoWindDirection=[]
let dayThreeWindDirection=[]
let dayFourWindDirection=[]
let dayFiveWindDirection=[]
let daySixWindDirection=[]
let daySevenWindDirection=[]
let dayEightWindDirection=[]
let dayNineWindDirection=[]
let dayTenWindDirection=[]
let dayElevenWindDirection=[]

//Summary
let dayOneSummary=[]
let dayTwoSummary=[]
let dayThreeSummary=[]
let dayFourSummary=[]
let dayFiveSummary=[]
let daySixSummary=[]
let daySevenSummary=[]
let dayEightSummary=[]
let dayNineSummary=[]
let dayTenSummary=[]
let dayElevenSummary=[]

let lat="lat=59.7192"
let lon="lon=10.8347"

function by(){
    let by = document.forms["byer"]["byer"].value;

    //Alle utlanske byer følger et annet system enn de norske
    if(by === "ski"){
        lat="lat=59.7192"
        lon="lon=10.8347"
        document.getElementById("city").innerHTML="Ski"
    }
    else if(by === "oslo"){
        lat="lat=59.9138"
        lon="lon=10.7387"
        document.getElementById("city").innerHTML="Oslo"
    }
    else if(by === "bergen"){
        lat="lat=60.3881"
        lon="lon=5.33185"
        document.getElementById("city").innerHTML="Bergen"
    }
    else if(by === "bodø"){
        lat="lat=67.28"
        lon="lon=14.405"
        document.getElementById("city").innerHTML="Bodø"
    }
    else if(by === "trondheim"){
        lat="lat=63.4346"
        lon="lon=10.3985"
        document.getElementById("city").innerHTML="Trondheim"
    }
    else if(by === "tokyo"){
        lat="lat=35.6894"
        lon="lon=139.692"
    }
    else if(by === "berlin"){
        lat="lat=52.5186"
        lon="lon=13.4081"
    }
    else if(by === "newyork"){
        lat="lat=40.730610"
        lon="lon=-73.935242"
    }
    finnVer()
}

function finnVer(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let today = new Date();
    let daysOfWeek = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    let weekday = today.getDay();
    let m = day
    let iDag = ''
    let a = 1
    let o = 0
   
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?${lat}&${lon}`,{
    method: 'GET', 
        })
        .then((response) => response.json())
        .then((data) => {
            let time=data.properties.timeseries[0].time
            for (let index = 0; index < 11; index++) {
                days.push(`${day+index}.${month}.${year}`)
            }
            //For å fylle lister
            for (index = 0; index < data.properties.timeseries.length; index++) {
                day = date.getDate();
                time=data.properties.timeseries[index].time
                time=time.substring(0,10)
                if(time[8]==0){
                    iDag=time.substring(9,10)
                }
                else{
                    iDag=time.substring(8,10)
                }
                if(iDag==m){
                    dayOneTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayOneRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                    dayOneWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayOneTime.push(tidsdata)
                    dayOneWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    dayOneSummary.push(data.properties.timeseries[index].data.next_1_hours.summary.symbol_code)
                }
                else if(iDag==m+1){
                    dayTwoTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayTwoRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                    dayTwoWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayTwoTime.push(tidsdata)
                    dayTwoWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    dayTwoSummary.push(data.properties.timeseries[index].data.next_1_hours.summary.symbol_code)
                }
                else if(iDag==m+2){ //problemungen
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayThreeTime.push(tidsdata)
                    dayThreeWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    dayThreeTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayThreeWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    if(a<13){
                        dayThreeRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                        dayThreeSummary.push(data.properties.timeseries[index].data.next_1_hours.summary.symbol_code)
                        a++
                    }
                    else{
                        //dayThreeRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                        //dayThreeSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                    }
                }
                if(iDag==m+3){
                    dayFourTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFourRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFourWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFourWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayFourTime.push(tidsdata)
                    dayFourSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                }
                 else if(iDag==m+4){
                    dayFiveTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFiveRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFiveWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFiveWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayFiveTime.push(tidsdata)
                    dayFiveSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                }
                 else if(iDag==m+5){
                    daySixTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    daySixRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    daySixWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    daySixWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    daySixTime.push(tidsdata)
                    daySixSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                 }                   
                if(iDag==m+6){
                    daySevenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    daySevenRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    daySevenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    daySevenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    daySevenTime.push(tidsdata)
                    daySevenSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                }
                 else if(iDag==m+7){
                    dayEightTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayEightRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayEightWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayEightWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayEightTime.push(tidsdata)
                    dayEightSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                 }
                 else if(iDag==m+8){
                    dayNineTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayNineRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayNineWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayNineWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayNineTime.push(tidsdata)
                    dayNineSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                 }   
                 if(iDag==m+9){
                    dayTenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayTenRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayTenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayTenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayTenTime.push(tidsdata)
                    dayTenSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                    o = 0
                 }
                 else if(iDag==m+10){
                    dayElevenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayElevenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayElevenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayElevenTime.push(tidsdata)
                    if (o==0){
                        dayElevenSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                        dayElevenRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                        o++
                    }
                 } 
            }


            console.log(data)
            document.getElementById('today').innerHTML=`Været I dag ${days[0]}`     
            document.getElementById('today_two').innerHTML=`Været ${daysOfWeek[weekday+1]} ${days[1]}`  
            document.getElementById('today_three').innerHTML=`Været ${daysOfWeek[weekday+2]} ${days[2]}`  
            document.getElementById('today_four').innerHTML=`Været ${daysOfWeek[weekday+3]} ${days[3]}`  
            document.getElementById('today_five').innerHTML=`Været ${daysOfWeek[weekday+4]} ${days[4]}`  
            document.getElementById('today_six').innerHTML=`Været ${daysOfWeek[weekday+5]} ${days[5]}`  
            document.getElementById('today_seven').innerHTML=`Været ${daysOfWeek[weekday+6]} ${days[6]}`  
            document.getElementById('today_eight').innerHTML=`Været ${daysOfWeek[weekday]} ${days[7]}`  
            document.getElementById('today_nine').innerHTML=`Været ${daysOfWeek[weekday+1]} ${days[8]}`  
            document.getElementById('today_ten').innerHTML=`Været ${daysOfWeek[weekday+2]} ${days[9]}`  
            document.getElementById('today_eleven').innerHTML=`Været ${daysOfWeek[weekday+3]} ${days[10]}`  
            
            //Været akkrat nå
            document.getElementById('temp_now').innerHTML=data.properties.timeseries[0].data.instant.details.air_temperature+"°"

            document.getElementById('wind_now').innerHTML=data.properties.timeseries[0].data.instant.details.wind_speed+data.properties.meta.units.wind_speed
            document.getElementById('wind_now').innerHTML+='  <img src="./Images/directionArrow.svg" alt="mjau" id="arrow_now"  style="height: 15px;">'
            let windDirectionNow = data.properties.timeseries[0].data.instant.details.wind_from_direction
            document.getElementById('arrow_now').style.transform=`rotate(${windDirectionNow}deg)`

            document.getElementById('rain_now').innerHTML=data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount+"mm"
        });
    }

function knapp(){
    document.getElementById("dag_melding").style.display="none"
    document.getElementById("dag_to_melding").style.display="none"
    document.getElementById("dag_tre_melding").style.display="none"
    document.getElementById("dag_fire_melding").style.display="none"
    document.getElementById("dag_fem_melding").style.display="none"
    document.getElementById("dag_seks_melding").style.display="none"
    document.getElementById("dag_sju_melding").style.display="none"
    document.getElementById("dag_atte_melding").style.display="none"
    document.getElementById("dag_ni_melding").style.display="none"
    document.getElementById("dag_ti_melding").style.display="none"
    document.getElementById("dag_elleve_melding").style.display="none"
}

function dagMelding(){
    document.getElementById("labels").style.display="table-row"
    document.getElementById("dag_melding").style.display="flex"
    document.getElementById('date_one').innerHTML=days[0]
    for (let index = 0; index <= dayOneTime.length-1; index++) {
        document.getElementById(`one_row_${index}`).style.display="table-row"
        if(index<10){
            document.getElementById(`one_temp_0${index}`).innerHTML=dayOneTemp[index]+"°"
            document.getElementById(`one_rain_0${index}`).innerHTML=dayOneRain[index]
            document.getElementById(`one_wind_0${index}`).innerHTML=dayOneWind[index]+"m/s"
            document.getElementById(`one_time_0${index}`).innerHTML=dayOneTime[index]
            document.getElementById(`one_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayOneWindDirection[index]}" id="arrow_one_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${index}`).style.transform=`rotate(${dayOneWindDirection[index]}deg)`
            document.getElementById(`one_sum_0${index}`).innerHTML=`<img src="./Images/${dayOneSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        else{
            document.getElementById(`one_temp_${index}`).innerHTML=dayOneTemp[index]+"°"
            document.getElementById(`one_rain_${index}`).innerHTML=dayOneRain[index]
            document.getElementById(`one_wind_${index}`).innerHTML=dayOneWind[index]+"m/s"
            document.getElementById(`one_time_${index}`).innerHTML=dayOneTime[index]
            document.getElementById(`one_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayOneWindDirection[index]}" id="arrow_one_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${index}`).style.transform=`rotate(${dayOneWindDirection[index]}deg)`
            document.getElementById(`one_sum_${index}`).innerHTML=`<img src="./Images/${dayOneSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        
    }
}

function dagTwoMelding(){    
    document.getElementById("dag_to_melding").style.display="flex"
    document.getElementById('date_two').innerHTML=days[1]

    for (let index = 0; index <= 23; index++) {
        if(index<10){
            document.getElementById(`two_temp_0${index}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`two_rain_0${index}`).innerHTML=dayTwoRain[index]
            document.getElementById(`two_wind_0${index}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`two_time_0${index}`).innerHTML=dayTwoTime[index]
            document.getElementById(`two_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_two_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_two_${index}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
            document.getElementById(`two_rain_0${index}`).innerHTML=dayTwoRain[index]
            document.getElementById(`two_sum_0${index}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        else{
            document.getElementById(`two_temp_${index}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`two_rain_${index}`).innerHTML=dayTwoRain[index]
            document.getElementById(`two_wind_${index}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`two_time_${index}`).innerHTML=dayTwoTime[index]
            document.getElementById(`two_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_two_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_two_${index}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
            document.getElementById(`two_sum_${index}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref"  style="height: 15px;">`

        }    
    }
}

function dagThreeMelding(){    
    document.getElementById("dag_tre_melding").style.display="flex"
    document.getElementById('date_three').innerHTML=days[2]

    for (let index = 0; index <= dayThreeTime.length-1; index++) {
        if(index<10){
            document.getElementById(`three_temp_0${index}`).innerHTML=dayThreeTemp[index]+"°"
            document.getElementById(`three_rain_0${index}`).innerHTML=dayThreeRain[index]
            document.getElementById(`three_wind_0${index}`).innerHTML=dayThreeWind[index]+"m/s"
            document.getElementById(`three_time_0${index}`).innerHTML=dayThreeTime[index]
            document.getElementById(`three_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayThreeWindDirection[index]}" id="arrow_three_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_three_${index}`).style.transform=`rotate(${dayThreeWindDirection[index]}deg)`
            document.getElementById(`three_rain_0${index}`).innerHTML=dayThreeRain[index]
            document.getElementById(`three_sum_0${index}`).innerHTML=`<img src="./Images/${dayThreeSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        else{
            document.getElementById(`three_temp_${index}`).innerHTML=dayThreeTemp[index]+"°"
            document.getElementById(`three_rain_${index}`).innerHTML=dayThreeRain[index]
            document.getElementById(`three_wind_${index}`).innerHTML=dayThreeWind[index]+"m/s"
            document.getElementById(`three_time_${index}`).innerHTML=dayThreeTime[index]
            document.getElementById(`three_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayThreeWindDirection[index]}" id="arrow_three_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_three_${index}`).style.transform=`rotate(${dayThreeWindDirection[index]}deg)`
            document.getElementById(`three_sum_${index}`).innerHTML=`<img src="./Images/${dayThreeSummary[index]}.svg" alt="frefref"  style="height: 15px;">`

        }    
    }
}

function dagFourMelding(){    
    document.getElementById("dag_fire_melding").style.display="flex"
    document.getElementById('date_four').innerHTML=days[3]

    for (let index = 0; index <= dayFourTime.length-1; index++) {
            document.getElementById(`four_temp_0${index}`).innerHTML=dayFourTemp[index]+"°"
            document.getElementById(`four_rain_0${index}`).innerHTML=dayFourRain[index]
            document.getElementById(`four_wind_0${index}`).innerHTML=dayFourWind[index]+"m/s"
            document.getElementById(`four_time_0${index}`).innerHTML=dayFourTime[index]
            document.getElementById(`four_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayFourWindDirection[index]}" id="arrow_four_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_four_${index}`).style.transform=`rotate(${dayFourWindDirection[index]}deg)`
            document.getElementById(`four_rain_0${index}`).innerHTML=dayFourRain[index]
            document.getElementById(`four_sum_0${index}`).innerHTML=`<img src="./Images/${dayFourSummary[index]}.svg" alt="frefref"  style="height: 15px;">`  
    }
}

function dagFiveMelding(){    
    document.getElementById("dag_fem_melding").style.display="flex"
    document.getElementById('date_five').innerHTML=days[4]

    for (let index = 0; index <= dayFiveTime.length-1; index++) {
            document.getElementById(`five_temp_0${index}`).innerHTML=dayFiveTemp[index]+"°"
            document.getElementById(`five_rain_0${index}`).innerHTML=dayFiveRain[index]
            document.getElementById(`five_wind_0${index}`).innerHTML=dayFiveWind[index]+"m/s"
            document.getElementById(`five_time_0${index}`).innerHTML=dayFiveTime[index]
            document.getElementById(`five_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayFiveWindDirection[index]}" id="arrow_five_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_five_${index}`).style.transform=`rotate(${dayFiveWindDirection[index]}deg)`
            document.getElementById(`five_rain_0${index}`).innerHTML=dayFiveRain[index]
            document.getElementById(`five_sum_0${index}`).innerHTML=`<img src="./Images/${dayFiveSummary[index]}.svg" alt="frefref"  style="height: 15px;">` 
    }
}

function dagSixMelding(){    
    document.getElementById("dag_seks_melding").style.display="flex"
    document.getElementById('date_six').innerHTML=days[5]

    for (let index = 0; index <= daySixTime.length-1; index++) {
            document.getElementById(`six_temp_0${index}`).innerHTML=daySixTemp[index]+"°"
            document.getElementById(`six_rain_0${index}`).innerHTML=daySixRain[index]
            document.getElementById(`six_wind_0${index}`).innerHTML=daySixWind[index]+"m/s"
            document.getElementById(`six_time_0${index}`).innerHTML=daySixTime[index]
            document.getElementById(`six_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${daySixWindDirection[index]}" id="arrow_six_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_six_${index}`).style.transform=`rotate(${daySixWindDirection[index]}deg)`
            document.getElementById(`six_rain_0${index}`).innerHTML=daySixRain[index]
            document.getElementById(`six_sum_0${index}`).innerHTML=`<img src="./Images/${daySixSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
    }
}

function dagSevenMelding(){    
    document.getElementById("dag_sju_melding").style.display="flex"
    document.getElementById('date_seven').innerHTML=days[6]

    for (let index = 0; index <= daySevenTime.length-1; index++) {
            document.getElementById(`seven_temp_0${index}`).innerHTML=daySevenTemp[index]+"°"
            document.getElementById(`seven_rain_0${index}`).innerHTML=daySevenRain[index]
            document.getElementById(`seven_wind_0${index}`).innerHTML=daySevenWind[index]+"m/s"
            document.getElementById(`seven_time_0${index}`).innerHTML=daySevenTime[index]
            document.getElementById(`seven_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${daySevenWindDirection[index]}" id="arrow_seven_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_seven_${index}`).style.transform=`rotate(${daySevenWindDirection[index]}deg)`
            document.getElementById(`seven_rain_0${index}`).innerHTML=daySevenRain[index]
            document.getElementById(`seven_sum_0${index}`).innerHTML=`<img src="./Images/${daySevenSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
    }
}

function dagEightMelding(){    
    document.getElementById("dag_atte_melding").style.display="flex"
    document.getElementById('date_eight').innerHTML=days[7]

    for (let index = 0; index <= dayEightTime.length-1; index++) {
            document.getElementById(`eight_temp_0${index}`).innerHTML=dayEightTemp[index]+"°"
            document.getElementById(`eight_rain_0${index}`).innerHTML=dayEightRain[index]
            document.getElementById(`eight_wind_0${index}`).innerHTML=dayEightWind[index]+"m/s"
            document.getElementById(`eight_time_0${index}`).innerHTML=dayEightTime[index]
            document.getElementById(`eight_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayEightWindDirection[index]}" id="arrow_eight_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_eight_${index}`).style.transform=`rotate(${dayEightWindDirection[index]}deg)`
            document.getElementById(`eight_rain_0${index}`).innerHTML=dayEightRain[index]
            document.getElementById(`eight_sum_0${index}`).innerHTML=`<img src="./Images/${dayEightSummary[index]}.svg" alt="frefref"  style="height: 15px;">`   
    }
}

function dagNineMelding(){    
    document.getElementById("dag_ni_melding").style.display="flex"
    document.getElementById('date_nine').innerHTML=days[8]

    for (let index = 0; index <= dayNineTime.length-1; index++) {
            document.getElementById(`nine_temp_0${index}`).innerHTML=dayNineTemp[index]+"°"
            document.getElementById(`nine_rain_0${index}`).innerHTML=dayNineRain[index]
            document.getElementById(`nine_wind_0${index}`).innerHTML=dayNineWind[index]+"m/s"
            document.getElementById(`nine_time_0${index}`).innerHTML=dayNineTime[index]
            document.getElementById(`nine_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayNineWindDirection[index]}" id="arrow_nine_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_nine_${index}`).style.transform=`rotate(${dayNineWindDirection[index]}deg)`
            document.getElementById(`nine_rain_0${index}`).innerHTML=dayNineRain[index]
            document.getElementById(`nine_sum_0${index}`).innerHTML=`<img src="./Images/${dayNineSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
    }
}

function dagTenMelding(){    
    document.getElementById("dag_ti_melding").style.display="flex"
    document.getElementById('date_ten').innerHTML=days[9]

    for (let index = 0; index <= dayTenTime.length-1; index++) {
            document.getElementById(`ten_temp_0${index}`).innerHTML=dayTenTemp[index]+"°"
            document.getElementById(`ten_rain_0${index}`).innerHTML=dayTenRain[index]
            document.getElementById(`ten_wind_0${index}`).innerHTML=dayTenWind[index]+"m/s"
            document.getElementById(`ten_time_0${index}`).innerHTML=dayTenTime[index]
            document.getElementById(`ten_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTenWindDirection[index]}" id="arrow_ten_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_ten_${index}`).style.transform=`rotate(${dayTenWindDirection[index]}deg)`
            document.getElementById(`ten_rain_0${index}`).innerHTML=dayTenRain[index]
            document.getElementById(`ten_sum_0${index}`).innerHTML=`<img src="./Images/${dayTenSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
    }
}

function dagElevenMelding(){    
    document.getElementById("dag_elleve_melding").style.display="flex"
    document.getElementById('date_eleven').innerHTML=days[10]

    for (let index = 0; index <= dayElevenTime.length-1; index++) {
            document.getElementById(`eleven_temp_0${index}`).innerHTML=dayElevenTemp[index]+"°"
            document.getElementById(`eleven_rain_0${index}`).innerHTML=dayElevenRain[index]
            document.getElementById(`eleven_wind_0${index}`).innerHTML=dayElevenWind[index]+"m/s"
            document.getElementById(`eleven_time_0${index}`).innerHTML=dayElevenTime[index]
            document.getElementById(`eleven_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayElevenWindDirection[index]}" id="arrow_eleven_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_eleven_${index}`).style.transform=`rotate(${dayElevenWindDirection[index]}deg)`
            document.getElementById(`eleven_rain_0${index}`).innerHTML=dayElevenRain[index]
            document.getElementById(`eleven_sum_0${index}`).innerHTML=`<img src="./Images/${dayElevenSummary[index]}.svg" alt="frefref"  style="height: 15px;">` 
    }
}