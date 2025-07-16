function cambiarVideo(ruta) {
  const video = document.getElementById('video-reproductor');
  const source = video.querySelector('source');
  const linkDescarga = document.getElementById('descargar-link');

  source.src = ruta;
  video.load();
  linkDescarga.href = ruta;
}