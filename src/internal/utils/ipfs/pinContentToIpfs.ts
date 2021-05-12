import { HardhatRuntimeEnvironment } from 'hardhat/types'

import { PinningService } from '../../../types'

interface Cid {
  version: number
  codec: string
  multihash: Buffer
  multibaseName: string
  toString: () => string
}

async function addPinningServices(
  hre: HardhatRuntimeEnvironment,
  pinning: PinningService
): Promise<void> {
  // const exitingServices = await hre.ipfs.pin.remote.service.ls()

  await hre.ipfs.pin.remote.sevice.add(pinning.name, {
    endpoint: new URL(pinning.endpoint),
    key: pinning.key
  })
}

/**
 * Uploads dist folder to IPFS
 * Applies various ignore patterns:
 * - .ipfsignore
 * - .gitignore
 */
export async function pinContentToIpfs({
  hre,
  pinning,
  cid,
  name
}: {
  hre: HardhatRuntimeEnvironment
  pinning: PinningService
  cid: Cid
  name: string
}): Promise<string> {
  hre.ipfs

  await addPinningServices(hre, pinning)
  const pin = await hre.ipfs.pin.remote.add(cid, {
    service: pinning.name,
    name
  })
  return pin.toString()
}