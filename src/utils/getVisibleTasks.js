export const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.all:
      return tasks;
    case statusFilter.active:
      return tasks.filter((task) => !task.completed);
    case statusFilter.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};
