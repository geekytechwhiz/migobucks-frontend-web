import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { IButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  label: 'Primary Outlined Button',
  variant: 'primary-outlined',
};
