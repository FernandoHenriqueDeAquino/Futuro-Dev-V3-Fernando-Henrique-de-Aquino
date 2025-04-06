// Definir variáveis
let nome = "João da Silva";
let setor = "Administrativo";
let horasTrabalhadas = 250;
let valorHoraBase = 10;

// Função para calcular o valor da hora por setor
function valorHoraPorSetor(setor) {
    if (setor === "Operacional") {
        return 10;
    } else if (setor === "Administrativo") {
        return 10 * 1.1;
    } else if (setor === "Gerência") {
        return 10 * 1.25;
    } else {
        console.log("Setor inválido");
        return 0;
    }
}

// Função para calcular horas extras e horas normais
function quantaHoraExtra(horasTrabalhadas, setor) {
    if (setor !== "Gerência" && horasTrabalhadas > 220) {
        return {
            horasExtras: horasTrabalhadas - 220,
            horasSemHoraExtra: 220
        };
    }
    return {
        horasExtras: 0,
        horasSemHoraExtra: horasTrabalhadas
    };
}

// Função para calcular o salário final
function salarioPorHora(horasTrabalhadas, valorSetorial, setor) {
    const { horasExtras, horasSemHoraExtra } = quantaHoraExtra(horasTrabalhadas, setor);
    
    if (setor === "Gerência") {
        return horasTrabalhadas * valorSetorial;
    }
    return (horasSemHoraExtra * valorSetorial) + (horasExtras * valorSetorial * 2);
}

// Cálculos e saída
const valorSetorial = valorHoraPorSetor(setor);
const salarioFinal = salarioPorHora(horasTrabalhadas, valorSetorial, setor);
console.log(`O funcionário ${nome} do setor ${setor} trabalhou ${horasTrabalhadas} horas e irá receber R$${salarioFinal.toFixed(2)}.`);