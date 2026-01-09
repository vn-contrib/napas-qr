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

or directly embed via iframe
```tsx
// example
<iframe src="https://vn-contrib.github.io/napas-qr/qr?bin=970403&account=0123456789" />

// query params
interface QueryParams {
  bin: string
  account: string
  method?: 11 | 12  // Point of Initiation Method, default: 11 (11: static, 12: dynamic)
  amount?: number
  purpose?: string
  bill?: string
  size?: number  // QR size, default: 128
}
```

## Resources
- [List of banks in NAPAS system](https://vn-contrib.github.io/napas-qr/banks.json)

## License
[MIT License](LICENSE)
