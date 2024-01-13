document.addEventListener("DOMContentLoaded", function () {

    let iniciar = document.getElementById('ini')
    let registrarse = document.getElementById('regis')
    let nick = document.getElementById('nick').value
    
    iniciar.addEventListener('click',inicio)
    registrarse.addEventListener('click',registro)

    function inicio() {
        localStorage.clear('nicks')
        localStorage.setItem('nicks','nick')
        window.location.href = "../../html/inicio.html"
    }

    function registro(){
        window.location.href = "../../html/registro.html"
    }   
})