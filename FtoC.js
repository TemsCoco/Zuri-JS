function convertFahrToCelsius(temp){
    let result = ((5*temp) - 160) /9
    let paramtype = typeof temp;
    if(typeof temp === "number"){
    }else{
        console.log('${temp} is not a valid number but a/an ${paramtype}');
    }
    return result.toFixed(4)
}