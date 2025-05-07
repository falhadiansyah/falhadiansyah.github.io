
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  location?: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  organization,
  date,
  location,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-3 top-5 -translate-x-1/2 h-full w-0.5 bg-border"></div>
      )}
      <div className="absolute left-3 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background"></div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium text-foreground">{organization}</span>
          {location && (
            <>
              <span className="hidden sm:inline mx-2">•</span>
              <span>{location}</span>
            </>
          )}
          <span className="hidden sm:inline mx-2">•</span>
          <span>{date}</span>
        </div>
        <div className="prose prose-sm dark:prose-invert">{children}</div>
      </div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}
