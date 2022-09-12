const calculateTemp =() =>{
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_change');
    const valueTemp =temp_change.options[tempSelected.selectedIndex].value;
    const celToFah =(cel) =>{
        let fahrenheit=Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel=(fahr) =>{
        let celcius=Math.round((fahr - 32) * 5/9);
        return celcius;
    }
    let result;
    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML =result+"ºF";
    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML =result+"ºC";
    }

}