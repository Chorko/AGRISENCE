// Previous temperature and humidity values
let previousTemperature = 0;
let previousHumidity = 0;

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
  
  // Generate random moisture value
  const randomMoisture = Math.floor(Math.random() * 21) + 60; // Random value between 30 and 90
  
  return {
    humidity: previousHumidity.toFixed(2),
    temperature: previousTemperature.toFixed(2),
    moisture: randomMoisture
  };
}

// Function to determine crop based on sensor data
function getCropCondition(humidity, temperature, moisture) {
  if (temperature >= 26 && temperature <= 33 && humidity >= 65 && humidity <= 75 && moisture >= 30 && moisture <= 90) {
    if (temperature >= 32 && humidity >= 70) {
      return "Rice";
    } else if (temperature >= 31 && humidity <= 70) {
      return "Ragi";
      
    } 
    else if (temperature <=30 && humidity <= 70) {
        return "Bagra";}
    else if (temperature >= 31 && humidity >=80) {
         return "Corn";}
    else if (temperature >=15 && temperature<=30  && humidity >=80) {
        return "Banana";}
    else if (temperature >=25 && temperature<=35  && humidity >=50 && humidity <=60) {
        return "Brinjal";}
    else if (temperature >=26 && temperature<=32  && humidity >=80) {
        return "Groudnut";}
    else if (temperature >=28 && temperature<=36  && humidity >=55 && humidity <=60) {
        return "Mango";}
    else if (temperature >=26 && temperature<=32  && humidity >=58 && humidity <=60) {
        return "Mango";}
    else {
      return "Corn";
    }
  } else {
    return "No specific crop recommendation.";
  }
}

// Function to update the HTML content with random sensor data and crop recommendation
function updateSensorData() {
  const randomSensorData = generateRandomSensorData();
  
  document.getElementById('humidity').textContent = randomSensorData.humidity + ' %';
  document.getElementById('temperature').textContent = randomSensorData.temperature + ' °C';
  document.getElementById('moisture').textContent = randomSensorData.moisture;
  
  const cropType = getCropCondition(randomSensorData.humidity, randomSensorData.temperature, randomSensorData.moisture);
  document.getElementById('cropType').textContent = cropType;
}

// Call the function to update data on page load
updateSensorData();

// Update data every 5 seconds (for demonstration purposes)
setInterval(updateSensorData, 30000);