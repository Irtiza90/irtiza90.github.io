gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".skills-container").forEach((container) => {
  gsap.fromTo(
    container.querySelectorAll(".skill"),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.02, // delay animation
      scrollTrigger: {
        trigger: container,
        start: "top 90%",  // When the top of the container hits from the viewport
        end: "bottom 30%", // When the bottom of the container hits from the viewport
        // scrub: true,
        // once: true
        // markers: true // debug
      },
    }
  );
});

function initProjectsSection() {
  function setEqualHeight(elements) {
    let maxHeight = 0;

    // reset heights to auto to recalculate max height
    elements.forEach(el => {
      el.style.height = 'auto !important';
      document.documentElement.style.setProperty('--projects-el-height', 'auto');
    });

    // get the el with largest height
    elements.forEach(el => {
      const elHeight = el.offsetHeight;
      if (elHeight > maxHeight) {
        maxHeight = elHeight;
      }
    });

    document.documentElement.style.setProperty('--projects-el-height', `${maxHeight}px`);

    // console.debug('--projects-el-height:', getComputedStyle(document.documentElement).getPropertyValue('--projects-el-height'));
  }

  // set heights on load and resize
  const projectEls = document.querySelectorAll('#projects .project');

  window.addEventListener('resize', () => setEqualHeight(projectEls));
  window.addEventListener('load',   () => setEqualHeight(projectEls));
}

initSkillsHoverEffect();
initProjectsSection();
initprojectsSectionScroll();
