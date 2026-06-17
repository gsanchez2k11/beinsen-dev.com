import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #FF6600 0%, #FF9900 100%)",
                    color: "white",
                    fontSize: 130,
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontFamily: "sans-serif",
                    letterSpacing: -4,
                }}
            >
                b
            </div>
        ),
        { ...size }
    );
}
