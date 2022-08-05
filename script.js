let strength
let validation =[]
let password = document.querySelector("#passinp")
validation=[(password.length>5),
    (password.search(/[A,Z]/)>-1),
    (password.search(/[0,9]/)>-1),
    (password.search(/[!@#$%^&*_?-;:.,]/)>-1)
]