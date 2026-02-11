import { gsap } from "gsap";
import { _numWithUnitExp } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square1", {
  x: 700,
  duration: 8,
  scrollTrigger: {
    trigger: ".square1",
    start: 400, // Animation starts when crosses 400px of div2 height
    // start: "top center", // Animation starts when top edge of screen viewport reaches center of <div2> section
    // start: "top 30%", // Start trigger located at top of square1, starting mark is placed at 30% offset from top of screen viewport
    // end: "center 20%", // End trigger located at center of square1, ending mark is placed at 20% offset from top of screen viewport
    // end: () => '+=${document.querySelector(".square1").offsetHeight}',
    markers: true,
    // markers: {
    //   startColor: "white",
    //   endColor: "red",
    //   fontSize: "20px",
    //   indent: 100,
    // },
    // toggleClass: "black",
  }
});