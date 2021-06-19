import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

export default {
    title: "Header",
    component: Header,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
} as Meta;

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({});
Default.args = {};