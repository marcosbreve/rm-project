angular.module('rimSmartApp.charts')
  .directive('chartsContainer', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      
      templateUrl: 'charts/container/charts-container.html',
      link: function ($scope, element, attrs) { },
      controller: function ($scope, $compile, $uibModal) {
        $scope.chartId = 0;
        $scope.open = function () {
          var modalInstance = $uibModal.open({
            templateUrl: "charts/container/charts-list.html",
            controller: "ChartsListController",
            size: '',
          });

          modalInstance.result.then(function (response) {
              console.log(response.id);
              $scope.chartId = response.id; 
          });
        };
      },
    }
  });
