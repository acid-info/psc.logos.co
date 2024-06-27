import { ImageResponse } from '@vercel/og'
import { handleMethodNotAllowedResponse } from 'next/dist/server/future/route-modules/helpers/response-handlers'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const image = fetch(new URL('/public/assets/og.jpg', import.meta.url)).then(
  (res) => res.arrayBuffer(),
)

// Doc: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
// Font: https://vercel.com/docs/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
export default async function handler(request: NextRequest) {
  const imageData = await image

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="1200"
          height="630"
          src={imageData as unknown as string}
          alt="og-image"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
handleMethodNotAllowedResponse()
