const SocialLinks = () => {
  return (
    <>
      <a
        className="mx-1 text-neutral-500 hover:text-primary"
        href="https://www.linkedin.com/in/johannes-flodin-2676ba21a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="mx-1 text-neutral-500 hover:text-primary"
        href="https://github.com/janne022"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </>
  );
};

export default function Footer() {
  return (
    <footer className="flex items-center w-full px-4">
      <div className="flex-1" />
      <div className="hidden md:flex justify-center flex-1">
        <p>©2026 All rights reserved</p>
      </div>
      <div className="flex-1 flex justify-end">
        <SocialLinks />
      </div>
    </footer>
  );
}
