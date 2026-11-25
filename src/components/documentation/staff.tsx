import { BulletList, Callout, Paragraph, SectionHeading, Steps, SubHeading } from "./reusablescomps";

export const StaffProfileSection = () => {
  return (
    <div>
      <Paragraph>
        Staff profiles contain the personal and professional details of every staff member in your organisation. A staff
        profile must exist before a person can be assigned to curriculum roles (programme manager, class tutor, subject
        tutor) or designated as an attendance taker.
      </Paragraph>
      <SubHeading>Creating a Staff Profile</SubHeading>
      <Steps
        items={[
          "Navigate to Staff > Staff Profile.",
          'Click "+ New Staff" in the top-right corner.',
          "Enter the staff member's first name, last name, email address, gender, and department.",
          "Save the profile. The system generates a unique Staff Custom ID automatically."
        ]}
      />
      <BulletList
        items={[
          "Use the search bar to find staff by name, email, or custom ID.",
          "Click any row to view full staff details.",
          "Use the actions menu to edit or delete a staff record.",
          "Staff status can be Active, Pending, or Inactive."
        ]}
      />
      <Callout variant="info">
        A staff profile is separate from a user account. Staff do not need to log into SuSchool to be part of the
        system. Only create a user account (under Administration &gt; Users) if the staff member needs to access the
        platform.
      </Callout>
    </div>
  );
};

export const StaffContractSection = () => {
  return (
    <div>
      <Paragraph>
        Staff contracts record the employment terms for each staff member, including job title, contract type, start and
        end dates, and contract status.
      </Paragraph>
      <SubHeading>Creating a Contract</SubHeading>
      <Steps
        items={[
          "Navigate to Staff > Staff Contracts.",
          'Click "+ New Staff Contract".',
          "Select the staff member, academic year, and fill in the job title, contract type (Full-Time, Part-Time, Temporary), and start date.",
          "Save the contract."
        ]}
      />
      <SubHeading>Managing Contracts</SubHeading>
      <Paragraph>
        The contracts table supports searching by staff name, custom ID, or job title. Use the filters to narrow results
        by academic year, contract type, or status. Each contract row shows the staff name, custom ID, job title, start
        date, and current status.
      </Paragraph>
      <Callout variant="warning">
        Keep contracts up to date. Expired or inactive contracts may affect reporting and analytics on the Dashboard.
      </Callout>
    </div>
  );
};
