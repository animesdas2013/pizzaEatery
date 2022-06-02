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
    let permissibleEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

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

    //condition to validate emailId
    if(emailId.value.trim()=="" || !emailId.value.match(permissibleEmail)){
        alert("Enter a valid email id");
        return false;
    }

    //using local storage to display data on delivered.html
    const user = {
        user_name : customerName.value,
        user_address : customerAddress.value,
        user_phnum : mobileNumber.value,
        user_emailId : emailId.value
    }
    window.localStorage.setItem('user', JSON.stringify(user));

    return true

    
}


// for the page after initial validation
function validityCheck(){
    //to get id of payment
    let selectOption = document.getElementById("id-payment").value;

    // to get type of pizza using name and for loop for iterating upto the number of radio options
    let typeOfPizza = document.form.Pizza;
    let valid = false;
    let valid_value = "";
    for(let i=0; i<typeOfPizza.length; i++){
        if(typeOfPizza[i].checked){
            valid_value = typeOfPizza[i].value
            valid=true;
            break;
        }
    }

    // to get size of pizza using name and for loop for iterating upto the number of radio options
    let sizeOfPizza = document.form.pizzaSize;
    let valid1 = false;
    let valid_value1 = "";
    for(let j=0; j<sizeOfPizza.length; j++){
        if(sizeOfPizza[j].checked){
            valid_value1 = sizeOfPizza[j].value
            valid1=true;
            break;
        }
    }

    // to get crust type of pizza using name and for loop for iterating upto the number of radio options
    let crustType = document.form.Crust;
    let valid2 = false;
    let valid_value2 = "";
    for(let k=0; k<crustType.length; k++){
        if(crustType[k].checked){
            valid_value2 = crustType[k].value
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
    if( !coupon_input=="" && (!coupon_input.startsWith(coupon_code) || !coupon_input.match(permissibleCodes) || coupon_input.length > 15))
    {   
        alert( "invalid coupon code, must start with PIZID and should have a max length of 15");
        return false;
    }

    // for validating checkbox
    if(!checkOption.checked){
        alert("You must agree to the terms first");
        return false;
    }
   
    // using local storage to display data on delivered.html
    const user1 = {
        user1_payment : selectOption,
        user1_typeOfPizza : valid_value,
        user1_sizeOfPizza : valid_value1,
        user1_crustType : valid_value2
    }
    window.localStorage.setItem('user1', JSON.stringify(user1));

    return true;
    
}

 
