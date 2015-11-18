var souvenirsApp = angular.module('souvenirsApp', []);

souvenirsApp.controller('ItemsCtrl', function ($scope) {
  $scope.items = [
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
});

souvenirsApp.controller('LikesCtrl', function ($scope, $http) {
  $scope.likes = 0;

  $http.get('rest/likes').success(function (data) {
    $scope.likes = data.value;
  });

  $scope.increment = function () {
    $http.post('rest/likes/increment').success(function (data) {
      $scope.likes = data.value;
    });
  }
});