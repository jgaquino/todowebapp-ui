import styles from "./TodoList.module.scss";
import closeIcon from "../../assets/x.svg";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { useAppState } from "../../state";
import {
  CREATE_TODO,
  DELETE_TODO,
  MARK_TODO_COMPLETED_OR_UNCOMPLETED,
  SET_TODOS,
} from "../../state/actions";
import useFilter from "./useFilter";
import useLogout from "../../auth/useLogout";
import { useEffect, useRef } from "react";

const TodoList = () => {
  const shouldGetTodos = useRef(true);
  const logout = useLogout();
  const [state, dispatch] = useAppState();
  const [filterTodoList, FilterComponent] = useFilter();

  useEffect(() => {
    if (shouldGetTodos.current) {
      shouldGetTodos.current = false;
      const getTodos = async () => dispatch(await SET_TODOS());
      getTodos();
    }
  }, []);

  return (
    <>
      <p onClick={logout} className={styles.logout}>
        Logout
      </p>
      <Container width={440}>
        <Header title="Todo List" />

        <main className={styles.Main}>
          <Input
            type="text"
            placeholder="Add a new todo"
            onEnterNewData={async (title) => dispatch(await CREATE_TODO(title))}
          />
          <section>
            {state.todos
              .filter((todo) => filterTodoList(todo.completed))
              .map((todo) => (
                <div key={todo.id}>
                  <Checkbox
                    checked={todo.completed}
                    onChange={async (checked) =>
                      dispatch(
                        await MARK_TODO_COMPLETED_OR_UNCOMPLETED(
                          checked,
                          todo.id
                        )
                      )
                    }
                    label={todo.title}
                  />
                  <img
                    alt="close icon"
                    src={closeIcon}
                    onClick={async () => dispatch(await DELETE_TODO(todo.id))}
                  />
                </div>
              ))}
          </section>
        </main>

        <footer className={styles.Footer}>
          <p>
            <strong>Show:</strong>
            <FilterComponent styles={styles} />
          </p>
        </footer>
      </Container>
    </>
  );
};

export default TodoList;
