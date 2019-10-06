angular.module('rimSmartApp.charts')
  .directive('numberCorrespondence', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      templateUrl: 'charts/number-correspondence/number-correspondence.html',
      link: function ($scope, element, attrs) { },
      controller: function ($scope, $compile) {
        $scope.title = 'Number of Correspondence';
        var columnDefs = [
          { headerName: "Task", field: "tasl" },
          { headerName: "Role", field: "role" },
          { headerName: "Due Date", field: "duedate" },
          { headerName: "Status", field: "status" },
          { headerName: "Product", field: "product" },
        ];

        var rowData = [
          { task: "Commitment", role: "Reviewer", duedate: "10-JUL-2019", status: "In Review", product: "Lorem ipsum" },
          { task: "Commitment", role: "Reviewer", duedate: "10-JUL-2019", status: "In Review", product: "Lorem ipsum" },
          { task: "Document", role: "Publisher", duedate: "10-OCT-2019", status: "In Publish", product: "Lorem ipsum" },
          
        ];

        $scope.gridOptions = {
          columnDefs: columnDefs,
          rowData: rowData
        };
      },
    }
  });