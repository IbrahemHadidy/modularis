import clsx from "clsx";

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({
  title,
  subtitle,
  image,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white h-fit rounded-lg shadow-md p-4 border border-gray-100",
        className
      )}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain mb-4 rounded"
        />
      )}
      {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
      {subtitle && <p className="text-gray-600 text-sm mb-2">{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card;
