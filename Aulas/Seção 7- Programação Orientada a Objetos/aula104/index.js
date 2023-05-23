class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log('O dispositivo já está ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log('O dispositivo está deligado');
            return
        }

        this.ligado = false
    }

}

class Smartphones extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphones('Iphone')
console.log(s1)