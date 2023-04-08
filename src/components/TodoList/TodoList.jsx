import { useSelector } from 'react-redux';
import { Todo, Grid, GridItem } from 'components';

export function TodoList() {
  const todos = useSelector(state => state.todos.items);

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
