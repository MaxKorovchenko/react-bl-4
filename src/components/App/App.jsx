import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
  Filter,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';
export const App = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />
          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
