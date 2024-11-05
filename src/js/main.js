gsap.to("#item-c", {
  scrollTrigger: {
    trigger: "#item-c",
    start: "top 80%",
    end: "+=200",
    scrub: true,
    pin: true,
    markers: true,
  },
  y: -400,
  x: 200,
  duration: 2,
});
