var myApp = angular.module("myApp", ["ngRoute"])

myApp.config(function($routeProvider){
    $routeProvider
        .when('/books', {
            templateUrl: "partials/books-list.html",
            controller: "BookListCtrl"
        })
        .when('/kart', {
            templateUrl: "partials/kart-list.html"
        })
        .otherwise({
            redirectTo: "/books"
        })
});

myApp.controller("HeaderCtrl", function($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We Have 1 million books for you"
    };
})

myApp.controller("BookListCtrl", function($scope){
    $scope.books = 
        [
            {
                name: "name1",
                price: 1,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
            {
                name: "name2",
                price: 2,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
            {
                name: "name3",
                price: 3,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
            {
                name: "name4",
                price: 4,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
            {
                name: "name5",
                price: 5,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
            {
                name: "name6",
                price: 6,
                rating: 5,
                releaseDate: "12/08/2017",
                description: "BlaBlaBla"
            },
        ]

        $scope.addToKart = function(book){
            console.log("Add to kart", book);
        }
    
})
