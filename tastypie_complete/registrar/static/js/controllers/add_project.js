/**
 * Created by zhilabug on 3/12/14.
 */

//Need to get list of students from API, and return those on the page.
function AddProjectCtrl($scope, $http, $location){
    $http.get('/api/v1/student/?format=json').
        success(function(projects){
//    On success, it passes in the returned item and puts it into a scope variable with the label classes.
            $scope.projects = projects.objects;
            console.log($scope.projects);
        });

//    Need to define function with scope, so that the template can refer to it. It's setting a variable to a function.
//    Looked up angular documentation for example of this. Scope.student refers to the object created in the form.
    $scope.submitForm = function(){
        $http.post('/api/v1/student_project/?format=json', $scope.project).
            success(function(response){
//                If response is valid, redirect to home. Need to call location at beginning of controller.
                $location.path("/");
            })
    }
}