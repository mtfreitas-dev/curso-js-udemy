function* gerador1(){
    yield 'Valor 1';
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = gerador1()
 

function* geradora2(){
    let i = 0;

    while (true){
     yield i;
     i++;
    }
}

const g2 = geradora2()


function* geradora3(){
    yield 1
    yield 2
    yield 3
}

function* geradora4(){
    yield* geradora3();
    yield 4 
    yield 5 
    yield 6
}

const g4 = geradora4();

function* geradora5(){
    yield function(){
        console.log('Vim do Y1')
    };

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value
const fun2 = g5.next().value

func1()
fun2()
