import {
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Wrench,
  Globe,
} from "lucide-react";
import { useCv } from "../../api/useCv";

export default function CV() {
  const cv = useCv();

  if (!cv) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen gap-20 bg-background text-foreground pb-20">
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between px-8 md:px-20 gap-10 pt-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-7xl md:text-8xl leading-tight font-bold text-primary">
              My Experience
            </h1>
            <p className="text-lg mt-4 text-wrap max-w-xl text-muted-foreground">
              Full Stack .NET student with a passion for creating efficient and
              scalable web applications. Experienced in both frontend and
              backend development, with a strong focus on C#, ASP.NET Core, and
              React. Eager to apply my skills in a dynamic team environment and
              contribute to innovative projects.
            </p>
          </div>
          <a
            href="../data/cv.pdf"
            download
            className="inline-flex w-fit text-white shrink-0 items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest bg-primary hover:bg-primary/90 rounded-md transition focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            DOWNLOAD PDF
            <Download className="ml-2 self-center" size={18} />
          </a>
        </div>
      </section>

      <section className="px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <Briefcase size={28} className="text-primary" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              <div className="flex flex-col gap-10">
                {cv.sections.experience.items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{item.position}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm font-medium">
                      <span>
                        {item.company} &bull; {item.location}
                      </span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <GraduationCap size={28} className="text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="flex flex-col gap-10">
                {cv.sections.education.items?.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{item.area}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm font-medium">
                      <span>
                        {item.school} &bull; {item.degree}
                      </span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <Code size={28} className="text-primary" />
                <h2 className="text-3xl font-bold">Projects</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cv.sections.projects.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      {item.name}
                    </h3>
                    {item.description && (
                      <div
                        className="text-sm text-muted-foreground prose-p:my-1"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                    {item.website?.url && (
                      <a
                        href={item.website.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium hover:underline mt-auto pt-4"
                      >
                        View Project &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-12">
            <div className="flex flex-col gap-6 bg-secondary/20 p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 pb-2">
                <Wrench size={24} className="text-primary" />
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>
              {cv.sections.skills.items.map((skillGroup) => (
                <div key={skillGroup.id} className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium">{skillGroup.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center gap-3 pb-2">
                <Globe size={24} className="text-primary" />
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>
              <div className="flex flex-col gap-4">
                {cv.sections.languages.items.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex justify-between items-center border-b border-border/50 pb-2"
                  >
                    <span className="font-medium text-lg">{lang.language}</span>
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-6 rounded-full ${i < lang.level ? "bg-primary" : "bg-primary/20"}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
