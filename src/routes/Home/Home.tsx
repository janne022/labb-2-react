import { Image } from "@imagekit/react";
import { useProjects } from "../../api/useProjects";
import { BentoGrid } from "../../components/BentoGrid";
import Hero from "../../components/Hero";

export default function Home() {
  const { data, isLoading } = useProjects();

  // 4 bento boxes with various sizes abd colors
  const layoutPattern = [
    "md:col-span-2 md:row-span-3 bg-white",
    "md:col-span-1 md:row-span-5 bg-primary text-white",
    "md:col-span-1 md:row-span-2 bg-surface-alt text-gray-900",
    "md:col-span-1 md:row-span-2 bg-white text-gray-900",
  ];
  const bentoItems = data
    ? // We slice to 4 of total projects
      data.items.slice(0, 4).map((project, index) => ({
        id: project.id,
        // grab the pattern
        className: layoutPattern[index],
        content: (
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full w-full p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {project.name}
            </h3>

            <p className="text-sm opacity-80 line-clamp-6 mt-2">
              {project.description || "No description provided."}
            </p>
            <picture className="justify-center items-start flex rounded-2xl overflow-hidden mt-4">
              {project.image_url && (
                <Image
                  src={project.image_url}
                  alt={`${project.name} preview`}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              )}
            </picture>
            <div className="mt-auto pt-4 flex gap-2">
              <span className="text-xs font-semibold px-2 py-1 bg-black/10 rounded">
                {project.language || "Unknown"}
              </span>
            </div>
          </a>
        ),
      }))
    : [];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <Hero src="/profile.jpg" />
      <BentoGrid items={bentoItems} />
    </div>
  );
}
