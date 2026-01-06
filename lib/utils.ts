export function calculateCRC(data: string) {
  const polynomial = 0x1021;
  let crc = 0xFFFF; // Initial value

  for (let i = 0; i < data.length; i++) {
    crc ^= (data.charCodeAt(i) << 8); // XOR current byte with the high byte of CRC

    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        // If the most significant bit is 1, shift and XOR with the polynomial
        crc = (crc << 1) ^ polynomial;
      } else {
        // Otherwise, just shift left
        crc <<= 1;
      }
    }
    // Ensure the result stays within the 16-bit range
    crc &= 0xFFFF;
  }

  return crc;
}