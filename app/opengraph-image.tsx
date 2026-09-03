import { ImageResponse } from "next/og";

export const alt = "Roohan Khan — Backend-focused Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1120",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#5eead4", display: "flex", fontSize: 28, letterSpacing: 4 }}>
          ROOHAN KHAN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
            Backend-focused\nSoftware Engineer
          </div>
          <div style={{ color: "#cbd5e1", display: "flex", fontSize: 30, maxWidth: 920 }}>
            Laravel APIs · Admin systems · Integrations · Maintainable web applications
          </div>
        </div>
        <div style={{ color: "#94a3b8", display: "flex", fontSize: 24 }}>
          roohankhan8 · Portfolio
        </div>
      </div>
    ),
    size,
  );
}
