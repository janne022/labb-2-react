import React from "react";
import { useProjects } from "../../api/useProjects";
import Modal from "../../components/Modal";
import TextImageBlock from "../../components/TextImageBlock";

export default function Portfolio() {
  const { data, isLoading } = useProjects();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen gap-20">
      <h1 className="text-5xl font-bold text-primary mt-12 mx-5">Portfolio</h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-100">
          <p className="text-lg text-gray-500 animate-pulse font-semibold">
            Loading highlighted works...
          </p>
        </div>
      ) : (
        <>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
            <p className="text-lg">
              Welcome to my portfolio! Here you can find information about my
              projects and skills.
            </p>
          </Modal>
          {data?.items?.map((item) => (
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
              onButtonClick={() => setIsModalOpen(true)}
            />
          ))}
        </>
      )}
    </div>
  );
}
