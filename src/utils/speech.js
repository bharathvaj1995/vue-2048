const SPEECH_MAP = {
  UP: 0, // Up
  RIGHT: 1, // Right
  DOWN: 2, // Down
  LEFT: 3 // Left
};

export default class SpeechListenner {
  constructor(SpeechRecognition) {
    this.recognition = new SpeechRecognition();
    this.callback = null;
    this.init();
  }

  init() {
    this.recognition.onstart = () => {
      console.log(
        "Voice recognition activated. Try speaking into the microphone."
      );
    };
    this.recognition.onerror = () => {
      this.alertUser("No speech was detected. Try again.");
    };
    this.recognition.onresult = event => {
      const current = event.resultIndex;
      const command = event.results[current][0].transcript || "";
      if (command) {
        console.log(command, SPEECH_MAP[command.toUpperCase()]);
        this.callback(SPEECH_MAP[command.toUpperCase()]);
      }
    };
  }

  start() {
    this.recognition.start();
  }

  onCommand(cb) {
    if (typeof cb === "function") {
      this.callback = cb;
    }
  }

  alertUser(msg = "") {
    window.alert(msg);
  }
}
