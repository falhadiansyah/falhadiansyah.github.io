
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { Timeline, TimelineItem } from "@/components/timeline";
import { SkillTag } from "@/components/skill-tag";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Mail, Phone, Contact } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Firman Alhadiansyah | Software Engineer";
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Firman Alhadiansyah
              </h1>
              <p className="text-xl mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
                Experienced Software Engineer with expertise in Web Development and IT infrastructure
              </p>
              <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Button asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#experience">View Experience</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Experienced Software Engineer with over 8 years of web development and IT infrastructure expertise, working as a back-end and front-end developer for the projects and products at e-commerce web applications, specializing in Magento 2, PHP, GraphQL, Docker, and REST development.
              </p>
              <p>
                Skilled in creating scalable and maintainable applications. Passionate about delivering high-quality solutions and continuously learning new technologies.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:firman@example.com" className="text-sm hover:text-primary transition-colors">
                      firman@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+6282225572870" className="text-sm hover:text-primary transition-colors">
                      +62 822-2557-2870
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Contact className="w-4 h-4 text-primary" />
                    <span className="text-sm">Jakarta, Indonesia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Work Experience" className="bg-secondary/30">
          <Timeline>
            <TimelineItem 
              title="Senior Software Engineer" 
              organization="PT. Merdeka.com"
              date="Nov 2020 - Present"
              location="Jakarta, Indonesia"
            >
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Analyzed and optimized Magento 2 modules to improve functional workflow based on client needs.</li>
                <li>Extended and customized Magento 2 modules to build a functional and reliable application.</li>
                <li>Built and configured REST APIs to enable services like image batch processes.</li>
                <li>Configured and maintained MySQL database for data storage and optimization.</li>
                <li>Created system designs, implemented application workflows, and led all phases of project development using REST APIs and GraphQL.</li>
              </ul>
              <div className="mt-3">
                <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  <li>Increased application performance by optimizing code structure and database queries.</li>
                  <li>Successfully integrated third-party modules with existing systems.</li>
                  <li>Reduced page load time by 40% by implementing advanced caching.</li>
                </ul>
              </div>
            </TimelineItem>
            
            <TimelineItem 
              title="IT Support Technician"
              organization="Surya Citra Televisi"
              date="Nov 2019 - Oct 2020"
              location="Jakarta, Indonesia"
            >
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Provided user support with hardware and software issues for 300+ employees.</li>
                <li>Configured and deployed Windows and Linux OS server clusters, including fault-tolerant systems.</li>
                <li>Installed and maintained network equipment including routers, firewalls, switches, and Wi-Fi APs.</li>
                <li>Designed multi-branch network topology for expanding the organization's reach.</li>
                <li>Implemented backup strategies to ensure data integrity and disaster recovery.</li>
              </ul>
            </TimelineItem>
            
            <TimelineItem 
              title="Software Engineer"
              organization="Radhian Tekno Solusi"
              date="Jul 2018 - Sep 2019"
              location="Jakarta, Indonesia"
            >
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Developed web interfaces using PHP, MySQL, REST APIs, and GraphQL creating scalable applications.</li>
                <li>Designed database structures using MySQL and MongoDB for efficient data storage.</li>
                <li>Implemented and optimized stored procedures in MySQL to enhance application performance.</li>
                <li>Created REST APIs for platform integrations, enabling integration with third-party services.</li>
                <li>Supported QA and production environments, assuring high standards of code quality.</li>
              </ul>
            </TimelineItem>
            
            <TimelineItem 
              title="Software Engineer"
              organization="Centro Media Indonesia"
              date="Jul 2017 - Jun 2018"
              location="Jakarta, Indonesia"
              isLast={true}
            >
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Designed and deployed internal CMS from analysis to migration for WordPress, Drupal, and PHP sites.</li>
                <li>Improved user experience and interface by implementing responsive design principles.</li>
                <li>Collaborated with cross-functional teams to achieve project goals and ensure client satisfaction.</li>
                <li>Maintained and updated existing websites, improving functionality and security.</li>
              </ul>
            </TimelineItem>
          </Timeline>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <Timeline>
            <TimelineItem
              title="Bachelor's in Engineering, Information Technology"
              organization="Gunadarma University"
              date="2014 - 2018"
              location="Depok, Indonesia"
            >
              <p>Graduated with a focus on web development and information systems.</p>
            </TimelineItem>

            <TimelineItem
              title="LinkedIn Learning"
              organization="Online Courses"
              date="March 2022"
              isLast={true}
            >
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Building RESTful APIs with PHP for Modern Web Development</li>
                <li>Advanced MySQL Techniques for Database Optimization</li>
                <li>Docker: Containerization for Full Stack Applications</li>
                <li>CI/CD Pipelines for Web Applications</li>
                <li>GraphQL: Building Efficient Data APIs</li>
                <li>Security Best Practices for Web Applications</li>
              </ul>
            </TimelineItem>
          </Timeline>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Adobe Certified Associate</h4>
                  <p className="text-sm text-muted-foreground">Magento 2 Certified Developer</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Oracle Certified Professional</h4>
                  <p className="text-sm text-muted-foreground">MySQL 5.7 Database Administrator</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Cisco Certified</h4>
                  <p className="text-sm text-muted-foreground">Network Associate (CCNA)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" className="bg-secondary/30">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <SkillTag>PHP</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>MySQL</SkillTag>
                <SkillTag>REST API</SkillTag>
                <SkillTag>GraphQL</SkillTag>
                <SkillTag>MongoDB</SkillTag>
                <SkillTag>CSS</SkillTag>
                <SkillTag>HTML</SkillTag>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <SkillTag>Magento 2</SkillTag>
                <SkillTag>Laravel</SkillTag>
                <SkillTag>WordPress</SkillTag>
                <SkillTag>CodeIgniter</SkillTag>
                <SkillTag>jQuery</SkillTag>
                <SkillTag>React</SkillTag>
                <SkillTag>Docker</SkillTag>
                <SkillTag>Git</SkillTag>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">DevOps & Infrastructure</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <SkillTag>Linux</SkillTag>
                <SkillTag>Windows Server</SkillTag>
                <SkillTag>Network Management</SkillTag>
                <SkillTag>AWS</SkillTag>
                <SkillTag>CI/CD</SkillTag>
                <SkillTag>Shell Scripting</SkillTag>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <SkillTag>Team Leadership</SkillTag>
                <SkillTag>Project Management</SkillTag>
                <SkillTag>Agile Methodologies</SkillTag>
                <SkillTag>Problem Solving</SkillTag>
                <SkillTag>Technical Documentation</SkillTag>
                <SkillTag>Client Communication</SkillTag>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="DR. IAN" 
              description="Responsive e-commerce website for a healthcare provider featuring appointment scheduling and product sales."
              technologies={["React", "Node.js", "MongoDB", "Express", "Responsive Design"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="JLPT N2" 
              description="Educational platform for Japanese language learners preparing for the JLPT N2 exam with practice tests and study materials."
              technologies={["Vue.js", "Firebase", "Tailwind CSS", "i18n"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="DESTREE" 
              description="Real estate management system for property listings and client management with advanced filtering options."
              technologies={["Angular", "PHP", "MySQL", "Bootstrap", "Google Maps API"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="OTTO" 
              description="Mobile application for food delivery service with real-time order tracking and payment integration."
              technologies={["React Native", "Redux", "Firebase", "Stripe API"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="UHSCS" 
              description="University health services management system for appointment scheduling and medical records management."
              technologies={["PHP", "Laravel", "MySQL", "jQuery", "HIPAA Compliance"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="HERITAGE" 
              description="Cultural heritage documentation platform featuring interactive maps and multimedia content for historical sites."
              technologies={["JavaScript", "Leaflet.js", "MongoDB", "Express", "AWS S3"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="CO-OP" 
              description="Mobile app for community cooperative businesses to manage shared resources and coordinate activities."
              technologies={["Flutter", "Dart", "Firebase", "Google Cloud"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
            <ProjectCard 
              title="AGRITECH" 
              description="Agricultural technology platform for farmers to monitor crops, track weather patterns, and optimize irrigation systems."
              technologies={["IoT", "Python", "Django", "React", "TensorFlow"]}
              imageSrc="/lovable-uploads/9354212f-2de0-4dda-b0ee-c8456d56ce9a.png"
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact Me" className="bg-secondary/30">
          <div className="max-w-xl mx-auto">
            <p className="text-center mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:firman@example.com" className="hover:text-primary transition-colors">
                      firman@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+6282225572870" className="hover:text-primary transition-colors">
                      +62 822-2557-2870
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Jakarta, Indonesia</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Available for remote work and relocations for the right opportunity.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Firman Alhadiansyah. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
