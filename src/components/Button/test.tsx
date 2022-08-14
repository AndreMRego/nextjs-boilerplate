import { ReactNode } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/tests/helpers';

import { Button } from '.';

const handleClick = jest.fn();

const makeSut = (children: ReactNode) => {
  const user = userEvent.setup();

  const sut = render(<Button handleClick={handleClick}>{children}</Button>);

  return {
    user,
    ...sut,
  };
};

describe('<Button />', () => {
  it('should render button with cancel text', async () => {
    const { user } = makeSut('cancel');

    const button = screen.getByRole('button', { name: /cancel/i });

    await user.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
