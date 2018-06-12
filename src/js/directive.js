angular.module('myApp')
    .directive('inputFile',function () {
        return {
            template:'<div class="input-file">'+
            '<label for="{{inputId}}" class="imgs"></label>'+
            '<input type="file" id="{{inputId}}">'+
            '</div>',
            restrict:'E',
            scope:{},
            controller:function ($scope) {
                $scope.inputId = 'inputFile'+$scope.$id
            },
            link:function (scope,ele) {
                var inputFile = ele.find('div');
                var input = $(inputFile).find('input');
                input.on('change',function () {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function () {
                        console.log($(inputFile).find('label'));
                        $(inputFile).find('label')[0].style.background = 'url('+this.result+') no-repeat center center'
                    }
                })
            }
        }
    })
    //.directive("renderMsg",function(){
    //    return {
    //        restrict: 'E',
    //        scope:{
    //            data:"="
    //        },
    //        template: "<li></li>",
    //        controller:function($rootScope){
    //            $rootScope.send=function(msg){
    //                console.log(msg)
    //            }
    //        },
    //        link:function(scope,ele,attr){
    //            console.log(scope.$apply("send()"))
    //        }
    //    }
    //})