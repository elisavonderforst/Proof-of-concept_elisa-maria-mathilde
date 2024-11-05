gsap.registerPlugin(ScrollTrigger);

const img1 = document.querySelector(".scroll-1");
const img2 = document.querySelector(".scroll-2");
const img3 = document.querySelector(".scroll-3");
const img4 = document.querySelector(".scroll-4");
const img5 = document.querySelector(".scroll-5");
const img6 = document.querySelector(".scroll-6");
const img7 = document.querySelector(".scroll-7");

gsap.to(img1, {
  scrollTrigger: {
    trigger: img1,
    markers: true,
    start: "top 10%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img2, {
  scrollTrigger: {
    trigger: img2,
    markers: true,
    start: "top 20%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img3, {
  scrollTrigger: {
    trigger: img3,
    markers: true,
    start: "top 40%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img4, {
  scrollTrigger: {
    trigger: img4,
    markers: true,
    start: "top 50%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img5, {
  scrollTrigger: {
    trigger: img5,
    markers: true,
    start: "top 60%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img6, {
  scrollTrigger: {
    trigger: img6,
    markers: true,
    start: "top 70%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img7, {
  scrollTrigger: {
    trigger: img7,
    markers: true,
    start: "top 80%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

const animatedclick = document.querySelector(".bloc-click");

var tl = gsap.timeline();
tl.to("#papillon", { x: 100 });
tl.to("#papillon", { x: 200, y: -20 });
tl.to("#papillon", { x: 300, y: -80 });
tl.to("#papillon", { x: 400, y: -60 });
tl.to("#papillon", { x: 500, y: 0 });
tl.to(animatedclick, { opacity: 1 });
tl.to(animatedclick, { opacity: 0, delay: 3 });
tl.to("#papillon", { x: 800, y: -100, delay: 1 });
tl.to("#papillon", { x: 900, y: -200 });
