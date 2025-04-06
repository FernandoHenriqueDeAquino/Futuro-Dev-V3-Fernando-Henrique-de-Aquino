// definir variaveis

let nome = "João da Silva" // nome do funcionário, para o console.log de saída das informações
let setor = "Operacional" // pode ser "Operacional" "Administrativo" ou "Gerência", vai influenciar no multiplicador do valor por hora e na contagem ou não de horas extras
let horasTrabalhadas = 250 // desse valor, o que passar de 220 será contabilizado pra as horas extras e vai entrar em outro cálculo e somado no final
let horasExtras = 0 //inicia com valor 0 porque o cálculo de horas trabalhadas vai modificar esse valor em *2 com o que exceder 220 horas em casos de setor Operacional ou Administrativo
let valorHoraBase = 10 // valor base por hora referente ao setor Operacional. Administrativo receve *1.1 e Gerência recebe *1.25
let horasSemHoraExtra = 0 // variável pra contabilizar as horas até 220 pro cálculo final
let salarioFinal = 0 // variável para receber o resultado final do cálculo

// cálculo simples de salário final sem considerar horas extras

//salarioFinal = horasTrabalhadas*valorHoraBase
//console.log ("O funcionário " + nome + " trabalhou " + horasTrabalhadas + " e irá receber um total de R$" + salarioFinal + " pelo seu esforço")
//comentado pra manter de referência, mas não será parte do cálculo final

// cálculo de horas extras simples

function quantaHoraExtra (horasTrabalhadas) {
    if (horasTrabalhadas >220) {
        horasExtras = horasTrabalhadas-220 //separa o valor de hora extra
        horasSemHoraExtra = 220 //separa o valor de hora normal
        salarioFinal = (horasSemHoraExtra*valorHoraBase) + (horasExtras*(valorHoraBase*2)) //calcula a soma dos valores de hora normal e extra
        }
    else {
        salarioFinal = horasTrabalhadas*valorHoraBase // calcula somente hora normal caso o total seja menor ou igual a 220 horas
    }
}
quantaHoraExtra(horasTrabalhadas) //chamar a função para calcular
console.log ("O funcionário " + nome + " trabalhou " + horasTrabalhadas + " e irá receber um total de R$" + salarioFinal + " pelo seu esforço") //resultado de texto no console com o número de horas trabalhadas e o salário final
