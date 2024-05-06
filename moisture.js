function updateMoisture() {
    fetch('/get_moisture')
        .then(response => response.json())
        .then(data => {
            document.getElementById('moistureValue').innerText = data.moisture;
        });
}

setInterval(updateMoisture, 5000); // Update every 5 seconds
