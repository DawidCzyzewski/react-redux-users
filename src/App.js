import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TasksPage } from "./pages/TasksPage";

// in selectors there is getTasks. it takes state.tasks from store.js in reducer and tasks are from taskSlice from initial state

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
};

export default App;
