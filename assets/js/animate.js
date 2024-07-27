gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".skills-container").forEach((container) => {
  gsap.fromTo(
    container.querySelectorAll(".skill"),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.04, // delay animation
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
