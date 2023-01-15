class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
  
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
