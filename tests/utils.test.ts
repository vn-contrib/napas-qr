import { calculateCRC, formatData } from '../lib/utils'

describe("calculateCRC", () => {
  it.each([
    {
      input: "00020101021138480010A00000072701300006970403011621129950446040255204581253037045802VN5910PHUONG CAC6005HANOI62110307NPS68696304",
      result: 0x5802
    },
    {
      input: "00020101021138580010A00000072701300006970403011621129950446040250206QRPUSH5204581253037045802VN5910PHUONG CAC6005HANOI62110307NPS68696304",
      result: 0x3820
    }
  ])('returns CRC16 checksum', ({ input, result }) => {
    expect(calculateCRC(input)).toBe(result)
  })
})

describe('formatData', () => {
  it('returns formatted QR data', () => {
    expect(formatData({
      "00": "01",
      "01": 12,
      "38": {
        "00": "A000000727",
        "01": {
          "00": "970403",
          "01": "0011012345678"
        },
        "02": "QRIBFTTA"
      },
      "53": 704,
      "54": 180000,
      "58": "VN",
      "62": "0107NPS68690819thanh toan don hang"
    })).toEqual("00020101021238570010A00000072701270006970403011300110123456780208QRIBFTTA530370454061800005802VN62340107NPS68690819thanh toan don hang")
  })
})