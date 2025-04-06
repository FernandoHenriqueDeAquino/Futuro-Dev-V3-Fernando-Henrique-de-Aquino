// definir variaveis

let nome = "João da Silva" // nome do funcionário, para o console.log de saída das informações
let setor = "Operacional" // pode ser "Operacional" "Administrativo" ou "Gerência", vai influenciar no multiplicador do valor por hora e na contagem ou não de horas extras
let horasTrabalhadas = 250 // desse valor, o que passar de 220 será contabilizado pra as horas extras e vai entrar em outro cálculo e somado no final
let horasExtras = 0 //inicia com valor 0 porque o cálculo de horas trabalhadas vai modificar esse valor em *2 com o que exceder 220 horas em casos de setor Operacional ou Administrativo
let valorHoraBase = 10 // valor base por hora referente ao setor Operacional. Administrativo receve *1.1 e Gerência recebe *1.25
let horasSemHoraExtra = 0 // variável pra contabilizar as horas até 220 pro cálculo final
let salarioFinal = 0 // variável para receber o resultado final do cálculo

