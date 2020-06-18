const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

usuarios.forEach(function(valor, indice) {
    if (checaSeUsuarioUsaCSS(usuarios[indice])) {
        console.log(`${usuarios[indice].nome} trabalha com CSS`);
    }
})

function checaSeUsuarioUsaCSS(usuario) {

    let temCss = false
    usuario.tecnologias.forEach(element => {
        if (element == "CSS")
            temCss = true
    });

    return temCss;
}