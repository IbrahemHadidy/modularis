import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Controlled input value",
    },
    status: {
      control: { type: "select" },
      options: [null, "error", "success"],
      description: "Validation status of the field",
    },
    errorMessage: {
      control: "text",
      description: 'Error message to display when status is "error"',
      if: { arg: "status", eq: "error" },
    },
    isRequired: {
      control: "boolean",
      description: "Whether the field is required",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the input field",
    },
    id: {
      control: "text",
      description: "HTML id attribute",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    onChange: {
      action: "changed",
      description: "Callback when input value changes",
    },
  },
  args: {
    label: "Input Field",
    placeholder: "Type something...",
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    label: "Email Address",
    isRequired: true,
    placeholder: "Enter your email",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Password",
    status: "error",
    errorMessage: "Password must be at least 8 characters",
    value: "weak",
  },
};

export const SuccessState: Story = {
  args: {
    label: "Username",
    status: "success",
    value: "available_username",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    isDisabled: true,
    value: "Cannot edit this",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    placeholder: "No label input",
  },
};
