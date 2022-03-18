var count = 0
function counter(){
    count +=1
    document.getElementById("count").innerHTML=count
}

function home(){
    document.getElementById("home").classList.remove("hidden")
    document.getElementById("about").classList.add("hidden")
    document.getElementById("view").classList.add("hidden")
}
function about(){
    document.getElementById("home").classList.add("hidden")
    document.getElementById("about").classList.remove("hidden")
    document.getElementById("view").classList.add("hidden")
}
function view(){
    document.getElementById("home").classList.add("hidden")
    document.getElementById("about").classList.add("hidden")
    document.getElementById("view").classList.remove("hidden")
}

function login(){
    if(document.getElementById("username").value != "coolStudent123")
        document.getElementById("invalid").innerHTML = "Your username is incorrect."
    else if(document.getElementById("password").value === "")
        document.getElementById("invalid").innerHTML = "You must enter a password."
    else{
        document.getElementById("home").classList.remove("hidden")
        document.getElementById("login").classList.add("hidden")
        document.getElementById("navbar").classList.remove("hidden")

    }
}

function submit(){
    if(document.getElementById("text").value.length <= 1)
    document.getElementById("incorrect").innerHTML = "Your note must be longer than one character."
    else if(isNaN(document.getElementById("importance").value))
        document.getElementById("incorrect").innerHTML = "You must enter a number."
    else{
        document.getElementById("notes").innerHTML +=(`<p>${document.getElementById("importance").value} ${document.getElementById("text").value}</p>`)
        document.getElementById("incorrect").innerHTML=""
    }
}