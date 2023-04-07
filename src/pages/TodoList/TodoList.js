import React from "react";
import styles from "./TodoList.module.scss";
import closeIcon from "../../assets/x.svg";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

const TodoList = () => {
  return (
    <Container width={440}>
      <Header title="Todo List" />

      <main className={styles.Main}>
        <Input placeholder="Add a new todo" />
        <section>
          <div>
            <Checkbox label="Make a todo list" />
            <img alt="close icon" src={closeIcon} />
          </div>
          <div>
            <Checkbox label="Check off first item" />
            <img alt="close icon" src={closeIcon} />
          </div>
          <div>
            <Checkbox label="Realize you already did 2 things today" />
            <img alt="close icon" src={closeIcon} />
          </div>
          <div>
            <Checkbox label="Reward yourself with a nice, long nap" />
            <img alt="close icon" src={closeIcon} />
          </div>
        </section>
      </main>

      <footer className={styles.Footer}>
        <p>
          <strong>Show:</strong>
          <span href="#">All</span>
          <span href="#">Completed</span>
          <span href="#">Incompleted</span>
        </p>
      </footer>
    </Container>
  );
};

export default TodoList;
