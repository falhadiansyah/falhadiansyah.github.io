
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { Timeline, TimelineItem } from "@/components/timeline";
import { SkillTag } from "@/components/skill-tag";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Contact } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  useEffect(() => {
    document.title = "Firman Alhadiansyah | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="pt-32 pb-20 md:pt-40 md:pb-32 relative"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Avatar className="h-32 w-32 border-2 border-primary">
                <AvatarImage src="/lovable-uploads/photo_cc_square.png" alt="Firman Alhadiansyah" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              Firman Alhadiansyah
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Senior Software Engineer | Backend Developer | Magento & E-Commerce Specialist | PHP, Laravel, Magento, N8N, Shopify | 9+ Years in Scalable Web Solutions
            </p>
            <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild>
                <a href="#about">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:text-white hover:bg-black/40">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Experienced <strong>Software Engineer</strong> with over <strong>11 years in web development and IT infrastructure</strong>, currently working as a <strong>Technical Lead at Icube by Sirclo</strong>. Successfully led <strong>15+ projects</strong> and delivered <strong>16+ e-commerce web applications</strong>, specializing in <strong>Magento 2, PHP, GraphQL, Docker, and OMS development</strong>.
              </p>
              <p>
              Strong background in system integration, cloud computing, and backend architecture.
              </p>
            </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:firman.alhadiansyah@gmail.com" className="text-sm hover:text-primary transition-colors">
                    firman.alhadiansyah@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+6283821716492" className="text-sm hover:text-primary transition-colors">
                    +62 838-2171-6492
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Contact className="w-4 h-4 text-primary" />
                  <span className="text-sm">Cimahi, Indonesia</span>
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
            title="Tech Lead" 
            organization="Icube by Sirclo"
            date="Sep 2022 - Present"
            location="Yogyakarta, Indonesia. Remote from Cimahi"
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Led end-to-end project planning, scope estimation, and resource allocation to ensure timely and cost-effective delivery.</li>
              <li>Designed scalable technical architectures and optimized development workflows for high-performance web applications.</li>
              <li>Directed daily scrum meetings, task assignments, and sprint reviews to maintain progress and team alignment.</li>
              <li>Managed CI/CD pipelines and branching strategies (GitHub/GitLab) for smooth deployment using Jenkins and Buildkite.</li>
              <li>Conducted code reviews, QA testing, and production monitoring to ensure high system stability and minimal post-release issues.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Successfully delivered 10 web applications across 7 projects, helping clients increase e-commerce efficiency.</li>
                <li>Maintained project timelines with 100% on-time go-lives, while keeping bug reports under 5% post-deployment.</li>
                <li>Ensured project budgets stayed within scope, keeping resource usage under allocated limits by 10–15%.</li>
              </ul>
            </div>
          </TimelineItem>
          
          <TimelineItem 
            title="Software Engineer"
            organization="Icube by Sirclo"
            date="Feb 2020 - Aug 2022"
            location="Yogyakarta, Indonesia. Remote from Cimahi"
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Developed and customized Magento 2 modules to support scalable e-commerce features tailored to client needs.</li>
              <li>Built and maintained backend services using PHP, REST APIs, and GraphQL, enabling seamless system integrations.</li>
              <li>Designed and implemented centralized Order Management Systems (OMS) to streamline order flows across multiple sales channels.</li>
              <li>Implemented N8N workflows, Pub/Sub, and RabbitMQ to support automation and real-time communication between systems.</li>
              <li>Integrated shipping providers, payment gateways, ERP systems, and third-party services (Google, Facebook, SAP) for omnichannel support.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Successfully delivered 4 major projects and 4 web apps, contributing to increase in client operational efficiency.</li>
                <li>Created and deployed 10+ custom Magento 2 modules, accelerating development and reducing implementation time.</li>
                <li>Maintained on-time delivery across all projects, achieving less than 5% post-deployment bug/feedback rate.</li>
              </ul>
            </div>
          </TimelineItem>
          
          <TimelineItem 
            title="Backend Developer"
            organization="Kemana Teknologi Solusi"
            date="Apr 2017 - Jan 2020"
            location="Bandung, Indonesia"
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Installed and configured Magento 1 and 2 modules, ensuring secure and scalable application performance.</li>
              <li>Designed and developed custom Magento modules tailored to client-specific workflows, improving operational efficiency.</li>
              <li>Built and maintained RESTful APIs to enable seamless data integration between systems.</li>
              <li>Developed backend systems using PHP and MySQL, focusing on performance optimization and maintainability.</li>
              <li>Implemented and customized frontend components using HTML, CSS, and JavaScript, ensuring responsive and intuitive UI.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Launched 5 production-ready web applications, contributing to increase in client sales.</li>
                <li>Improved system reliability and user experience by reducing frontend load time by 30% through optimized code and structure.</li>
                <li>Enhanced API performance and maintainability, reducing integration-related support tickets.</li>
              </ul>
            </div>
          </TimelineItem>
          
          <TimelineItem 
            title="IT Support Technician"
            organization="Kemana Teknologi Solusi"
            date="Nov 2016 - Mar 2017"
            location="Bandung, Indonesia"
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Installed and maintained LAN infrastructure to ensure secure, high-performance internal network connectivity.</li>
              <li>Configured and optimized Mikrotik routers and wireless access points for stable and seamless office-wide internet access.</li>
              <li>Deployed and managed web servers using Linux/Ubuntu, Nginx/Apache, firewalls, and MySQL to support internal and client-facing apps.</li>
              <li>Installed and configured Windows and Linux OS on user devices, including development environments for the web team.</li>
              <li>Provided day-to-day technical support to internal staff, resolving hardware/software issues and ensuring minimal downtime.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Improved internal network stability by reducing connectivity issues through optimized router and access point configurations.</li>
                <li>Cut average workstation setup time with a streamlined OS and app installation process.</li>
                <li>Maintained 99% system uptime, supporting uninterrupted development operations across the company.</li>
              </ul>
            </div>
          </TimelineItem>
          
          <TimelineItem 
            title="Network Engineer"
            organization="Business Software Solution"
            date="Jul 2014 - Oct 2016"
            location="Bandung, Indonesia"
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Designed and implemented secure LAN and DMZ network infrastructures for government and enterprise clients across Indonesia.</li>
              <li>Configured and maintained routers (Mikrotik, Cisco) and enterprise firewalls (Endian, pfSense, Fortinet, Cisco, SonicWall) to ensure secure and optimized traffic flow.</li>
              <li>Deployed and managed web servers (Linux/Ubuntu, Apache/Nginx, MySQL) and Windows Server systems for virtualization, databases, email, and application hosting.</li>
              <li>Installed and supported SAN and NAS storage systems to meet growing data and performance requirements.</li>
              <li>Provided end-to-end IT infrastructure support, including workstation setup, OS installation, and dev environment configuration for end users.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Improved internal network stability by reducing connectivity issues through optimized router and access point configurations.</li>
                <li>Cut average workstation setup time with a streamlined OS and app installation process.</li>
                <li>Maintained 99% system uptime, supporting uninterrupted development operations across the company.</li>
              </ul>
            </div>
          </TimelineItem>
          
          <TimelineItem 
            title="Network Engineer"
            organization="Lintas Media Danawa"
            date="Jul 2013 - Jun 2014"
            location="Jakarta, Indonesia"
            isLast={true}
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Designed and deployed secure LAN and DMZ infrastructures for enterprise clients to support stable and efficient network operations.</li>
              <li>Installed and configured Linux-based web servers with Nginx/Apache, firewalls, and MySQL to support high-availability applications.</li>
              <li>Provisioned and customized cloud computing environments to improve client scalability and deployment speed.</li>
              <li>Monitored and maintained client servers in data centers, ensuring uptime and rapid incident response.</li>
              <li>Collaborated with internal teams to align infrastructure deployment with application and business requirements.</li>
            </ul>
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Delivered 3+ infrastructure projects, improving network reliability and uptime for multiple enterprise clients.</li>
                <li>Reduced server provisioning time by implementing automated deployment templates.</li>
                <li>Achieved 99.5% server uptime, minimizing service disruptions for high-traffic client systems.</li>
              </ul>
            </div>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <Timeline>
          <TimelineItem
            title="Informatics Engineering, Indonesian Computer University"
            organization="Bachelor Degree"
            date="2014 - 2018"
            location="Bandung, Indonesia"
            isLast={true}
          >
            <p>Graduated with GPA 3.62 (Cumlaude)</p>
          </TimelineItem>
        </Timeline>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Certifications</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold">LinkedIn Learning – Aug 2023</h4>
                <p className="text-sm text-muted-foreground">Building Trust, Crafting Questions to Make Better Decisions, Critical Thinking and Problem Solving, Cultivating a Growth Mindset, Developing Critical Thinking, Decision-Making, and Problem-Solving Skills, Making Quick Decisions, The Six Biases of Decision-Making</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold">Adobe Commerce – Mar 2017</h4>
                <p className="text-sm text-muted-foreground">Core Principles for Theming in Magento 2 (v2.1), Fundamentals of Magento 2 Development (v2.1)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold">Cisco – Sep 2016</h4>
                <p className="text-sm text-muted-foreground">CCNA (Cisco Certified Network Associate)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-secondary/30">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-3">Backend Development</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>PHP</SkillTag>
              <SkillTag>Magento 1 & 2</SkillTag>
              <SkillTag>MySQL</SkillTag>
              <SkillTag>REST API</SkillTag>
              <SkillTag>GraphQL</SkillTag>
              <SkillTag>Order Management System (OMS)</SkillTag>
              <SkillTag>Laravel</SkillTag>
              <SkillTag>CodeIgniter</SkillTag>
              <SkillTag>Shopify</SkillTag>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Frontend Development</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>HTML</SkillTag>
              <SkillTag>CSS</SkillTag>
              <SkillTag>JavaScript</SkillTag>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">DevOps & Infrastructure</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>Docker</SkillTag>
              <SkillTag>CI/CD (Jenkins, Buildkite)</SkillTag>
              <SkillTag>Nginx</SkillTag>
              <SkillTag>Apache</SkillTag>
              <SkillTag>Linux (Ubuntu)</SkillTag>
              <SkillTag>Windows Server</SkillTag>
              <SkillTag>Github</SkillTag>
              <SkillTag>Gitlab</SkillTag>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Cloud & Hosting</h3>
            <div className="flex flex-wrap gap-2">
              <SkillTag>Google Cloud (Pub/Sub, Storage, Firebase, Analytics)</SkillTag>
              <SkillTag>Server Maintenance</SkillTag>
              <SkillTag>Cloud Provisioning</SkillTag>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Networking & Security</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>LAN/DMZ Setup</SkillTag>
              <SkillTag>Firewall (pfSense, Fortinet, SonicWall, Cisco, Endian)</SkillTag>
              <SkillTag>Mikrotik</SkillTag>
              <SkillTag>Cisco Routers</SkillTag>
              <SkillTag>VPN</SkillTag>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">System Integration</h3>
            <div className="flex flex-wrap gap-2">
              <SkillTag>Payment Gateways (Xendit, Midtrans, Iris)</SkillTag>
              <SkillTag>Shipping APIs (JNE, Sicepat, Anteraja, etc.)</SkillTag>
              <SkillTag>SAP</SkillTag>
              <SkillTag>ERP</SkillTag>
              <SkillTag>Middleware API</SkillTag>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Automation & Workflow</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>N8N</SkillTag>
              <SkillTag>Message Queue (RabbitMQ, Google Pub/Sub)</SkillTag>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Monitoring & Testing</h3>
            <div className="flex flex-wrap gap-2">
              <SkillTag>QA Testing</SkillTag>
              <SkillTag>Production Monitoring</SkillTag>
              <SkillTag>Bug Resolution</SkillTag>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Leadership & Team Management</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>Mentoring developers</SkillTag>
              <SkillTag>Delegating tasks</SkillTag>
              <SkillTag>Facilitating scrum meetings</SkillTag>
              <SkillTag>Resolving blockers</SkillTag>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Problem Solving</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>Debugging complex issues</SkillTag>
              <SkillTag>Optimizing systems</SkillTag>
              <SkillTag>Handling production incidents</SkillTag>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectCard 
            title="ID Trapo Asia (2025)" 
            description="I enhanced the order management workflow for Trapo Asia by integrating its Shopify store with a custom OMS. My responsibilities included building modules for order lifecycle management and performance reporting, ensuring smooth coordination across business functions."
            technologies={["Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "Shopify", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Trapo_Responsive.png"
            url="www.trapo.asia"
          />
          <ProjectCard 
            title="Planet Surf (2025)" 
            description="I developed a Shopify-based e-commerce site integrated with an OMS. The solution supported real-time product syncing and seamless order fulfillment. I ensured timely delivery and compatibility across systems."
            technologies={["Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "Shopify", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Planetsurf_Responsive.png"
            url="www.planetsurfonline.com"
          />
          <ProjectCard 
            title="BCA Bangga Lokal (2024)" 
            description="I was responsible for developing the integration between the OMS platform and external advertising systems, specifically Google Ads and Meta Ads. My work centralized campaign tracking and performance data within the OMS, enabling the client to manage digital marketing insights directly from their operational backend. This integration helped streamline advertising effectiveness and budget optimization."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Banggalokal_Responsive.png"
          />
          <ProjectCard 
            title="Urbanicon (2024)" 
            description="I built e-commerce website for both Urbanicon and Fossil, with unified backend infrastructure. The project also included OMS customization for brand-specific processes. Both sites launched successfully with smooth operational integration."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Time_Responsive.png"
            url="www.urbanicon.id"
          />
          <ProjectCard 
            title="Fossil (2024)" 
            description="I built e-commerce website for both Urbanicon and Fossil, with unified backend infrastructure. The project also included OMS customization for brand-specific processes. Both sites launched successfully with smooth operational integration."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Time_Responsive.png"
            url="www.fossil.co.id"
          />
          <ProjectCard 
            title="Sinarmas (2023)" 
            description="I developed and maintained custom OMS components for Bixbox’s B2B operations. These included warehouse syncing features and customized invoicing logic. The system remained stable and responsive during business-critical periods."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Sinarmas_Responsive.png"
            url="bixbox.co.id"
          />
          <ProjectCard 
            title="Belanjaku (2023)" 
            description="I provided continuous support and module development for Belanjaku’s OMS. Enhancements included support for time-sensitive promotions and customer segmentation. The system delivered accurate order handling during peak events."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Belanjaku_Responsive.png"
            url="belanjaku.online"
          />
          <ProjectCard 
            title="Biofarma Medbiz (2022)" 
            description="Working on Biofarma Medbiz, I developed custom OMS features for pharmaceutical order handling. I enhanced modules for stock, compliance, and multi-warehouse support. My efforts ensured the platform could meet operational and regulatory needs."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ"]}
            imageSrc="/lovable-uploads/Biofarma_Responsive.png"
            url="medbiz.id"
          />
          <ProjectCard 
            title="Swift OMS (2021)" 
            description="I maintained and optimized the Swift OMS platform used across multiple clients. My focus was on scaling its performance and customizing order processing logic. The system’s robustness improved under increasing transactional load."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "N8N", "Git", "Docker", "RabbitMQ", "Pub/Sub", "Firebase", "Analytics"]}
            imageSrc="/lovable-uploads/Swiftoms_Responsive.png"
            url="omsdemo-pwa.getswift.asia"
          />
          <ProjectCard 
            title="9to9 (2020)" 
            description="For both brands, I provided technical support for their Magento-based OMS. I implemented shared enhancements for order processing and fulfillment. My role ensured efficient back-office operations and successful promotional campaign support."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "Git", "Docker"]}
            imageSrc="/lovable-uploads/9to9_Responsive.png"
            url="9to9.co.id"
          />
          <ProjectCard 
            title="Hush Puppies (2020)" 
            description="For both brands, I provided technical support for their Magento-based OMS. I implemented shared enhancements for order processing and fulfillment. My role ensured efficient back-office operations and successful promotional campaign support."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "Git", "Docker"]}
            imageSrc="/lovable-uploads/9to9_Responsive.png"
            url="www.hushpuppies.co.id"
          />
          <ProjectCard 
            title="Royal Canin (2020)" 
            description="I contributed to the maintenance and customization of Royal Canin’s order management system (OMS). This involved developing modules that improved logistics workflows and enabled better stock handling. The system was kept stable and efficient for high-volume operations."
            technologies={["Magento 2", "Omni channel OMS", "PHP", "MySQL", "Git", "Docker"]}
            imageSrc="/lovable-uploads/Royalcanin_Responsive.png"
            url="www.royalcanin.com"
          />
          <ProjectCard 
            title="Rocktape (2019)" 
            description="I designed and launched an e-commerce site for Rocktape that aligned with its brand identity. The site was customized to offer a smooth shopping experience, flexible product presentation, and scalable infrastructure to handle promotional traffic."
            technologies={["Magento", "PHP", "MySQL", "Git", "Docker", "Javascript", "HTML", "CSS"]}
            imageSrc="/lovable-uploads/Rocktape_Responsive.png"
          />
          <ProjectCard 
            title="Lejel Shopping (2018)" 
            description="I supported Lejel Shopping’s existing e-commerce site by maintaining and optimizing key modules. I extended features for localized promotions and handled custom development tasks to enhance functionality. The result was a stable and user-friendly shopping platform."
            technologies={["Magento", "PHP", "MySQL", "Git", "Docker", "Javascript", "HTML", "CSS"]}
            imageSrc="/lovable-uploads/Lejel_Responsive.png"
            url="www.lejel.co.id"
          />
          <ProjectCard 
            title="Antenna Pointer (2018)" 
            description="As a final thesis project, I developed a native Android application designed to help users align antennas. The app utilized GPS and orientation sensors to guide users in real time. It was built using Java and Android Studio, delivering a practical and functional tool."
            technologies={["Java", "Android Studio", "XML", "JSON", "SQLite", "GPS", "Orientation sensors"]}
            imageSrc="/lovable-uploads/Antennapointer_Responsive.png"
          />
          <ProjectCard 
            title="Ranch Market (2018)" 
            description="For Ranch Market, I provided maintenance support while also developing custom modules to support advanced catalog and pricing rules. Additionally, I created REST APIs to enable smooth integration with third-party systems such as payment and delivery services."
            technologies={["Magento", "PHP", "MySQL", "Git", "Docker", "Javascript", "HTML", "CSS"]}
            imageSrc="/lovable-uploads/Ranch_Responsive.png"
            url="www.kesupermarket.com"
          />
          <ProjectCard 
            title="Waterbom Bali (2017)" 
            description="I built a Magento-based e-commerce platform to support online ticket and merchandise sales. My role included structuring the site for fast performance and seamless booking flow. The final delivery enabled Waterbom Bali to scale its online presence for seasonal traffic surges."
            technologies={["Magento", "PHP", "MySQL", "Git", "Docker", "Javascript", "HTML", "CSS"]}
            imageSrc="/lovable-uploads/Waterbom_Responsive.png"
            url="www.waterbom-bali.com"
          />
          <ProjectCard 
            title="Meds Tech (2017)" 
            description="I developed a full-featured e-commerce website tailored to the retail needs of the client. The project involved implementing a custom product catalog, shopping cart, and checkout functionality. I delivered the platform with a responsive design optimized for usability and performance."
            technologies={["Magento", "PHP", "MySQL", "Git", "Docker", "Javascript", "HTML", "CSS"]}
            imageSrc="/lovable-uploads/Medstech_Responsive.png"
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
                  <a href="mailto:firman.alhadiansyah@gmail.com" className="hover:text-primary transition-colors">
                    firman.alhadiansyah@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+6283821716492" className="hover:text-primary transition-colors">
                    +62 838-2171-6492
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p>Cimahi, Indonesia</p>
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
                  <a href="https://www.linkedin.com/in/falhadiansyah" className="text-sm text-muted-foreground hover:text-primary">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/falhadiansyah" className="text-sm text-muted-foreground hover:text-primary">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/falhadiansyah" className="text-sm text-muted-foreground hover:text-primary">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
