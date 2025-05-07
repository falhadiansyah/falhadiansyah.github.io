
import { cn } from "@/lib/utils";

interface SkillTagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green" | "blue" | "orange" | "purple";
}

export function SkillTag({ 
  children, 
  className,
  variant = "default" 
}: SkillTagProps) {
  const variantClasses = {
    default: "bg-primary/10 text-primary",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
    purple: "bg-purple-100 text-purple-800"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
