angular.module('rimSmartApp.charts')
  .directive('myOpenCommitments', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      templateUrl: 'charts/my-open-commitments/my-open-commitments.html',
      link: function ($scope, element, attrs) { },
      controller: function ($scope, $compile) {
        $scope.title = 'My Open Commitments';
        var columnDefs = [
          { headerName: "Title", field: "title" },
          { headerName: "Due Date", field: "duedate" },
        ];

        var rowData = [
          { title: "Title of commitments", duedate: '12-JUL-2020' },
          { title: "Title of commitments", duedate: '12-AUG-2020' },
          { title: "Title of commitments", duedate: '12-AUG-2020' },
          { title: "Title of commitments", duedate: '12-SEP-2020' },
          { title: "Title of commitments", duedate: '12-OCT-2020' },
          { title: "Title of commitments", duedate: '12-NOV-2020' },
          { title: "Title of commitments", duedate: '12-NOV-2020' },
        ];

        $scope.gridOptions = {
          columnDefs: columnDefs,
          rowData: rowData
        };
      },
    }
  });
