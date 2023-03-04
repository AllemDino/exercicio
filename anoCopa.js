//Ano copa: quero saber os anos das copas
// O ano da primeira copa foi 1930
// O ano da próxima copa vai ser em 2016

let anoCopa = 1930;
// Esta variavel inicializa com o numero 1930, e toda vez que laço de repetição rodar  ela vai reber outro valor
let ultimaCopaAno = 2026;
// variavel limite que defini apra o programa rodar

while(anoCopa <= ultimaCopaAno) {
    console.log (`teve copa em: ${anoCopa}`)

    anoCopa = anoCopa + 4
}
// anoCopa = anoCopa + 4 é o incremento que fica diferente do for dentro das () e sim ficam entre {} depois do console pq a ordem de execução é importante para consideral a viralvel de inicio e de limite
// a primeira vez q o programa rodar, a minha variavel anoCopa vai ser 1930.
// a segunda vez que o programa rodar, a minha variavel anoCopa vai ser  + = 1934
// o programa irá rodar até chegar 2026.
