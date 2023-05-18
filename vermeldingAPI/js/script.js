let index= 9

let days=[]
let fixTime = 0
let fourteenOrNineteen = 0

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

var lat="lat=59.7192"
var lon="lon=10.8347"

var requestOptions = {
    method: 'GET',
};

var suggestions = ["oslo", "drøbak", "bergen", "bodø", "trondheim", "ski", "vestby", "stavanger"];

function showSuggestions() {
    var input = document.getElementById("myInput");
    var value = input.value.toLowerCase();
    var suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";
  
    if (value.length === 0) {
      return;
    }
  
    var matchingSuggestions = suggestions.filter(function(suggestion) {
      return suggestion.startsWith(value);
    });
  
    matchingSuggestions.forEach(function(suggestion) {
      var suggestionElement = document.createElement("div");
      suggestionElement.textContent = suggestion;
      suggestionsDiv.appendChild(suggestionElement);
    });
  }






function by(){
    days=[]
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


    let whichTown = document.getElementById("myInput").value
    fetch(`https://api.geoapify.com/v1/geocode/search?city=${whichTown}&lang=en&limit=5&format=json&apiKey=90342e2eea264f33b942da82858b8d8b`, requestOptions)
    .then((response) => response.json())
    .then((results) =>{
        console.log(results)
        lat=results.results[0].lat
        lon=results.results[0].lon 
        document.getElementById("city").innerHTML=results.results[0].formatted
        finnVer()
    })
    
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
   
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,{
    method: 'GET', 
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

             //Været akkrat nå
             document.getElementById('temp_now').innerHTML=data.properties.timeseries[2].data.instant.details.air_temperature+"°"
             document.getElementById('wind_now').innerHTML=data.properties.timeseries[2].data.instant.details.wind_speed+data.properties.meta.units.wind_speed
             document.getElementById('wind_now').innerHTML+='  <img src="./Images/directionArrow.svg" alt="mjau" id="arrow_now"  style="height: 15px;">'
             let windDirectionNow = data.properties.timeseries[2].data.instant.details.wind_from_direction
             document.getElementById('arrow_now').style.transform=`rotate(${windDirectionNow}deg)`
             document.getElementById('rain_now').innerHTML=data.properties.timeseries[2].data.next_1_hours.details.precipitation_amount+"mm"
             document.getElementById(`sum_now`).innerHTML=`<img src="./Images/${data.properties.timeseries[2].data.next_1_hours.summary.symbol_code}.svg" alt="frefref"  style="height: 100%;">`
            
            let dayCount=0
            let time=data.properties.timeseries[0].time
            //dette er bare for datoene
            for (let index = 0; index < 11; index++) {
                days.push(`${day+index}.${month}.${year}`)
            }
            time=data.properties.timeseries[39].time
            inTwoDays=time.substring(8,10)
            for (let index = 39; index < 58; index++) {
                time=data.properties.timeseries[index].time
                fixTime=time.substring(8,10) 
                if (fixTime===inTwoDays) {
                    fourteenOrNineteen += 1
                }
                
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
                else if(dayCount < 36 && fourteenOrNineteen < 15){
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
                else if(dayCount >= 36 && fourteenOrNineteen < 15){
                    dayFourTemp.push(data.properties.timeseries[index].data.instant.details.air_temperature)
                    dayFourRain.push(data.properties.timeseries[index].data.next_6_hours.details.precipitation_amount)
                    dayFourWind.push(data.properties.timeseries[index].data.instant.details.wind_speed)
                    dayFourWindDirection.push(data.properties.timeseries[index].data.instant.details.wind_from_direction)
                    let tidsdata = data.properties.timeseries[index].time
                    tidsdata=tidsdata.substring(11,16)
                    dayFourTime.push(tidsdata)
                    dayFourSummary.push(data.properties.timeseries[index].data.next_6_hours.summary.symbol_code)
                }
                else if(dayCount < 42 && fourteenOrNineteen > 15){
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
                else if(dayCount >= 42 && fourteenOrNineteen > 15){
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

            if (dayOneTemp[0] > 0) {
                document.getElementById('temp_now').style.color="red"
            }
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
    for (let index = 0; index < dayOneTime.length; index++) {
        document.getElementById(`one_row_${index}`).style.display="table-row"
        if(index<10){
            document.getElementById(`one_temp_0${index}`).innerHTML=dayOneTemp[index]+"°"
            document.getElementById(`one_rain_0${index}`).innerHTML=dayOneRain[index]
            document.getElementById(`one_wind_0${index}`).innerHTML=dayOneWind[index]+"m/s"
            document.getElementById(`one_time_0${index}`).innerHTML=dayOneTime[index]
            document.getElementById(`one_wind_0${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayOneWindDirection[index]}" id="arrow_one_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${index}`).style.transform=`rotate(${dayOneWindDirection[index]}deg)`
            document.getElementById(`one_sum_0${index}`).innerHTML=`<img src="./Images/${dayOneSummary[index]}.svg" alt="frefref"  style="height: 100%;">`
        }
        else{
            document.getElementById(`one_temp_${index}`).innerHTML=dayOneTemp[index]+"°"
            document.getElementById(`one_rain_${index}`).innerHTML=dayOneRain[index]
            document.getElementById(`one_wind_${index}`).innerHTML=dayOneWind[index]+"m/s"
            document.getElementById(`one_time_${index}`).innerHTML=dayOneTime[index]
            document.getElementById(`one_wind_${index}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayOneWindDirection[index]}" id="arrow_one_${index}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${index}`).style.transform=`rotate(${dayOneWindDirection[index]}deg)`
            document.getElementById(`one_sum_${index}`).innerHTML=`<img src="./Images/${dayOneSummary[index]}.svg" alt="frefref"  style="height: 100%;">`
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
            document.getElementById(`one_sum_0${rowInt}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref" style="height: 100%;">`
        }
        else{
            document.getElementById(`one_temp_${rowInt}`).innerHTML=dayTwoTemp[index]+"°"
            document.getElementById(`one_rain_${rowInt}`).innerHTML=dayTwoRain[index]
            document.getElementById(`one_wind_${rowInt}`).innerHTML=dayTwoWind[index]+"m/s"
            document.getElementById(`one_time_${rowInt}`).innerHTML=dayTwoTime[index]
            document.getElementById(`one_wind_${rowInt}`).innerHTML+=`<img src="./Images/directionArrow.svg" alt="Pil som peker i vind-retningen, som er ${dayTwoWindDirection[index]}" id="arrow_one_${rowInt}"  style="height: 15px;">`
            document.getElementById(`arrow_one_${rowInt}`).style.transform=`rotate(${dayTwoWindDirection[index]}deg)`
            document.getElementById(`one_sum_${rowInt}`).innerHTML=`<img src="./Images/${dayTwoSummary[index]}.svg" alt="frefref"  style="height: 100%;">`
        }
        rowInt++
    }
}

function dagTwoMelding(){   
    if (fixTime === "0") {
        callMessage(0, 24, 1)
    } 
    else{
        callMessage(0, 24, 1)
    }
}

function dagThreeMelding(){    
    if (fixTime === "0") {
        callMessage(24, 24+14, 2)
    } 
    else{
        callMessage(24, 24+19, 2)
    }
}

function dagFourMelding(){    
    if (fixTime === "0") {
        callMessage(38, 42, 3)
    } 
    else{
        callMessage(43, 47, 3)
    }
}

function dagFiveMelding(){  
    if (fixTime === "0") {
        callMessage(42, 46, 4)
    } 
    else{
        callMessage(47, 51, 4)
    }  
}

function dagSixMelding(){ 
    if (fixTime === "0") {
        callMessage(46, 50, 5)
    } 
    else{
        callMessage(51, 55, 5)
    }   
}

function dagSevenMelding(){   
    if (fixTime === "0") {
        callMessage(50, 54, 6)
    } 
    else{
        callMessage(55, 59, 6)
    } 
}

function dagEightMelding(){  
    if (fixTime === "0") {
        callMessage(54, 58, 7)
    } 
    else{
        callMessage(59, 63, 7)
    }  
}

function dagNineMelding(){   
    if (fixTime === "0") {
        callMessage(58, 62, 8)
    } 
    else{
        callMessage(63, 67, 8)
    } 
}

function dagTenMelding(){  
    if (fixTime === "0") {
        callMessage(62, 66, 9)
    } 
    else{
        callMessage(67, 71, 9)
    }  
}