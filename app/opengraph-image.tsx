import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #071120 0%, #10244d 54%, #6e43ff 100%)",
          color: "#edf3ff",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "40px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
            padding: "48px",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: "720px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: "999px",
                background: "rgba(125,163,255,0.18)",
                color: "#b7c8ff",
                padding: "12px 20px",
                fontSize: "24px",
              }}
            >
              Marketing Intern • Digital Marketing Student
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "84px", fontWeight: 700, lineHeight: 1.02 }}>
                Tống Minh Quân
              </div>
              <div
                style={{
                  fontSize: "34px",
                  lineHeight: 1.35,
                  color: "rgba(237,243,255,0.82)",
                }}
              >
                Creating content, connecting brands, growing through digital
                platforms.
              </div>
            </div>
            <div style={{ fontSize: "24px", color: "rgba(237,243,255,0.7)" }}>
              Bilingual landing page with social media, Canva, and student project highlights.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "240px",
              borderRadius: "36px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <div style={{ fontSize: "88px", fontWeight: 700 }}>TMQ</div>
            <div style={{ fontSize: "22px", color: "rgba(237,243,255,0.74)" }}>
              personal brand
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
