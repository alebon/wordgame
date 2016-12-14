export default class IndexController {

  constructor($state, $stateParams) {
    this._$state = $state;
    this.name = $stateParams.name;
  }

  playDisabled() {
    return !this.name;
  }

  play() {
    this._$state.go('play', {name: this.name});
  }
}
