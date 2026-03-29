export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#23343A",
          color: "#F4EFE6",
          padding: "72px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", width: 140, height: 4, background: "#C9A45C", borderRadius: 9999 }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 700,
              background: "rgba(255,255,255,0.05)",
              padding: "34px 38px",
              borderRadius: 28,
            }}
          >
            <div style={{ display: "flex", fontSize: 82, lineHeight: 1, letterSpacing: 2 }}>Marrow & Tide</div>
            <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 32, lineHeight: 1.3 }}>
              Coastal suppers. Pantry staples. Slow hospitality.
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: 19,
                color: "#CFC4B4",
              }}
            >
              Lyttelton, Christchurch, New Zealand
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 300,
              borderRadius: 9999,
              border: "8px solid rgba(244,239,230,0.16)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 92,
                height: 184,
                borderRadius: 46,
                border: "8px solid rgba(244,239,230,0.32)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  top: -24,
                  left: 24,
                  width: 44,
                  height: 44,
                  borderRadius: 9999,
                  background: "rgba(244,239,230,0.32)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  bottom: -24,
                  left: 24,
                  width: 44,
                  height: 44,
                  borderRadius: 9999,
                  background: "rgba(244,239,230,0.32)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
