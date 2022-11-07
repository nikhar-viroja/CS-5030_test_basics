

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("To check if the value is being added or not ", () => {
        expect(todo_service.add_todo().todo.length).toEqual(4);
    });

    test("It should update the title for id 13 from T1 to T10", ()=>{
        expect(todo_service.update_todo()).toEqual({
            "description": "D1",
          "done": false,
          "id": 13,
          "title":"T10"})
          
    })

    // Write all your test cases here that corresponds to software requirements


});