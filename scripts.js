// hack because namecheap won't let you redirect http to https
// probably for a good reason that I don't understand
if (window.location.protocol === 'http:') {
	window.location.protocol = 'https:';
}

window.onload = runTheCode;

const faceAnimationDuration = 0.75;

document.documentElement.style.setProperty(
	'--face-animation-duration',
	`${faceAnimationDuration}s`
);

function runTheCode() {
	const face = document.querySelector('#face');
	const container = document.querySelector('#main-container');
	const replayButton = document.querySelector('#replay-button');

	// face stuff
	let faceOpen = false;

	if (window.location.hash.indexOf('welcome') >= 0) {
		faceOpen = true;
		face.classList.add('open');
		container.classList.add('skip-animation');
	}

	replayButton.addEventListener('click', () => {
		container.classList.remove('skip-animation');

		window.location.hash = '';
		face.classList.remove('open');
		faceOpen = false;
	});

	face.addEventListener('click', () => {
		if (faceOpen) {
			return;
		}

		faceOpen = true;

		face.classList.add('open');

		window.setTimeout(() => {
			window.location.hash = 'welcome';
		}, faceAnimationDuration * 1000);
	});
}
