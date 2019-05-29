define("Todo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function noop() { }
    exports.noop = noop;
    function hide(el) {
        el.classList.add('hidden');
    }
    exports.hide = hide;
    function show(el) {
        el.classList.remove('hidden');
    }
    exports.show = show;
});
define("TodoService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var todos = [
        { id: 0, text: 'Prepare an awesome meal.', completed: false },
        { id: 1, text: 'Buy groceries.', completed: true },
        { id: 2, text: 'Eat!', completed: false }
    ];
    var TodoServiceFactory = function () {
        function findTodos() {
            return new Promise(function (resolve, _reject) { return resolve(todos); });
        }
        function createTodo(text) {
            return new Promise(function (resolve, _reject) {
                var nextId = Math.max.apply(Math, todos.map(function (t) { return t.id; })) + 1;
                var newTodo = { id: nextId, text: text, completed: false };
                todos.push(newTodo);
                resolve(newTodo);
            });
        }
        function updateTodoStatus(todo, completed) {
            return new Promise(function (resolve, reject) {
                var targetTodo = todos.find(function (t) { return t.id === todo.id; });
                if (targetTodo) {
                    targetTodo.completed = completed;
                    resolve(targetTodo);
                }
                else {
                    reject();
                }
            });
        }
        function deleteTodo(todo) {
            return new Promise(function (resolve, _reject) {
                todos = todos.filter(function (t) { return t.id !== todo.id; });
                resolve();
            });
        }
        return { findTodos: findTodos, createTodo: createTodo, updateTodoStatus: updateTodoStatus, deleteTodo: deleteTodo };
    };
    exports.todoService = TodoServiceFactory();
});
define("TodosFilterFn", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("TodoList", ["require", "exports", "@soil/dom", "@soil/arch", "utils", "TodoService"], function (require, exports, dom_1, arch_1, utils_1, TodoService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoListFactory = function (todoService) { return function (options) {
        // Template.
        if (options === void 0) { options = {}; }
        var $self = dom_1.h.ul();
        // Initialization.
        var activeFilter;
        var onSizeChange;
        setFilter(options.filter || showAllFilter);
        setOnSizeChange(options.onSizeChange || utils_1.noop);
        todoService.findTodos().then(function (todos) { return todos.forEach(addTodo); });
        // Internal methods.
        function setFilter(f) {
            activeFilter = f;
            applyActiveFilter();
        }
        function setOnSizeChange(f) {
            onSizeChange = f;
        }
        function showAllFilter(items) {
            return items.map(function () { return true; });
        }
        function addTodo(todo) {
            var $todo = dom_1.h.li({}, [
                dom_1.h.label({ textContent: todo.text }, [
                    dom_1.h.input({
                        type: 'checkbox',
                        onclick: function (evt) {
                            return updateTodoStatus($todo, todo, evt.target.checked);
                        }
                    })
                ]),
                dom_1.h.button({ onclick: function () { return deleteTodo($todo, todo); } }, ['⨉'])
            ]);
            $self.appendChild($todo);
            applyActiveFilter();
            onSizeChange($self.children.length);
        }
        function updateTodoStatus($todo, todo, completed) {
            todoService.updateTodoStatus(todo, completed).then(function (todo) {
                if (todo.completed) {
                    $todo.classList.add('completed');
                }
                else {
                    $todo.classList.remove('completed');
                }
                applyActiveFilter();
            });
        }
        function deleteTodo($todo, todo) {
            todoService.deleteTodo(todo).then(function () {
                $self.removeChild($todo);
                onSizeChange($self.children.length);
            });
        }
        function applyActiveFilter() {
            var checkboxes = Array.from($self.children)
                .map(function (li) { return li.querySelector('input[type=checkbox]'); });
            activeFilter(checkboxes)
                .forEach(function (shouldShow, idx) {
                var $todo = $self.children[idx];
                shouldShow ? utils_1.show($todo) : utils_1.hide($todo);
            });
        }
        // External API.
        return arch_1.extend($self, {
            get filter() { return activeFilter; },
            set filter(f) { setFilter(f); },
            get onSizeChange() { return onSizeChange; },
            set onSizeChange(f) { setOnSizeChange(f); },
            addTodo: addTodo
        });
    }; };
    exports.todoList = TodoListFactory(TodoService_1.todoService);
});
define("TodoInput", ["require", "exports", "@soil/dom", "@soil/arch", "TodoService"], function (require, exports, dom_2, arch_2, TodoService_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoInputFactory = function (todoService) { return function (options) {
        // Template.
        var $input = dom_2.h.input({
            type: 'text',
            placeholder: "What's left?",
            onkeydown: function (evt) {
                if (evt.key === 'Enter') {
                    addTodo();
                }
            }
        });
        var $self = dom_2.h.div({}, [
            $input,
            dom_2.h.button({ onclick: addTodo }, ['Add'])
        ]);
        // Initialization.
        var onAddTodo;
        setOnAddTodo(options.onAddTodo);
        // Internal methods.
        function setOnAddTodo(f) {
            onAddTodo = f;
        }
        function addTodo() {
            if ($input.value.length === 0) {
                return;
            }
            todoService.createTodo($input.value).then(function (todo) {
                onAddTodo(todo);
                $input.value = '';
                $input.focus();
            });
        }
        // External API.
        return arch_2.extend($self, {
            get onAddTodo() { return onAddTodo; },
            set onAddTodo(f) { setOnAddTodo(f); }
        });
    }; };
    exports.todoInput = TodoInputFactory(TodoService_2.todoService);
});
define("todoFilters", ["require", "exports", "@soil/dom", "@soil/arch"], function (require, exports, dom_3, arch_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.todoFilters = function (options) {
        // Template.
        var $filterButtons = [
            dom_3.h.button({ disabled: true, onclick: function () { return onFilterChange(function (todos) { return showAllTodosFilter(todos); }); } }, ['All']),
            dom_3.h.button({ disabled: true, onclick: function () { return onFilterChange(function (todos) { return showActiveTodosFilter(todos); }); } }, ['Active']),
            dom_3.h.button({ disabled: true, onclick: function () { return onFilterChange(function (todos) { return showCompletedTodosFilter(todos); }); } }, ['Completed'])
        ];
        var $self = dom_3.h.footer({}, $filterButtons);
        // Initialization.
        var onFilterChange;
        setOnFilterChange(options.onFilterChange);
        // Internal methods.
        function setOnFilterChange(f) {
            onFilterChange = f;
        }
        function showAllTodosFilter($todos) {
            return $todos.map(function () { return true; });
        }
        function showActiveTodosFilter($todos) {
            return $todos.map(function ($todo) { return !$todo.checked; });
        }
        function showCompletedTodosFilter($todos) {
            return $todos.map(function ($todo) { return $todo.checked; });
        }
        // External API.
        function enable() {
            $filterButtons.forEach(function (btn) { return btn.disabled = false; });
        }
        function disable() {
            $filterButtons.forEach(function (btn) { return btn.disabled = true; });
        }
        return arch_3.extend($self, {
            get onFilterChange() { return onFilterChange; },
            set onFilterChange(f) { setOnFilterChange(f); },
            enable: enable,
            disable: disable
        });
    };
});
define("TodoApp", ["require", "exports", "@soil/dom", "TodoList", "TodoInput", "todoFilters"], function (require, exports, dom_4, TodoList_1, TodoInput_1, todoFilters_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoAppFactory = function (todoInput, todoList) { return function () {
        // Template.
        var $todoInput = todoInput({
            onAddTodo: function (todo) { return $todoList.addTodo(todo); }
        });
        var $todoList = todoList({ onSizeChange: toggleFilters });
        var $todoFilters = todoFilters_1.todoFilters({
            onFilterChange: function (filter) { return $todoList.filter = filter; }
        });
        var $self = dom_4.h.div({}, [
            dom_4.h.h1({}, ['Todo']),
            $todoInput,
            $todoList,
            $todoFilters
        ]);
        // Internal methods.
        function toggleFilters(todoSize) {
            if (todoSize === 0) {
                $todoFilters.disable();
            }
            else if (todoSize === 1) {
                $todoFilters.enable();
            }
        }
        return $self;
    }; };
    exports.todoApp = TodoAppFactory(TodoInput_1.todoInput, TodoList_1.todoList);
});
define("main", ["require", "exports", "TodoApp"], function (require, exports, TodoApp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.appendChild(TodoApp_1.todoApp());
});
//# sourceMappingURL=app.js.map