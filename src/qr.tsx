import { QRCodeSVG } from 'qrcode.react'
import { createRoot } from 'react-dom/client'
import { generateCode } from '../lib/main'

const {
  bin,
  account,
  size = '128',
  ...rest
} = Object.fromEntries(new URLSearchParams(location.search))

if (!bin) {
  throw 'bin not found'
}
if (!account) {
  throw 'account not found'
}

const code = generateCode({ bin, account, ...rest })

createRoot(document.body).render(<QRCodeSVG value={code} size={+size} />)

