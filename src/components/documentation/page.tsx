"use client";

import { useEffect } from "react";
import { useState } from "react";
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/lib/siteUrls";
import { Badge, TEAL } from "./reusablescomps";
import { documentationPagesStructure } from "./pagesstructure";

const SuSchoolEmailLink = () => (
  <a
    href="mailto:suschool.contact@gmail.com"
    className="hover:underline text-accentColor"
  >
    suschool.contact@gmail.com
  </a>
);

const nav = [
  {
    group: "Getting Started",
    icon: "🚀",
    base: "getting-started",
    links: [
      { label: "Overview", id: "gs-overview" },
      { label: "Signing Up", id: "gs-signup" },
      { label: "Login & Security", id: "gs-login" },
      { label: "Role-Based Access", id: "gs-roles" },
      { label: "Dashboard Navigation", id: "gs-dashboard" },
      { label: "Quick Start Guide", id: "gs-quickstart" },
    ],
  },
  {
    group: "Administration",
    icon: "⚙️",
    base: "administration",
    links: [
      { label: "Roles & Permissions", id: "admin-roles" },
      { label: "Users", id: "admin-users" },

      { label: "Activity Logs", id: "admin-logs" },
      { label: "Bill & Payments", id: "admin-bill" },
      { label: "Features Marketplace", id: "admin-features" },
    ],
  },
  {
    group: "Organisation",
    icon: "🏫",
    base: "organisation",
    links: [{ label: "Academic Sessions", id: "org-academic-sessions" }],
  },
  {
    group: "Curriculum",
    icon: "📚",
    base: "curriculum",
    links: [
      { label: "Stages", id: "cur-stages" },
      { label: "Programmes", id: "cur-programs" },
      { label: "Pathways", id: "cur-pathways" },
      { label: "Base Subjects", id: "cur-base" },
      { label: "Classes", id: "cur-classes" },
      { label: "Class Subjects", id: "cur-class-subjects" },
    ],
  },
  {
    group: "Staff",
    icon: "👥",
    base: "staff",
    links: [
      { label: "Staff Profiles", id: "staff-profiles" },
      { label: "Contracts", id: "staff-contracts" },
    ],
  },
  {
    group: "Students",
    icon: "🎓",
    base: "students",
    links: [
      { label: "Student Profiles", id: "stu-profiles" },
      { label: "Enrollment", id: "stu-enrol" },
      { label: "Attendance", id: "stu-attendance" },
      { label: "Attendance Analytics", id: "stu-analytics" },
    ],
  },
  {
    group: "Settings",
    icon: "🔧",
    base: "settings",
    links: [{ label: "Activity Logging", id: "set-logging" }],
  },
  {
    group: "Troubleshooting",
    icon: "🛠️",
    base: "troubleshooting",
    links: [
      { label: "Password Reset", id: "ts-password" },
      { label: "Failed Payments", id: "ts-payments" },
      { label: "Common Errors", id: "ts-errors" },
    ],
  },
  {
    group: "FAQ",
    icon: "💬",
    base: "faq",
    links: [{ label: "Frequently Asked Questions", id: "faq" }],
  },
];

// --- Content components per section ---

// --- Main documentation component ---
export default function DocumentationPage() {
  const [activePage, setActivePage] = useState("home");
  const [openGroups, setOpenGroups] = useState(["Getting Started"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const page =
    documentationPagesStructure[
      activePage as keyof typeof documentationPagesStructure
    ] || documentationPagesStructure.home;

  // Auto-open active group
  useEffect(() => {
    const group = nav.find((g) => g.links.some((l) => l.id === activePage));
    if (group && !openGroups.includes(group.group)) {
      setOpenGroups((prev) => [...prev, group.group]);
    }
  }, [activePage]);

  const navigate = (id: string) => {
    setActivePage(id);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSignUp = () => {
    window.location.assign(APP_SIGN_UP_URL);
  };

  const handleSignIn = () => {
    window.location.assign(APP_SIGN_IN_URL);
  };

  const toggleGroup = (g: string) =>
    setOpenGroups((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g],
    );

  const Sidebar = () => (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ padding: "16px 12px", flex: 1, overflowY: "auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "0 8px",
            marginBottom: 12,
          }}
        >
          Navigation
        </p>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {nav.map((group) => {
            const isGroupActive = group.links.some((l) => l.id === activePage);
            const isOpen = openGroups.includes(group.group);
            return (
              <div key={group.group}>
                <button
                  onClick={() => toggleGroup(group.group)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    background: isGroupActive ? "#f0fdfe" : "transparent",
                    color: isGroupActive ? TEAL : "#374151",
                    fontWeight: 600,
                    fontSize: 14,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isGroupActive)
                      e.currentTarget.style.background = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    if (!isGroupActive)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span style={{ fontSize: 14 }}>{group.icon}</span>
                    {group.group}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    style={{
                      marginLeft: 14,
                      borderLeft: "2px solid #f0f0f0",
                      paddingLeft: 10,
                      marginTop: 2,
                      marginBottom: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {group.links.map((link) => {
                      const isActive = link.id === activePage;
                      return (
                        <button
                          key={link.id}
                          onClick={() => navigate(link.id)}
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "7px 10px",
                            borderRadius: 6,
                            border: "none",
                            cursor: "pointer",
                            fontSize: 14,
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? TEAL : "#4b5563",
                            marginLeft: isActive ? -2 : 0,
                            transition: "all 0.1s",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background = "#f9fafb";
                              e.currentTarget.style.color = "#111";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#4b5563";
                            }
                          }}
                        >
                          {link.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <div style={{ padding: 14, borderTop: "1px solid #f0f0f0" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #f0fdfe, #e0f7fa)",
            border: `1px solid ${TEAL}20`,
            borderRadius: 10,
            padding: 14,
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              margin: "0 0 3px",
            }}
          >
            Need support?
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: "0 0 8px" }}>
            Our team is ready to help
          </p>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEAL, margin: 0 }}>
            <SuSchoolEmailLink />
          </p>
        </div>
      </div>
    </div>
  );

  const PageContent = page.content;

  // Find breadcrumb
  const group = nav.find((g) => g.links.some((l) => l.id === activePage));
  const link = group?.links.find((l) => l.id === activePage);

  return (
    <div className="bg-backgroundColor">
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            className="mobile-menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a
            href="/"
            aria-label="SuSchool home"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <img
              src="/suschoollogo.png"
              className="h-10 w-auto cursor-pointer"
              alt="Suhud Logo"
            />
          </a>
          <div style={{ width: 1, height: 20, background: "#e5e7eb" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a
              href="/"
              style={{
                fontSize: 14,
                color: TEAL,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Go back home
            </a>{" "}
            /
          </div>{" "}
          <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 500 }}>
            Documentation
          </span>
        </div>
        <div className="flex items-center gap-5 justify-center">
          <button
            onClick={handleSignIn}
            className="w-full px-5 py-2 bg-white text-slate-700 border shadow cursor-pointer borderaccentColor rounded-lg font-semibold whitespace-nowrap transition"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            className="w-full px-5 py-2 bg-accentColor text-white rounded-lg font-semibold whitespace-nowrap shadow cursor-pointer"
          >
            Start Free Trial
          </button>
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 56px)" }}>
        {/* Sidebar */}
        <div
          style={{
            width: 260,
            flexShrink: 0,
            borderRight: "1px solid #e5e7eb",
            overflowY: "auto",
            height: "calc(100vh - 56px)",
            position: "sticky",
            top: 56,
          }}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <main
          className="bg-backgroundColor"
          style={{ flex: 1, padding: "36px 48px", overflowX: "hidden" }}
        >
          {/* Breadcrumb */}
          {activePage !== "home" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
                fontSize: 14,
                color: "#9ca3af",
              }}
            >
              <button
                onClick={() => navigate("home")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9ca3af",
                  fontSize: 14,
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                Docs
              </button>
              {group && (
                <>
                  <span>/</span>
                  <button
                    onClick={() => navigate(group.links[0].id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#9ca3af",
                      fontSize: 14,
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9ca3af")
                    }
                  >
                    {group.group}
                  </button>
                </>
              )}
              {link && (
                <>
                  <span>/</span>
                  <span style={{ color: "#111", fontWeight: 600 }}>
                    {link.label}
                  </span>
                </>
              )}
            </div>
          )}

          {/* Page header */}
          <div
            style={{
              marginBottom: 32,
              paddingBottom: 28,
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            {page.badge && <Badge>{page.badge}</Badge>}
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#111",
                margin: "0 0 10px",
                lineHeight: 1.25,
              }}
            >
              {page.title}
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "#6b7280",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {page.desc}
            </p>
          </div>

          {/* Page content */}
          <PageContent />

          {/* Prev/Next nav */}
          {(page.prev || page.next) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 48,
                paddingTop: 24,
                borderTop: "1px solid #e5e7eb",
              }}
            >
              {page.prev ? (
                <button
                  onClick={() => navigate(page.prev.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#4b5563",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4b5563")
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#9ca3af",
                        margin: "0 0 2px",
                        fontWeight: 500,
                      }}
                    >
                      Previous
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                      {page.prev.label}
                    </p>
                  </div>
                </button>
              ) : (
                <div />
              )}
              {page.next ? (
                <button
                  onClick={() => navigate(page.next.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#4b5563",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#4b5563")
                  }
                >
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#9ca3af",
                        margin: "0 0 2px",
                        fontWeight: 500,
                      }}
                    >
                      Next
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                      {page.next.label}
                    </p>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <div />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
