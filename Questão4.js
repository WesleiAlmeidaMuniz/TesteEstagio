const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const outros = 19849.53

function calculaValorTotal(){
    let valorTotal = SP + RJ + MG + ES + outros

    return valorTotal
}

function calculaPorcentual(){
    let total = calculaValorTotal()
    let porcentualSP = (SP / total) * 100
    let porcentualRJ = (RJ / total) * 100
    let porcentualMG = (MG / total) * 100
    let porcentualES = (ES / total) * 100
    let porcentualOutros = (outros / total) * 100

    console.log(`O percentual de representação do estado de SP foi de ${porcentualSP.toFixed(2)}%`)

    console.log(`O percentual de representação do estado de RJ foi de ${porcentualRJ.toFixed(2)}%`)

    console.log(`O percentual de representação do estado de MG foi de ${porcentualMG.toFixed(2)}%`)

    console.log(`O percentual de representação do estado de ES foi de ${porcentualES.toFixed(2)}%`)

    console.log(`O percentual de representação de outros estados foi de ${porcentualOutros.toFixed(2)}%`)
}

calculaPorcentual()