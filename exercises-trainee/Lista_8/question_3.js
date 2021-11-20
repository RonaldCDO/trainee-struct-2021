// Question 3
function temperatureConversion(){
    temperature_string = prompt("Choose the input temperature string: celcius, fahrenheit or kelvin\n")
    temperature_value = prompt("Enter your actual temperature value:\n")

    switch (temperature_string){
        case "celcius":
            const c_to_f = () => (temperature_value*9/5 + 32).toFixed(3)
            const c_to_k = () => (temperature_value*1 + 273.15).toFixed(3) 
            alert(`You choose celcius, the conversion for the value ${temperature_value}°C\n` +
                        `is ${c_to_f()}°F and ${c_to_k()}K`)
            break;
        
        case "fahrenheit":
            const f_to_c = () => ((temperature_value-32)*5/9).toFixed(3) 
            const f_to_k = () => ((temperature_value-32)*5/9 + 273.15).toFixed(3) 
            alert(`You choose fahrenheit, the conversion for the value ${temperature_value}°F\n` +
                        `is ${f_to_c()}°C and ${f_to_k()}K`)
            break;
        
        case "kelvin":
            const k_to_c = () => (temperature_value- 273.15).toFixed(3) 
            const k_to_f = () => ((temperature_value - 273.15) * 9/5 + 32).toFixed(3) 
            alert(`You choose kelvin, the conversion for the value ${temperature_value}K\n` +
                        `is ${k_to_c()}°C and ${k_to_f()}°F`)
            break;
        default:
            alert(`You entered ${temperature_string}, this is an invalid String, this temperature scale does not exist!`)
    }
}

// temperatureConversion()