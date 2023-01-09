import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";
export default {
  title: "UI/tags/MyLabel",
  component: MyLabel,
  argTypes: {
    size: {
      control: 'select'
    },
    color: {
      control: 'select'
    }
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

// bind it's like a copy of the object without mutating the origin object

export const Basic = Template.bind({});
Basic.args = {
  label: "hello world",
  size: "normal",
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
  size: "h3",
};
export const Secondary = Template.bind({});

Secondary.args = {
  size: "h2",
  color: "secondary",
};

export const CustomColor = Template.bind({});

CustomColor.args = {
  size: "h1",
  fontColor: "#DF57BC",
};

export const CustomBg = Template.bind({});

CustomBg.args = {
  size: "h1",
  fontColor: "#fff",
  backgroundColor: "#706993"
};



