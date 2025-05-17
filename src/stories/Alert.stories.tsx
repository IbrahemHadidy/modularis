import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "error"],
    },
    message: {
      control: "text",
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Template: Story = {
  render: (args) => <Alert {...args} />,
};

export const Info: Story = {
  ...Template,
  args: {
    type: "info",
    message: "This is an informational message",
  },
};

export const Success: Story = {
  ...Template,
  args: {
    type: "success",
    message: "Operation completed successfully!",
  },
};

export const Error: Story = {
  ...Template,
  args: {
    type: "error",
    message: "Something went wrong. Please try again.",
  },
};

export const Closable: Story = {
  ...Template,
  args: {
    type: "info",
    message: "This alert can be dismissed",
    onClose: () => alert("Alert closed!"),
  },
};
