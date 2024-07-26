let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3

function iniciarJuego() {

    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display= 'none'

    let sectionReiniciar= document.getElementById('reiniciar')
    sectionReiniciar.style.display= 'none'

    let botonMonstruosJugador = document.getElementById('boton-monstruos')
    botonMonstruosJugador.addEventListener('click', seleccionarMonstruosJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar= document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego )
}

function seleccionarMonstruosJugador() {

    let sectionSeleccionarMonstruos= document.getElementById('seleccionar-monstruos')
    sectionSeleccionarMonstruos.style.display= 'none'

    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display= 'block'

    let inputDragon = document.getElementById('Dragon')
    let inputDinosaurio = document.getElementById('Dinosaurio')
    let inputCocodrilo = document.getElementById('Cocodrilo')
    let spanMonstruosJugador = document.getElementById('monstruos-jugador')
    
    if (inputDragon.checked) {
        spanMonstruosJugador.innerHTML = 'Dragon'
    } else if (inputDinosaurio.checked) {
        spanMonstruosJugador.innerHTML = 'Dinosaurio'
    } else if (inputCocodrilo.checked) {
        spanMonstruosJugador.innerHTML = 'Cocodrilo'
    } else {
        alert('Selecciona un monstruo')
    }

    seleccionarMonstruosEnemigo()
}

function seleccionarMonstruosEnemigo() {
    let monstruosAleatoria = aleatorio(1,3)
    let spanMonstruosEnemigo = document.getElementById('monstruos-enemigo')

    if (monstruosAleatoria == 1) {
        spanMonstruosEnemigo.innerHTML = 'Dragon'
    } else if (monstruosAleatoria == 2) {
        spanMonstruosEnemigo.innerHTML = 'Dinosaurios'
    } else {
        spanMonstruosEnemigo.innerHTML = 'Cocodrilo'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {

    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanVidasEnemigo= document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo== 0){ 
     crearMensajeFinal("¡FELICITACIONES HAZ GANADO EL JUEGO! ✨🎉")
    } else if (vidasJugador==0){ 
     crearMensajeFinal("LO SIENTO, PERDISTE 😔")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu monstruo atacó con ' + ataqueJugador + ', los monstruos del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled=true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled=true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled=true

    let sectionReiniciar= document.getElementById('reiniciar')
    sectionReiniciar.style.display= 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
