"use client";

import { useState } from "react";
import { AlertTriangle, Lightbulb, ChevronDown, ChevronRight, CheckCircle, Info, Zap } from "lucide-react";

// Collapsible section component

export const TEAL = "#0097a7";
export const TEAL_LIGHT = "#00bcd4";
export const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
  accent = false
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accent?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className="border rounded-lg overflow-hidden mb-4"
      style={{
        borderColor: accent ? "var(--accentColor)" : "var(--borderColor)",
        backgroundColor: accent ? "rgba(0,151,167,0.03)" : "var(--surfaceColor)"
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-base transition-colors"
        style={{ color: accent ? "var(--accentColor)" : "var(--foregroundColor)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0,151,167,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <span className="flex items-center gap-2">
          {accent && <Zap className="h-4 w-4" />}
          {title}
        </span>
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-base leading-relaxed" style={{ color: "var(--foregroundColor-secondary)" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "#f0fdfe",
      color: TEAL,
      border: `1px solid ${TEAL}30`,
      borderRadius: 999,
      padding: "2px 12px",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      display: "inline-block",
      marginBottom: 12
    }}
  >
    {children}
  </span>
);

// Tip/Warning/Info callout component
export const Callout2 = ({ type, children }: { type: "tip" | "warning" | "info"; children: React.ReactNode }) => {
  const config = {
    tip: {
      bg: "rgba(16,185,129,0.08)",
      border: "#10b981",
      icon: <Lightbulb className="h-4 w-4 text-[#10b981]" />,
      label: "Tip"
    },
    warning: {
      bg: "rgba(245,158,11,0.08)",
      border: "#f59e0b",
      icon: <AlertTriangle className="h-4 w-4 text-[#f59e0b]" />,
      label: "Warning"
    },
    info: {
      bg: "rgba(0,151,167,0.08)",
      border: "var(--accentColor)",
      icon: <Info className="h-4 w-4" style={{ color: "var(--accentColor)" }} />,
      label: "Note"
    }
  };
  const c = config[type];
  return (
    <div
      className="flex gap-3 p-4 rounded-lg border-l-4 my-4 text-base leading-relaxed"
      style={{ backgroundColor: c.bg, borderLeftColor: c.border, color: "var(--foregroundColor)" }}
    >
      <div className="flex-shrink-0 mt-0.5">{c.icon}</div>
      <div>
        <span className="font-semibold">{c.label}: </span>
        {children}
      </div>
    </div>
  );
};

export const Callout = ({
  variant = "tip",
  children
}: {
  variant: "tip" | "warning" | "info" | "success" | "danger";
  children: React.ReactNode;
}) => {
  const styles = {
    tip: { border: TEAL, bg: "#f0fdfe", icon: "💡", label: "Tip" },
    warning: { border: "#f59e0b", bg: "#fffbeb", icon: "⚠️", label: "Warning" },
    info: { border: "#3b82f6", bg: "#eff6ff", icon: "ℹ️", label: "Note" },
    success: { border: "#22c55e", bg: "#f0fdf4", icon: "✅", label: "Done" },
    danger: { border: "#ef4444", bg: "#fef2f2", icon: "❌", label: "Danger" }
  };
  const s = styles[variant];
  return (
    <div
      style={{
        borderLeft: `4px solid ${s.border}`,
        background: s.bg,
        padding: "12px 16px",
        borderRadius: "0 8px 8px 0",
        margin: "16px 0"
      }}
    >
      <p className="text-base font-medium" style={{ color: "#374151", margin: 0, lineHeight: 1.6 }}>
        <strong>
          {s.icon} {s.label}:{" "}
        </strong>
        {children}
      </p>
    </div>
  );
};

export const Card = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div
    style={{
      background: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: 10,
      padding: 18,
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }}
  >
    <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
    <div>
      <p style={{ fontWeight: 700, color: "#111", fontSize: 15, margin: "0 0 4px" }}>{title}</p>
      <p style={{ fontSize: 14, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{desc}</p>
    </div>
  </div>
);

export const Table = ({ headers, rows }: { headers: any[]; rows: any[][] }) => (
  <div style={{ overflowX: "auto", margin: "12px 0" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr style={{ background: "#f9fafb" }}>
          {headers.map((h) => (
            <th
              key={h}
              style={{
                textAlign: "left",
                padding: "10px 14px",
                borderBottom: "1px solid #e5e7eb",
                fontWeight: 600,
                color: "#111"
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  padding: "10px 14px",
                  borderBottom: "1px solid #f3f4f6",
                  color: j === 0 ? "#111" : "#4b5563",
                  fontWeight: j === 0 ? 600 : 400
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
// Step list component

export const Steps = ({ items }: { items: string[] }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
    <ol style={{ listStyle: "none", padding: 0, margin: "12px 0", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span
            style={{
              flexShrink: 0,
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: TEAL,
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1
            }}
          >
            {i + 1}
          </span>
          <span
            className="text-base"
            style={{ color: "var(--foregroundColor)", margin: 0, lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </li>
      ))}
    </ol>
  </div>
);

// Section heading
export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--foregroundColor)" }}>
      {children}
    </h3>
  );
};

export const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--foregroundColor)" }}>
      {children}
    </h4>
  );
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-base leading-relaxed mb-5" style={{ color: "var(--foregroundColor)" }}>
      {children}
    </p>
  );
};

export const BulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-1.5 my-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 items-start text-base" style={{ color: "var(--foregroundColor-secondary)" }}>
          <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-1 text-[#10b981]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export const Bullets = ({ items }: { items: string[] }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill={TEAL} style={{ flexShrink: 0, marginTop: 2 }}>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className="text-base"
          style={{ color: "#374151", lineHeight: 1.6 }}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      </li>
    ))}
  </ul>
);

export const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ width: 4, height: 22, background: TEAL, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 19, fontWeight: 700, color: "#111", margin: 0 }}>{title}</h2>
    </div>
    {children}
  </div>
);

export const SectionBasedList = ({ section }: { section: { label: string; items: string[] } }) => (
  <div
    key={section.label}
    style={{
      background: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: 10,
      padding: 16,
      marginBottom: 10
    }}
  >
    <p className="text-base" style={{ fontWeight: 700, color: "#111", marginBottom: 8 }}>
      {section.label}
    </p>
    <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
      {section.items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 8, fontSize: 14, color: "#4b5563" }}>
          <span style={{ color: TEAL, fontWeight: 700 }}>{i + 1}.</span> {item}
        </li>
      ))}
    </ol>
  </div>
);
