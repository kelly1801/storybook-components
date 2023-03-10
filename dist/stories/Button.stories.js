import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => _jsx(Button, Object.assign({}, args));
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Rakky',
};
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
