function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result = document.getElementById("result");

    if (inputUnit === outputUnit) {
        result.innerHTML = "Please select different units.";
        return;
    }

    var convertedTemp;

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemp = inputTemp * 9 / 5 + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemp = parseFloat(inputTemp) + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemp = (inputTemp - 32) * 5 / 9;
        } else if (outputUnit === "kelvin") {
            convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemp = inputTemp - 273.15;
        } else if (outputUnit === "fahrenheit") {
            convertedTemp = (inputTemp - 273.15) * 9 / 5 + 32;
        }
    }

    result.innerHTML = inputTemp + " " + inputUnit + " is equal to " + convertedTemp.toFixed(2) + " " + outputUnit;
}