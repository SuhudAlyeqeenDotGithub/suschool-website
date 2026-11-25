import {
  Callout,
  Paragraph,

  Steps,
 

  Section,

} from "./reusablescomps";

export const AcademicSessions = () => {
  return (
    <>
      <Paragraph>
        Academic sessions are the time boundaries for your school calendar. You need at least one academic year and
        periods under it before you can create curriculum items or take attendance.
      </Paragraph>

      <Section title="Creating an Academic Year">
        <Paragraph>
          An academic year defines the overall calendar for a school year (e.g., "Academic Year 2025-2026"). It contains
          one or more periods (e.g., "Term 1", "Semester 1") that further divide the year.
        </Paragraph>

        <Callout variant="tip">
          You can create future academic years and periods in advance to prepare for the next school year.
        </Callout>
        <Steps
          items={[
            "Navigate to <strong>Organisation > Academic Sessions > Academic Year.</strong>",
            'Click "+ New Academic Year" and enter the year name (e.g., "Academic Year 2025-2026") or choose from the preset options. (Whichever you choose, ensure the format is always consistent with other academic years)',
            "Enter the start and end dates for the academic year.",
            'Create at least one period within the academic year (e.g., "Term 1", "Semester 1") with its own start and end dates. You can create more periods later if needed.'
          ]}
        />
      </Section>
      <Section title="Creating Academic Periods">
        <Paragraph>
          Periods are subdivisions of an academic year that represent specific time frames (e.g., "Term 1", "Semester
          1"). Each period has its own start and end dates that must fall within the academic year.
        </Paragraph>

        <Steps
          items={[
            "Navigate to <strong>Organisation > Academic Sessions > Periods.</strong> You can create the periods while creating the academic year or after.",
            "Enter the period custom Id if you have one or leave the default auto-generated one",
            `Enter the period name (e.g., "Term 1", "Semester 1"). You can also choose from preset options, but ensure the format is consistent across all periods.`,
            "Select the academic year this period belongs to. If the option is empty, it means you have not created an academic year",
            "Enter the start and end dates for the period. Ensure the period dates fall within the academic year dates.",
            `Click "Add" to save.`
          ]}
        />
      </Section>
    </>
  );
};
