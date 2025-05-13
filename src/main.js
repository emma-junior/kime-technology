import "./style.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

export default class Home {
  constructor() {
    this.homeIntro();
    this.homeActions();
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
        )
        .to(
          ".text-reveal",
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "linear",
          },
          "+=1"
        )
        .to(
          ".image-y",
          {
            ease: "linear",
            duration: 1,
            y: 0,
          },
          "-=0.7"
        )
        .to(
          ".image-x",
          {
            ease: "linear",
            duration: 1,
            x: 0,
          },
          "<"
        )
        .to(
          ".hero-text",
          {
            ease: "linear",
            duration: 1,
            opacity: 1,
            x: 0,
          },
          "<"
        );
    }
    window.addEventListener("load", function (event) {
      init();
    });
  }

  homeActions() {
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".close");

    const tl = gsap
      .timeline({ paused: true })
      .to([".hero-text", ".image", ".text-reveal", ".nav-links", ".logo"], {
        opacity: 0,
        ease: "linear",
        duration: 0.5,
        stagger: 0.1,
      })
      .to(
        ".menu-opened",
        {
          autoAlpha: 1,
          ease: "linear",
        },
        "-=0.4"
      )
      .to(
        ".sidebar",
        {
          ease: "power1.in",
          duration: 0.7,
          x: 0,
        },
        "<"
      )
      .to(".logo", {
        ease: "linear",
        scale: 0.8,
        transform: "translate(68vw,45vh)",
      })
      .to([".close", ".contact-info", ".menu-links", ".logo"], {
        opacity: 1,
      });

    const closemenu = gsap
      .timeline({ paused: true })
      .to(".menu-opened", {
        autoAlpha: 0,
        ease: "linear",
      })
      .to(
        ".logo",
        {
          ease: "linear",
          scale: 0.6,
          transform: "translate(45vw,2vh)",
        },
        "<"
      )
      .to([".hero-text", ".image", ".text-reveal", ".nav-links"], {
        opacity: 1,
        ease: "linear",
      });

    close.addEventListener("click", () => closemenu.play());
    menu.addEventListener("click", () => tl.play());
  }
}

new Home();
