var myApp = angular.module("myApp", ["ngRoute"])
/**
 * define a configuration for route
 */
myApp.config(function($routeProvider){
    $routeProvider
        .when('/books', {
            templateUrl: "partials/books-list.html",
            controller: "BookListCtrl"
        })
        .when('/kart', {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        })
});

/**
 * define a factory to mock http result
 */
myApp.factory("bookService", function(){
    var books = 
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

    return {
        getBooks: function(){
            return books;
        }
    }
});

/**
 * create service for simulate http calls
 */
myApp.factory("kartService", function(){
    var kart = [];

    return {
        getKart: function(){
            return kart;
        },
        addToKart: function(book){
            kart.push(book);
        },
        buy: function(book){
            alert("Buy: ", book.name);
        }

    }
});
/**
 * created controller user by kart-list.html
 */
myApp.controller("KartListCtrl", function($scope, kartService){
    $scope.kart = kartService.getKart();

    $scope.buy = function(book){
        kartService.buy(book);
    }
});
/**
 * create controller user by static header of site
 */
myApp.controller("HeaderCtrl", function($scope) {
    $scope.appDetails = {
        title: "BooKart",
        tagline: "We Have 1 million books for you"
    };
})
/**
 * create controller used by book-list
 */
myApp.controller("BookListCtrl", function($scope, bookService, kartService){

    $scope.books = bookService.getBooks();

        $scope.addToKart = function(book){
            kartService.addToKart(book);
            
        }
    
})
