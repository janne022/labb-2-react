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
    <div className="flex flex-col min-h-screen gap-20 bg-background text-foreground pb-20 print:bg-white print:text-black print:gap-8 print:pb-0">
      <section className="print:pt-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between px-8 md:px-20 gap-10 pt-20 print:px-0 print:pt-4 print:gap-4">
          <div className="flex flex-col gap-6 max-w-3xl print:gap-2">
            <h1 className="text-7xl md:text-8xl leading-tight font-bold text-primary print:text-5xl print:text-black">
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
            className="inline-flex w-fit text-white shrink-0 items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest bg-primary hover:bg-primary/90 rounded-md transition focus:ring-2 focus:ring-offset-2 focus:ring-primary print:hidden"
          >
            DOWNLOAD PDF
            <Download className="ml-2 self-center" size={18} />
          </a>
        </div>
      </section>

      <section className="px-8 md:px-20 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 print:block print:space-y-12">
          <div className="lg:col-span-2 flex flex-col gap-16 print:gap-8">
            <div className="flex flex-col gap-8 print:gap-4 print:break-inside-avoid">
              <div className="flex items-center gap-3 border-b border-border pb-3 print:border-black">
                <Briefcase
                  size={28}
                  className="text-primary print:text-black"
                />
                <h2 className="text-3xl font-bold print:text-black">
                  Experience
                </h2>
              </div>
              <div className="flex flex-col gap-10 print:gap-6">
                {cv.sections.experience.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 print:break-inside-avoid"
                  >
                    <h3 className="text-xl font-semibold print:text-black">
                      {item.position}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm font-medium print:text-black/70">
                      <span>
                        {item.company} &bull; {item.location}
                      </span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 print:gap-4 print:break-inside-avoid print:mt-8">
              <div className="flex items-center gap-3 border-b border-border pb-3 print:border-black">
                <GraduationCap
                  size={28}
                  className="text-primary print:text-black"
                />
                <h2 className="text-3xl font-bold print:text-black">
                  Education
                </h2>
              </div>
              <div className="flex flex-col gap-10 print:gap-6">
                {cv.sections.education.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 print:break-inside-avoid"
                  >
                    <h3 className="text-xl font-semibold print:text-black">
                      {item.area}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm font-medium print:text-black/70">
                      <span>
                        {item.school} &bull; {item.degree}
                      </span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 print:gap-4 print:break-inside-avoid print:mt-8">
              <div className="flex items-center gap-3 border-b border-border pb-3 print:border-black">
                <Code size={28} className="text-primary print:text-black" />
                <h2 className="text-3xl font-bold print:text-black">
                  Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                {cv.sections.projects.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition print:break-inside-avoid print:p-4 print:border-0 print:border-l-2 print:border-black print:rounded-none print:shadow-none print:bg-white"
                  >
                    <h3 className="text-xl font-semibold text-primary print:text-black">
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

          <div className="lg:col-span-1 flex flex-col gap-12 print:gap-8 print:mt-12 print:block">
            <div className="flex flex-col gap-6 bg-secondary/20 p-8 rounded-2xl border border-border print:bg-white print:p-0 print:border-none print:break-inside-avoid print:mb-8">
              <div className="flex items-center gap-3 pb-2 print:border-b print:border-black">
                <Wrench size={24} className="text-primary print:text-black" />
                <h2 className="text-2xl font-bold print:text-black">Skills</h2>
              </div>
              {cv.sections.skills.items.map((skillGroup) => (
                <div
                  key={skillGroup.id}
                  className="flex flex-col gap-3 print:gap-1"
                >
                  <h3 className="text-lg font-medium print:text-black">
                    {skillGroup.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium print:border-black print:text-black print:px-1 print:py-0 print:border-none print:after:content-[','] last:print:after:content-['']"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 p-8 print:p-0 print:break-inside-avoid">
              <div className="flex items-center gap-3 pb-2 print:border-b print:border-black">
                <Globe size={24} className="text-primary print:text-black" />
                <h2 className="text-2xl font-bold print:text-black">
                  Languages
                </h2>
              </div>
              <div className="flex flex-col gap-4 print:gap-2">
                {cv.sections.languages.items.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex justify-between items-center border-b border-border/50 pb-2 print:border-black/20"
                  >
                    <span className="font-medium text-lg print:text-black">
                      {lang.language}
                    </span>
                    <div className="flex gap-1 text-primary print:text-black">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-6 rounded-full print:border print:border-black ${i < lang.level ? "bg-primary print:bg-black" : "bg-primary/20 print:bg-transparent"}`}
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
