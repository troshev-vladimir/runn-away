"use strict";

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const body = document.querySelector("body");
  const person = document.querySelector(".person");
  const personWithPc = document.querySelector(".person-with-pc");
  const personInBoat = document.querySelector(".person-in-boat");
  const personInPlane = document.querySelector(".person-in-plane");

  const firstSection = document.querySelector(".first");
  const secondSection = document.querySelector(".second");
  const thirdSection = document.querySelector(".third");
  const forthSection = document.querySelector(".forth");
  const fifthSection = document.querySelector(".fifth");
  const sixthSection = document.querySelector(".sixth");
  const seventhSection = document.querySelector(".seventh");
  const eighthSection = document.querySelector(".eighth");
  const nineSection = document.querySelector(".nine");
  const tenSection = document.querySelector(".ten");
  const elevenSection = document.querySelector(".eleven");

  const pc = document.querySelector(".pc");
  const photoTop = document.querySelector(".photo-from-top");
  const vacancy = document.querySelector(".vacancy");
  const parachute = document.querySelector(".parachute");
  const handWithCoin = nineSection.querySelector(".hand");
  const handWithoutCoin = tenSection.querySelector(".hand");
  const personStands = nineSection.querySelector(".person");
  const personStandsWithCoin = tenSection.querySelector(".person");

  // const eightPerson = eighthSection.querySelector(".person");
  function hideAll() {
    person.classList.add("hidden");
    personWithPc.classList.add("hidden");
    personInBoat.classList.add("hidden");
    personInPlane.classList.add("hidden");
    personWithPc.classList.add("hidden");

    firstSection.classList.remove("visible");
    secondSection.classList.remove("visible");
    thirdSection.classList.remove("visible");
    forthSection.classList.remove("visible");
    fifthSection.classList.remove("visible");
    sixthSection.classList.remove("visible");
    seventhSection.classList.remove("visible");
    eighthSection.classList.remove("visible");
    nineSection.classList.remove("visible");
    tenSection.classList.remove("visible");
    elevenSection.classList.remove("visible");
  }

  function makeObserver(section, personItem, options) {
    const observer = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting) {
        hideAll();
        personItem.classList.remove("hidden");
        section.classList.add("visible");
      }
    }, options);

    observer.observe(section);
  }

  // makeObserver(firstSection, person, {
  // 	root: null,
  // 	threshold: 0,
  // 	rootMargin: "0px",
  // });

  // makeObserver(secondSection, personWithPc, {
  // 	root: null,
  // 	threshold: 0,
  // 	rootMargin: "0px 0px -650px 0px",
  // });

  makeObserver(thirdSection, person, {
    root: null,
    rootMargin: "-100px 0px -450px 0px",
    threshold: 0,
  });

  makeObserver(forthSection, personInBoat, {
    root: null,
    threshold: 0,
    rootMargin: "-100px 0px -450px 0px",
  });

  makeObserver(fifthSection, personInPlane, {
    root: null,
    threshold: 0,
    rootMargin: "-100px 0px -450px 0px",
  });

  makeObserver(sixthSection, person, {
    root: null,
    threshold: 0,
    rootMargin: "-100px 0px -450px 0px",
  });

  makeObserver(seventhSection, person, {
    root: null,
    threshold: 0,
    rootMargin: "-100px 0px -450px 0px",
  });

  const buttonLink = document.querySelector("#button-link");
  const vk = document.querySelector("#vk");
  const telegram = document.querySelector("#telegram ");
  buttonLink.addEventListener("click", () => {
    window.location.href = "https://mmcflash.ru/news/nissan-euro0";
  });

  vk.addEventListener("click", () => {
    window.location.href = "https://mmcflash.ru/news/nissan-euro0";
  });

  telegram.addEventListener("click", () => {
    window.location.href = "https://mmcflash.ru/news/nissan-euro0";
  });

  const firstSectionPosition = firstSection.offsetTop;
  const secondSectionPosition = secondSection.offsetTop;
  const thirdSectionPosition = thirdSection.offsetTop;
  const forthSectionPosition = forthSection.offsetTop;
  const fifthSectionPosition = fifthSection.offsetTop;
  const eighthSectionPosition = eighthSection.offsetTop;
  const nineSectionPosition = nineSection.offsetTop;
  const tenSectionPosition = tenSection.offsetTop;
  const elevenSectionPosition = elevenSection.offsetTop;
  const firstSectionHeight = firstSection.getBoundingClientRect().height;
  const secondSectionHeight = secondSection.getBoundingClientRect().height;
  const thirdSectionHeight = thirdSection.getBoundingClientRect().height;
  const forthSectionHeight = forthSection.getBoundingClientRect().height;
  const fifthSectionHeight = fifthSection.getBoundingClientRect().height;
  const eighthSectionHeight = eighthSection.getBoundingClientRect().height;
  const nineSectionHeight = nineSection.getBoundingClientRect().height;
  const tenSectionHeight = tenSection.getBoundingClientRect().height;
  const elevenSectionHeight = elevenSection.getBoundingClientRect().height;

  const elevenViewAreaEl = elevenSection.querySelector(".view");
  const viewWidth = window.innerWidth > 600 ? 360 : 200;
  window.addEventListener("scroll", function () {
    // ================ Шагание
    const step1 = person.querySelector(".person-step1");
    const step2 = person.querySelector(".person-step2");

    if (window.scrollY % 20) {
      step1.classList.add("hidden");
      step2.classList.remove("hidden");
    } else {
      step2.classList.add("hidden");
      step1.classList.remove("hidden");
    }
    // ================ Шагание

    // ================ вверх на 1
    const firstSectionScroll = window.scrollY;
    const firstSectionPersentageOfScroll = persentageOfScroll(
      firstSectionScroll,
      firstSectionHeight
    );
    if (
      0 <= firstSectionPersentageOfScroll
      // &&
      // firstSectionPersentageOfScroll < 1
    ) {
      person.style.top = 70 - 40 * firstSectionPersentageOfScroll + "vh";
    }
    // ================ вверх на 1

    // ================ за комп
    const secondSectionScroll = window.scrollY - secondSectionPosition;
    const secondSectionPersentageOfScroll = persentageOfScroll(
      secondSectionScroll,
      secondSectionHeight
    );
    if (
      0 < secondSectionPersentageOfScroll &&
      secondSectionPersentageOfScroll < 1
    ) {
      vacancy.classList.add("visible");
      vacancy.style.transform = `translate(${
        secondSectionPersentageOfScroll * 100 - 70
      }%)`;

      personWithPc.classList.remove("hidden");
      person.classList.add("hidden");
      pc.classList.add("hidden");
    } else if (0 >= secondSectionPersentageOfScroll) {
      vacancy.classList.remove("visible");
      personWithPc.classList.add("hidden");
      person.classList.remove("hidden");
      pc.classList.remove("hidden");
    } else if (1 <= secondSectionPersentageOfScroll) {
      vacancy.classList.remove("visible");
      personWithPc.classList.add("hidden");
      pc.classList.add("hidden");
    }
    // ================ за комп

    // ================ из-за компа
    const thirdSectionScroll = window.scrollY - thirdSectionPosition;
    const thirdSectionPersentageOfScroll = persentageOfScroll(
      thirdSectionScroll,
      thirdSectionHeight
    );
    if (
      0 < thirdSectionPersentageOfScroll &&
      thirdSectionPersentageOfScroll < 1
    ) {
      personWithPc.classList.add("hidden");
      person.classList.remove("hidden");
      pc.classList.remove("hidden");
    }
    // ================ из-за компа

    // ================ фото на 4
    const forthSectionScroll = window.scrollY + vh - forthSectionPosition;
    const forthSectionPersentageOfScroll = persentageOfScroll(
      forthSectionScroll,
      forthSectionHeight
    );

    if (
      0 < forthSectionPersentageOfScroll &&
      forthSectionPersentageOfScroll < 1
    ) {
      photoTop.style.top = 30 - 100 * forthSectionPersentageOfScroll + "vh";
    }
    // ================ пашашют на 4

    // ================ пашашют на 5
    const fifthSectionScroll = window.scrollY + vh - fifthSectionPosition;
    const fifthSectionPersentageOfScroll = persentageOfScroll(
      fifthSectionScroll,
      fifthSectionHeight
    );

    if (
      0 < fifthSectionPersentageOfScroll &&
      fifthSectionPersentageOfScroll < 1
    ) {
      parachute.style.top = 80 * fifthSectionPersentageOfScroll + "vh";
    }
    // ================ пашашют на 5

    // ================ вниз на 8
    const eighthSectionScroll = window.scrollY + vh - eighthSectionPosition;
    const eighthSectionPersentageOfScroll = persentageOfScroll(
      eighthSectionScroll,
      eighthSectionHeight
    );

    if (
      0 < eighthSectionPersentageOfScroll &&
      eighthSectionPersentageOfScroll < 1
    ) {
      person.style.visibility = "visible";
      person.style.top = 30 + 30 * eighthSectionPersentageOfScroll + "vh";
      personStands.style.visibility = "hidden";
    } else if (eighthSectionPersentageOfScroll >= 1) {
      person.style.visibility = "hidden";
    }
    // ================ вниз на 8

    // ================ рука на 9
    const nineSectionScroll = window.scrollY + vh - nineSectionPosition;
    console.log(nineSectionScroll);
    const nineSectionPersentageOfScroll = persentageOfScroll(
      nineSectionScroll,
      nineSectionHeight
    );
    console.log(nineSectionPersentageOfScroll);

    if (
      0 < nineSectionPersentageOfScroll &&
      nineSectionPersentageOfScroll < 1
    ) {
      personStands.style.visibility = "visible";
      handWithCoin.style.top = 100 - 65 * nineSectionPersentageOfScroll + "vh";
    } else if (nineSectionPersentageOfScroll >= 1) {
      handWithCoin.style.top = "100vh";
      personStands.style.visibility = "hidden";
    } else if (0 >= nineSectionPersentageOfScroll) {
      handWithCoin.style.top = "100vh";
    }
    // ================ рука на 9

    // ================ рука на 10
    const tenSectionScroll = window.scrollY + vh - tenSectionPosition;
    const tenSectionPersentageOfScroll = persentageOfScroll(
      tenSectionScroll,
      tenSectionHeight
    );
    if (0 < tenSectionPersentageOfScroll && tenSectionPersentageOfScroll < 1) {
      personStandsWithCoin.style.visibility = "visible";
      handWithoutCoin.style.top = 35 + 65 * tenSectionPersentageOfScroll + "vh";
      elevenViewAreaEl.style.visibility = "visible";
    } else if (tenSectionPersentageOfScroll >= 1) {
      // personStandsWithCoin.style.visibility = "hidden";
      handWithoutCoin.style.top = "100vh";
    } else if (0 >= tenSectionPersentageOfScroll) {
      personStandsWithCoin.style.visibility = "hidden";
      elevenViewAreaEl.style.visibility = "hidden";
      handWithoutCoin.style.top = "100vh";
    }
    // ================ рука на 10

    // ================ увеличение обзора на 11
    const elevenSectionScroll = window.scrollY + vh - elevenSectionPosition;
    const elevenSectionPersentageOfScroll = persentageOfScroll(
      elevenSectionScroll,
      elevenSectionHeight
    );
    if (
      0 < elevenSectionPersentageOfScroll &&
      elevenSectionPersentageOfScroll < 1
    ) {
      const size =
        viewWidth + (window.scrollY + vh - elevenSectionPosition) / 5 + "px";
      elevenViewAreaEl.style.height = size;
      elevenViewAreaEl.style.width = size;
    } else if (elevenSectionPersentageOfScroll >= 1) {
    } else if (0 >= elevenSectionPersentageOfScroll) {
      elevenViewAreaEl.style.height = viewWidth;
      elevenViewAreaEl.style.width = viewWidth;
    }
    // ================ увеличение обзора на 11
  });

  function persentageOfScroll(sectionScroll, sectionHeight) {
    const persentage = Math.ceil((sectionScroll / sectionHeight) * 1000) / 1000;
    return persentage > 1 ? 1 : persentage < 0 ? 0 : persentage;
  }

  const video = document.querySelector("#video");
  video.addEventListener("click", () => {
    window
      .open(
        "https://dl.dropbox.com/s/e68mo6e9ws3qlov43gi01/IMG_6973-2.MP4?rlkey=xoooojakn8gn7ns6xegjkty8t&dl=0",
        "_blank"
      )
      .focus();
  });
  window.onload = function () {
    document.getElementById("hideAll").style.display = "none";
  };
});
