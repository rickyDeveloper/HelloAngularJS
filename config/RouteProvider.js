/**
 * Created by vikasnaiyar on 09/09/16.
 */

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: 'Signature.html'
            })
        .when('/next',
            {
                 controller:'SimpleController',
                templateUrl:'Names.html'
            }

        )

})