let strength,password
let validation =[]
let passwordtag = document.querySelector("#passinp")
let red = document.querySelector(".red")
let orange = document.querySelector(".orange")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")
function valid(){
    password=passwordtag.value
    validation=[
        (password.search(/[A-Z]/)>-1),
        (password.search(/[0-9]/)>-1),
        (password.search(/[!@#.?-]/)>-1)
    ]
    strength = validation.filter(function(x){return x==1}).length
    if(password.length>=8){
        red.style.visibility="visible"
        if(strength>=1){
            orange.style.visibility="visible"
        }else{
            orange.style.visibility="hidden"
        }
        if(strength>=2){
            yellow.style.visibility="visible"
        }else{
            yellow.style.visibility="hidden"
        }
        if(strength==3){
            green.style.visibility="visible"
        }else{
            green.style.visibility="hidden"
        }
    }else{
        red.style.visibility="hidden"
        orange.style.visibility="hidden"
        yellow.style.visibility="hidden"
        green.style.visibility="hidden"
    }
}