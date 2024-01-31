import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap cursor-pointer", // Added cursor-pointer for the clickable effect
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  href?: string; // Added href prop for the link
}

function Badge({ className, variant, href, ...props }: BadgeProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank"); // Open the link in a new tab
    }
  };

  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      onClick={handleClick} // Handle click event
      {...props}
    />
  );
}

export { Badge, badgeVariants };
