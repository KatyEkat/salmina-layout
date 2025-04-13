document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("scroll", () => {
		const header = document.querySelector(".header");
		if (window.scrollY > 0) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});

	const submitToggle = document.getElementById("submitToggle");
	const sendFormBtn = document.getElementById("sendFormBtn");
	const error = document.getElementById("error");
	const success = document.getElementById("success");

	let isSubmitActive = false;

	submitToggle.addEventListener("click", () => {
		isSubmitActive = !isSubmitActive;
		submitToggle.classList.toggle("active");
	});

	sendFormBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (!isSubmitActive) {
			error.classList.add("show");
			setTimeout(() => {
				error.classList.remove("show");
			}, 3000);
			return;
		}

		success.classList.add("show");
		setTimeout(() => {
			success.classList.remove("show");

			submitToggle.classList.remove("active");
			isSubmitActive = false;
		}, 3000);
	});
});
