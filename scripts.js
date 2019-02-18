window.onload = runTheCode;

const faceAnimationDuration = 0.75;

document.documentElement.style.setProperty(
	'--face-animation-duration',
	`${faceAnimationDuration}s`
);

const animationCookieName = 'animationDisabled';

function runTheCode() {
	const face = document.querySelector('#face');
	const animationToggle = document.querySelector('#animation-toggle');
	const mainContainer = document.querySelector('#main-container');

	if (document.cookie.indexOf(`${animationCookieName}=true`) >= 0) {
		mainContainer.classList.add('disable-animation');
		face.classList.add('open');
	}

	animationToggle.addEventListener('change', () => {
		const cookieExpiresInDays = 100;
		const date = new Date().setTime(
			new Date().getTime() + cookieExpiresInDays * 24 * 60 * 60 * 1000
		);

		if (animationToggle.checked) {
			mainContainer.classList.add('disable-animation');
			face.classList.add('open');
		}

		document.cookie = `${animationCookieName}=${
			animationToggle.checked
		}; expires=${date};path=/`;
	});

	// face stuff
	let faceOpen = false;
	face.addEventListener('click', () => {
		if (faceOpen) {
			return;
		}

		faceOpen = true;

		face.classList.add('open');
	});
}
