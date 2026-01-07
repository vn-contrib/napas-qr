import { Method, System, ServiceCode, Currency, CountryCode } from './constants'
import { calculateCRC, formatData, type QRData } from './utils'

interface NapasQRProps {
  method?: Method
  system?: number
  serviceCode?: ServiceCode
  bin: string
  account: string
  amount?: number
  currency?: number
  countryCode?: string
  description?: string
}

export function generateValue({
  method = Method.Static,
  system = System.NAPAS,
  serviceCode = ServiceCode.AccountTransfer,
  bin,
  account,
  amount,
  currency = Currency.VND,
  countryCode = CountryCode.VN,
  description
}: NapasQRProps) {
  const data: QRData = {
    // payload format indicator
    "00": "01",
    // point of initiation method
    "01": method,
    // merchant account information
    [system]: {
      // guid
      "00": "A000000727",
      // payment network
      "01": {
        // bin
        "00": bin,
        // account
        "01": account
      },
      // service code
      "02": serviceCode,
    },
    // currency
    "53": currency,
    ...(amount && {
      "54": amount
    }),
    "58": countryCode,
    ...(description && {
      "62": description
    })
  }
  const s = formatData(data) + "6304" // 63(crc) + 04(length) 
  return s + calculateCRC(s).toString(16).toUpperCase().padStart(4, "0")
}
