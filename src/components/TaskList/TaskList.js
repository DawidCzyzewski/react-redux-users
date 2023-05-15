import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
// import { selectStatusFilter, selectTasks} from "../../redux/selectors";
import { selectVisibleTasks } from "../../redux/selectors";

import styles from "./TaskList.module.css";
// import { statusFilters } from "../../redux/constants";

export const TaskList = () => {
  // const tasks = useSelector(selectTasks);
  // const statusFilter = useSelector(selectStatusFilter);
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className={styles.list}>
      {visibleTasks.map((task) => (
        <li className={styles.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
