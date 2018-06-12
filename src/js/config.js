angular.module("myApp")
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/group");
        $urlRouterProvider.when("/group","/group/introduce");
        $stateProvider
            .state({
                name:"autonomy",
                url:"/autonomy",
                templateUrl:"view/autonomy.html"
            })
            .state({
                name:"group",
                url:"/group",
                templateUrl:"view/group.html"
            })
            .state({
                name:"home",
                url:"/home",
                templateUrl:"view/home.html"
            })
            .state({
                name:"party",
                url:"/party",
                templateUrl:"view/party.html"
            })
            .state({
                name:"group.introduce",
                url:"/introduce",
                templateUrl:"view/introduce.html",
                controller:function ($scope,getdata) {
                    $scope.data=getdata;
                    $scope.speak=function (data) {
                        $scope.txt="回复"+data+"："
                    }
                    $scope.vray=function (result) {
                        $scope.data.push({
                            "name":"小仙女",
                            "cont":result,
                            "date":new Date(),
                            "hf":"回复"
                        })

                    }
                },
                resolve:{
                    getdata:function ($http,$q) {
                        var dfd=$q.defer()
                        $http.get("data/data.json")
                            .success(function (data) {
                                dfd.resolve(data)
                            })
                        return dfd.promise
                    }
                }
            })
            .state({
                name:"group.see",
                url:"/see",
                templateUrl:"view/see.html",
                controller:function($scope,$state){
                    $scope.back=function(){
                        $state.go("group.sees")
                    }
                }
            })
            .state({
                name:"group.summary",
                url:"/summary",
                templateUrl:"view/summary.html"
            })
            .state({
                name:"group.sees",
                url:"/sees",
                templateUrl:"view/sees.html",
                controller:function($scope,$state){
                    $scope.go=function(){
                        $state.go("group.see")
                    }
                }
            })
    });