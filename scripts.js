window.onload = runTheCode;

function runTheCode() {
	const face = document.querySelector('#face');
	const topHalf = document.querySelector('#top-half');
	const bottomHalf = document.querySelector('#bottom-half');

	face.onclick = () => {
		bottomHalf.classList.toggle('open');
		topHalf.classList.toggle('open');
	};
}
