import React from "react";
import { useProjects } from "../../api/useProjects";
import Modal from "../../components/Modal";
import TextImageBlock from "../../components/TextImageBlock";
import type { ProjectItem } from "../../types";

export default function Portfolio() {
  const { data, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectItem | null>(null);

  const isModalOpen = !!selectedProject;

  return (
    <div className="flex flex-col min-h-screen gap-20 justify-center items-center">
      <h1 className="text-5xl font-bold text-primary mt-12 text-center">
        Portfolio
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-100">
          <p className="text-lg text-gray-500 animate-pulse font-semibold">
            Loading highlighted works...
          </p>
        </div>
      ) : (
        <>
          <Modal isOpen={isModalOpen} onClose={() => setSelectedProject(null)}>
            {selectedProject && (
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.name}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {selectedProject.description || "No description provided."}
                </p>
                <a
                  href={selectedProject.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline mt-auto pt-4"
                >
                  View Project &rarr;
                </a>
              </div>
            )}
          </Modal>
          {data?.items?.map((item, index) => (
            <TextImageBlock
              key={item.id}
              title={item.name}
              text={item.description || "No description provided."}
              image={
                { filename: item.image_url, alt: item.name } as {
                  filename: string;
                  alt: string;
                }
              }
              onButtonClick={() => setSelectedProject(item)}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </>
      )}
    </div>
  );
}
