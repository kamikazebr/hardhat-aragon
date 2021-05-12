export const DEFAULT_IPFS_ENDPOINT = 'http://localhost:5001'

export const DEFAULT_APP_SRC_PATH = 'app/'
export const DEFAULT_APP_BUILD_PATH = 'dist/'
export const DEFAULT_APP_BUILD_SCRIPT = 'build'
export const DEFAULT_IGNORE_PATH = '.'

// Standard expected Aragon file paths
export const ARTIFACT_NAME = 'artifact.json'
export const MANIFEST_NAME = 'manifest.json'
export const FLAT_CODE_NAME = 'code.sol'

// Special addresses used for permissions
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ANY_ADDRESS = '0xffffffffffffffffffffffffffffffffffffffff'

/**
 * Root etherscan URLs per chainId
 * Note: All URLs are expected to have the same sub paths, /tx, etc
 */
export const EXPLORER_CHAIN_URLS = {
  1: 'https://etherscan.io/',
  3: 'https://ropsten.etherscan.io/',
  4: 'https://rinkeby.etherscan.io/',
  5: 'https://goerli.etherscan.io/',
  42: 'https://kovan.etherscan.io/',
  100: 'https://blockscout.com/xdai/mainnet/',
  137: 'https://explorer-mainnet.maticvigil.com/',
  56: 'https://bscscan.com/'
}
