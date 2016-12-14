export default class GameService {

  constructor($http) {
    this._$http = $http;
  }

  // Word definitions
  words(fnSuccess) {
    this._$http.get('https://eps-624f.kxcdn.com/words.json').then(
      (response) => {
        fnSuccess(this.shuffleArray(response.data));
      },
      (response) => {
        console.error(response);
      }
    );
  }

  // Use Fisher Yates shuffler (Implementation taken from http://stackoverflow.com/questions/7309361/most-efficient-array-shuffler)
  shuffleArray(givenArray) {
    var resultArray = [];

    while (givenArray.length) {

       var randomIndex = Math.floor(Math.random() * givenArray.length),
           element = givenArray.splice(randomIndex, 1)

       resultArray.push(element[0]);

    }
    return resultArray;
  }

}
