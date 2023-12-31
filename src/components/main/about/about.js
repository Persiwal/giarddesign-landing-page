import selectors from "../../../constants/selectors/selectors";

const calculateScaleEffectForAboutImg = () => {
  //apply only on desktop huge screen
  if (window.innerWidth >= 1440) {
    const distanceToViewportBottom =
      selectors.parallaxContainer.getBoundingClientRect().bottom;

    const distanceToViewportTop =
      selectors.parallaxContainer.getBoundingClientRect().top;

    if (distanceToViewportBottom > 0 && distanceToViewportTop - 700 < 0) {
      // Calculate the amount scrolled
      const scrollY = window.scrollY;

      // Calculate the scale value for the parallax effect
      let scale = 1.35 + scrollY * -0.00015; // Adjust the multiplier for desired zoom effect

      selectors.parallaxImage.style.transform = `scale(${scale})`;
    }
  } else {
    selectors.parallaxImage.style.transform = `scale(1)`;
  }
};

export { calculateScaleEffectForAboutImg };
