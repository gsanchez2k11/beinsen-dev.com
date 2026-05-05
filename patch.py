import re

with open('data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = """  const storyPool = [
    { headline: "Precisión y Control", title: "Acabados impecables", desc: "está diseñada para garantizar estampados precisos con una facilidad de uso inigualable", enDesc: "is designed to guarantee precise prints with unmatched ease of use" },
    { headline: "Potencia Industrial", title: "Máxima durabilidad", desc: "ha sido construida para soportar largas jornadas de trabajo sin comprometer la calidad", enDesc: "is built to withstand long workdays without compromising quality" },
    { headline: "Innovación Térmica", title: "Calor uniforme", desc: "asegura una distribución de temperatura perfecta para transferencias sin fallos", enDesc: "ensures perfect temperature distribution for flawless transfers" },
    { headline: "Versatilidad Sin Límites", title: "Adaptable a todo", desc: "es la herramienta definitiva para quienes buscan diversificar su oferta de productos", enDesc: "is the ultimate tool for those looking to diversify their product offerings" },
    { headline: "Eficiencia Comprobada", title: "Rendimiento superior", desc: "ha sido optimizada para reducir los tiempos de ciclo y maximizar tu producción diaria", enDesc: "has been optimized to reduce cycle times and maximize your daily production" },
    { headline: "Trabajo Inteligente", title: "Flujo continuo", desc: "te permite trabajar reduciendo el esfuerzo manual en cada ciclo de planchado", enDesc: "allows you to work by reducing manual effort in every pressing cycle" },
    { headline: "Diseño Ergonómico", title: "Comodidad total", desc: "está pensada para el bienestar del operador, haciendo que el proceso sea rápido y seguro", enDesc: "is designed for operator comfort, making the process fast and safe" },
    { headline: "Alto Rendimiento", title: "Resultados profesionales", desc: "te ofrece el control exacto necesario para trabajos que requieren la mayor exigencia", enDesc: "offers the exact control needed for highly demanding jobs" }
  ];
  const hash = plancha.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedStory = storyPool[hash % storyPool.length];

  const defaultStorySegments = [
    {
      title: { es: selectedStory.title, en: "Professional performance" },
      description: {
        es: `${esName} ${selectedStory.desc}.`,
        en: `${enName} ${selectedStory.enDesc}.`
      },
      image: plancha.image
    }
  ];"""

pattern = re.compile(r'  const defaultStorySegments = \[\s*\{\s*title: \{ es: "Rendimiento profesional", en: "Professional performance" \},\s*description: \{\s*es: `\$\{esName\} ha sido diseñada para ofrecer resultados consistentes y alta productividad\.`,\s*en: `\$\{enName\} is designed to deliver consistent results and high productivity\.`\s*},\s*image: plancha\.image\s*\}\s*\];', re.MULTILINE)

content = pattern.sub(replacement, content)

replacement_return = """  return {
    ...plancha,
    storyHeadline: plancha.storyHeadline || { es: selectedStory.headline, en: "Redefining the workflow" },
    gallery: uniqueStrings([plancha.image, ...(plancha.gallery || [])]),"""

pattern_return = re.compile(r'  return \{\s*\.\.\.plancha,\s*gallery: uniqueStrings\(\[plancha\.image, \.\.\.\(plancha\.gallery \|\| \[\]\)\}\]\),', re.MULTILINE)

content = content.replace('  return {\n    ...plancha,\n    gallery: uniqueStrings([plancha.image, ...(plancha.gallery || [])]),', replacement_return)

with open('data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched.")
