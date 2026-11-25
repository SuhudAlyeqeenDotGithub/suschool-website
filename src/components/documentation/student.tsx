import {
  BulletList,
  Bullets,
  Callout,
  Paragraph,
  Section,
  SectionHeading,
  Steps,
  SubHeading,
  Table
} from "./reusablescomps";

export const StudentProfileSection = () => {
  return (
    <>
      <Paragraph>
        Student profiles store the personal details of every student in your organisation. Profiles are required before
        students can be enrolled in classes or tracked in attendance.
      </Paragraph>
      <Section title="Creating a Student Profile">
        <Steps
          items={[
            "Navigate to Student > Student Profile.",
            'Click "+ New Student" and enter the student\'s details (name, date of birth, gender, contact information).',
            "Save the profile. A unique Student Custom ID is generated automatically."
          ]}
        />
      </Section>
      <Section title="Profile Contents">
        <Bullets
          items={[
            "Personal details: name, date of birth, allergies, contact info.",
            "Emergency contacts with relationship.",
            "Education and qualifcations.",
            "Identification documents (ID number, type, expiry).",
            "Assessment records (if Assessments is active)."
          ]}
        />
      </Section>
      <Callout variant="warning">
        Student data is sensitive. Only users with appropriate permissions can view or edit student profiles.
      </Callout>
    </>
  );
};

export const StudentEnrollmentSection = () => {
  return (
    <>
      <Paragraph>
        Enrollment connects students to specific classes for an academic year. Once enrolled, students appear in
        attendance templates for their assigned class.
      </Paragraph>
      <Section title="Enrolling a Student">
        <Steps
          items={[
            "Navigate to Student > Student Enrollment.",
            'Click "+ New Enrollment", select the student, academic year, and target class.',
            "The programme and pathway auto-fill based on the selected class.",
            'Use the "Create" button to save the enrollment.'
          ]}
        />
      </Section>
    </>
  );
};

export const StudentAttendanceSection = () => {
  return (
    <>
      <Callout variant="info">
        Attendance is an optional add-on from the Features Marketplace. Activate it before using attendance features.
      </Callout>
      <Section title="Day Attendance">
        <Paragraph>
          Day attendance tracks whether students are present on a given day, regardless of subject. It is class-based:
          you create a template for a specific date and class, load the enrolled students, and mark each student's
          status.
        </Paragraph>
        <Steps
          items={[
            "Navigate to Student > Attendance > Day Attendance.",
            'Click "+ New Template" to create a new attendance record.',
            "Select the academic year, class, date, and the staff member taking attendance. Programme and pathway auto-fill from the class.",
            'Click "Load Students" to populate the enrolled student list.',
            "Mark each student's attendance status: Present, Absent, Late, Excused etc and optionlly add notes.",
            "Set the template status (In Progress or Completed) and save."
          ]}
        />
        <Callout variant="info">
          Once a template is saved, the class, programme, pathway, and academic year fields become locked. You can only
          edit the template status and individual student attendance records.
        </Callout>
        <Callout variant="tip">
          Use the \"Reload Students\" button to update the student list if new students have been enrolled. Existing
          attendance records are preserved; only newly enrolled students are added.
        </Callout>
      </Section>
      <Section title="Subject Attendance">
        <Paragraph>
          Subject attendance works identically to day attendance but adds one additional field: the subject. This allows
          you to track attendance per subject session rather than per day.
        </Paragraph>
        <Steps
          items={[
            "Navigate to Student > Attendance > Subject Attendance.",
            'Click "+ New Template" and fill in all fields, including the subject dropdown.',
            "Load students and mark attendance as with day attendance."
          ]}
        />
      </Section>
      <Section title="Attendance Status Types">
        <Table
          headers={["Status", "Meaning"]}
          rows={[
            ["Present", "Student attended as expected"],
            ["Off-site", "Approved external activity"],
            ["Late (Excused)", "Late with valid reason"],
            ["Late (Unexcused)", "Late, no valid reason"],
            ["Absent (Excused)", "Full absence with valid reason"],
            ["Absent (Unexcused)", "Full absence, no reason"]
          ]}
        />
      </Section>
    </>
  );
};

export const StudentAttendanceOverviewSection = () => {
  return (
    <>
        <Section title="Overview Dashboard">
          <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 12 }}>
            The Attendance Overview gives real-time summary data across the school. Filter by programme, class, date
            range, and student.
          </p>
          <Bullets
            items={[
              "<strong>Student Absences</strong> — total absences across selected filters",
              "<strong>Student Lateness</strong> — total late arrivals",
              "<strong>Student Early Leaves</strong> — students leaving before end of day",
              "<strong>Breakdown</strong> — Present, Off-site, Late, Absent by type"
            ]}
          />
        </Section>
        <Section title="Attention Needed Alerts">
          <Bullets
            items={[
              "<strong>Repeated Absences</strong> — students absent above a set threshold",
              "<strong>Repeated Lateness</strong> — students consistently arriving late",
              "<strong>Repeated Early Leaves</strong> — students frequently leaving early",
              "<strong>Low Attendance Classes</strong> — classes with below-expected rates"
            ]}
          />
          <Callout variant="tip">
            Set a Display Limit for each alert panel to control how many flagged records appear at once.
          </Callout>
        </Section>
      </>
  );
};

