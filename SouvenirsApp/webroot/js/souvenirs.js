var souvenirsApp = angular.module('souvenirsApp', []);

var items = [
  {
    'name': 'Gabian',
    'snippet': 'Véritable Gabian de Riou.',
    'image': {
      'src': 'img/Larus_portrait.jpg',
      'alt': 'Gabian de Riou'
    },
    'details': '#'
  },
  {
    'name': 'Agrandisseur de sardines',
    'snippet': 'L\'original. Fabriqué à Endoume.',
    'image': {
      'src': 'img/sardine.jpg',
      'alt': 'Agrandisseur de sardines'
    },
    'details': '/agrandisseur-sardines.html'
  },
  {
    'name': 'Camion à Pizza',
    'snippet': 'Exemplaire unique. Très peu servi.',
    'image': {
      'src': 'img/camion-pizza.jpg',
      'alt': 'Camion à Pizza'
    },
    'details': '#'
  }
];

souvenirsApp.controller('ItemsCtrl', function ($scope) {
  $scope.items = items;
});