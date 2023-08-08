"use strict";

document.addEventListener("DOMContentLoaded", () => {
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

	makeObserver(firstSection, person, {
		root: null,
		threshold: 0,
		rootMargin: "0px",
	});

	makeObserver(secondSection, personWithPc, {
		root: null,
		threshold: 0,
		rootMargin: "0px 0px -650px 0px",
	});

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

	const rootMargin = "0px 0px 0px 0px";

	const observerLast1 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				hideAll();
				eighthSection.classList.add("visible");
				console.log("eighthSection");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin,
		}
	);
	observerLast1.observe(eighthSection);

	const observerLast2 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				hideAll();
				nineSection.classList.add("visible");
				console.log("nineSection");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin,
		}
	);
	observerLast2.observe(nineSection);

	const observerLast3 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				hideAll();
				tenSection.classList.add("visible");
				console.log("tenSection");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin,
		}
	);
	observerLast3.observe(tenSection);

	const observerLast4 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				hideAll();
				elevenSection.classList.add("visible");
				console.log("elevenSection");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin,
		}
	);
	observerLast4.observe(elevenSection);

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

	const elevenSectionPosition = elevenSection.offsetTop;
	const elevenSectionHeight = elevenSection.offsetHeight;
	const vh = Math.max(
		document.documentElement.clientHeight || 0,
		window.innerHeight || 0
	);

	const elevenViewAreaEl = elevenSection.querySelector(".view");

	window.addEventListener("scroll", function () {
		const size = 360 + (window.scrollY + vh - elevenSectionPosition) / 5 + "px";
		elevenViewAreaEl.style.height = size;

		elevenViewAreaEl.style.width = size;
	});
});
