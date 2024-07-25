
let ourweb="http://127.0.0.1:5500/index.html"
const form=document.getElementById("contact-form")
var name1=document.getElementById('name').value
var email1=document.getElementById('email').value
var message1=document.getElementById('message').value
// var subject1=document.getElementById('subject').value
var body= ` name:${name1} email:${email1}   message:${message1}`



function fnsendMsg(){
    alert("Hi I am here")
// name1.v=""
// email1=""
// message1=""
// body=""





    // e.preventDefault()
    // Email.send({
    //     SecureToken:"f4793676-7fa7-4119-9173-f022a6219d35",
    //     To:"lightofhussain@gmail.com",
    //     From: email1.value,
    //     Subject:"Joining Form",
    //     Body:body
    // }).then (message=>alert(message))
}

// form.addEventListener('submit',sendMsg)  

