import axios from "axios";
import manualProjects from "../data/manualProjects.json";
import { useQuery } from "@tanstack/react-query";
import type { Projects } from "../types";

// Fetch projects from github and combine them with manual json file
const fetchProjects = async (): Promise<Projects> => {
  const username: string = "janne022";
  const manualProject = manualProjects as Projects;
  try {
    // Fetch projects. I only want bank appen though lol
    const response = await axios.get<Projects>(
      `https://api.github.com/search/repositories?q=user:${username}+fork:false&sort=stars&order=desc&per_page=1`,
    );

    response.data.items = [...manualProject.items, ...response.data.items];
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.status, error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
    throw error;
  }
};

// Custom hook for caching
export const useProjects = () => {
  return useQuery({
    queryKey: ["projectsData"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 30, // 30 min
  });
};
