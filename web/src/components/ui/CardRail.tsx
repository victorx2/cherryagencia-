import { Children, type ReactNode } from "react";

export function CardRail({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="card-rail" aria-label={label}>
      <div className="card-rail-track" role="list">
        {Children.map(children, (child) => (
          <div className="card-rail-item" role="listitem" tabIndex={0}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
