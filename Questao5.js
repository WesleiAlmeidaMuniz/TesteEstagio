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
        A grama é amarga.
        A lupa pula.
        A mãe te ama.

*/