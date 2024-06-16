"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real time React Admin Dashboard",
    description: "Build an admin dashboard with full authentication, a homepage displaying charts and activities, a comprehensive table for companies with CRUD and search, and a Kanban board with real-time synchronization.",
    image: "/images/projects/S.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nishant-chaudhari-7/Refine-Admin-Dashboard",
    previewUrl: "https://refine-admin-dashboard-two.vercel.app",
  },
  {
    id: 2,
    title: "AI SaaS Podcast Application",
    description: "Developed a unique Software-as-a-Service (SaaS) application using Next.js 14 and Convex, featuring AI-powered functionalities. Implemented text-to-multiple-voices conversion and AI-generated images based on user prompts. Ensured seamless integration and user-friendly interface for enhanced user experience.",
    image: "/images/projects/pod.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React 3D Portfolio",
    description: "This 3D portfolio offers a customizable hero section with a desktop model, fostering engagement through interactive experience and work sections. Showcasing skills with 3D geometries via Three.js and React Three Fiber, it animates projects and testimonials for added dynamism. Integrating a 3D earth model in the contact section, it generates stars dynamically and ensures seamless animations across devices, delivering a captivating and responsive user experience",
    image: "/images/projects/S2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nishant-chaudhari-7/3D_Portfolio",
    previewUrl: "//3-d-portfolio-nishant.vercel.app",
  },
  {
    id: 4,
    title: "3D Shirt Website",
    description: "Developed a dynamic T-shirt customization website featuring user-uploaded patterns and logos, displayed in a 3D view for interactive design visualization. Integrated OpenAI to generate AI-powered patterns and logos based on user prompts. Enabled users to save and share their unique T-shirt designs as downloadable images",
    image: "/images/projects/S4.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Nishant-chaudhari-7/3D_Shirt_Website",
    previewUrl: "//3-d-shirt-website.vercel.app",
  },
  {
    id: 5,
    title: "A Modern E-Commerce-Store for Custom Phone Cases",
    description: "Built entirely from scratch using Next.js 14, this comprehensive shop features a stunning landing page and custom artworks crafted by a professional illustrator. With a secret admin dashboard for order management, customers can enjoy seamless drag-and-drop file uploads and make direct purchases. The shop boasts a modern UI built on shadcn-ui, includes a fully customizable phone case configurator, and implements authentication using Kinde. Customers receive beautiful thank-you emails post-purchase, and the entire project is written in TypeScript for reliability and scalability",
    image: "/images/projects/S5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Full-stack React Native App",
    description: "This app offers an engaging onboarding screen, robust email authentication, and a dynamic home screen featuring an animated flat list of the latest videos. Users can refresh content with a pull gesture, perform full-text searches with real-time suggestions, and navigate seamlessly using tab navigation. The app includes a media upload feature for video and image posts, a profile screen with detailed insights, and dynamic animations to enhance user interaction. Designed for responsiveness, it ensures smooth performance across all devices.",
    image: "/images/projects/S6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
