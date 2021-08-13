import React from 'react';
import { Story, Meta } from '@storybook/react';  
import Tab, { ITabProps } from './index';

export default {
  title: 'Toggle Bar',
  component: Tab,
} as Meta;

const Template: Story<ITabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeKey: '2',
  items: [
    {
      key: '1',
      title: 'All',

    },
    {
      key: '2',
      title: 'Standard',

    },
    {
      key: '3',
      title: 'Customized',

    } 
  ],
};
