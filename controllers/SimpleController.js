/**
 * Created by vikasnaiyar on 09/09/16.
 */

myApp.controller('SimpleController',  function($scope, nameFactory) {
   $scope.names = nameFactory.getNames();

    $scope.addName = function() {
        $scope.names.push({name:$scope.newName.name, city:$scope.newName.city})
    }


}
);