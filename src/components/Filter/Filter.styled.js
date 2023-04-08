import styled from '@emotion/styled';

export const InputFilter = styled.input`
  display: block;
  width: ${({ theme }) => theme.spacing(50)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-color: transparent;

  &::placeholder {
    font-weight: 200;
  }
`;
