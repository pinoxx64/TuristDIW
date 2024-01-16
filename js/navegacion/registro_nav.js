document.addEventListener("DOMContentLoaded", function () {

    let iniciar = document.getElementById('ini')
    let registrarse = document.getElementById('regis')
    
    iniciar.addEventListener('click',inicio)
    registrarse.addEventListener('click',registro)

    function registro() {
        
        let nick = document.getElementById('nick').value
        localStorage.clear('nicks')
        localStorage.setItem('nicks','nick')
        window.location.href = "../../html/inicio.html"
    }

    function inicio(){
        window.location.href = "../../index.html"
    }   
})