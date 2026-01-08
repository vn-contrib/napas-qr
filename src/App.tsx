import typescriptLogo from './typescript.svg'
import { generateCode } from '../lib/main'
import { QRCodeSVG } from 'qrcode.react'

export default function App() {
  const code = generateCode({
    bin: '970403',
    account: '2112995044604025'
  })

  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="./vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div className="card">
        <QRCodeSVG value={code} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  )
}