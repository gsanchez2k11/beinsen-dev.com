const fs = require('fs');
let content = fs.readFileSync('data/products.ts', 'utf8');

const stories = [
    { headline: "Precisión y Control", title: "Acabados impecables", desc: "está diseñada para garantizar estampados precisos con una facilidad de uso inigualable" },
    { headline: "Potencia Industrial", title: "Máxima durabilidad", desc: "ha sido construida para soportar largas jornadas de trabajo sin comprometer la calidad" },
    { headline: "Innovación Térmica", title: "Calor uniforme", desc: "asegura una distribución de temperatura perfecta para transferencias sin fallos" },
    { headline: "Versatilidad Sin Límites", title: "Adaptable a todo", desc: "es la herramienta definitiva para quienes buscan diversificar su oferta de productos" },
    { headline: "Eficiencia Comprobada", title: "Rendimiento superior", desc: "ha sido optimizada para reducir los tiempos de ciclo y maximizar tu producción diaria" },
    { headline: "Trabajo Inteligente", title: "Flujo continuo", desc: "te permite trabajar reduciendo el esfuerzo manual en cada ciclo de planchado" },
    { headline: "Diseño Ergonómico", title: "Comodidad total", desc: "está pensada para el bienestar del operador, haciendo que el proceso sea rápido y seguro" },
    { headline: "Alto Rendimiento", title: "Resultados profesionales", desc: "te ofrece el control exacto necesario para trabajos que requieren la mayor exigencia" }
];

let index = 0;

content = content.replace(/"storySegments": \[\s*\{\s*"title": \{ "es": "Rendimiento profesional", "en": "Professional performance" \},\s*"description": \{\s*"es": "([^"]+) ha sido diseñada para ofrecer resultados consistentes y alta productividad\.",/g, (match, nameMatch) => {
    const s = stories[index % stories.length];
    index++;
    return `"storyHeadline": { "es": "${s.headline}", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "${s.title}", "en": "Professional performance" },
        "description": {
          "es": "${nameMatch} ${s.desc}.",`;
});

console.log("Replaced instances:", index);
fs.writeFileSync('data/products.ts', content);
