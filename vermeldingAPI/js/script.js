let index= 9

let days=[]
//Tidlister
let dayOneTime=[]
let dayTwoTime=[]

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

function finnVer(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let today = new Date();
    let daysOfWeek = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    let weekday = daysOfWeek[today.getDay()];
    let m = day
    let iDag = ''
    let a = 1
   
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.7192&lon=10.8347',{
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
                }
                else if(iDag==m+1){
                    dayTwoTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayTwoRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                    dayTwoWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayTwoTime.push(tidsdata)
                    dayTwoWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                }
                else if(iDag==m+2){
                    dayThreeTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayThreeWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayThreeWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    if(a<19){
                        //dayThreeRain.push(data.properties.timeseries[index].data.next_1_hours.details.precipitation_amount)
                        a++
                    }
                    else{
                        dayThreeRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    }
                }
                if(iDag==m+3){
                    dayFourTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFourRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFourWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFourWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                }
                 else if(iDag==m+4){
                    dayFiveTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFiveRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFiveWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFiveWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)

                }
                 else if(iDag==m+5){
                    daySixTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    daySixRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    daySixWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    daySixWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                 }                   
                if(iDag==m+6){
                    daySevenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    daySevenRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    daySevenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    daySevenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                }
                 else if(iDag==m+7){
                    dayEightTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayEightRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayEightWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayEightWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                 }
                 else if(iDag==m+8){
                    dayNineTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayNineRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayNineWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayNineWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                 }   
                 if(iDag==m+9){
                    dayTenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayTenRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayTenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayTenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                 }
                 else if(iDag==m+10){
                    dayElevenTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayElevenWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayElevenWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                 } 
            }


            console.log(data)
            document.getElementById('today').innerHTML=`Været I dag ${days[0]}`     
            document.getElementById('today_two').innerHTML=`Været ${weekday} ${days[1]}`  
            
            //Været akkrat nå
            document.getElementById('temp_now').innerHTML=data.properties.timeseries[0].data.instant.details.air_temperature+"°"

            document.getElementById('wind_now').innerHTML=data.properties.timeseries[0].data.instant.details.wind_speed+data.properties.meta.units.wind_speed
            document.getElementById('wind_now').innerHTML+='  <img src="./Images/directionArrow.svg" alt="mjau" id="arrow_now"  style="height: 15px;">'
            let windDirectionNow = data.properties.timeseries[0].data.instant.details.wind_from_direction
            document.getElementById('arrow_now').style.transform=`rotate(${windDirectionNow}deg)`

            document.getElementById('rain_now').innerHTML=data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount+"mm"
        });
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
            }
            else{
                document.getElementById(`one_temp_${index}`).innerHTML=dayOneTemp[index]+"°"
                document.getElementById(`one_rain_${index}`).innerHTML=dayOneRain[index]
                document.getElementById(`one_wind_${index}`).innerHTML=dayOneWind[index]+"m/s"
                document.getElementById(`one_time_${index}`).innerHTML=dayOneTime[index]
                document.getElementById(`one_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayOneWindDirection[index]}" id="arrow_one_${index}"  style="height: 15px;">`
                document.getElementById(`arrow_one_${index}`).style.transform=`rotate(${dayOneWindDirection[index]}deg)`
            }
            
        }
    }


function dagTwoMelding(){
    
    document.getElementById("rest").style.display="none"
    document.getElementById("today_two").style.display="none"
    document.getElementById("today").style.display="none"
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

            
        }
        else{
            document.getElementById(`two_temp_${index}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`two_rain_${index}`).innerHTML=dayTwoRain[index]
            document.getElementById(`two_wind_${index}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`two_time_${index}`).innerHTML=dayTwoTime[index]
            document.getElementById(`two_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_two_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_two_${index}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
        }        
    }
}
