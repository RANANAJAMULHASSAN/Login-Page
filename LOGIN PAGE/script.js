let login = document.querySelector("#login")
login.addEventListener("click", function () {
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    if (username==="" && password==="") {
        alert("please fill all the fieled")
    } else {
        
        window.open("https://my-portfolio-najam-ul-hassan.netlify.app/", "_blank")
    }

})