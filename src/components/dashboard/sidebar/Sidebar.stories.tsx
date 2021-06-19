import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar, { ISidebarProps } from '.';

export default {
  title: 'Dashboard/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: '200px', fontFamily: 'sans-serif' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story<ISidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  brandInfo: {
    name: 'Apple',
    category: 'Computer company',
  },
};
