import { ReactNode } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => (
  <S.Wrapper onClick={handleClick}>{children}</S.Wrapper>
);

export { Button };
