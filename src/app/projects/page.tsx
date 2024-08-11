"use client";
import { useState, useEffect } from "react";
import {projectData} from  '@/utils/projects'
import Layout from '@/components/common/Layout'
import {  Container } from 'react-bootstrap'
import styles from './page.module.css'

interface Project {
  id: number;
  title: string;
  description: string;
  abstract: string;
  technologies: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const data = projectData[0];
      setProjects(data.projects);
    
  }, []);

  return (
    <>
    <Layout>
        <Container className={styles.main}>
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Student Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out some of the awesome projects that our students have been working on!
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              onClick={(event) =>{event.preventDefault(); handleProjectClick(project)}}
            >
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-extrabold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-block px-2 py-1 mr-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {selectedProject && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div
        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={() => handleCloseModal()}
              >
              Close
            </button>
          </span>
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                {selectedProject.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  {selectedProject.description}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  {selectedProject.abstract}
                </p>
              </div>
              <div className="mt-2">
                <ul className="list-disc list-inside text-sm leading-5 text-gray-500">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      className="object-cover h-48 w-full"
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    )}


</Container>
      </Layout>
    </>
  );
}

export default Projects;
