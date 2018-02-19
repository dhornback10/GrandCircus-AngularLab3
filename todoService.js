(function() {
    
    function TodoService (){
        var todoItems = [];
        return {
            setData: setData,
            getData: getData
        }
        function setData (todoList){
            todoItems = todoList;
            console.log(todoItems);
        }
        function getData(){
            return todoItems;
        }
    }




    angular
        .module("App")
        .factory("TodoService", TodoService);


})();