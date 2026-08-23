type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const extra = external
    ? { target: "_blank" as const, rel: "noreferrer" }
    : {};

  if (variant === "ghost") {
    return (
      <a href={href} className={`hero-ghost ${className}`.trim()} {...extra}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`hero-btn ${className}`.trim()} {...extra}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
