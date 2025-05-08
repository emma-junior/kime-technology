import "./style.css";
import gsap from "gsap";

export default class Home {
  constructor() {
    this.homeIntro();
  }

  homeIntro() {
    let tl = gsap.timeline();
    function init() {
      tl.from("#app", { ease: "linear", autoAlpha: 0 })
        .fromTo(
          ".logo",
          {
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power2.out",
          }
        )
        .to(".logo", {
          ease: "linear",
          scale: 0.6,
          duration: 1,
          transform: "translate(45vw,2vh)",
        })
        .to(
          ".nav-links",
          {
            ease: "linear",
            duration: 1,
            y: 30,
          },
          "<"
        );
    }
    window.addEventListener("load", function (event) {
      init(); //do stuff
      console.log("Home Intro");
    });
  }
}

new Home();
