import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timer from 'angular-timer';
import moment from 'moment';
import humanizeDuration from 'humanize-duration';

import HighscoreController from './highscore/HighscoreController.js';
import HighscoreService from './highscore/HighscoreService.js';
import IndexController from './index/IndexController.js';
import GameController from './game/GameController.js';
import GameService from './game/GameService.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app');

  // Highscore module
  angular.module('wordgame.highscore', [])
    .service('highscoreService', HighscoreService);

  // Game module
  angular.module('wordgame.game', [])
    .controller('indexController', IndexController)
    .controller('gameController', GameController)
    .service('gameService', GameService);

  // Wire up the application to one module with the corresponding routing
  angular.module('wordgame', ['ui.router', 'timer', 'wordgame.highscore', 'wordgame.game'])
    .config(function ($stateProvider, $urlRouterProvider, $qProvider) {
      $urlRouterProvider.otherwise('/');
      $qProvider.errorOnUnhandledRejections(false);

      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'templates/index.html',
          controller: 'indexController',
          controllerAs: 'indexCtrl'
        })
        .state('highscore', {
          url: '/highscore',
          templateUrl: 'templates/highscore.html',
          controller: HighscoreController,
          controllerAs: 'highscoreCtrl',
          params: {
            score: 0
          }
        })
        .state('play', {
          url: '/play',
          templateUrl: 'templates/game.html',
          controller: 'gameController',
          controllerAs: 'gameCtrl',
          params: {
            name: ""
          }
        });
    });

  angular.bootstrap(document.documentElement, ['wordgame']);

});
