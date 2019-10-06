angular.module('rimSmartApp.charts')
  .directive('chartsNumberCorrespondence', function () {
    return {
      restrict: 'E',
      scope: '=',
      templateUrl: 'charts/number-correspondence/number-correspondence.html',
      link: function ($scope, element, attrs) { },
      controller: function ($scope, $compile) {
        $scope.title = 'Ag Grid';
alert(`ha`)
        var columnDefs = [
          { headerName: "Make", field: "make" },
          { headerName: "Model", field: "model" },
          { headerName: "Price", field: "price" }
        ];

        var rowData = [
          { make: "Toyota", model: "Celica", price: 35000 },
          { make: "Ford", model: "Mondeo", price: 32000 },
          { make: "Porsche", model: "Boxter", price: 72000 }
        ];

        $scope.gridOptions = {
          columnDefs: columnDefs,
          rowData: rowData
        };
      },
    }
  });
