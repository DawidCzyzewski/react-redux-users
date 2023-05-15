import styles from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
// import { selectTasks, selectTasksCount } from "../../redux/selectors";
import { selectTaskCount } from "../../redux/selectors";

export const TaskCounter = () => {
  // const count = useSelector(selectTasksCount);
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      {/* <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p> */}
      <p className={styles.text}>Active: {active}</p>
      <p className={styles.text}>Completed: {completed}</p>
    </div>
  );
};
