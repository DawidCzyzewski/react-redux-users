import css from "./TaskForm.module.css";

import { Button } from "../Button/Button";
import { useTask } from "../../contexts/taskContext";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
// import { addTask } from "../../redux/taskSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    dispatch(addTask(
      
      // id: 1,
      form.elements.text.value));
    // dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>{" "}
    </form>
  );
};