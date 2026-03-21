import { Image } from "@imagekit/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ src }: { src?: string }) {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        <article className="max-w-2xl">
          <p className="text-sm text-center sm:text-start justify-center sm:text-lg text-gray-600">
            Fullstack • Software Engineer • Problem Solver
          </p>
          <h1 className="text-6xl sm:text-8xl font-bold mb-8 text-primary text-center sm:text-start">
            Building <br />
            Scalable <br />
            Systems.
          </h1>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="px-6 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition">
              VIEW MY WORK
            </button>
            <button className="px-6 py-3 font-semibold text-black bg-secondary rounded-lg hover:bg-secondary-dark transition">
              CONTACT ME
            </button>
          </div>
        </article>
        <article className="relative w-full max-w-lg mx-auto lg:max-w-none mb-10">
          <Image
            alt="Profile Image"
            width={500}
            height={500}
            src={src || "/profile.jpg"}
          />
          <div className="absolute z-10 -bottom-8 -left-4 sm:-left-8 bg-background backdrop-blur-sm p-6 shadow-2xl rounded-sm w-64">
            <h3 className="text-xl font-bold mb-3">Johannes Flodin</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/johannesflodin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/johannesflodin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:johannes.flodin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
