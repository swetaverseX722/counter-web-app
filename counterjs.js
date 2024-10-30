const countvalue = document.querySelector('#counter');
const increment=()=>{
    // get the value from UI
    let value=parseInt(countvalue.innerText);  // parseInt convert string to integer because it comes in string data type 

    //update the value
    value=value+1;
    //set the value onto UI
    countvalue.innerHTML=value;

};
const decrement=()=>{
    // get the value from UI
    let value=parseInt(countvalue.innerText);  // parseInt convert string to integer because it comes in string data type 

    //update the value
    value=value-1;
    //set the value onto UI
    countvalue.innerHTML=value;

};

