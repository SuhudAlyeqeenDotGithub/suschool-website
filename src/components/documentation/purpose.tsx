import { Paragraph, SectionHeading, SubHeading } from "./reusablescomps";
export const PurposeSection = () => {
  return (
    <div>
      <SectionHeading>What is SuSchool?</SectionHeading>
      <Paragraph>
        SuSchool is an all-in-one, cloud-based school management system designed to simplify the way educational
        institutions operate. From curriculum planning and student enrolment to staff contracts, attendance tracking,
        and bill, SuSchool brings everything together in one place so your school can focus on what matters most:
        educating students.
      </Paragraph>
      <Paragraph>
        Whether you run a single school or a multi-campus organisation, SuSchool scales with you. Its
        pay-for-what-you-use model means you only pay (usage and provision) for the features your institution needs, and
        you can add or remove features at any time.
      </Paragraph>

      <SectionHeading>Who is SuSchool For?</SectionHeading>

      <SubHeading>School Administrators</SubHeading>
      <Paragraph>
        SuSchool gives you complete control over your institution. Manage academic years, programmes, classes, staff
        contracts, student records, and bill from a single dashboard. Real-time data means you always have an accurate
        picture of operations, and role-based access ensures sensitive information stays protected from unauthorized
        users.
      </Paragraph>

      <SubHeading>Teachers & Tutors & Managers</SubHeading>
      <Paragraph>
        Easily take daily and subject-based attendance, view high level analytics, view class rosters, and stay up to
        date with curriculum assignments. SuSchool reduces the paperwork so you can spend more time teaching and less
        time on admin tasks.
      </Paragraph>

      <SubHeading>IT Staff & Technical Administrators</SubHeading>
      <Paragraph>
        Manage user accounts, configure roles and permissions, review activity logs, and oversee system settings.
        SuSchool is built with security and auditability in mind, giving you the tools to maintain a well-governed
        platform.
      </Paragraph>

      <SubHeading>Schools Evaluating SuSchool</SubHeading>
      <Paragraph>
        Every new organisation starts with a free trial month (Freemium). During this period, you can explore all core
        features, set up your curriculum structure, and invite staff to test the platform. After the trial, you move to
        the Premium plan and only pay for the features you actually use.
      </Paragraph>
    </div>
  );
};
