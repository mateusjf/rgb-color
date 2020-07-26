function getControles() {
    return document.getElementsByTagName('input');
}

function Controle() {
    this.visor = document.getElementsByClassName('cor')[0];
    this.controles = getControles();
    this.rgb = document.getElementsByClassName('rgba')[0];

    this.getValores = function () {
        var valores = []
        for (var i = 0; i < this.controles.length; i++) {
            saida = this.controles[i].value;
            valores.push(saida.toString());
        }

        return valores
    }

    this.getRGB = function () {
        var valores = this.getValores();
        var cor = valores.join();
        cor = 'rgba(' + cor + ',1)';
        return cor;
    }

    this.alterar = function () {
        var rgb = this.getRGB();
        this.visor.style.background = rgb;
        this.rgb.textContent = rgb.toUpperCase();
    }
}

inicializar = () => {
    const listaControles = getControles();
    const c = new Controle();

    for (var i = 0; i < listaControles.length; i++) {
        listaControles[i].addEventListener('change', () => c.alterar(), false);
    }
}

inicializar();