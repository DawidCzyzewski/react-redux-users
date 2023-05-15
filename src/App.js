import { TaskList } from "./components/TaskList/TaskList";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "./redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";

// in selectors there is getTasks. it takes state.tasks from store.js in reducer and tasks are from taskSlice from initial state

const App = () => {
  // Dispatch is activated only once, but I use it in useEffect becouse I should put in ended array all const used in it. No matter if I don't use it, but it will be warning
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // return (
  //   <div>
  //     {isLoading && <h1>Loading!</h1>}
  //     {error && <p>{error} </p>}

  //     <div>{items.length > 0 && JSON.stringify(items)}</div>
  //   </div>
  // );

  return (
    <>
      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <h4>Loading in progress! </h4>}
        {error && <h4>There is error!</h4>}
        <TaskList />
      </Layout>
    </>
  );
};

export default App;
