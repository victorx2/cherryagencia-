import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

gsap.defaults({
  duration: 0.55,
  ease: "power3.out",
});

export { Draggable, gsap, ScrollTrigger, useGSAP };
