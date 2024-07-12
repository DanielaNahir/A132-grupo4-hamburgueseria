function elementoEnPantalla(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function rotacionBetos() {
    var betosElement = document.querySelector('.H-Betos');
    if (betosElement && elementoEnPantalla(betosElement)) {
        betosElement.classList.add('show');
    }
}

function rotacion1706() {
    var h1706Element = document.querySelector('.H-1706');
    if (h1706Element && elementoEnPantalla(h1706Element)) {
        h1706Element.classList.add('show');
    }
}

function verificarScroll() {
    rotacionBetos();
    rotacion1706();
}

window.addEventListener('scroll', verificarScroll);

verificarScroll();
