let strength,password
let validation =[]
let passwordtag = document.querySelector("#passinp")
let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")
function valid(){
    password=passwordtag.value
    validation=[(password.length>5),
        (password.search(/[A,Z]/)>-1),
        (password.search(/[0,9]/)>-1),
        (password.search(/[!@#.?-]/)>-1)
    ]
    strength = validation.filter(function(x){return x==1}).length
    if(strength==1){
        red.style.visibility="visible"
    }
    if(strength==2){
        yellow.style.visibility="visible"
    }
    if(strength==3){
        green.style.visibility="visible"
    }
}