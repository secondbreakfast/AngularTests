/**
 * Created by zhilabug on 3/12/14.
 */

//Every controller has $scope built into it. Will take in more values as the file gets larger.
//Don't forget to add controller and app to base angular HTML file.

function IndexCtrl($scope, $http) {
//    Generic format for making a get call, using HTTP library. Uses a period instead of {} to link items.
    $http.get('/api/v1/student/?format=json').
        //        Creates new object called students, on success.
        success(function(students){
//            Sets a student variable. Need to use students.objects because it will include metadata and get an error. Will not allow you to loop through.
            $scope.students = students.objects;
        });

}