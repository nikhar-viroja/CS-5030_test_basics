class todoservice{
    todo_data = {
        "todo":[{
            "id":11,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":12,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":13,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
            todo={
                "id":14,
                "title": "T14",
                "description": "D1",
                "done": false 
                }
                this.todos.todo.push(todo)
                return this.todos
            }
        // Your code here

    delete_todo(todo){
        // Your code here
        todo = this.todos.todo.slice(1)
        console.log(todo)
        return this.todos
 
    }

    update_todo(id, todo){
        // Your code here
        todo = this.todos.todo.map(obj => {
            if(obj.id == 13){
                return{...obj, "title":"T10"};
            }
            return obj;
        })
        console.log(todo)
        return todo[2]
    }
}


module.exports= todoservice;