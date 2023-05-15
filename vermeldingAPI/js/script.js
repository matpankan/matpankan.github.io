let index= 9

let days=[]

//Tidlister
let dayOneTime=[]
let dayTwoTime=[]
let dayFourTime=[]

//Templister
let dayOneTemp=[]
let dayTwoTemp=[]
let dayFourTemp=[]

//Regnlister
let dayOneRain=[]
let dayTwoRain=[]
let dayFourRain=[]

//Vindlister
let dayOneWind=[]
let dayTwoWind=[]
let dayFourWind=[]

//Vinddirectionlister
let dayOneWindDirection=[]
let dayTwoWindDirection=[]
let dayFourWindDirection=[]

//Summary
let dayOneSummary=[]
let dayTwoSummary=[]
let dayFourSummary=[]

let lat="lat=59.7192"
let lon="lon=10.8347"

function by(){
    let days=[]
    //Tidlister
    dayOneTime=[]
    dayTwoTime=[]
    dayFourTime=[]

    //Templister
    dayOneTemp=[]
    dayTwoTemp=[]
    dayFourTemp=[]

    //Regnlister
    dayOneRain=[]
    dayTwoRain=[]
    dayFourRain=[]

    //Vindlister
    dayOneWind=[]
    dayTwoWind=[]
    dayFourWind=[]

    //Vinddirectionlister
    dayOneWindDirection=[]
    dayTwoWindDirection=[]
    dayFourWindDirection=[]

    //Summary
    dayOneSummary=[]
    dayTwoSummary=[]
    dayFourSummary=[]


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
            let dayCount=0
            let time=data.properties.timeseries[0].time
            //dette er bare for datoene
            for (let index = 0; index < 11; index++) {
                days.push(`${day+index}.${month}.${year}`)
            }
            //For å fylle lister
            for (index = 0; index < data.properties.timeseries.length-2; index++) {
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
                else if(dayCount < 42){
                    dayTwoTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayTwoRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                    dayTwoWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayTwoTime.push(tidsdata)
                    dayTwoWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    dayTwoSummary.push(data.properties.timeseries[index].data.next_1_hours.summary.symbol_code)
                    dayCount++
                }
                else{
                    dayFourTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFourRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFourWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFourWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayFourTime.push(tidsdata)
                    dayFourSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                }
            }

            dayTwoTime = dayTwoTime.concat(dayFourTime)
            dayTwoTemp = dayTwoTemp.concat(dayFourTemp)
            dayTwoRain = dayTwoRain.concat(dayFourRain)
            dayTwoWind = dayTwoWind.concat(dayFourRain)
            dayTwoWindDirection = dayTwoWindDirection.concat(dayFourWindDirection)
            dayTwoSummary = dayTwoSummary.concat(dayFourSummary)


            console.log(data)

            document.getElementById('today_1').innerHTML=`Været I dag ${days[0]}`   
            for (let index = 2; index <= 10; index++) { 
                if(daysOfWeek[weekday+index-1]!=undefined){
                    document.getElementById(`today_${index}`).innerHTML=`Været ${daysOfWeek[weekday+index-1]} ${days[index-1]}` 
                }
                else if(daysOfWeek[weekday+index-1]==undefined){
                    if (weekday+index-1<14) {
                        document.getElementById(`today_${index}`).innerHTML=`Været ${daysOfWeek[weekday+index-1-7]} ${days[index-1]}`                          
                    }
                    if (weekday+index-1 >13) {
                        document.getElementById(`today_${index}`).innerHTML=`Været ${daysOfWeek[weekday+index-1-14]} ${days[index-1]}`                          
                    }
                } 
            }
             
            
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
    for (let index = 0; index < 24; index++) {
        document.getElementById(`one_row_${index}`).style.display="none"      
    }
}

function dagMelding(){
    document.getElementById("labels").style.display="table-row"
    document.getElementById("dag_melding").style.display="flex"
    document.getElementById('date_one').innerHTML=days[0]
    for (let index = 0; index < dayOneTime.length-1; index++) {
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

function callMessage(startIndex, dayRange, whicDay) {
    document.getElementById("labels").style.display="table-row"
    document.getElementById("dag_melding").style.display="flex"
    document.getElementById('date_one').innerHTML=days[whicDay]
    let rowInt = 0
    for (let index = startIndex; index < dayRange; index++) {
        document.getElementById(`one_row_${rowInt}`).style.display="table-row"
        if(rowInt<10){
            document.getElementById(`one_temp_0${rowInt}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`one_rain_0${rowInt}`).innerHTML=dayTwoRain[index]
            document.getElementById(`one_wind_0${rowInt}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`one_time_0${rowInt}`).innerHTML=dayTwoTime[index]
            document.getElementById(`one_wind_0${rowInt}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_one_${rowInt}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${rowInt}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
            document.getElementById(`one_sum_0${rowInt}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        else{
            document.getElementById(`one_temp_${rowInt}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`one_rain_${rowInt}`).innerHTML=dayTwoRain[index]
            document.getElementById(`one_wind_${rowInt}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`one_time_${rowInt}`).innerHTML=dayTwoTime[index]
            document.getElementById(`one_wind_${rowInt}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_one_${rowInt}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${rowInt}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
            document.getElementById(`one_sum_${rowInt}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref"  style="height: 15px;">`
        }
        rowInt++
    }
}

function dagTwoMelding(){    
    callMessage(0, 24, 1)
}

function dagThreeMelding(){    
    callMessage(24, 24+19, 2)
}

function dagFourMelding(){    
    callMessage(43, 47, 3)
}

function dagFiveMelding(){    
    callMessage(47, 51, 4)
}

function dagSixMelding(){    
    callMessage(51, 55, 5)
}

function dagSevenMelding(){    
    callMessage(55, 59, 6)
}

function dagEightMelding(){    
    callMessage(59, 63, 7)
}

function dagNineMelding(){    
    callMessage(63, 67, 8)
}

function dagTenMelding(){    
    callMessage(67, 70, 9)
}