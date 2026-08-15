import { forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: false;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white border border-brand-primary hover:bg-brand-soft hover:border-brand-soft hover:text-brand-secondary",
  outline:
    "bg-transparent text-brand-primary border border-brand-primary hover:text-brand-secondary hover:border-brand-secondary",
  ghost:
    "bg-transparent text-brand-primary border border-transparent hover:text-brand-secondary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-[11px] tracking-[2px]",
  md: "px-5 py-2 text-[12px] tracking-[2px]",
  lg: "px-7 py-3 text-[13px] tracking-[2px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "outline",
      size = "md",
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={[
          "inline-flex items-center justify-center rounded-full font-[600] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonVariant, ButtonSize, ButtonProps };
