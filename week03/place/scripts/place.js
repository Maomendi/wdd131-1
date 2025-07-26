
function calculateWindChill(tempC, windKmh) {
   
    const tempF = (tempC * 9) / 5 + 32;
 
    const windMph = windKmh / 1.609;

    let windChillF;


    if (tempF <= 50 && windMph > 3) {
        windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * tempF * Math.pow(windMph, 0.16);
    } else {
        windChillF = tempF;
    }

    const windChillC = ((windChillF - 32) * 5) / 9;

    return windChillC.toFixed(2);
}


const temperatureC = 25;
const windSpeedKmh = 5; 


const weatherItems = document.querySelectorAll(".weather li");

if (weatherItems.length >= 4) {
    weatherItems[0].textContent = `Temperature: ${temperatureC} °C`;
    weatherItems[2].textContent = `Wind: ${windSpeedKmh} km/h`;

    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    weatherItems[3].textContent = `Wind Chill: ${windChill} °C`;
}