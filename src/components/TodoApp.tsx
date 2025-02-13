import { useState } from "react";
import TodoItem from "./todo/todo-item";

export interface TodoItemProps {
  id?: number;
  description: string;
  done: boolean;
}

export function TodoApp() {
  const [tasks, setTasks] = useState<TodoItemProps[]>([
    {
      id: 1,
      description: "Acheter des oranges",
      done: false,
    },
    {
      id: 2,
      description: "Laver la voiture",
      done: false,
    },
    {
      id: 3,
      description: "Apprendre Angular 2.0",
      done: true,
    },
  ]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (taskTitle !== "") {
      const newTask: TodoItemProps = {
        id: 1,
        description: taskTitle,
        done: false,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
    }
  };

  const handleChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTaskTitle(value);
  };

  return (
    <>
      <div className="flex">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Ajouter une tâche"
            onChange={handleChangeTaskName}
            value={taskTitle}
          />
        </label>

        <button className="btn btn-primary" onClick={handleAddTask}>
          +
        </button>
      </div>

      <div className="my-5 flex-column gap-5 w-full text-left">
        {tasks.map((task, index) => {
          return (
            <TodoItem
              key={index}
              id={task.id}
              description={task.description}
              done={task.done}
            />
          );
        })}
      </div>
    </>
  );
}
