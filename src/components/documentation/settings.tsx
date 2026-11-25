import {
  Callout,
  Paragraph,
  SectionHeading,
  Steps,
  SubHeading,
} from "./reusablescomps";

export const SettingsSection = () => {
  return (
    <div>
      <SectionHeading>System Settings</SectionHeading>
      <Paragraph>
        The Settings page allows administrators to enable or disable system-wide
        features that affect cost and behaviour. Settings are organised into
        logical groups with clear descriptions of what each toggle controls.
      </Paragraph>

      <SubHeading>Activity Logging</SubHeading>
      <Paragraph>
        The most important setting is the Activity Log toggle. When enabled,
        SuSchool records every create, update, and delete action performed by
        any user, along with the exact changes made. This is invaluable for
        auditing and accountability.
      </Paragraph>
      <Steps
        items={[
          "Navigate to Administration > Settings.",
          'Find the "Activity Tracking" section.',
          'Toggle "Enable Activity Logging" on or off.',
          "The change takes effect immediately.",
        ]}
      />
      <Callout variant="warning">
        Activity logging generates additional database operations, which
        contribute to your monthly bill. If your organisation does not require
        detailed audit trails, consider disabling this feature to reduce costs.
      </Callout>

      <SubHeading>Other Settings</SubHeading>
      <Paragraph>
        Additional toggles are available for notifications (email alerts, in-app
        notifications), security (two-factor authentication enforcement, session
        timeouts), and system preferences (automatic backups, maintenance mode).
        Each setting includes a clear description of its purpose and impact.
      </Paragraph>
    </div>
  );
};
