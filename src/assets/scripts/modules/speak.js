const SELECTORS = {
	btn: '#say-my-name'
};

class Speaker {
	constructor() {
		this.btn = document.querySelector(SELECTORS.btn);
		this.btn.addEventListener('click', () => this.speak('uh-jay'));
	}
	speak(text) {
		var timer = setInterval(() => {
			var voices = speechSynthesis.getVoices();
			if (voices.length !== 0) {
				var u = new SpeechSynthesisUtterance();
				u.text = text;
				u.lang = 'en-GB';
				u.voice = voices[2];
				u.rate = 1.2;
				speechSynthesis.speak(u);
				clearInterval(timer);
			}
		}, 200);
	}
}

if (document.querySelector(SELECTORS.btn)) {
	new Speaker();
}
