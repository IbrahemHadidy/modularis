import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";
import wirelessHeadphones from "../assets/wireless-headphones.jpg";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Main heading of the card",
    },
    subtitle: {
      control: "text",
      description: "Secondary text below the title",
    },
    image: {
      control: "text",
      description: "URL for the card image",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    children: {
      description: "Custom content for the card body",
    },
  },
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const ProductCard: Story = {
  args: {
    title: "Wireless Headphones",
    subtitle: "Noise cancelling, 30hr battery",
    image: wirelessHeadphones,
    children: (
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Add to Cart
      </button>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    title: "John Doe",
    subtitle: "Frontend Developer",
    children: (
      <div className="space-y-2">
        <p className="text-gray-600">Skills: React, TypeScript, CSS</p>
        <button className="text-sm text-blue-600 hover:underline">
          View Profile
        </button>
      </div>
    ),
  },
};

export const MinimalCard: Story = {
  args: {
    title: "Minimal Card",
    children: <p>This card shows minimal content</p>,
  },
};