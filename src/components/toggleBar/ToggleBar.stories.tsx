import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToggleBar, { IToggleBarProps } from '.';

export default {
  title: 'Toggle Bar',
  component: ToggleBar,
} as Meta;

const Template: Story<IToggleBarProps> = (args) => <ToggleBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeKey: '2',
  items: [
    {
      key: '1',
      title: 'Exclusive',

    },
    {
      key: '2',
      title: 'Combo',

    },
    {
      key: '3',
      title: 'Voucher',

    },
    {
      key: '4',
      title: 'ABC',

    },
  ],
};
