"use client";
import { useState } from "react";
import { Bullets, Callout, Section, Steps, Table, TEAL } from "./reusablescomps";
import {
  AppNavigation,
  LoggingInAndSecurity,
  OverviewContent,
  QuickStartGuide,
  RoleBasedAccess,
  SigningUp
} from "./gettingstarted";
import {
  ActivityLogsContent,
  BillAndPayments,
  FeatureMarketPlace,
  RolesAndPermissions,
  UsersContent
} from "./administration";
import { AcademicSessions } from "./organisation";
import {
  BaseSubjectSection,
  ClassesSection,
  ClassSubjectSection,
  PathwaysSection,
  ProgrammesSection,
  StagesSection
} from "./curriculum";
import { StaffContractSection, StaffProfileSection } from "./staff";
import {
  StudentAttendanceOverviewSection,
  StudentAttendanceSection,
  StudentEnrollmentSection,
  StudentProfileSection
} from "./student";

export const documentationPagesStructure = {
  home: {
    badge: null,
    title: "SuSchool Documentation",
    desc: "Everything you need to set up, manage, and get the most out of SuSchool. Choose a section or use the sidebar.",
    prev: null,
    next: { label: "Overview", id: "gs-overview" },
    content: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          {
            icon: "🚀",
            title: "Getting Started",
            desc: "Account setup, roles, and quick start guide",
            id: "gs-overview"
          },
          { icon: "⚙️", title: "Administration", desc: "Users, roles, bill, and activity logs", id: "admin-users" },
          { icon: "📚", title: "Curriculum", desc: "Academic years, programmes, classes, subjects", id: "cur-years" },
          { icon: "👥", title: "Staff", desc: "Profiles, contracts, and assignments", id: "staff-profiles" },
          { icon: "🎓", title: "Students", desc: "Profiles, enrolment, and attendance", id: "stu-profiles" },
          { icon: "💬", title: "FAQ", desc: "Answers to common questions", id: "faq" }
        ].map((l) => (
          <div
            key={l.id}
            style={{
              background: "#f9fafb",
              border: "1.5px solid #e5e7eb",
              borderRadius: 12,
              padding: 18,
              cursor: "pointer",
              transition: "all 0.15s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accentColor)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,151,167,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: 22, display: "block", marginBottom: 8 }}>{l.icon}</span>
            <p style={{ fontWeight: 700, color: "#111", fontSize: 14, margin: "0 0 4px" }}>{l.title}</p>
            <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{l.desc}</p>
          </div>
        ))}
      </div>
    )
  },
  "gs-overview": {
    badge: "Getting Started",
    title: "Overview of SuSchool",
    desc: "SuSchool centralises every part of running an educational institution — from curriculum to students, staff to real-time reporting.",
    prev: null,
    next: { label: "Signing Up", id: "gs-signup" },
    content: () => <OverviewContent />
  },
  "gs-signup": {
    badge: "Getting Started",
    title: "Signing Up & Account Creation",
    desc: "Create your SuSchool account in minutes. No credit card required for the free trial.",
    prev: { label: "Overview", id: "gs-overview" },
    next: { label: "Login & Security", id: "gs-login" },
    content: () => <SigningUp />
  },
  "gs-login": {
    badge: "Getting Started",
    title: "Login & Security Best Practices",
    desc: "Keep your school data safe with secure login habits.",
    prev: { label: "Signing Up", id: "gs-signup" },
    next: { label: "Role-Based Access", id: "gs-roles" },
    content: () => <LoggingInAndSecurity />
  },
  "gs-roles": {
    badge: "Getting Started",
    title: "Role-Based Access Explained",
    desc: "Every user sees exactly what they need — and nothing more. SuSchool's role system keeps sensitive data protected.",
    prev: { label: "Login & Security", id: "gs-login" },
    next: { label: "Dashboard Navigation", id: "gs-dashboard" },
    content: () => <RoleBasedAccess />
  },
  "gs-dashboard": {
    badge: "Getting Started",
    title: "Navigating the App",
    desc: "Get familiar with the SuSchool interface — sidebar, overview panels, quick search, and notifications.",
    prev: { label: "Role-Based Access", id: "gs-roles" },
    next: { label: "Quick Start Guide", id: "gs-quickstart" },
    content: () => <AppNavigation />
  },
  "gs-quickstart": {
    badge: "Getting Started",
    title: "Quick Start Guide",
    desc: "Configure SuSchool from scratch in 5 steps. Estimated time: 30–60 minutes.",
    prev: { label: "Dashboard Navigation", id: "gs-dashboard" },
    next: { label: "Users", id: "admin-users" },
    content: () => <QuickStartGuide />
  },
  "admin-roles": {
    badge: "Administration",
    title: "Roles & Permissions",
    desc: "Define what each role can access. Use preset roles for efficiency and fine-tune with individual overrides.",
    prev: { label: "Quick Start Guide", id: "gs-quickstart" },
    next: { label: "Users", id: "admin-users" },
    content: () => <RolesAndPermissions />
  },
  "admin-users": {
    badge: "Administration",
    title: "Users",
    desc: "Create and manage user accounts for staff who need access to SuSchool.",
    prev: { label: "Roles & Permissions", id: "admin-roles" },
    next: { label: "Activity Logs", id: "admin-logs" },
    content: () => <UsersContent />
  },

  "admin-logs": {
    badge: "Administration",
    title: "Activity Logs",
    desc: "Track every create, update, and delete action across SuSchool for accountability and compliance.",
    prev: { label: "Roles & Permissions", id: "admin-roles" },
    next: { label: "Bill & Payments", id: "admin-bill" },
    content: () => <ActivityLogsContent />
  },
  "admin-bill": {
    badge: "Administration",
    title: "Bill & Payments",
    desc: "View your bill history, manage subscriptions, and understand usage-based pricing.",
    prev: { label: "Activity Logs", id: "admin-logs" },
    next: { label: "Features Marketplace", id: "admin-features" },
    content: () => <BillAndPayments />
  },
  "admin-features": {
    badge: "Administration",
    title: "Features Marketplace",
    desc: "Add optional features to Base Premium. Pay only for what you activate, cancel anytime.",
    prev: { label: "Bill & Payments", id: "admin-bill" },
    next: { label: "Academic Sessions", id: "org-academic-sessions" },
    content: () => <FeatureMarketPlace />
  },
  "org-academic-sessions": {
    badge: "Organisation",
    title: "Academic Sessions",
    desc: "Set up your academic calendar. Years and periods control when attendance and assessments are active.",
    prev: { label: "Features Marketplace", id: "admin-features" },
    next: { label: "Stages", id: "cur-stages" },
    content: () => <AcademicSessions />
  },
  "cur-stages": {
    badge: "Curriculum",
    title: "Stages",
    desc: "Stages are the top level of your curriculum. They are optional",
    prev: { label: "Academic Sessions", id: "org-academic-sessions" },
    next: { label: "Programmes", id: "cur-programs" },
    content: () => <StagesSection />
  },
  "cur-programs": {
    badge: "Curriculum",
    title: "Programmes",
    desc: "Programmes are the top level of your curriculum (after stages).",
    prev: { label: "Stages", id: "cur-stages" },
    next: { label: "Pathways", id: "cur-pathways" },
    content: () => <ProgrammesSection />
  },
  "cur-pathways": {
    badge: "Curriculum",
    title: "Pathways",
    desc: "Pathways define streams or tracks within a programme.",
    prev: { label: "Programmes", id: "cur-programs" },
    next: { label: "Classes", id: "cur-classes" },
    content: () => <PathwaysSection />
  },
  "cur-base": {
    badge: "Curriculum",
    title: "Base Subjects",
    desc: "Base Subjects are institution-level subject templates. Create once, use across all classes.",
    prev: { label: "Pathways", id: "cur-pathways" },
    next: { label: "Classes", id: "cur-classes" },
    content: () => <BaseSubjectSection />
  },
  "cur-classes": {
    badge: "Curriculum",
    title: "Classes",
    desc: "Classes group students together.",
    prev: { label: "Base Subjects", id: "cur-base" },
    next: { label: "Class Subjects", id: "cur-class-subjects" },
    content: () => <ClassesSection />
  },

  "cur-class-subjects": {
    badge: "Curriculum",
    title: "Class Subjects",
    desc: "Class Subjects link a Base Subject to a specific class.",
    prev: { label: "Base Subjects", id: "cur-base" },
    next: { label: "Staff Profiles", id: "staff-profiles" },
    content: () => <ClassSubjectSection />
  },
  "staff-profiles": {
    badge: "Staff",
    title: "Staff Profiles",
    desc: "Create profiles for all staff",
    prev: { label: "Class Subjects", id: "cur-class-subjects" },
    next: { label: "Contracts", id: "staff-contracts" },
    content: () => <StaffProfileSection />
  },
  "staff-contracts": {
    badge: "Staff",
    title: "Contracts",
    desc: "Contracts link staff to academic periods and define their active employment window in SuSchool.",
    prev: { label: "Staff Profiles", id: "staff-profiles" },
    next: { label: "Student Profiles", id: "stu-profiles" },
    content: () => <StaffContractSection />
  },
  "stu-profiles": {
    badge: "Students",
    title: "Student Profiles",
    desc: "Central records for every learner — personal details, emergency contacts",
    prev: { label: "Contracts", id: "staff-contracts" },
    next: { label: "Enrollment", id: "stu-enrol" },
    content: () => <StudentProfileSection />
  },
  "stu-enrol": {
    badge: "Students",
    title: "Enrollment",
    desc: "Enrol students into classes to activate attendance tracking and give tutors access to their records.",
    prev: { label: "Student Profiles", id: "stu-profiles" },
    next: { label: "Attendance", id: "stu-attendance" },
    content: () => <StudentEnrollmentSection />
  },
  "stu-attendance": {
    badge: "Students",
    title: "Attendance",
    desc: "Record student attendance at the day level and subject level. Requires the Attendance feature to be active.",
    prev: { label: "Enrollment", id: "stu-enrol" },
    next: { label: "Attendance Analytics", id: "stu-analytics" },
    content: () => <StudentAttendanceSection />
  },
  "stu-analytics": {
    badge: "Students",
    title: "Attendance Analytics",
    desc: "Analyse attendance patterns with real-time filters, trend data, and attention-needed alerts.",
    prev: { label: "Attendance", id: "stu-attendance" },
    next: { label: "Activity Logging", id: "set-logging" },
    content: () => <StudentAttendanceOverviewSection />
  },
  "set-logging": {
    badge: "Settings",
    title: "Activity Logging Settings",
    desc: "Control what gets tracked. Enable or disable logging per action type to manage cost and compliance.",
    prev: { label: "Attendance Analytics", id: "stu-analytics" },
    next: { label: "Password Reset", id: "ts-password" },
    content: () => (
      <>
        <Section title="Enabling or Disabling Logging">
          <Steps
            items={[
              "Go to <strong>Settings → Activity Logging</strong>",
              "Toggle <strong>Enable Logging</strong> on or off",
              "Save settings"
            ]}
          />
        </Section>
        <Section title="Cost Impact">
          <Bullets
            items={[
              "Enable for schools that need audit trails or GDPR compliance",
              "Disable to reduce your monthly bill — logging stops immediately",
              "Historical logs are preserved when logging is paused"
            ]}
          />
        </Section>
        <Callout variant="warning">
          Disabling logging does not delete existing logs therefore the cost of storage for the old data remains. It
          only stops new events from being recorded.
        </Callout>
      </>
    )
  },
  "ts-password": {
    badge: "Troubleshooting",
    title: "Password Reset",
    desc: "Step-by-step guide to resetting your password or recovering access to your account.",
    prev: { label: "Activity Logging", id: "set-logging" },
    next: { label: "Failed Payments", id: "ts-payments" },
    content: () => (
      <>
        <Section title="Self-Service Password Reset">
          <Steps
            items={[
              "Go to suschool.com and click <strong>Sign In</strong>",
              "Click <strong>Forgot Password</strong>",
              "Enter your registered email address",
              "Check your inbox — reset link arrives within 2 minutes",
              "Click the link (expires in 30 minutes)",
              "Enter and confirm your new password",
              "Log in with your new credentials"
            ]}
          />
          <Callout variant="warning">
            If the email doesn't arrive, check your spam folder. Sender is noreply@suschool.com.
          </Callout>
        </Section>
        <Section title="Admin Resetting Another User's Password">
          <Steps
            items={[
              "Go to <strong>Administration → Users</strong>",
              "Find the user",
              "Click <strong>Edit → Reset Password</strong>",
              "A reset email is sent to their registered address"
            ]}
          />
        </Section>
      </>
    )
  },
  "ts-payments": {
    badge: "Troubleshooting",
    title: "Failed Payments",
    desc: "Resolve failed payment issues quickly to avoid service disruption.",
    prev: { label: "Password Reset", id: "ts-password" },
    next: { label: "Common Errors", id: "ts-errors" },
    content: () => (
      <>
        <Section title="Common Causes">
          <Bullets
            items={[
              "Card expired — update your payment method",
              "Insufficient funds",
              "Card blocked for online transactions — contact your bank",
              "Bill address mismatch"
            ]}
          />
        </Section>
        <Section title="Resolving a Failed Payment">
          <Steps
            items={[
              "Go to <strong>Administration → Bill</strong>",
              "Click the failed invoice",
              "Click <strong>Retry Payment</strong>",
              "If it fails again, click <strong>Update Payment Method</strong>",
              "Enter new card details and retry"
            ]}
          />
        </Section>
        <Section title="What Happens if Payment Stays Failed">
          <Table
            headers={["Day", "Action"]}
            rows={[
              ["Day 1–3", "Automatic retry attempts"],
              ["Day 4–7", "Email alert sent to account owner"],
              ["Day 8–14", "Some features may be restricted"],
              ["Day 15+", "Account may be suspended"]
            ]}
          />
        </Section>
        <Callout variant="tip">
          Contact bill@suschool.com if you need a payment extension or are facing recurring issues.
        </Callout>
      </>
    )
  },
  "ts-errors": {
    badge: "Troubleshooting",
    title: "Common Errors",
    desc: "Quick fixes for the most frequently reported issues in SuSchool.",
    prev: { label: "Failed Payments", id: "ts-payments" },
    next: { label: "FAQ", id: "faq" },
    content: () => (
      <>
        {[
          {
            q: "Staff not appearing in assignment search",
            cause: "No active contract for the current academic period",
            fix: "Go to Staff → open the profile → Add Contract → select the current period → Save"
          },
          {
            q: "Students not appearing in attendance register",
            cause: "Student has not been enrolled in that class",
            fix: "Go to Students → open the profile → Enrol → select the class and period → Save"
          },
          {
            q: "Cannot access a module",
            cause: "Role lacks permission, or the feature is not active",
            fix: "Ask Administrator to update your role permissions, or activate the feature from Administration → Features"
          },
          {
            q: "Attendance data not saving",
            cause: "Session expired or network interruption",
            fix: "Refresh the page and log in again — partially submitted registers are auto-saved"
          }
        ].map((e) => (
          <Section key={e.q} title={e.q}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 14px" }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#c2410c" }}>CAUSE: </span>
                <span style={{ fontSize: 13, color: "#374151" }}>{e.cause}</span>
              </div>
              <div
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "10px 14px" }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#15803d" }}>FIX: </span>
                <span style={{ fontSize: 13, color: "#374151" }}>{e.fix}</span>
              </div>
            </div>
          </Section>
        ))}
        <Callout variant="tip">
          Contact support@suschool.com with a screenshot and the steps that led to the error for any issue not listed
          here.
        </Callout>
      </>
    )
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    desc: "Clear answers to the most common questions about SuSchool.",
    prev: { label: "Common Errors", id: "ts-errors" },
    next: null,
    content: () => {
      const [open, setOpen] = useState<any>(null);
      const items = [
        {
          q: "How do I reset my password?",
          a: "Click Forgot Password on the login page. Enter your email and follow the reset link in your inbox. Links expire after 30 minutes."
        },
        {
          q: "Can multiple users be logged in at once?",
          a: "Yes. SuSchool supports concurrent access. All changes sync in real-time — no conflicts or data loss."
        },
        {
          q: "What happens at the end of my free trial?",
          a: "After 30 days your account shifts to the limited Freemium tier. Upgrade to Base Premium or Extended Premium from Administration → Bill at any time."
        },
        {
          q: "Can I cancel a Marketplace feature?",
          a: "Yes. Go to Administration → Features → Active Features → Deactivate. Access stops at end of the current bill cycle. Your data is preserved."
        },
        {
          q: "What is the difference between a Base Subject and a Class Subject?",
          a: "A Base Subject is the institution-level template (e.g. Mathematics). A Class Subject is the specific delivery to a class (e.g. Mathematics — Year 10A)."
        },
        {
          q: "Can I import existing student data?",
          a: "Yes. Download the import template from Students → Import, fill it in, and upload. The system validates and flags errors before committing."
        },
        {
          q: "How do I move a student to a different class?",
          a: "Open the student profile, find their active enrolment, and click Transfer. Historical attendance from the previous class is preserved."
        },
        {
          q: "Is my data backed up?",
          a: "Yes. SuSchool performs automated daily backups stored in geographically redundant data centres."
        },
        {
          q: "Do prices include taxes?",
          a: "Prices shown are exclusive of VAT or local taxes. Applicable taxes are added at checkout based on your bill address."
        },
        {
          q: "How do I contact support?",
          a: "Email support@suschool.com, use the live chat widget, or call +44 (20) 7123 4567 (Mon–Fri, 9am–6pm GMT)."
        }
      ];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                border: `1.5px solid ${open === i ? TEAL : "#e5e7eb"}`,
                borderRadius: 10,
                overflow: "hidden",
                transition: "border-color 0.15s"
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: open === i ? "#f0fdfe" : "#fff",
                  border: "none",
                  padding: "14px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{item.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={TEAL}
                  strokeWidth="2.5"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    marginLeft: 12
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div style={{ padding: "4px 16px 14px", background: "#f0fdfe" }}>
                  <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  }
};
