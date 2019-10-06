angular.module('rimSmartApp.charts')
  .directive('tasksFavorites', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      templateUrl: 'charts/tasks-favorites/tasks-favorites.html',
      link: function ($scope, element, attrs) { },
      controller: function ($scope, $compile) {
        $scope.title = 'Tasks & Favorites';
        var columnDefs = [
          { headerName: "Task", field: "task" },
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
