import css from "./Task.module.css";
import { MdClose } from "react-icons/md";
// import { deleteTask, toggleCompleted } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../../redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
