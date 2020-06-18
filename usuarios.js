const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

usuarios.forEach(function(valor, indice) {
    let tecnologias = ''
    usuarios[indice].tecnologias
        .forEach(function(valor2, indice2) {
            tecnologias += usuarios[indice].tecnologias[indice2] + ', '
        })
    tecnologias = tecnologias.substring(0, tecnologias.length - 2)
    console.log(`${usuarios[indice].nome} trabalha com ${tecnologias}`);
});