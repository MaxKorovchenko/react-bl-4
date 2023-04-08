import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

import { InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <InputFilter
      type="text"
      placeholder="Find todo"
      onChange={evn => dispatch(addFilter(evn.target.value))}
    />
  );
};
