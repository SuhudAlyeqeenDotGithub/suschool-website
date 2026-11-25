import { BulletList, Callout, CollapsibleSection, Paragraph, SectionHeading, Steps } from "./reusablescomps";

export const TroubleshootingSection = () => {
  return (
    <div>
      <SectionHeading>Common Issues & Solutions</SectionHeading>

      <CollapsibleSection title="I forgot my password" defaultOpen>
        <Steps
          items={[
            'On the login page, click "Forgot Password".',
            "Enter the email address associated with your account.",
            "Check your inbox (and spam folder) for a password reset link.",
            "Click the link and create a new password.",
            "Log in with your new password."
          ]}
        />
        <Callout variant="tip">
          If you do not receive the email within 5 minutes, check your spam folder or contact your organisation's
          administrator to verify your email address is correct.
        </Callout>
      </CollapsibleSection>

      <CollapsibleSection title="A payment has failed">
        <Paragraph>
          Failed payments can occur due to expired cards, insufficient funds, or bank-side restrictions.
        </Paragraph>
        <Steps
          items={[
            "Navigate to Administration > Bill > Failed Payments tab.",
            "Review the failure reason displayed for each failed payment.",
            "Update your payment method under the Subscription tab if needed.",
            'Click "Retry Payment" on the failed payment to attempt the charge again.',
            "If the issue persists, contact your bank or SuSchool support."
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="I cannot see a tab or feature">
        <Paragraph>Tab visibility is controlled by your assigned role. If you cannot see a specific tab:</Paragraph>
        <BulletList
          items={[
            "Ask your administrator to check your role's permissions under Administration > Roles & Permissions.",
            "If you need temporary access, your administrator can add a user-specific override to your profile.",
            "Some tabs only appear when the corresponding feature is enabled. Check Administration > Features."
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Students are not appearing in attendance">
        <Paragraph>
          Students must be enrolled in the specific class for the selected academic year before they appear in
          attendance templates.
        </Paragraph>
        <Steps
          items={[
            "Verify the student has a profile under Student > Student Profile.",
            "Check that the student is enrolled in the correct class and academic year under Student > Student Enrollment.",
            'In the attendance template, click "Load Students" or "Reload Students" to refresh the list.'
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Activity logs are not recording">
        <Paragraph>Activity logging must be enabled in Settings for records to be captured.</Paragraph>
        <Steps
          items={[
            "Navigate to Administration > Settings.",
            'Ensure the "Enable Activity Logging" toggle is turned on.',
            "Note: enabling logging will increase your monthly bill due to additional database operations."
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="I am seeing unexpected charges on my bill">
        <Paragraph>SuSchool bills based on actual usage. Higher-than-expected charges usually result from:</Paragraph>
        <BulletList
          items={[
            "Activity logging being enabled (generates many database write operations).",
            "A large number of students or staff creating high read/write volumes.",
            "Cloud storage usage from uploaded files or backups.",
            "Review your detailed bill breakdown under Administration > Bill to identify the cost drivers."
          ]}
        />
      </CollapsibleSection>
    </div>
  );
};
