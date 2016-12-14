export default class HighscoreController {

  constructor($state, $stateParams, $http, highscoreService) {
    this._$state = $state;
    this._$http = $http;

    this.data = [];
    highscoreService.getTop((data) => {
      this.data = data;
    });

    this.playerScore = $stateParams.score;
  }

  retry() {
    this._$state.go('index');
  }
}
