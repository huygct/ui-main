/**
 * Created by Nghi Tran on 6/4/2015.
 * create directive mySearch to action search on web
 * input: data for search and action when click button close
 */
'use strict';

(function () {
  angular.module('my-compoents')
    .directive('mySearch', [function () {
      function SearchController () {
      }
      return {
        restrict: 'EA',
        scope: {
          ngModel: '=',
          close: '&'
        },
        controller: SearchController,
        controllerAs: 'searchCtrl',
        bindToController: true,
        templateUrl: 'myComponents/searchBox/my-search.html'
      };
    }]);
})();