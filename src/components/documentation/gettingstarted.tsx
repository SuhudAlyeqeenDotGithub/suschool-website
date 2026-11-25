import {
  Bullets,
  Callout,
  Card,
  Paragraph,
  Section,
  SectionBasedList,
  Steps,
  Table,
} from "./reusablescomps";
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/lib/siteUrls";
import Link from "next/link";

export const OverviewContent = () => {
  return (
    <>
      <Section title="What SuSchool Solves">
        <p
          style={{
            fontSize: 14,
            color: "#374151",
            lineHeight: 1.7,
            marginBottom: 12,
          }}
        >
          Schools typically juggle spreadsheets, email threads, paper registers,
          and disconnected software. SuSchool replaces all of that with one
          platform — real-time, role-based, and built to scale.
        </p>

        <Bullets
          items={[
            "Eliminate spreadsheet chaos with centralised records",
            "Replace paper registers with live digital attendance",
            "Manage your full curriculum hierarchy from one dashboard",
            "Control who sees what with granular role-based permissions",
            "Pay only for the features your school actually uses",
          ]}
        />
      </Section>
      <Section title="Core Pillars">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          <Card
            icon="⚙️"
            title="Administration"
            desc="Users, roles, bill, activity logs"
          />
          <Card
            icon="📚"
            title="Curriculum"
            desc="Programmes, pathways, classes, subjects"
          />
          <Card
            icon="👥"
            title="Staff"
            desc="Profiles, contracts, curriculum assignments"
          />
          <Card
            icon="🎓"
            title="Students"
            desc="Profiles, enrolment, attendance, analytics"
          />
        </div>
      </Section>
      <Callout variant="tip">
        Start with the Quick Start Guide to configure SuSchool in under an hour.
      </Callout>
    </>
  );
};

export const SigningUp = () => {
  return (
    <>
      <Paragraph>
        There are two types of account in SuSchool. Organisation and user
        account. Organisation account has all access rights and represent the
        organisation itself (managed by the highest level admin - absolute
        admin).
      </Paragraph>

      <Paragraph>
        User account can only be created after an organisation account has been
        created and by the absolute admin or any staff that has been given the
        access to create user accounts.
      </Paragraph>

      <Paragraph>
        Follow the steps below to create an organisation account:
      </Paragraph>

      <ol className="space-y-2 mb-8 mt-4">
        <li
          className="flex gap-3 items-start text-base"
          style={{ color: "var(--foregroundColor)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
            style={{ backgroundColor: "var(--accentColor)" }}
          >
            1
          </span>
          <span className="leading-relaxed">
            Visit{" "}
            <Link
              href={APP_SIGN_UP_URL}
              className="hover:underline text-accentColor"
            >
              sign up verification
            </Link>{" "}
            to verify organisation email - a code will be sent to the email.
          </span>
        </li>
        <li
          className="flex gap-3 items-start text-base"
          style={{ color: "var(--foregroundColor)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
            style={{ backgroundColor: "var(--accentColor)" }}
          >
            2
          </span>
          <span className="leading-relaxed">
            Enter the code that was sent to the entered email address.
          </span>
        </li>
        <li
          className="flex gap-3 items-start text-base"
          style={{ color: "var(--foregroundColor)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
            style={{ backgroundColor: "var(--accentColor)" }}
          >
            3
          </span>
          <span className="leading-relaxed">
            Once verified, enter full details of your organisation, including
            name, country, initials (Usually short form of organisation name
            e.g., ORG), password.
          </span>
        </li>
        <li
          className="flex gap-3 items-start text-base"
          style={{ color: "var(--foregroundColor)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
            style={{ backgroundColor: "var(--accentColor)" }}
          >
            4
          </span>
          <span className="leading-relaxed">
            Once you click the "sign up" button, you will be redirected directly
            into SuSchool - You can start using it immediately.
          </span>
        </li>
        <li
          className="flex gap-3 items-start text-base"
          style={{ color: "var(--foregroundColor)" }}
        >
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
            style={{ backgroundColor: "var(--accentColor)" }}
          >
            5
          </span>
          <span className="leading-relaxed">
            Begin setting up your school by following the Quick Start guide at
            the bottom of this page.
          </span>
        </li>
      </ol>
      <Callout variant="tip">
        Use a strong, unique password with at least 12 characters, including
        uppercase, lowercase, numbers, and symbols. Avoid reusing passwords from
        other platforms or for the same user account within your organisation.
      </Callout>
    </>
  );
};

export const LoggingInAndSecurity = () => {
  return (
    <>
      <Section title="Logging In & Security">
        <Paragraph>
          Navigate to the{" "}
          <Link
            href={APP_SIGN_IN_URL}
            className="hover:underline text-accentColor"
          >
            SuSchool sign in page
          </Link>{" "}
          and enter your registered email and password - You might be
          automatically redirected if you have a current login session.
        </Paragraph>
        <Bullets
          items={[
            "Using shared or public devices is not recommended when using SuSchool. But if you have to do so, ensure you sign out after every use.",
            "Login credentials for one user should not be shared with others. The organisation should procure a separate account for each user.",
            "The forgot passowrd on sign in page can only be used on an organisation account.",
            "If a user forgot their password, an admin with access to their account can reset it under user management. Note: Once the password is changed, it must be given to the user through a secure means before closing the user dialog. The password will not show again once it is closed and will have to be changed again if the previous one was not noted.",
            "To improve your security, sessions expire regularly (roughly every week) which will prompt a new sign in.",
          ]}
        />{" "}
      </Section>
    </>
  );
};

export const RoleBasedAccess = () => {
  return (
    <>
      <Section title="How it works">
        <Paragraph>
          SuSchool uses a powerful role-based access control system. Every user
          account can be assigned a preset role that determines which tabs and
          features they can see and use. Roles are created and managed under
          Administration &gt; Roles & Permissions. User accounts are created and
          managed under Administration &gt; Users
        </Paragraph>
        <Bullets
          items={[
            'Preset Roles: Define a set of permissions that apply to all users assigned to that role (e.g., "Teacher", "Admin", "Finance Officer").',
            "User-Specific Access: Individual users can have unique permissions that adds to their existing preset role, giving you fine-grained control.",
            "Access Architecture: Group determins which group a user has access to  →  under each group tabs determine what tab/pages user can access  →  under each tab Permissions controls what action the user can perform on the page e.g., Create, View, Update or Delete Records. If a user's role does not include a group or tab, it is completely hidden from their view.",
            'The default "Absolute Admin" role has full access to all features and cannot be deleted.',
          ]}
        />
        <Callout variant="warning">
          You cannot assign default absolute admin role to another user,
          although a custom one can be created. Account with this role have
          unrestricted access to all data and settings, including bill and user
          management. Do not let any user except the absolute admin or intended
          custom absolute admin to use the an absolute account.
        </Callout>
      </Section>
      <Section title="Built-In Role Examples">
        <Paragraph>
          We've made setup and getting started easier for you by providing some
          default most common roles. You can edit these or create your own
          custom roles to fit your school's unique needs. Here's a quick
          overview of the default roles and their access rights:
        </Paragraph>
        <Table
          headers={["Role", "What They Can Access"]}
          rows={[
            [
              "Absolute Admin",
              "Full access to all modules, groups, tabs, permissions, bill, users, and settings",
            ],
            [
              "Curriculum Admin",
              "Has access to full curriculum. Manages curriculum data entry e.g, programmes, pathways, and related staff",
            ],
            [
              "Class Tutor",
              "Has Access to student attendances for their assigned classes and the students in those classes",
            ],
            [
              "Subject Teacher",
              "Has access to student attendances for their assigned subjects and the students in those subjects",
            ],
            ["Financial Admin", "Has access to bill and payment information."],
            [
              "Receptionist / Student Admin",
              "Has access to student profiles and enrolment.",
            ],
            ["Staff Admin", "Has access to staff profiles and contracts."],
            [
              "Custom Role",
              "You can create custom roles with any combination of access rights to fit your school's unique needs",
            ],
          ]}
        />
      </Section>
    </>
  );
};

export const AppNavigation = () => {
  return (
    <>
      <Section title="Key Interface Areas">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              icon: "📁",
              title: "Sidebar Menu",
              desc: "Navigate between Administration, Curriculum, Staff, Students, and Settings",
            },
            {
              icon: "👤",
              title: "Account Menu",
              desc: "Click your avatar top-right for profile settings, security, and logout",
            },
          ].map((a) => (
            <Card key={a.title} icon={a.icon} title={a.title} desc={a.desc} />
          ))}
        </div>
      </Section>
      <Paragraph>
        After logging in, you land on the Home page. The left sidebar is your
        main navigation, organised into collapsible groups. Click any group to
        expand its tab links, once the page opens use the sub tab links to
        navigate between pages where applicable. The sidebar can be collapsed
        for more screen space and expanded again at any time.
      </Paragraph>
      <Bullets
        items={[
          "Home: Quick actions, SuSchool Structure, Minimum Setup Guide. Documentation, Support, and Legal & Policies.",
          "Administration: Roles & Permissions, Users, Bill, Activity Logs, Features, Settings.",
          "Curriculum: Stage, Programmes (with sub-tabs), Pathways (with sub-tabs), Classes (with sub-tabs), Subjects (with sub-tabs).",
          "Student: Student Profile, Student Enrollment, Attendance (Overview, Day Attendance, Subject Attendance).",
          "Staff: Staff Profile, Staff Contracts.",
          " Documentation: Access user guides, FAQs, and support resources.",
          "Legal & Policies: Access terms of service, privacy policy, and other legal documents.",
        ]}
      />
    </>
  );
};

export const QuickStartGuide = () => {
  return (
    <>
      <Callout variant="info">
        This section walks you through the minimum steps to get your school up
        and running. Follow these steps in order for the best experience.
      </Callout>

      <Section title="Step 2 — Curriculum Structure">
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>
          Focus on <strong>creating main curriculum</strong> workflow at each
          level for minimum setup - You can assign managers, tutors and teachers
          later.
        </p>
        {[
          {
            label: "Programmes",
            items: [
              "Go to Curriculum → Programmes → All Programme",
              'Click "+ New Programme" and fill in the details.',
              "Your institution can have it's own naming convention - but keep it consistent (e.g. IGCSE, A-Level, WASSCE) for clarity.",
              "You can assign programme managers later under Programmes → Programme Managers.",
            ],
          },
          {
            label: "Pathways",
            items: [
              "Pathways (optional) are sub-divisions within a programme. Create them under Curriculum → Pathways → All Pathways.",
              "Always use a consistent naming convention for pathways (e.g., Science, Arts, Cybersecurity) to avoid confusion.",
              "Assign pathway managers later under Pathways → Pathway Managers.",
            ],
          },
          {
            label: "Base Subjects",
            items: [
              "Base Subjects are the core subjects offered by your institution (e.g. Mathematics, English, Chemistry).",
              "Create them under Curriculum → Subjects → Base Subjects.",
              "Ensure each base subject is clearly named and unique. This are not unique class subjects but the general subjects offered by the institution.",
              "Assign base subject managers later under Subjects → Base Subject Managers.",
            ],
          },
          {
            label: "Classes",
            items: [
              "Go to Curriculum → Classes → All Classes.",
              'Click "+ New Class". Pick a name from the suggestion or enter your own.',
              "Select the programme and optionally the pathway the class belongs to.",
              "Enter the class duration and progression outcomes (e.g., Progresses to A-Level).",
              "You can choose to auto-create class subjects from base subjects or create them manually later.",
              "Add all base subjects being offered in the class.",
              "Assign class tutors later under Classes → Class Tutors.",
            ],
          },
          {
            label: "Class Subjects",
            items: [
              "Class Subjects are specific subjects offered in a particular class (e.g., Mathematics for Primary 1).",
              "Go to Curriculum → Subjects → Class Subjects.",
              "Select the class and base subject.",
              "Assign class subject teachers later under Subjects → Class Subject Teachers.",
            ],
          },
        ].map((s) => (
          <SectionBasedList section={s} />
        ))}
      </Section>
      <Section title="Step 4 — Staff Profiles & Contracts">
        <Paragraph>
          Staff profiles are required before you can create contracts, create
          user account, assign staff to curriculum roles (programme managers,
          class tutors, subject teachers) or designate them as attendance
          takers.
        </Paragraph>

        {[
          {
            label: "Staff Profiles",
            items: [
              'Navigate to <strong> Staff  →  Profile </strong> and click <strong> "+ New Staff" </strong>.',
              "Enter the staff member's name, email, gender, and other details. (Uploading a profile picture feature is coming soon)",
            ],
          },
          {
            label: "Staff Contracts",
            items: [
              'Create a contract for the staff by navigating to Staff  →  Contracts and click "+ New Contract".',
              `Select the staff member, enter the academic year, the contract start and end dates, select the contract type (e.g., "Full-Time", "Part-Time") and all required details, and click "Create".`,
            ],
          },
        ].map((s) => (
          <SectionBasedList section={s} />
        ))}

        <Callout variant="warning">
          The staff you create here are not yet users and cannot log in to use
          SuSchool. To give them access, you need to create user accounts for
          them under Administration &gt; Users and assign them a role with the
          appropriate permissions.
        </Callout>
      </Section>

      <Section title="Step 4 — Staff Profiles & Contracts">
        <Paragraph>
          Staff profiles are required before you can create contracts, create
          user account, assign staff to curriculum roles (programme managers,
          class tutors, subject teachers) or designate them as attendance
          takers.
        </Paragraph>

        {[
          {
            label: "Student Profiles",
            items: [
              'Navigate to Students  →  Profiles and click "+ New Student".',
              "Enter the student's name, email, gender, and other details. (Uploading a profile picture feature is coming soon)",
            ],
          },
          {
            label: "Student Enrollment",
            items: [
              "Navigate to Students  →  Enrollments.",
              "Select the student, academic year and class to enroll the student into. The related programme and pathway will auto-fill based on the class selected.",
              "Enter enrollment start and end dates, type, status and other mandatory details.",
              "You can update the student outcome at the end of the enrollment period.",
              "Click 'Create'.",
            ],
          },
        ].map((s) => (
          <SectionBasedList section={s} />
        ))}
      </Section>
      <Callout variant="success">
        Setup complete! Explore the Feature Marketplace to add Attendance,
        Assessments, and more.
      </Callout>
      <Section title="Optional Step — Users & Roles (Optional)">
        <Callout variant="tip">
          Only set up user accounts if you multiple users need to start using
          the system.
        </Callout>
        <Steps
          items={[
            "Go to <strong>Administration → Users</strong>",
            "Create accounts for staff who need to log in",
            "Assign preset roles (Administrator, Class Tutor, etc.)",
            "Set unique permission to add on to their preset role if needed.",
          ]}
        />
      </Section>
    </>
  );
};
