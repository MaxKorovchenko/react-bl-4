import { useSelector } from 'react-redux';
import { Todo, Grid, GridItem } from 'components';
import { selectTodos } from 'redux/selectors';
import { selectFilteredTodos } from 'redux/selectors';
export function TodoList() {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
}
