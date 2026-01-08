# NapasQR
NapasQR code generation following [NAPAS standard](https://vietqr.net/portal-service/download/documents/QR_Format_T&C_v1.5.2_EN_102022.pdf).

> [!NOTE]
> This package only generate code in string format, use your own package like [qrcode](https://www.npmjs.com/package/qrcode) or [qrcode.react](https://www.npmjs.com/package/qrcode.react) to generate QR image

## Installation
```bash
npm install @vn-contrib/napas-qr
```

## Usage
```tsx
import { QRCodeSVG } from 'qrcode.react'
import { generateCode } from '@vn-contrib/napas-qr'

function Example() {
  const code = generateCode({ bin: '970403', account: '0123456789' })
  return <QRCodeSVG value={code} />
}
```

## License
[MIT License](LICENSE)
