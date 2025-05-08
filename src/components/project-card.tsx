import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillTag } from "./skill-tag";
import { Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  className?: string;
  url?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  className,
  url,
}: ProjectCardProps) {
  const CardWrapper = url ? 'a' : 'div';
  
  return (
    <CardWrapper 
    /*
      href={url} 
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      className={url ? "block no-underline" : undefined}
    */
    >
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
                className="w-full h-auto object-cover aspect-[3/2] transition-transform hover:scale-105" 
              />
            </div>
          )}
          <CardDescription className="mb-4 font-semibold"><p>{description}</p></CardDescription>
          <CardDescription className="mb-4">{url ? <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-primary" /><a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">{url}</a></div> : ""}</CardDescription>
          <div className="flex flex-wrap gap-1 mt-2">
            {technologies.map((tech) => (
              <SkillTag>
                {tech}
              </SkillTag>
            ))}
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
