(function IIFE() {
    $(function() {
        $result = $("#result");

        function Person(name) {
            this.name = name;
        }

        Person.prototype.getName = function() {
            return this.name;
        };

        function Employee(name, id) {
            Person.call(this, name);
            this.id = id;
        }

        Employee.prototype = new Person();

        var employees = [
            new Employee("Mike1", 1),
            new Employee("Mike2", 2),
            new Employee("Mike3", 3)
        ];

        var html = '';
        for (var i = 0; i < employees.length; i++) {
            var name = employees[i].getName();
            html += name + '<br />';
        }

        $result.html(html);
    })
})();
