import cv from "../data/cv.json";
import type { Cv } from "../types";

// Custom hook for caching
export const useCv = () => {
  return cv as Cv;
};
