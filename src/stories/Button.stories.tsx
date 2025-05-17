import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "color" },
    },
    iconLeft: {
      control: { type: "text" },
    },
    iconRight: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const WithIcons: Story = {
  args: {
    iconLeft: "🌟",
    iconRight: "➡️",
    children: "Button with Icons",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const CustomColor: Story = {
  args: {
    color: "#ff00ff",
    children: "Custom Color",
  },
};

export const SmallSize: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const LargeSize: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};
