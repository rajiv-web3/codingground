var app=angular.module('myapp',[]);
app.controller("FirstController",function($scope){
    $scope.Student={
        FirstName:"Rajeev",
        LastName:"Ranjan",
        FullName:function()
        {
            var stud=$scope.Student;
        return stud.FirstName+" "+stud.LastName;
        }
    };
    /*
    $scope.First.FirstName="Rajeev";
    $scope.First.LastName="Ranjan";
    $scope.First.FullName=function()
    {
      return   " Hello "+$scope.First.FirstName+" "+$scope.First.LastName;
    }*/
});