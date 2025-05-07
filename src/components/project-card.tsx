
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {imageSrc && (
          <div className="mb-4 overflow-hidden rounded-md">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto object-cover aspect-[4/3] transition-transform hover:scale-105" 
            />
          </div>
        )}
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
