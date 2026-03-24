import { Image } from "@imagekit/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Hero({ src }: { src?: string }) {
  return (
    <section className="flex-1 flex items-center justify-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        <article className="max-w-2xl">
          <p className="text-xs text-center sm:text-start justify-center sm:text-lg text-gray-600">
            Fullstack &bull; Software Engineer &bull; Problem Solver
          </p>
          <h1 className="text-6xl sm:text-8xl font-bold mb-8 text-primary text-center sm:text-start leading-[1.1] tracking-tight">
            Building <br />
            Scalable <br />
            Systems.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              to="/portfolio"
              className="px-3 py-2 sm:px-6 sm:py-3 mx-auto sm:mx-0 font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              VIEW MY WORK
            </Link>
            <a
              href="mailto:johannes.flodin@gmail.com"
              className="px-3 py-2 sm:px-6 sm:py-3 mx-auto sm:mx-0 font-semibold text-black bg-surface-alt hover:bg-surface-alt-hover rounded-lg transition focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              GET IN TOUCH
            </a>
          </div>
        </article>
        <article className="relative w-full max-w-lg mx-auto lg:max-w-none mb-10">
          <Image
            alt="Profile Image"
            width={500}
            height={500}
            src={src || "/profile.jpg"}
          />
          <div className="absolute z-10 -bottom-8 sm:-left-8 bg-background backdrop-blur-sm p-6 shadow-2xl rounded-sm w-64">
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
