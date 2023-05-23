class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Métodos de estância
    aumentar() {
        this.volume += 2;
    }

    diminuir() {
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar!')
    }

}

const controle1 = new ControleRemoto('Samsung')
controle1.aumentar()
controle1.aumentar()
console.log(controle1)
ControleRemoto.trocaPilha()