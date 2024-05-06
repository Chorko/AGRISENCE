function updateHumidity() {
    fetch('/get_humidity')
        .then(response => response.json())
        .then(data => {
            document.getElementById('humidityValue').innerText = data.humidity;
        });
}

setInterval(updateHumidity, 5000); // Update every 5 seconds
