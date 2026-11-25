import { features } from "@/app/page";
import {
  BulletList,
  Callout,
  Paragraph,
  SectionHeading,
  Steps,
  SubHeading,
  TEAL,
  Bullets,
  Section,
  Table
} from "./reusablescomps";

export const RolesAndPermissions = () => {
  return (
    <>
      <Section title="Creating a Preset Role">
        <Paragraph>
          Roles define a set of access and permissions for users within SuSchool. Permissions are group-tab-based: each
          role specifies which group and tabs (pages) are accessible. When a user is assigned a role, they inherit all
          the permissions of that role. This system allows for flexible and granular control over who can see and do
          what within your school's environment.
        </Paragraph>
        <Callout variant="tip">
          There is no limit to the number of roles you can create, but keep in mind that having too many roles with
          overlapping permissions can make user management more complex. Try to create clear and distinct roles that
          cover the common access needs of your staff.
        </Callout>
        <Steps
          items={[
            "Navigate to Administration  →  Roles & Permissions.",
            'Click "+ New Role" to open the creation form.',
            'Enter a role name (e.g., "Subject Teacher") and optionally add a description.',
            "Select the group this role should have access by clicking on them.",
            "Upon clicking a group, a dialog with tabs under the group will appear. You can select the tabs you want the role to have under that group.",
            "Upon clicking the tabs, a dialog with all the permissions under that tab will appear. You can select the permissions you want the role to have under that tab by ticking the relevant checkboxes.",
            `Click "Save" to save the tab to the current group. You can add more tabs following the same process.`,
            'After adding all tabs and permissions, click the "Save" button to save the group. You can add more groups following the same process.',
            `After adding all groups, click the final "Create" button to create the role. It will now be available for assignment when creating or editing users.`
          ]}
        />
      </Section>
      <Section title="Editing Roles">
        <Paragraph>
          Click on any role in the table to view its details. Use the edit icon on the view page or the edit button if a
          view dialog is open to edit the role. The default Absolute Admin role can be modified e.g., add a new group or
          tab from a new feature. However, you cannot delete the default Absolute Admin role.
        </Paragraph>
      </Section>
      <Section title="Deleting Roles">
        <Paragraph>
          To delete a custom role, click the delete icon on the view page for the exact role you want to delete. You
          will be asked to confirm the deletion by entering the role ID (copy this from the view page) before it is
          permanently removed.
        </Paragraph>
        <Callout variant="danger">
          Deleting a role will remove all permissions from all users currently assigned to it. Make sure to reassign
          those users to another role, or give them a unique set of permissions since this is independent of assigned
          preset role.
        </Callout>
      </Section>
      <Section title="Permission Levels">
        <Table
          headers={["Level", "What It Allows"]}
          rows={[
            ["None", "No access to this module"],
            ["View", "Can see data but cannot make changes"],
            ["Create", "Can add new records"],
            ["Edit", "Can modify existing records"],
            ["Delete", "Can remove records — assign carefully"]
          ]}
        />
      </Section>
      <Callout variant="warning">
        Be cautious when granting Delete permissions. Users with this permission can permanently remove records, which
        can lead to data loss if used improperly. Always ensure that users with Delete permissions understand the
        implications of their actions.
      </Callout>{" "}
      <Section title="Built-In Role Examples">
        <Paragraph>
          We've made setup and getting started easier for you by providing some default most common roles. You can edit
          these or create your own custom roles to fit your school's unique needs. Here's a quick overview of the
          default roles and their access rights:
        </Paragraph>
        <Table
          headers={["Role", "What They Can Access"]}
          rows={[
            ["Absolute Admin", "Full access to all modules, groups, tabs, permissions, bill, users, and settings"],
            [
              "Curriculum Admin",
              "Has access to full curriculum. Manages curriculum data entry e.g, programmes, pathways, and related staff"
            ],
            [
              "Class Tutor",
              "Has Access to student attendances for their assigned classes and the students in those classes"
            ],
            [
              "Subject Teacher",
              "Has access to student attendances for their assigned subjects and the students in those subjects"
            ],
            ["Financial Admin", "Has access to bill and payment information."],
            ["Receptionist / Student Admin", "Has access to student profiles and enrolment."],
            ["Staff Admin", "Has access to staff profiles and contracts."],
            [
              "Custom Role",
              "You can create custom roles with any combination of access rights to fit your school's unique needs"
            ]
          ]}
        />
      </Section>
      <Callout variant="warning">
        You cannot assign default absolute admin role to another user, although a custom one can be created. Account
        with this role have unrestricted access to all data and settings, including bill and user management. Do not let
        any user except the absolute admin or intended custom absolute admin to use the an absolute account.
      </Callout>
      <Callout variant="info">
        Preset roles apply to all users with that role. For per-user exceptions, use Unique Permission on the user's
        account.
      </Callout>
    </>
  );
};

export const UsersContent = () => {
  return (
    <>
      <Paragraph>
        The Users section allows you to create and manage accounts for everyone who needs access to SuSchool. Each user
        is assigned a preset role that determines their permissions. A user must have a valid staff contract to have an
        account. If a user leaves the school, you can disable their account by changing the status to prevent access
        without deleting their data.
      </Paragraph>
      <Section title="Creating a User">
        <Steps
          items={[
            "Navigate to <strong>Administration  →  Users</strong>.",
            'Click "+ New User" in the top-right corner.',
            "Fill in the user's full name, email address, and select a preset role from the dropdown (optional).",
            "Give them a secure password and give it to the user through a secure channel. We recommend using a password manager to share credentials safely.",
            "Save the user."
          ]}
        />

        <Callout variant="warning">
          You will not be able to see the password after creating the user. Make sure to share it securely with the user
          immediately after creation. Otherwise you will have to reset the password manually.
        </Callout>

        <Callout variant="success">
          A user cannot have a personal password except for the one assigned to them by a trusted admin. This is to
          ensure the institution has control over all accounts and can manage access effectively. Users must not share
          their account password with other users.
        </Callout>
      </Section>
      <Section title="Managing Existing Users">
        <Bullets
          items={[
            "<strong>Edit</strong> — change name, email, password, role, or permissions at any time",
            "<strong>Deactivate</strong> — revoke access immediately without deleting data",
            "<strong>Reactivate</strong> — restore access for returning staff",
            "<strong>Delete</strong> — permanently remove a user (use with caution)"
          ]}
        />
      </Section>
      <Callout variant="warning">
        Deactivate accounts immediately when a staff member leaves. Active accounts are a security risk.
      </Callout>
      <Section title="Unique Permission">
        <Paragraph>
          Sometimes a user needs slightly different access than their assigned role provides. Rather than creating a new
          role for one person, you can set unique access on their profile. These adds on to the access they have from
          preset roles (if any).
        </Paragraph>
        <Steps
          items={[
            "Open the user record",
            "Go to <strong>Unique Permissions</strong> section",
            "Click the tabs you want to add and select the specific permissions to add for that user",
            "Save — and ask the user to refresh their page.",
            "To delete unique permissions, click the delete icon next to the tab."
          ]}
        />
      </Section>
      <Callout variant="tip">
        Use unique access sparingly. If multiple users need the same custom permissions, it is better to create a new
        role.
      </Callout>
    </>
  );
};

export const ActivityLogsContent = () => {
  return (
    <>
      <Section title="Enabling & Disabling Activity Logging">
        <Steps
          items={[
            "Activity logging is enabled by default. To change logging settings:",
            "Go to <strong>Settings → Activity Tracking</strong>",
            "Toggle to enable or disable Logging",
            "Save — logging begins immediately"
          ]}
        />
        <Callout variant="warning">
          Activity logging is a paid feature. Enabling it increases your monthly cost. Disable it if you don't need
          detailed audit trails.
        </Callout>
      </Section>
      <Section title="Viewing Logs">
        <Steps
          items={[
            "Go to <strong>Administration → Activity Logs</strong>",
            "The most recent logs appear at the top",
            "Filter by: User, Action Type, Module, Date Range to find specific events",
            "Click on record to see full details including before/after values for updates"
          ]}
        />
      </Section>
      <Section title="What Gets Logged">
        <Bullets
          items={[
            "User logins",
            "Student record creation, edits, and deletions",
            "Staff profile and contract changes",
            "User account and permission updates",
            "Curriculum structure changes",
            "Attendance record submissions and edits"
          ]}
        />
      </Section>
      <Paragraph>
        Being able to read changes made requires a bit of a learning curve for new users. The admin monitoring this may
        need to be familiar with JSON data structures. We are working on making this more user-friendly in the future by
        showing changes in a more readable format and providing tooltips to explain how to read them.
      </Paragraph>
    </>
  );
};

export const BillAndPayments = () => {
  return (
    <>
      <Section title="How you are billed and charged">
        <Paragraph>
          SuSchool uses a usage-based pricing model: you are billed based on the features you have enabled and the
          resources your school consumes (database operations (View, Create, Update, Delete), storage, computation,
          etc.).
        </Paragraph>
        <Paragraph>
          We prepare your bill (i.e your invoice) per month based on your actual usage and the feature you enabled. Then
          we charge you on the 5th of the next month for the previous month. For example, on September 5th, you will be
          charged for your bill in August.
        </Paragraph>
        <Callout variant="danger">
          If you do not want a feature to be billed and charged for that month, make sure you remove it before the 2nd
          day of the month, or before 2 days of usage.
        </Callout>
      </Section>
      <Section title="Bill History">
        <Paragraph>
          Each bill shows a detailed breakdown of costs across four service categories: Database Services, Cloud
          Storage, Frontend Hosting (Free) and Computation. All prices are displayed in three currencies (USD, GBP, NGN)
          using the exact exchange rates from the bill period, ensuring historical accuracy.
        </Paragraph>
      </Section>
      <Section title="Subscription">
        <Paragraph>
          Your subscription details show your current plan (Freemium or Premium), freemium and premium start/end dates,
          and subscription status. You can also update your, bill address, and bill postcode directly from this section.
        </Paragraph>
        <SubHeading>Plans</SubHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            {
              name: "Freemium",
              price: "Free for 1 month",
              desc: "Full access during trial, then limited to basic features"
            },
            {
              name: "Base Premium",
              price: "Feature + Usage cost (50% off first 3 months)",
              desc: "All core features — administration, curriculum, staff and student management",
              highlight: true
            },
            {
              name: "Extended Premium",
              price: "Feature + Usage cost (50% off first 3 months)",
              desc: "Everything in Base Premium plus optional marketplace features included"
            }
          ].map((p) => (
            <div
              key={p.name}
              style={{
                background: p.highlight ? "#f0fdfe" : "#f9fafb",
                border: `1.5px solid ${p.highlight ? TEAL : "#e5e7eb"}`,
                borderRadius: 10,
                padding: 16
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <p style={{ fontWeight: 700, color: "#111", fontSize: 14, margin: 0 }}>{p.name}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: TEAL }}>{p.price}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Callout variant="info">
        Your 50% introductory discount applies to the first 3 months after your free trial. Standard pricing applies
        from month 4.
      </Callout>
      <Section title="Failed Payments">
        <Paragraph>
          If a payment fails, it appears under the Failed Payments section with a retry option. Address failed payments
          promptly to avoid any disruption to your service. If a payment is pending, it is also considered failed.
          However, once you log into our system we will verify it again and update the status accordingly.
        </Paragraph>

        <Paragraph>
          This is because sometimes payments can be pending for a while due to bank processing times, but they will
          eventually go through. We want to avoid showing failed payments that are actually just pending.
        </Paragraph>

        <Callout variant="tip">
          The first payment you will ever make will be triggered under failed payments. We can then auto charge the
          following months. Only if a recurring payment fails or is incomplete will you see a failed payment after the
          first one.
        </Callout>
      </Section>
    </>
  );
};

export const FeatureMarketPlace = () => {
  return (
    <>
      <Paragraph>
        SuSchool operates on a pay-for-what-you-use model. The Features page displays all available features as a
        marketplace. Each feature card shows:
      </Paragraph>
      <BulletList
        items={[
          "The feature name, description, and which tabs it unlocks.",
          "Introductory pricing (discounted for the first 3 months after your trial) and the regular price, with the percentage savings clearly displayed.",
          "All prices in three currencies: USD, GBP, and NGN.",
          "Whether the feature is mandatory (required for the system to function) or optional.",
          "Availability status: Available, Launching Soon, or Unavailable.",
          "Requirements: some features depend on other features being enabled first."
        ]}
      />

      <Section title="Adding & Removing Features">
        {" "}
        <Paragraph>
          To add a feature make sure that all its required features are added first. e.g., to enable{" "}
          <strong>Student Attendance</strong>, you must have <strong>Student Profile & Enrollment</strong> enabled since
          attendance records need to be linked to student profiles."
        </Paragraph>
        <Paragraph>Then:</Paragraph>
        <Steps
          items={[
            "Navigate to <strong>Administration  →  Features</strong>.",
            "Browse the Features marketplace and click on the feature card to see full details.",
            "Ensure you meet all the requirements listed for that feature. If not, add the required features first.",
            "Click <strong>Add Feature</strong> to enable it."
          ]}
        />
        <Callout variant="info">
          You will be billed for that feature and it's usage starting immediately after you add it.
        </Callout>
        <Callout variant="success">
          If you do not use a feature, you will only pay for it's provision cost. This can save you a lot of money
          during non-peak periods.
        </Callout>
      </Section>

      <Section title="Removing Features">
        {" "}
        <Paragraph>
          Removing a feature will not be allowed if there are other features that depend on it. e.g., you cannot remove
          <strong> Student Profile & Enrollment</strong> if there is <strong>Student Attendance</strong>.
        </Paragraph>
        <Paragraph>To Remove a feature:</Paragraph>
        <Steps
          items={[
            "Browse the Features marketplace and click on any feature card to see full details.",
            "Click<strong> Remove Feature</strong>. A confirmation dialog will appear giving you the option to <strong>Keep data</strong> or <strong>Delete data</strong>.",
            "<strong>Keep data</strong> will remove the feature but keep all associated records in the database. You can re-enable the feature later and all your data will still be there. <strong>Delete data</strong> will permanently remove the feature and all associated records. This action is irreversible."
          ]}
        />
        <Callout variant="danger">
          Removing a feature with <strong>\"Delete all data\"</strong> is irreversible. Always choose{" "}
          <strong>\"Keep data\"</strong> unless you are certain you no longer need the records.
        </Callout>
        <Callout variant="warning">
          Whilst <strong>remove and keep data</strong> will not require you to pay for the feature or usage. The storage
          of the data will still count towards your storage costs. Although this is relatively low.
        </Callout>
      </Section>

      <Section title="Available Features">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: 14 }}
            >
              <span style={{ fontSize: 20, display: "block", marginBottom: 8 }}>{f.icon}</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <p style={{ fontWeight: 600, fontSize: 13, color: "#111", margin: 0 }}>{f.title}</p>
                <span className="flex gap-2">
                  {" "}
                  <span className="line-through text-sm text-foregroundColor-secondary">{f.introPrice}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: TEAL }}>{f.price}</span>
                </span>
              </div>
              <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{f.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export const AdministrationSection = () => {
  return (
    <div>
      <SectionHeading>Features</SectionHeading>
    </div>
  );
};
