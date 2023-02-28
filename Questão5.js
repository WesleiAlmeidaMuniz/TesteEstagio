function reverseString(string){
    const arrayString = string.split('')
    let palavraInvertida = ''

    for (let i = string.length - 1; i >= 0; i--) {
        
        palavraInvertida += arrayString[i]
        
    }


    console.log(palavraInvertida.toLowerCase())
}


reverseString('A droga do dote é todo da gorda')

/* 
    Obrigado pelo teste, Foi muito desafiador e gratificante!! 

    Algumas frases palíndromas para brincar:
        A babá baba.
        A base do teto desaba.
        A cara rajada da jararaca.
        A cera causa sua careca.
        A dama admirou o rim da amada.
        A Daniela ama a lei? Nada!
        A diva ávida, dádiva à vida.
        A diva em Argel alegra-me a vida.
        A droga do dote é todo da gorda.
        A grama é amarga.
        A lupa pula.
        A mãe te ama.

*/