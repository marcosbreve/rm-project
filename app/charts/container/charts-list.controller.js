(function () {
  "use strict";

  angular
    .module("rimSmartApp.charts")
    .controller("ChartsListController", ChartsListController);

  function ChartsListController($scope, $uibModalInstance) {
    
    $scope.charts = [{
      id: 1,
      name: 'Number of Correspondences',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 2,
      name: 'At-Risk Documents',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 3,
      name: 'Documents in Review-Approved Status',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 4,
      name: 'Your Open Commitments',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    }];


    
    $scope.add = function(chart){
      $uibModalInstance.close(chart);
    }

    $scope.cancel = function(){
      $uibModalInstance.dismiss();
      console.log('cancel clicked');
    } 
  }
})();
