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
          y: "1vh",
        })
        .to(
          ".nav-links",
          {
            ease: "linear",
            duration: 1,
            y: "2vh",
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
    const customBtn = document.querySelectorAll(".request-btn");

    let transformLogo;

    const width = window.innerWidth;

    if (width < 768) {
      transformLogo = "translate(37vw, 1vh)";
    } else if (width < 1024) {
      transformLogo = "translate(40vw, 1vh)";
    } else {
      transformLogo = "translate(43vw, 1vh)";
    }

    const openMenu = gsap
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
        transform: "translate(69vw,45vh)",
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
          ease: "power1.out",
          scale: 0.6,
          transform: transformLogo,
        },
        "<"
      )
      .to([".hero-text", ".image", ".text-reveal", ".nav-links"], {
        opacity: 1,
        ease: "linear",
      });

    customBtn.forEach(function (item, index) {
      const tl = gsap
        .timeline({ paused: true })
        .to(item.querySelector(".request-one"), {
          y: "-110%",
          duration: 0.2,
          color: "#fff",
        })
        .to(
          item.querySelector(".request-two"),
          {
            y: "0%",
            duration: 0.2,
            color: "#fff",
          },
          "<"
        )
        .to(
          ".request-btn",
          {
            background: "#112A50",
            borderColor: "#112A50",
            duration: 0.2,
          },
          "<"
        );
      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });

    close.addEventListener("click", () => closemenu.restart());
    menu.addEventListener("click", () => openMenu.restart());
  }
}

new Home();
