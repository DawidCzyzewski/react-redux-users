import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { selectStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import styles from "./StatusFilter.module.css";
// import { useFilter } from "../../contexts/filterContext";

// I want to render Status element:
export const StatusFilter = () => {
  // const filters = useFilter()
  // const { status, setStatus, statusFilters } = useFilter();

  // const filter = status;
  // const handleFilterChange = (filter) => setStatus(filter);

  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <>
      <div className={styles.wrapper}>
        <Button
          onClick={() => handleFilterChange(statusFilters.all)}
          type="button"
          selected={filter === statusFilters.all}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilterChange(statusFilters.active)}
          type="button"
          selected={filter === statusFilters.active}
        >
          Active
        </Button>
        <Button
          onClick={() => handleFilterChange(statusFilters.completed)}
          type="button"
          selected={filter === statusFilters.completed}
        >
          Completed
        </Button>
      </div>
    </>
  );
};
