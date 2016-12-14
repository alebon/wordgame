export default class HighscoreService {

  constructor($http) {
    this._$http = $http;
  }

  getTop(fnSuccess) {
    this._$http.get('https://eps-624f.kxcdn.com/highscore.json')
      .then(
        (response) => {
          fnSuccess(this.sortByScore(response.data));
        },
        (response) => {
          console.error(response);
        }
      );
  }

  sortByScore(data) {
    var sorted = data.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return sorted;
  }

}
