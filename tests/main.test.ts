import { Method } from '../lib/constants'
import { generateCode } from '../lib/main'

test('generate QR code', () => {
  expect(generateCode({
    method: Method.Dynamic,
    bin: "970403",
    account: '0011012345678',
    amount: 180000,
    description: "0107NPS68690819thanh toan don hang"
  })).toEqual("00020101021238570010A00000072701270006970403011300110123456780208QRIBFTTA530370454061800005802VN62340107NPS68690819thanh toan don hang63042E2E")
})