document.addEventListener("DOMContentLoaded", function () {

    let iniciar = document.getElementById('ini')
    let registrarse = document.getElementById('regis')
    
    iniciar.addEventListener('click',inicio)
    registrarse.addEventListener('click',registro)

    function inicio() {
        
        let nick = document.getElementById('nick').value
        localStorage.clear('nicks')
        localStorage.setItem('nicks','nick')
        console.log(nick)
        //window.location.href = "../../html/inicio.html"
    }

    function registro(){
        window.location.href = "../../html/registro.html"
    }   
})