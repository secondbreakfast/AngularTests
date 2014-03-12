/**
 * Created by zhilabug on 3/12/14.
 */

//Need to get list of students from API, and return those on the page.
function AddStudentCtrl($scope, $http, $location){
    $http.get('/api/v1/class/?format=json').
        success(function(classes){
//    On success, it passes in the returned item and puts it into a scope variable with the label classes.
            $scope.classes = classes.objects;
            console.log($scope.classes);
        });

//    Need to define function with scope, so that the template can refer to it. It's setting a variable to a function.
//    Looked up angular documentation for example of this. Scope.student refers to the object created in the form.
    $scope.submitForm = function(){
        $http.post('/api/v1/student/?format=json', $scope.student).
            success(function(response){
//                If response is valid, redirect to home. Need to call location at beginning of controller.
                $location.path("/");
            })
    }
}