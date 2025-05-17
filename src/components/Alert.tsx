import clsx from "clsx";

interface AlertProps {
  type?: "info" | "success" | "error";
  message: string;
  onClose?: () => void;
  className?: string;
}

const Alert = ({ type = "info", message, onClose, className }: AlertProps) => {
  const alertStyles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={clsx(
        "p-3 rounded-md mb-4 flex justify-between items-center",
        alertStyles[type],
        className
      )}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-xl font-semibold hover:opacity-75"
          aria-label="Close alert"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
