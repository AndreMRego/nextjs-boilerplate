import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
  `}
`;
