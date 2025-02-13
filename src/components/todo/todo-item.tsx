import { TodoItemProps } from "../TodoApp";

const TodoItem = ({ id, description, done }: TodoItemProps) => {
  return (
    <div
      className={`${
        done ? "bg-indigo-900" : "bg-indigo-700"
      }  w-full m-5 rounded-box p-3 flex`}
    >
      <span className="pr-8">
        <input type="checkbox" className="checkbox" checked={done} />
      </span>
      <span className={`${done ? "line-through" : ""} flex-grow`}>
        {description}
      </span>
      <div>
        <button className="btn btn-error btn-outline btn-xs">X</button>
      </div>
    </div>
  );
};

export default TodoItem;
