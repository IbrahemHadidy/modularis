import { forwardRef } from "react";
import clsx from "clsx";

export type InputFieldProps = {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  status?: "error" | "success";
  id?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef(
  (
    {
      label,
      errorMessage,
      isRequired,
      isDisabled,
      status,
      id,
      className,
      ...props
    }: InputFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-1">
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={clsx(
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
            {
              "border-gray-300": !status,
              "border-red-500 ring-red-200": status === "error",
              "border-green-500 ring-green-200": status === "success",
              "bg-gray-100 cursor-not-allowed": isDisabled,
            },
            className
          )}
          disabled={isDisabled}
          aria-invalid={status === "error"}
          {...props}
        />
        {status === "error" && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

export default InputField;
