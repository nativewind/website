import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

const size = { width: 1200, height: 630 };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Nativewind';
  const lastModified = searchParams.get('lastModified') ?? null;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#121212',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, #ffffff18 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0',
          }}
        />

        {/* Gradient overlay - cyan glow top right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 85% 15%, #3ad1ff1a 0%, transparent 55%)',
          }}
        />

        {/* Top right: Nativewind logo mark + wordmark */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            right: 56,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          {/* Logo mark SVG */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 54.5C46.5 44 66.8763 53.6331 74.5 53.0333C82.1237 52.4335 86.7205 48.0515 87 41.5333C87.2484 35.7396 82.2987 31.0909 76.5 31.0333C71.2246 30.981 67.0472 34.3626 66 39.5333"
              stroke="#ebebeb"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M14 66C22.7738 59.8129 42.5 58.5325 52 63.5335C61.5 68.5346 58.7332 78.407 52.5 80C47.6251 81.2458 42.4238 77.5472 42 72.5335"
              stroke="#ebebeb"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M22 43.5C43 38.5 45.0529 39.1187 55.2152 34.7219C65.3775 30.3251 62.5031 19.1172 55.2152 18.0713C50.4176 17.3827 45.9385 21.3139 45.8011 26.1587"
              stroke="#ebebeb"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          {/* Wordmark text */}
          <span
            style={{
              color: '#ebebeb',
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Nativewind
          </span>
        </div>

        {/* Bottom left: last updated + title */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 64,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            maxWidth: '940px',
          }}
        >
          {lastModified && (
            <span
              style={{
                color: '#9b9b9b',
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Last updated on {lastModified}
            </span>
          )}
          <span
            style={{
              color: '#ebebeb',
              fontSize: title.length > 40 ? 44 : 56,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
