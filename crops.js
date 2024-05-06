const crops = [
    { name: "Wheat", humidity: 21 },
    { name: "Rice", humidity: 40 },
    { name: "Mash", humidity: 30 }
];

function displayCropConditions(cropName) {
    let message = '';
    const crop = crops.find(c => c.name.toLowerCase() === cropName.toLowerCase());
    
    if (crop) {
        if (crop.humidity === 40) {
            message = `${crop.name} grows in warm and dry conditions.`;
        } else if (crop.humidity === 21) {
            message = `${crop.name} grows well in warm and wet conditions.`;
        } else {
            message = `Weather conditions for ${crop.name} are unknown.`;
        }
    } else {
        message = `Crop '${cropName}' not found in the list.`;
    }
    
    return message;
}

window.addEventListener('DOMContentLoaded', function() {
    const cropName = prompt("Enter the name of the crop:");
    const cropInfoElement = document.getElementById('cropinfo');
    const message = displayCropConditions(cropName);
    cropInfoElement.textContent = message;
});<link rel="stylesheet" href="{{url_for('static',filename='help.css')}}"></link>