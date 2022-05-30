//constant value for starting of coupon code
const coupon_code = 'PIZID';

// function for validation of the entire form
function formValidate(){

    // for getting the id from Name input and regex
    let customerName = document.getElementById("id-name");
    let permissibleCharsInName = /^[A-Za-z ]+$/;

    // for getting the id from Address input and regex
    let customerAddress = document.getElementById("id-address");
    let permissibleChars = /^[A-Za-z0-9 ,./_-]+$/;


    // for getting id from phoneNumber and regex
    let mobileNumber = document.getElementById("id-phone");
    let permissibleDigits = /^[0-9]+$/;


    let emailId = document.getElementById("id-email");
    let permissibleEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    //condition to validate name
    if(customerName.value.trim()=="" || !customerName.value.match(permissibleCharsInName)){
        alert("Enter a valid name");
        return false;
    }

    //condition to validate address
    if(customerAddress.value.trim()=="" || !customerAddress.value.match(permissibleChars)){
        alert("Enter a valid address");
        return false;
    }


    //condition to validate mobile number
    if(mobileNumber.value.trim()=="" || (!mobileNumber.value.match(permissibleDigits) || mobileNumber.value.length!=10)){
        alert("10 Digits Only");
        return false;
    }

    if(emailId.value.trim()=="" || !emailId.value.match(permissibleEmail)){
        alert("Enter a valid email id");
        return false;
    }

    return true;

    
}


// for the page after initial validation
function validityCheck(){

    //to get id of payment
    let selectOption = document.getElementById("id-payment");

    // to get type of pizza using name and for loop for iterating upto the number of radio options
    let typeOfPizza = document.form.Pizza;
    let valid = false;
    for(let i=0; i<typeOfPizza.length; i++){
        if(typeOfPizza[i].checked){
            valid=true;
            break;
        }
    }

    // to get size of pizza using name and for loop for iterating upto the number of radio options
    let sizeOfPizza = document.form.pizzaSize;
    let valid1 = false;
    for(let j=0; j<sizeOfPizza.length; j++){
        if(sizeOfPizza[j].checked){
            valid1=true;
            break;
        }
    }

    // to get crust type of pizza using name and for loop for iterating upto the number of radio options
    let crustType = document.form.Crust;
    let valid2 = false;
    for(let k=0; k<crustType.length; k++){
        if(crustType[k].checked){
            valid2=true;
            break;
        }
    }

    //to get id of coupons
    let coupons = document.getElementById("id-coupons");
    let permissibleCodes = /^[A-Za-z0-9-]+$/;

    //to get id of checkbox
    let checkOption = document.getElementById("check");
    


    // for validating drop down payment options
    if(selectOption.value==""){
        alert("You must select a payment method");
        return false;
    }

    // for validating type of pizza using radio
    if(!valid){
        alert("You must select the type");
        return false;
    }

    // for validating size of pizza using radio
    if(!valid1){
        alert("You must select a particular size");
        return false;
    }

    // for validating crust type of pizza using radio
    if(!valid2){
        alert("You must select the kind of crust");
        return false;
    }

    // for validating the coupon code
    let coupon_input = coupons.value.trim()
    if( !coupon_input.startsWith( coupon_code ) || !coupon_input.match(permissibleCodes) || coupon_input.length > 15 )
    {
        alert( "invalid coupon code, must start with PIZID and should have a max length of 15");
        return false;
    }

    // for validating checkbox
    if(!checkOption.checked){
        alert("You must agree to the terms first");
        return false;
    }
    
    return true;
    
}

 