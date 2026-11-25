import { Callout, Paragraph, Section, SectionHeading, Steps, SubHeading, TEAL } from "./reusablescomps";

export const StagesSection = () => {
  return (
    <>
      <Paragraph>
        {" "}
        Stages are the top level of your curriculum. They are like are like a container for multiple groups of
        programmes. e.g., "Secondary Stage" will contain both Junior and Senior programmes.
      </Paragraph>
      <Callout variant="tip">
        Stages are optional. You can skip them and still have a solid curriculum structure with just programmes,
        pathways, classes, and subjects. Use stages if you want an additional layer of grouping for your programmes.
      </Callout>

      <Section title="Creating a Stage">
        <Steps
          items={[
            "Go to <strong>Curriculum  →  Stages</strong>",
            "Click <strong>+ New Stage</strong>",
            "Enter a name for the stage and duration",
            "Click <strong>Create</strong>"
          ]}
        />
      </Section>
    </>
  );
};
export const ProgrammesSection = () => {
  return (
    <>
      <Section title="Create Programmes → Assign Managers → Overview Workflow">
        <Paragraph>
          A programme represents a course of study your school offers (e.g., "GCSE Science", "A-Level Mathematics",
          "Primary Education"). Programmes are the top level of your curriculum hierarchy.
        </Paragraph>
        <Callout variant="info">
          Programme definition and usage can differ between schools. Some use programmes as broad categories (e.g.,
          "Secondary Programme") while others use them as specific categories (e.g., "Senior Secondary Programme",
          "Junior Secondary Programme"). The key is to choose a structure that fits your school's needs and remains
          consistent across your curriculum setup.
        </Callout>
        <Callout variant="success">
          Our recommendation on how to define a programme: Any course of study across (classes, levels or years) where
          the student receive an external or individual qualification at the end (e.g., GCSE, A-Level, WASSCE, IB
          Diploma) should be defined as a programme. If your school does not have external qualifications, you can
          define programmes based on your internal structure (e.g., "Primary Education", "Secondary Education").
        </Callout>
        <div
          style={{
            background: "#f0fdfe",
            border: `1px solid ${TEAL}30`,
            borderRadius: 10,
            padding: 16,
            marginBottom: 16
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: TEAL,
              margin: "0 0 6px",
              textTransform: "uppercase",
              letterSpacing: "0.06em"
            }}
          >
            Workflow
          </p>
          <div
            style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#374151" }}
          >
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Create Programme
            </span>
            <span>→</span>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Assign Managers
            </span>
            <span>→</span>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Overview
            </span>
          </div>
        </div>
        <SubHeading>Creating a Programme</SubHeading>
        <Steps
          items={[
            "Navigate to Curriculum > Programmes > All Programmes tab.",
            'Click "+ New Programme" and fill in the programme name, description, status (Offering or Not Offering) and optionally offering start and end dates.',
            "Use the Create button to save. You can edit the programme later to update details or change its offering status as needed.",
            "To delete a programme, use the delete icon on the record and confirm the deletion using the programme ID."
          ]}
        />
        <Callout variant="warning">
          We do not recommend deleting a programme if it's already in use across student enrollments and curriculum.
          This could break your system. Set the programme as not offering instead to preserve historical data and
          maintain system integrity.
        </Callout>
        <SubHeading>Assigning Programme Managers</SubHeading>
        <Paragraph>
          This where you link staff members to programmes as Programme Managers. Each record should be clearly and
          uniquely associate the staff with a programme. If the staff member is a manager for multiple programmes, they
          should have separate records for each programme.
        </Paragraph>
        <Callout variant="tip">
          Instead of deleting a programme manager record when a staff member changes roles or leaves, you can optionally
          set the record to Inactive. This preserves historical data and allows you to reactivate the manager if needed
          in the future.
        </Callout>

        <Steps
          items={[
            "Navigate to the Programme Manager tab.",
            'Click "+ New Programme Manager" and select a staff member and the programme from the dropdowns.',
            "Set their management status and management start date and optionally end date.",
            "Create button to save. Repeat for each staff member you want to assign as a manager to the programme."
          ]}
        />
        <Callout variant="warning">
          Staff who do not have a contract will not be displayed in the option when assigning programme or pathway
          managers. This ensures compliance and reliability in your staff management system.
        </Callout>
        <SubHeading>Programme Overview</SubHeading>
        <Paragraph>
          The Overview tab displays key metrics: total programmes, offering vs not offering breakdown, total managers
          with active/inactive counts. Recent activities in programmes tab and quick links.
        </Paragraph>
      </Section>
    </>
  );
};
export const PathwaysSection = () => {
  return (
    <>
      <Section title="Create Pathways → Assign Managers → Overview Workflow">
        <Paragraph>
          Pathways are optional sub-divisions within a programme. For example, within a "WASSCE" programme, you might
          have pathways for "Science", "Art", and "Commercial". Not all programmes will have pathways e.g., "Primary".
        </Paragraph>
        <Paragraph>
          You may also not use pathways if you had created a programme as merged with pathway individually (e.g.,
          "WASSCE Science", "WASSCE Art", "WASSCE Commercial"). The key is to choose a structure that fits your school's
          needs and remains consistent across your curriculum setup.
        </Paragraph>
        <Callout variant="tip">
          Another example of programme-pathway linking could be. BTEC IT as a programme with separate objects for
          pathways like "Cyber security", "Software Development", "Network Engineering". Or you could create a programme
          as already merged programme-pathway e.g. BTEC IT Cyber Security, BTEC IT Software Development, BTEC IT Network
          Engineering. The key is to choose a structure that fits your school's needs and remains consistent across your
          curriculum setup. <b>We recommend having programmes and pathways separately for scalability.</b>
        </Callout>
        <div
          style={{
            background: "#f0fdfe",
            border: `1px solid ${TEAL}30`,
            borderRadius: 10,
            padding: 16,
            marginBottom: 16
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: TEAL,
              margin: "0 0 6px",
              textTransform: "uppercase",
              letterSpacing: "0.06em"
            }}
          >
            Workflow
          </p>
          <div
            style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#374151" }}
          >
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Create Pathway
            </span>
            <span>→</span>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Assign Managers
            </span>
            <span>→</span>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12 }}>
              Overview
            </span>
          </div>
        </div>
        <SubHeading>Creating a Pathway</SubHeading>
        <Steps
          items={[
            "After creating the parent programme, Navigate to Curriculum > Pathways > All Pathways.",
            'Click "+ New Pathway", select the parent programme, and enter the pathway details (use relevant naming convention).',
            "Set the status as Offering or Not Offering and optionally set offering start and end dates.",
            "Create. Repeat for each pathway you want to create under the programme.",
            "To delete a pathway, use the delete icon on the record and confirm the deletion using the pathway ID."
          ]}
        />
        <Callout variant="warning">
          We do not recommend deleting a pathway if it's already in use across student enrollments and curriculum. This
          could break your system. Set the pathway as not offering instead to preserve historical data and maintain
          system integrity.
        </Callout>
        <Callout variant="info">
          If your school does not use pathways, you can skip this step entirely. Classes can be linked directly to
          programmes without a pathway.
        </Callout>
        <SubHeading>Assigning Pathway Managers</SubHeading>
        <Paragraph>
          This where you link staff members to pathways as Pathway Managers. Each record should be clearly and uniquely
          associate the staff with a pathway. If the staff member is a manager for multiple pathways, they should have
          separate records for each pathway.
        </Paragraph>
        <Callout variant="tip">
          Instead of deleting a pathway manager record when a staff member changes roles or leaves, you can optionally
          set the record to Inactive. This preserves historical data and allows you to reactivate the manager if needed
          in the future.
        </Callout>
        <Steps
          items={[
            "Navigate to the Pathway Manager tab.",
            'Click "+ New Pathway Manager" and select a staff member and the programme from the dropdowns.',
            "Set their management status and management start date and optionally end date.",
            "Create button to save. Repeat for each staff member you want to assign as a manager to the programme."
          ]}
        />{" "}
        <Callout variant="warning">
          Staff who do not have a contract will not be displayed in the option when assigning programme or pathway
          managers. This ensures compliance and reliability in your staff management system.
        </Callout>
        <SubHeading>Pathway Overview</SubHeading>
        <Paragraph>
          The Overview tab displays key metrics: total programmes, offering vs not offering breakdown, total managers
          with active/inactive counts. Recent activities in programmes tab and quick links.
        </Paragraph>
      </Section>
    </>
  );
};

export const ClassesSection = () => {
  return (
    <>
      <Paragraph>
        Classes are the groups of students that are taught together. Each class belongs under a programme and optionally
        a pathway. Classes are essential for attendance tracking and student enrolment.
      </Paragraph>
      <Section title="Creating a class">
        <SectionHeading>Class Detail</SectionHeading>
        <Steps
          items={[
            "Navigate to Curriculum > Classes > All Classes.",
            "Enter the class name or select from the dropdown.",
            'Click "+ New Class" and select the pathway (and pathway, if applicable).',
            "The programme under which the pathway falls with auto-fill. If pathway is not applicable. Select the programme the class belongs to.",
            "Enter the duration and status of the class availability."
          ]}
        />
        <SectionHeading>Class Progression & Qualifications</SectionHeading>
        <Steps
          items={[
            "Specify the type of progression that happens at the end of the class.",
            "If it's a qualification, specify the name under the qualification input.",
            'If it is a progression to the next class, specify as part of the name under "Prgoression Outcome input".',
            "Select or Enter the awarding body for the qualification if applicable."
          ]}
        />
        <SectionHeading>Class Subjects</SectionHeading>
        <Steps
          items={[
            "Use the tick box to choose whether or not you want to auto-create class subjects from base subjects during the class creation.",
            'Under Subject section. Use the "+ Add Subject" button to add base subjects to the class.'
          ]}
        />
        <Callout variant="success">
          If you enable auto creation of class subjects, the system will automatically create class subjects for all
          base subjects in a class. You can view class subject under subjects tab and modify if needed.
        </Callout>
      </Section>
      <Section title="Assigning Class Tutors">
        <Paragraph>
          Class tutors manages students in a class. They can take both day and subject attendances and manage
          assessments.
        </Paragraph>
        <Steps
          items={[
            "Navigate to the Classes > Class Tutors.",
            'Click "+ New Class Tutor" and select a staff member and the class from the dropdowns.',
            "Set their management type as main or assistant tutor.",
            "Set their management status and management start date and optionally end date.",
            "Create button to save. Repeat for each staff member you want to assign as a tutor to a class."
          ]}
        />
      </Section>
      <Callout variant="warning">
        Staff who do not have a contract will not be displayed in the option when assigning class tutors. This ensures
        compliance and reliability in your staff management system.
      </Callout>
      <Section title="Class Overview">
        <Paragraph>
          The Overview tab displays key metrics: total classes, offering vs not offering breakdown, total tutors with
          main/assistant and active/inactive counts. Recent activities in classes tab and quick links.
        </Paragraph>
      </Section>
    </>
  );
};

export const BaseSubjectSection = () => {
  return (
    <>
      <Paragraph>
        Base subjects are the core subjects your school offers, independent of any specific class (e.g., "English
        Language", "Mathematics", "History"). They serve as templates that can be assigned to individual classes.
      </Paragraph>
      <Section title="Create Base Subjects">
        <Steps
          items={[
            "Navigate to Curriculum > Subject > Base Subjects.",
            'Click "+ New Base Subject" and enter the subject name and description.',
            "Assign a subject manager from the staff list."
          ]}
        />{" "}
        <Callout variant="info">
          Think of Base Subjects as your subject catalogue. Class Subjects are the specific delivery of each base
          subject to a particular class.
        </Callout>
      </Section>
      <Section title="Base Subject Managers">
        <Paragraph>
          Base subject managers oversees the subject across the school. They are responsible for ensuring that the
          subject is offered in the correct classes and that the subject is aligned with the curriculum.
        </Paragraph>
        <Steps
          items={[
            "Navigate to Curriculum > Subject > Base Subject Managers.",
            'Click "+ New Base Subject Manager" and select a staff member.',
            "Set their management status and management start date and optionally end date.",
            'Use "Create" button to save.'
          ]}
        />
      </Section>
      <Section title="Subject Overview">
        <Paragraph>
          The Overview tab displays key metrics: total base subjects, class subjects, offering vs not offering
          breakdown, total managers and teachers with active/inactive and main/assistant counts. Recent activities in
          subjects tab and quick links.
        </Paragraph>
      </Section>
    </>
  );
};
export const ClassSubjectSection = () => {
  return (
    <>
      <Paragraph>
        Class subjects are instances of base subjects assigned to specific classes. For example, "Mathematics" (base
        subject) assigned to "Class A" becomes a class subject "Class A - Mathematics" with its own teacher or manager.
      </Paragraph>
      <Section title="Create Class Subjects">
        <Steps
          items={[
            "Navigate to Curriculum > Subject > Class Subjects.",
            'Click "+ New Class Subject".',
            "Select the base subject and the target class. (Programme and Pathway are auto-filled).",
            'Enter the offering status and dates and "Create".'
          ]}
        />{" "}
        <Callout variant="tip">
          Think of Class Subjects as your subject catalogue. Class Subjects are the specific delivery of each base
          subject to a particular class.
        </Callout>
      </Section>
      <Section title="Class Subject Teachers">
        <Paragraph>
          Class Subject Teachers oversees/teaches the subject in a class. They can take student subject attendance and
          assessments.
        </Paragraph>
        <Steps
          items={[
            "Navigate to Curriculum > Subject > Class Subject Teachers.",
            'Click "+ New Class Subject Teacher" and select a staff member.',
            "Set their management status, management type and management start date - optionally end date.",
            'Use "Create" button to save.'
          ]}
        />
      </Section>
      <Section title="Subject Overview">
        <Paragraph>
          The Overview tab displays key metrics: total base subjects, class subjects, offering vs not offering
          breakdown, total managers and teachers with active/inactive and main/assistant counts. Recent activities in
          subjects tab and quick links.
        </Paragraph>
      </Section>
    </>
  );
};

