window.onload = runTheCode;

const faceAnimationDuration = 0.75;

document.documentElement.style.setProperty(
	'--face-animation-duration',
	`${faceAnimationDuration}s`
);

function runTheCode() {
	const face = document.querySelector('#face');
	const topHalf = document.querySelector('#top-half');
	const bottomHalf = document.querySelector('#bottom-half');

	let faceOpen = false;

	face.addEventListener('click', handleFaceClick);

	function handleFaceClick() {
		if (faceOpen) {
			return;
		}

		faceOpen = true;

		face.classList.toggle('open');

		// window.setTimeout(() => {
		// 	faceTransitioning = false;
		// }, faceAnimationDuration * 1000);
	}
}
