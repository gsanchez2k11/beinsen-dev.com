import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aprende con Beinsen — Guías Técnicas de Planchas Transfer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    padding: '72px 80px',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 75% 25%, rgba(255,102,0,0.15) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FF6600, #FF8533)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', color: '#FF6600', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
                    Centro de Aprendizaje
                </div>
                <div style={{ fontSize: '68px', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '20px', fontStyle: 'italic' }}>
                    Guías Técnicas
                    <br />
                    <span style={{ color: '#FF6600' }}>por Ingenieros</span>
                </div>
                <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginBottom: '40px', maxWidth: '700px' }}>
                    Sublimación · DTF · Mantenimiento · Calibración · Troubleshooting
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,102,0,0.12)', border: '1px solid rgba(255,102,0,0.3)', borderRadius: '999px', color: '#FF6600', fontSize: '16px', fontWeight: 700 }}>
                    beinsen.com/aprende
                </div>
            </div>
        ),
        { ...size }
    )
}
