
const exp_academica = [
    {
        titulo: "ESO",
        periodo: "X-2022",
        centro: "IES de Sabon"
    },
    {
        titulo: "GM Sistemas Microinformáticos y Redes",
        periodo: "2023-2025",
        centro: "Aula Nosa"
    }
];

const exp_profesional = [
    {
        titulo: "2 años de jardinero",
        periodo: "2022-2024",
        centro: "X"
    }
];

function mostrarExperiencias(experiencias, idSeccion) {
    const seccion = document.getElementById(idSeccion);

    experiencias.forEach(function(experiencia) {
        const articulo = document.createElement("article");

        const titulo = document.createElement("h3");
        titulo.textContent = experiencia.titulo;

        const periodo = document.createElement("p");
        periodo.textContent = "Periodo: " + experiencia.periodo;

        const centro = document.createElement("p");
        centro.textContent = "Centro: " + experiencia.centro;

        articulo.appendChild(titulo);
        articulo.appendChild(periodo);
        articulo.appendChild(centro);

        seccion.appendChild(articulo);
    });
}

mostrarExperiencias(exp_academica, "academica");
mostrarExperiencias(exp_profesional, "profesional");
