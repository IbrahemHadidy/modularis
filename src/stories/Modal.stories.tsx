import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal, { type ModalProps } from "../components/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Modal header text",
    },
  },
  args: {
    title: "Default Modal Title",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

type ModalTriggerProps = {
  args: Omit<ModalProps, "isOpen" | "onClose">; 
};

const ModalTrigger = ({ args }: ModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalTrigger args={args} />,
  args: {
    children: (
      <div className="space-y-4">
        <p>This is a basic modal with some content</p>
        <div className="flex justify-end space-x-2">
          <button className="px-3 py-1.5 bg-gray-200 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </div>
      </div>
    ),
  },
};

export const ScrollableContent: Story = {
  render: (args) => <ModalTrigger args={args} />,
  args: {
    title: "Long Content Modal",
    children: (
      <div className="max-h-[60vh] overflow-y-auto pr-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="mb-3">
            Section {i + 1}: Lorem ipsum dolor sit amet...
          </p>
        ))}
      </div>
    ),
  },
};

export const NoTitle: Story = {
  render: (args) => <ModalTrigger args={args} />,
  args: {
    title: undefined,
    children: (
      <div>
        <p>This modal has no title</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
            Close
          </button>
        </div>
      </div>
    ),
  },
};
