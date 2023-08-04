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

	function makeObserver(section, personItem, options) {
		const observer = new IntersectionObserver((entry, observer) => {
			if (entry[0].isIntersecting) {
				person.classList.add("hidden");
				personItem.classList.remove("hidden");
			} else {
				person.classList.remove("hidden");
				personItem.classList.add("hidden");
			}
		}, options);

		observer.observe(section);
	}

	// makeObserver(firstSection, person, {
	// 	root: null,
	// 	threshold: 0,
	// 	rootMargin: "0px",
	// });

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

	// makeObserver(sixthSection, person, {
	// 	root: null,
	// 	threshold: 0,
	// 	rootMargin: "-100px 0px -450px 0px",
	// });

	// makeObserver(seventhSection, person, {
	// 	root: null,
	// 	threshold: 0,
	// 	rootMargin: "-100px 0px -450px 0px",
	// });

	// makeObserver(eighthSection, person, {
	// 	root: null,
	// 	threshold: 0,
	// 	rootMargin: "-100px 0px -450px 0px",
	// });

	const observerLast1 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				person.classList.add("hidden");
				eighthSection.classList.add("visible");
				nineSection.classList.remove("visible");
			} else {
				eighthSection.classList.remove("visible");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin: "0px",
		}
	);

	observerLast1.observe(eighthSection);

	const observerLast2 = new IntersectionObserver(
		(entry, observer) => {
			if (entry[0].isIntersecting) {
				person.classList.add("hidden");
				nineSection.classList.add("visible");
				eighthSection.classList.remove("visible");
			} else {
				nineSection.classList.remove("visible");
				eighthSection.classList.add("visible");
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin: "0px",
		}
	);

	observerLast2.observe(nineSection);
});
