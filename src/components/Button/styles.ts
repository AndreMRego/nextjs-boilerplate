import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
  `}
`;
