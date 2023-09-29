

export const addTodo = ( todo, setTodoList, inputChange) => {
  return (
    <>
     <h3>New Todo</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="todo"
              value={todo}
              onChange={inputChange}
              // Evento cuando cambia el valor del input
              onKeyUpCapture={({key}) => {
                if( key === "Enter"){
                  setTodoList([
                    ...todoList,
                    {
                      id: new Date().getTime(),
                      desc: todo,
                      dono: false
                    }
                  ])
                }
              }}
              // Evento cuando presiona tecla Enter en ASCII
            />
    </>
  )
}
