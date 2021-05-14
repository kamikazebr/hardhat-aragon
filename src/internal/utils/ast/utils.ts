import { ethers } from 'ethers'

/**
 * Returns corrected function signatures
 * @param sig
 */
export function coerceFunctionSignature(sig: string): string {
  const int = new ethers.utils.Interface(sig)
  return int.format()
}
