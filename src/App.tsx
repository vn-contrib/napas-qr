import typescriptLogo from './typescript.svg'
import { generateValue } from '../lib/main'
import { QRCodeSVG } from 'qrcode.react'

export default function App() {
  const qrValue = generateValue({
    bin: '970436',
    account: '0123456789'
  })

  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div className="card">
        <QRCodeSVG value={qrValue} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  )
}