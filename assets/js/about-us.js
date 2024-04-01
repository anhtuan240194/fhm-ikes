  //Create gallery produce images
  document.addEventListener('DOMContentLoaded', () => {
    const lightGalleryProject = lightGallery(document.querySelector('.activities .list-activity'), {
      animateThumb: true,
      allowMediaOverlap: true,
      toggleThumb: true,
      download: false,
      speed: 500,
      slideShowAutoplay: true,
      plugins: [lgThumbnail, lgFullscreen],
      fullScreen: true,
      showZoomInOutIcons: false,
      actualSize: true,
  });
})