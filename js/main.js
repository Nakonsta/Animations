const images = [
  'https://images.pexels.com/photos/3299173/pexels-photo-3299173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3283124/pexels-photo-3283124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/3283127/pexels-photo-3283127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1724374/pexels-photo-1724374.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/4611689/pexels-photo-4611689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];
const texts = [['UNLOCKED'], ['OFFBEAT'], ['ASTERISKS'], ['LOVE IS LOVE']];

rgbKineticSlider = new rgbKineticSlider({
  slideImages: images,
  itemsTitles: texts,

  backgroundDisplacementSprite: images,
  cursorDisplacementSprite: images,
  cursorScaleIntensity: 0.6,
  cursorMomentum: 0.14,

  swipe: true,
  swipeDistance: window.innerWidth * 0.4,
  swipeScaleIntensity: 2,

  slideTransitionDuration: 0.8,
  transitionScaleIntensity: 30,
  transitionScaleAmplitude: 160,

  nav: true,
  navElement: '.main-nav',

  imagesRgbEffect: false,
  imagesRgbIntensity: 4,
  navImagesRgbIntensity: 120,

  textsDisplay: true,
  textTitleSize: 144,
  textsTiltEffect: true,
  googleFonts: ['Playfair Display:400'],
  textsRgbEffect: true,
  textsRgbIntensity: 1,
});
