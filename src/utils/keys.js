const KEYBOARD_MAP = {
  38: 0, // Up
  39: 1, // Right
  40: 2, // Down
  37: 3, // Left
  75: 0, // Vim up
  76: 1, // Vim right
  74: 2, // Vim down
  72: 3, // Vim left
  87: 0, // W
  68: 1, // D
  83: 2, // S
  65: 3 // A
};

const RESET_KEY = 82; // R

export default class KeyboardListenner {
  constructor() {
    this.events = {};
    this.init();
  }

  init() {
    document.addEventListener("keydown", event => {
      this.listen(event);
    });
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    const callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function(callback) {
        callback(data);
      });
    }
  }

  listen(event) {
    const modifiers =
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    const mapped = KEYBOARD_MAP[event.which];

    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        this.emit("move", mapped);
      }
    }

    // R key - to restart the game
    if (!modifiers && event.which === RESET_KEY) {
      this.emit("restart");
    }
  }

  destroy() {
    document.removeEventListener("keydown", this.listen);
  }
}
