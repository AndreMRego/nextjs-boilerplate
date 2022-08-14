import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

export const Basic: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

Basic.args = {
  handleClick: () => null,
  children: 'cancel',
};
