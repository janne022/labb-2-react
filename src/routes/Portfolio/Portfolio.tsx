import { useProjects } from "../../api/useProjects";
import TextImageBlock from "../../components/TextImageBlock";

export default function Portfolio() {
  const { data, isLoading } = useProjects();

  return (
    <div className="flex flex-col min-h-screen gap-20">
      <TextImageBlock
        title="My Portfolio"
        text="hello world"
        image={{ filename: "/MILTON.png", alt: "Profile" }}
      />
    </div>
  );
}
