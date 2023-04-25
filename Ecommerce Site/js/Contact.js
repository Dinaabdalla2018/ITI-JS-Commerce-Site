var Name = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var message = document.getElementById("message")

document.getElementById("contactForm").addEventListener('submit',function(e){
    e.preventDefault();
    
    if (Name.value.length<=0){
        alert("please enter name!");
        
    }
        
    if(email.value.length<=0){
        alert("please enter email!");
        
    }
    if(phone.value.length<=0){
        alert("please enter phone!");
        
    }
    if(message.value.length<=0){
        alert("please enter your message!");
        
    }
    else{
    document.getElementById('result').innerHTML="Thanks for you";       }     
             
})