const usuarios = [{
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

usuarios.forEach(function(value, index) {
    console.log(`${usuarios[index].nome} possui saldo ${calculaSaldo(usuarios[index].receitas, usuarios[index].despesas) > 0 ? "POSITIVO" : "NEGATIVO"} de ${calculaSaldo(usuarios[index].receitas, usuarios[index].despesas) }`)
})

function calculaSaldo(receitas, despesas) {
    return (somaNumeros(receitas) - somaNumeros(despesas)).toFixed(2)
}

function somaNumeros(numeros) {
    const soma = (total, valor) => total + valor;
    return numeros.reduce(soma)
}