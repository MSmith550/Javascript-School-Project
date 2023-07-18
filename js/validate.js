function validation() {
    //variables used in the functions
    var error = 0;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var passwordLength = document.getElementById("password").length;
    var verifyPassword = document.getElementById("passwordVerify").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    let stringNumberReg = `^[a-zA-Z0-9-]*$`;
    let emailReg = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    let phoneReg = '^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$';

    //validating username. First checkes if username field is blank then checks if username is only numbers and letters.
    //if passes both checks, adds count to error variable    
    if (userName == "") {
        document.getElementById("userName").value = "***You must enter a username***";
        document.getElementById("userName").focus();
        error = 0;
    } else if (!userName.match(stringNumberReg)) {
        document.getElementById("userName").value = "***Your user name can only contain numbers and letters***";
        document.getElementById("userName").focus();
        error = 0;
    } else {
        error++;
    }

    //verifing password length *works - needs focus
    if (password.length > 7){
        error++;;
    }else{
        document.getElementById("passworderror").innerText = "Password: *** Password must be at least 8 characters in length ***";
        if(!document.hasFocus()){
            document.getElementById("password").focus();
        }
        error = 0;
    }

    //verifing passwords match *works - needs focus
    if (verifyPassword !== password || password == ""){
        document.getElementById("passwordVerifyerror").innerText = "Verify your Password: *** Passwords must match and be 8 characters long ***";
        if(!document.hasFocus()){
            document.getElementById("passwordVerify").focus();
        }
        error = 0;
    }else{
        error++;
    }

    //Validating the first name *all works
    if (firstName == "") {
        document.getElementById("firstName").value = "***You must enter a first name***";
        if(!document.hasFocus()){
            document.getElementById("firstName").focus();
        }
        error = 0;
    } else {
        error++;
    }

    //validating last name *all works
    if (lastName == "") {
        document.getElementById("lastName").value = "***You must enter a last name***";
        if(!document.hasFocus()){
            document.getElementById("lastName").focus();
        }
        error = 0;
    } else {
        error++;
    }

    //validating email *all works
    if (email == "") {
        document.getElementById("email").value = "***You must enter a email address***";
        if(!document.hasFocus()){
            document.getElementById("email").focus();
        }
        error = 0;
    }else if (!email.match(emailReg)) {
        document.getElementById("email").value = "***You must enter a valid email address, in xxx@xxx.xxx format***";
        if(!document.hasFocus()){
            document.getElementById("email").focus();
        }
        error = 0;
    }else {
        error++;
    }

    //validating phone number *all works
    if (phoneNumber == "") {
        document.getElementById("phoneNumber").value = "***You must enter a phone number in (xxx)xxxxxxx format***";
        if(!document.hasFocus()){
            document.getElementById("phoneNumber").focus();
        }
        error = 0;
    }else if (!phoneNumber.match(phoneReg)) {
        document.getElementById("phoneNumber").value = "***You must enter a phone number in (xxx)xxxxxxx format and numbers only***";
        if(!document.hasFocus()){
            document.getElementById("phoneNumber").focus();
        }
        error = 0;
    }else {
        error++;
    }

    //if error variable is equal to total amount of required passes, will move to next screen
    if (error == 7){
        //calling the setCookie function to create the cookies wiht the information
        setCookie(userName, password, firstName, lastName, email, phoneNumber);
        window.location.href = 'confirm.html';
    }
}

function setCookie(uName, pWord, fName, lName, eMail, pNumber){
    //Creating the cookies
    document.cookie = "userName=" + uName;
    document.cookie = "password=" + pWord;
    document.cookie = "firstName=" + fName;
    document.cookie = "lastName=" + lName;
    document.cookie = "email=" + eMail;
    document.cookie = "phoneNumber=" + pNumber;

}//function for getting the data from the cookie
function getCookie(name){
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

//function that is called on the confirm page load for diaplaying the information from the cookies on the screen
function displayCookies(){
    document.getElementById("infoNode").innerHTML = "UserName = " + getCookie("userName") + "<br>" +
        "Password = " + getCookie("password") + "<br>" +
        "First Name = " + getCookie("firstName") + "<br>" +
        "Last Name = " + getCookie("lastName") + "<br>" +
        "Email Address = " + getCookie("email") + "<br>" +
        "Phone Number = " + getCookie("phoneNumber");
}