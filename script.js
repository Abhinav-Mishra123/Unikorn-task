function validateForm() {
    var email = document.forms['myForm']['Email'];
    var name = document.forms['myForm']['Name'];
    var phone = document.forms['myForm']['Phone'];
    var address = document.forms['myForm']['Address'];
    
    if(email.value=="") {
        window.alert("Please enter your email address")
        email.focus();
        return false;
    }
    if(name.value==""){
        window.alert("Please enter your name")
        name.focus();
        return false
    }
    if(phone.value=="") {
        window.alert("Please enter your Phone no.")
        phone.focus();
        return false
    }
    if(address.value=="") {
        window.alert("Please enter your Address")
        address.focus();
        return false
    }
    return true;
    
    
    
        }
    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");
    
    var Next1 = document.getElementById('Next1');
    var Next2 = document.getElementById('Next2');
    var Back1 = document.getElementById('Back1');
    var Back2 = document.getElementById('Back2');
    
    var progress = document.getElementById("progress");
    
    
    Next1.onclick = function() {
        Form1.style.left = "-450px";
        Form2.style.left = "40px"
        progress.style.width = "240px"
    }
    
    Back1.onclick = function() {
        Form1.style.left = "40px";
        Form2.style.left = "450px"
        progress.style.width = "120px"
    
    }
    
    Next2.onclick = function() {
        Form2.style.left = "-450px";
        Form3.style.left = "40px"
        progress.style.width = "360px"
    
    }
    
    Back2.onclick = function() {
        Form2.style.left = "40px";
        Form3.style.left = "450px"
        progress.style.width = "240px"
    
    }
    