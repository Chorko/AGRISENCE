document.addEventListener('DOMContentLoaded', function() {
    // Previous temperature and humidity values
    let previousTemperature = 0;
    let previousHumidity = 0;

    // Threshold for moisture level
    const moistureThreshold = 60; // Adjust this threshold as needed

    // Function to generate random sensor data within specified ranges
    function generateRandomSensorData() {
        // Generate random values within specified ranges
        let randomHumidityChange = Math.random() * 6 - 3; // Random change between -3 and 3
        let randomTemperatureChange = Math.random() * 2 - 1; // Random change between -1 and 1

        // Ensure temperature stays within 31°C to 33°C range
        if (previousTemperature + randomTemperatureChange < 31) {
            randomTemperatureChange = 31 - previousTemperature;
        } else if (previousTemperature + randomTemperatureChange > 33) {
            randomTemperatureChange = 33 - previousTemperature;
        }

        // Ensure humidity stays within 65% to 75% range
        if (previousHumidity + randomHumidityChange < 65) {
            randomHumidityChange = 65 - previousHumidity;
        } else if (previousHumidity + randomHumidityChange > 75) {
            randomHumidityChange = 75 - previousHumidity;
        }

        // Update previous humidity and temperature values
        previousHumidity += randomHumidityChange;
        previousTemperature += randomTemperatureChange;

        // Generate random moisture value within 60 to 80 range
        const randomMoisture = Math.floor(Math.random() * 21) + 60; // Random value between 60 and 80

        return {
            humidity: previousHumidity.toFixed(2),
            temperature: previousTemperature.toFixed(2),
            moisture: randomMoisture
        };
    }

    // Function to determine crop based on sensor data
    function getCropCondition(humidity, temperature, moisture) {
        if (temperature >= 31 && temperature <= 33 && humidity >= 65 && humidity <= 75 && moisture >= 60 && moisture <= 80) {
            if (temperature >= 32 && humidity >= 70) {
                return "Rice";
            } else if (temperature >= 31 && humidity <= 70) {
                return "Wheat";
            } else {
                return "Corn";
            }
        } else {
            return "No specific crop recommendation.";
        }
    }

    // Function to play the sound
    function playSound() {
        var audio = new Audio('C:\Users\plshe\OneDrive\Documents\App2\static\beep-01a.mp3'); // Path to your audio file
        audio.play();
    }

    // Function to update data
    function updateSensorData() {
        const randomSensorData = generateRandomSensorData();

        console.log("Temperature:", randomSensorData.temperature, "°C");
        console.log("Humidity:", randomSensorData.humidity, "%");
        console.log("Moisture:", randomSensorData.moisture);

        const cropType = getCropCondition(randomSensorData.humidity, randomSensorData.temperature, randomSensorData.moisture);
        console.log("Crop type:", cropType);

        // Check if moisture level drops below the threshold
        if (randomSensorData.moisture < moistureThreshold) {
            console.log("Moisture level dropped below threshold!");
            playSound(); // Play sound
        }
    }

    // Call the function to update data on page load
    updateSensorData();

    // Update data every 5 seconds (for demonstration purposes)
    setInterval(updateSensorData, 5000);
});