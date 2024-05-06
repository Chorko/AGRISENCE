function updateTemperature() {
    fetch('/get_temperature')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatureValue').innerText = data.temperature;
        });
}

setInterval(updateTemperature, 5000); // Update every 5 seconds
