import { TodoItemProps } from "../TodoApp";

interface TodoItemComponentProps extends TodoItemProps {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  description,
  done,
  onToggle,
  onDelete,
}: TodoItemComponentProps) => {
  return (
    <div
      className={`${
        done ? "bg-indigo-900" : "bg-indigo-700"
      }  w-full m-5 rounded-box p-3 flex`}
    >
      <span className="pr-8">
        <input
          type="checkbox"
          className="checkbox"
          checked={done}
          onChange={() => onToggle(id!)}
        />
      </span>
      <span className={`${done ? "line-through" : ""} flex-grow`}>
        {description}
      </span>
      <div>
        <button
          className="btn btn-error btn-outline btn-xs"
          onClick={() => onDelete(id!)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
