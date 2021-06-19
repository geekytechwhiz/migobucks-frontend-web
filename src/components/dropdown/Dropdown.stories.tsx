import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { IDropdownProps } from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'Jhon' },
    { value: '2', label: 'Jane' },
    { value: '3', label: 'Json' },
    { value: '4', label: 'Albert' },
  ],
  value: '1',
  onSelect: console.log,
};
