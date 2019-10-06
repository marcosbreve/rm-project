(function () {
  "use strict";

  angular
    .module("rimSmartApp.charts")
    .controller("ChartsListController", ChartsListController);

  function ChartsListController($scope, $uibModalInstance) {
    
    $scope.charts = [
      {
        id: 1,
        name: 'My Open Commitments',
        description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
      },
      {
      id: 2,
      name: 'Task & Favorites',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 3,
      name: 'Number of Correspondence',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 4,
      name: 'At-Risk Documents',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 5,
      name: 'Documents in Review-Approved Status',
      description: 'Displays the total amount of remediation errors for the specified time period, categorised per country'
    },
    {
      id: 6,
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
