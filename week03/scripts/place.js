
function calculateWindChill(tempC, windKmh) {
    // Convert Celsius to Fahrenheit
    const tempF = (tempC * 9) / 5 + 32;
    // Convert km/h to mph
    const windMph = windKmh / 1.609;

    let windChillF;

    // Wind chill formula only works if temp ≤ 50°F and wind speed > 3 mph
    if (tempF <= 50 && windMph > 3) {
        windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * tempF * Math.pow(windMph, 0.16);
    } else {
        windChillF = tempF; // No wind chill calculation needed
    }

    // Convert back to Celsius
    const windChillC = ((windChillF - 32) * 5) / 9;

    return windChillC.toFixed(2);
}

// Static values
const temperatureC = 25; // °C
const windSpeedKmh = 5;  // km/h

// Insert values into HTML
const weatherItems = document.querySelectorAll(".weather li");

if (weatherItems.length >= 4) {
    weatherItems[0].textContent = `Temperature: ${temperatureC} °C`;
    weatherItems[2].textContent = `Wind: ${windSpeedKmh} km/h`;

    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    weatherItems[3].textContent = `Wind Chill: ${windChill} °C`;
}