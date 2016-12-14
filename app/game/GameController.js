export default class GameController {

  constructor($state, $stateParams, gameService) {
    this.words = [];
    this._$state = $state;
    this._gameService = gameService;

    this.userInput = "Test";
    this.gameScore = 0;

    this._gameService.words((data) => {
      this.words = data;
      this.nextWord();
    });
  }

  // Handle time ending
  timeFinished() {
    this._$state.go('highscore', {score: this.gameScore}, {reload: true});
  }

  // Process the key pressed events
  handleKey(event) {
    if (event.key === 'Backspace') {
      this.score -= 1;
    }
  }

  // Check for success case and select next word if solution is correct
  handleChange() {
    if (this.userInput === this.solution) {
      this.nextWord();
    }
  }

  // Create new puzzle
  nextWord() {
    if (this.score > 0) {
      this.gameScore += this.score;
    }
    this.userInput = "";
    this.solution = this.words.pop();
    this.puzzle = this.shuffleWord(this.solution);
    this.maxScore = Math.floor(Math.pow(1.95, this.solution.length/3));
    this.score = this.maxScore;
  }

  // Shuffle the word, take care not to have the solution as puzzle
  shuffleWord(word) {
    var wordArray = word.split('');
    var resultArray = this._gameService.shuffleArray(wordArray);

    if (word === resultArray.join('')) {
      return shuffleWord(word);
    } else {
      return resultArray.join('');
    }
  }

}
