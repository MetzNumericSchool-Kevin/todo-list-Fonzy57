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
      id: Math.random(),
      description: "Acheter des oranges",
      done: false,
    },
    {
      id: Math.random(),
      description: "Laver la voiture",
      done: false,
    },
    {
      id: Math.random(),
      description: "Apprendre Angular 2.0",
      done: true,
    },
  ]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (taskTitle !== "") {
      const newTask: TodoItemProps = {
        id: Math.random(),
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

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
        {tasks
          .sort((a, b) => Number(a.done) - Number(b.done))
          .map((task, index) => {
            return (
              <TodoItem
                key={index}
                id={task.id}
                description={task.description}
                done={task.done}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            );
          })}
      </div>
    </>
  );
}
