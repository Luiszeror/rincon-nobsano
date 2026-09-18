'use client'

/*
  Al abrir/cerrar un acordeón, el contenido de arriba o abajo puede
  cambiar de tamaño y "empujar" la pantalla, haciendo que el usuario
  pierda el punto exacto donde estaba. Esta función mantiene fijo
  en pantalla el elemento que se acaba de tocar (ref) durante toda
  la animación, compensando el scroll cuadro a cuadro.
*/
export function toggleConScrollFijo(ref, toggleFn) {
  const antes = ref.current?.getBoundingClientRect().top
  toggleFn()
  if (antes == null) returnS

  const inicio = performance.now()
  const duracion = 320 // un poco más que la transición CSS (0.25-0.3s)

  function paso(ahora) {
    const el = ref.current
    if (el) {
      const despues = el.getBoundingClientRect().top
      const delta = despues - antes
      if (Math.abs(delta) > 0.5) {
        window.scrollBy(0, delta)
      }
    }
    if (ahora - inicio < duracion) {
      requestAnimationFrame(paso)
    }
  }
  requestAnimationFrame(paso)
}