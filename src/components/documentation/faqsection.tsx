import { CollapsibleSection, Paragraph, SectionHeading } from "./reusablescomps";

export const FAQSection = () => {
  return (
    <div>
      <SectionHeading>Frequently Asked Questions</SectionHeading>

      <CollapsibleSection title="1. What happens after my Freemium trial ends?" defaultOpen>
        <Paragraph>
          After your one-month free trial, your organisation automatically moves to the Premium plan. You will only be
          charged for the features you have enabled and the resources you consume. There is no automatic charge during
          the Freemium period.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="2. Can I add or remove features at any time?">
        <Paragraph>
          Yes. Navigate to Administration &gt; Features to browse all available features. You can add or remove any
          non-mandatory feature at any time. Changes take effect immediately and are reflected in your next bill.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="3. What is the difference between a staff profile and a user account?">
        <Paragraph>
          A staff profile stores a person's professional details and allows them to be assigned to curriculum roles and
          attendance duties. A user account gives a person login access to SuSchool. You can have staff profiles without
          user accounts (e.g., for teachers who do not need system access).
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="4. Can I have multiple organisations under one account?">
        <Paragraph>
          Each SuSchool account is tied to a single organisation. If you manage multiple schools, you will need separate
          accounts for each. This ensures complete data isolation and security between institutions.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="5. How does role-based access work with user overrides?">
        <Paragraph>
          Every user is assigned a preset role that defines their base permissions. If a specific user needs different
          access, an administrator can set unique overrides on their profile. Overrides take priority over the preset
          role and only affect that individual.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="6. Is my data secure?">
        <Paragraph>
          Yes. SuSchool uses encryption in transit and at rest, role-based access controls, session management with
          automatic timeouts, and optional two-factor authentication. Activity logs provide a full audit trail of all
          system actions. Your data is hosted on secure cloud infrastructure with regular backups.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="7. Can I export my data?">
        <Paragraph>
          Data export functionality is planned for a future release. In the meantime, you can view and download
          individual bills from the Bill section, and activity logs provide a detailed record of all changes.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="8. What attendance statuses are available?">
        <Paragraph>
          SuSchool supports eight attendance statuses: Present, Absent, Late, Excused, Sick, Suspended, Expelled, and
          Transferred. These apply to both day and subject attendance.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="9. Why are some features marked as mandatory?">
        <Paragraph>
          Mandatory features are core components required for SuSchool to function correctly (e.g., the Administration
          module). They cannot be removed. Optional features can be added or removed based on your school's needs.
        </Paragraph>
      </CollapsibleSection>

      <CollapsibleSection title="10. How do I contact support?">
        <Paragraph>
          For technical issues, bill queries, or feature requests, contact the SuSchool support team via the support
          email provided in your account settings, or visit the SuSchool help centre.
        </Paragraph>
      </CollapsibleSection>
    </div>
  );
};
