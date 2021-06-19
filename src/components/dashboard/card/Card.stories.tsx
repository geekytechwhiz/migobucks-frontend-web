import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './index';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story = (args) => <Card />;

export const Default = Template.bind({});
Default.args = {

};
