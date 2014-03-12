/**
 * Created by zhilabug on 3/12/14.
 */
//Defines other files we're using, and routes.

//    Passes in the array's name and just the libraries we're using.
var registrar = angular.module('registrar', ['ngRoute']);

//routeProvider is like django's URLs-- specify routes here.
//controllers handle all the logic for the page. Function below is multiple functions strung together.

registrar.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/views/index.html', controller: IndexCtrl}).
        when("/add/student/", {templateUrl: '/static/views/add_student.html', controller: AddStudentCtrl}).
        when("/add/project/", {templateUrl: '/static/views/add_project.html', controller: AddProjectCtrl}).
        //        This is unfinished. Tried passing a dynamic route, but didn't get to make a page and separate controller.
        when(":id/add/project/", {templateUrl: '/static/views/add_student_project.html', controller: AddProjectCtrl})
//        .
//        otherwise({redirectTo: '/'});
}]);