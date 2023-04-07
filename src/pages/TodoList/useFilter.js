import { useCallback, useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState(0);

  const filterTodoList = useCallback(
    (completed) => {
      return (
        (filter === 2 && !completed) ||
        (filter === 1 && completed) ||
        filter === 0
      );
    },
    [filter]
  );

  const FilterComponent = ({ styles }) => {
    return (
      <>
        <span
          className={styles[filter === 0 ? "active" : ""]}
          onClick={() => setFilter(0)}
        >
          All
        </span>
        <span
          className={styles[filter === 1 ? "active" : ""]}
          onClick={() => setFilter(1)}
        >
          Completed
        </span>
        <span
          className={styles[filter === 2 ? "active" : ""]}
          onClick={() => setFilter(2)}
        >
          Incompleted
        </span>
      </>
    );
  };

  return [filterTodoList, FilterComponent];
};

export default useFilter;
