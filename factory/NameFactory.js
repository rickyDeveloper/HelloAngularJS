/**
 * Created by vikasnaiyar on 09/09/16.
 */
myApp.factory('nameFactory', function(){
    var factory = {};
    var names = [{name:'Manavii' , city: 'Bengaluru'} , {name:'Vikas' , city: 'Indore'}  , {name:'Manjari' , city: 'Ranchi'} ]

    factory.getNames = function() {
        return names;
    }

    return factory
})