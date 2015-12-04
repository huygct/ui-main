(function () {
  'use strict';

  angular
    .module('app.demo')
    .controller('OwlCarouselController', OwlCarouselController);

  OwlCarouselController.$inject = ['logger', '$scope'];
  /* @ngInject */
  function OwlCarouselController(logger, $scope) {
    var vm = this;
    vm.title = 'Demo';

    $scope.items1 = [1,2,3,4,5];
    $scope.items2 = [1,2,3,4,5,6,7,8,9,10];

    activate();

    function activate() {
      logger.info('Activated Demo View');
    }
  }
})();
