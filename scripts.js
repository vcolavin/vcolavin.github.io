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

	if (window.location.hash.indexOf('welcome') >= 0) {
		container.classList.add('skip-animation');
		face.classList.add('open');
	}

	face.classList.remove('gone');

	replayButton.addEventListener('click', () => {
		container.classList.remove('skip-animation');
		face.classList.remove('open');

		window.setTimeout(() => {
			window.location.hash = '';
		}, faceAnimationDuration * 1000);
	});

	face.addEventListener('click', () => {
		face.classList.add('open');

		window.setTimeout(() => {
			window.location.hash = 'welcome';
		}, faceAnimationDuration * 1000);
	});
}
