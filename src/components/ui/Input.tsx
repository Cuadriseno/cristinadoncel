import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-[600] tracking-[2px] uppercase text-brand-text"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={[
            "w-full px-4 py-2.5 text-[13px] text-brand-text bg-white",
            "border rounded-full outline-none transition-colors",
            "placeholder:text-[#bbb]",
            error
              ? "border-red-400 focus:border-red-500"
              : "border-brand-primary focus:border-brand-secondary",
            "disabled:opacity-50 disabled:pointer-events-none",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />

        {error && (
          <p className="text-[11px] text-red-500 tracking-wide">{error}</p>
        )}
        {hint && !error && (
          <p className="text-[11px] text-[#aaa] tracking-wide">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
