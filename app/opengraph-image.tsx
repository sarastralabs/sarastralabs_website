import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sarastra Labs: websites, software, AI and digital marketing in Mangaluru, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share image (Open Graph / X) generated at build time. */
export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public/brand/mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #FBF7F2 0%, #FBF7F2 55%, #FFD9BF 80%, #FF7A2B 100%)",
          color: "#16130F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={72} height={67} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 6 }}>SARASTRA LABS</div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 8, color: "#FF5C00" }}>IDEAS INTO IMPACT</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>The technology partner for</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#FF5C00" }}>
            growing businesses.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#6E665D" }}>
            Websites · Custom Software · AI Agents · Digital Marketing
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#3A342D" }}>
          <div>sarastralabs.com</div>
          <div>Mangaluru, India</div>
        </div>
      </div>
    ),
    size
  );
}
