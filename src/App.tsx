const
  size = 160,
  bin = '970403',
  account = '0123456789'

export default function App() {
  const iframeUrl = new URL('qr', location.href).toString()
  const expIframe = `${iframeUrl}?bin=${bin}&account=${account}&size=${size}`

  return (
    <div>
      <h1>NapasQR</h1>
      <p className="read-the-docs">
        <code>npm install @vn-contrib/napas-qr</code> to use as a library or <br /> <code>{`<iframe src="${iframeUrl}?{querystring}" />`}</code> to embed in your website
      </p>
      <div className="card">
        <p>
          Example
          <br />
          <a href={expIframe} target="_blank">{expIframe}</a>
        </p>
        <iframe src={expIframe} width={size} height={size} />
      </div>
    </div>
  )
}