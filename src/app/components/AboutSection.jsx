"use client";
import React, { useTransition, useState, useMemo } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "Experience",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-0.5">SaaS Web Application Developer at Javascript Mastery</h3>
          <p className="text-sm text-gray-500 mb-2">December 2023 - Present</p>
          <ul className="list-disc pl-4">
            <li>Developed a unique Software-as-a-Service (SaaS) application integrating AI-powered features using Next.js 14 and Convex.</li>
            <li>Implemented a text-to-multiple-voices functionality, allowing users to convert text into various synthesized voices.</li>
            <li>Developed and maintained backend services to support AI functionalities, ensuring scalability and performance.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-0.5">Web Developer Intern at Spark Foundation</h3>
          <p className="text-sm text-gray-500 mb-2">April 2024 - May 2024</p>
          <ul className="list-disc pl-4">
            <li>Assisted in the development of website components.</li>
            <li>Participated in team meetings and brainstorming sessions.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-0.5">Web Developer Intern at Oasis Infobyte</h3>
          <p className="text-sm text-gray-500 mb-2">May 2024 - June 2024</p>
          <ul className="list-disc pl-4">
            <li>Worked on front-end development tasks.</li>
            <li>Learned about web development best practices.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
        <li>MySQL</li>
        <li>Generative AI</li>
        <li>Data Analytics</li>
      </ul>
    ),
  },
  {
    title: "Education & Certifications",
    id: "education-certifications",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="list-disc pl-4">
            <li>BE Computer Science (8.9 CGPA)</li>
            <li>Pimpri Chinchwad Education Trust, Pune</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc pl-4">
            <li>Data Structures and Algorithms</li>
            <li>Next.js with Server Side Rendering</li>
            <li>Data Analytics</li>
            <li>Generative AI</li>
            <li>Certified Copyright on Machine Learning using Thoughts of Human Brain</li>
            <li>Certified Copyright on Auto On-Off Power Supply (Switch) On Charging or On Full Charging of Battery</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tabContent = useMemo(() => TAB_DATA.find((t) => t.id === tab)?.content, [tab]);

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/about-image.png"
              alt="About me image"
              width={550}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg mb-8">
              I am a SaaS full stack web developer with a passion for creating
              interactive and responsive web applications with AI. I have experience
              working with JavaScript, TypeScript, React, Redux, MongoDB, Node.js, Express, GraphQL,
              MySQL, HTML, CSS, Git, Data Analytics, and Generative AI. I am a quick learner and always
              looking to expand my knowledge and skill set. I am a team player and
              excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-nowrap overflow-x-auto mb-8">
              {TAB_DATA.map(({ id, title }) => (
                <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                  {title}
                </TabButton>
              ))}
            </div>
            <div>
              {tabContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
