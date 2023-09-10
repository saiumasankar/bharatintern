const selecttemperature = document.querySelector('#temp');
selecttemperature.addEventListener('change',control);
const outputtemperature = document.querySelector('#e1');
var removed = "NULL";
function control()
{
    if(removed==="NULL"){
        removed = this.value;
        for(var i = 0; i < outputtemperature.length; i++)
        {
            if(outputtemperature.options[i].value==removed)
            {
                outputtemperature.remove(i);
                break;
            }
        }
    }
    else
    {
        const newOption = new Option(removed,removed);
        outputtemperature.add(newOption,undefined);
        removed = this.value;
        for(var i = 0; i < outputtemperature.length; i++)
        {
            if(outputtemperature.options[i].value == removed)
            {
                outputtemperature.remove(i);
                break;
            }
        }
    } 
}

let buttonclick = document.querySelector("button");
buttonclick.addEventListener("click",convert);
let value2 = 0;
function convert()
{
    let selected = outputtemperature.value;
    let value1 = Number(document.querySelector("input").value);
    console.log(typeof(value1));
    if(removed=="celsius")
    {
        if(selected=="Fahrenheit")
        {
           value2 = value1*9/5 + 32;
              
        }
        else
        {
            value2 = value1 + 273.15;
        }
        let message = document.querySelector("p");
        message.innerHTML = "The temperature in "+removed+" is "+value1+", its "+selected+" temperature is "+value2;
        value2 = 0;
    }
    else if(removed=="Fahrenheit")
    {
        if(selected=="celsius")
        {
             value2 = (value1 - 32)*5/9;
              
        }
        else
        {
             value2 = (value1 - 32)*5/9 + 273.15;
        }
        let message = document.querySelector("p");
        message.innerHTML = "The temperature in "+removed+" is "+value1+", its "+selected+" temperature is "+value2;
        value2 = 0;
    }
    else if(removed=="Kelvin")
    {
        if(selected=="celsius")
        {
             value2 = value1 - 273.15;
              
        }
        else
        {
             value2 = (value1 - 273.15) * 9/5 + 32;
        }
        let message = document.querySelector("p");
        message.innerHTML = "The temperature in "+removed+" is "+value1+", its "+selected+" temperature is "+value2;
        value2 = 0;
    }
    else
    {
        let message = document.querySelector("p");
        message.innerHTML = "Please select option";
        value2 = 0;
    }
    document.querySelector("p").classList.add("ee");
}



