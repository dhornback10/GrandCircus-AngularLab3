(function() {
    var taskList = {
        bindings: {
            todoList: "<"
        },
        templateUrl: "partials/taskList.html",
        controller: function() {
            var $ctrl = this;
            $ctrl.removeItem = function(item) {
                $ctrl.todoList.splice(item, 1);
            }
            $ctrl.listToDisplay = TodoService.getData();
            console.log($ctrl.listToDisplay);
        }
    }










    angular.module("App").component("taskList", taskList);


})();