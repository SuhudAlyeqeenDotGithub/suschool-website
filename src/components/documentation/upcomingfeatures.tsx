import { Paragraph, SectionHeading } from "./reusablescomps";

export const UpcomingFeatures = () => {
  return (
    <div>
      <SectionHeading>Upcoming & Planned Features</SectionHeading>
      <Paragraph>
        SuSchool is continuously evolving. The following features are planned or in development. Features marked as
        "Launching Soon" are visible in the Features marketplace but cannot yet be enabled.
      </Paragraph>

      <div className="space-y-4 mt-6">
        {[
          {
            name: "Assessment & Grading",
            desc: "Create exams, quizzes, and assignments. Record and manage grades with configurable grading scales. Generate report cards and academic transcripts.",
            status: "In Development"
          },
          {
            name: "Event Management",
            desc: "Plan and manage school events, parent-teacher meetings, and extracurricular activities. Send invitations and track RSVPs.",
            status: "Planned"
          },
          {
            name: "Timetable Management",
            desc: "Build and manage class timetables with automated conflict detection. Assign rooms, teachers, and time slots visually.",
            status: "Planned"
          },
          {
            name: "Schemes of Work",
            desc: "Plan term-by-term teaching content linked to subjects and classes. Track coverage and share with teaching staff.",
            status: "Planned"
          },
          {
            name: "Parent Portal",
            desc: "Give parents secure access to their child's attendance, grades, and school communications. Reduce admin overhead for parent queries.",
            status: "Exploring"
          }
        ].map((feature) => (
          <div
            key={feature.name}
            className="border rounded-lg p-5 flex items-start gap-4"
            style={{ borderColor: "var(--borderColor)", backgroundColor: "var(--surfaceColor)" }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold" style={{ color: "var(--foregroundColor)" }}>
                  {feature.name}
                </h4>
                <span
                  className="text-sm font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor:
                      feature.status === "In Development"
                        ? "rgba(16,185,129,0.1)"
                        : feature.status === "Planned"
                          ? "rgba(0,151,167,0.1)"
                          : "rgba(139,92,246,0.1)",
                    color:
                      feature.status === "In Development"
                        ? "#10b981"
                        : feature.status === "Planned"
                          ? "var(--accentColor)"
                          : "#8b5cf6"
                  }}
                >
                  {feature.status}
                </span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: "var(--foregroundColor-secondary)" }}>
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
