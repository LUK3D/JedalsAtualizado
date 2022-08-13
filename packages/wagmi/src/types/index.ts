/**
 * ## IChain Interface 📝
 *  The IChain declaration type
 */
export interface IChain {
  id: number
  name: string
  network: string
  rpcUrls: IRpcUrls
  nativeCurrency: INativeCurrency
  blockExplorers: IBlockExplorers
  testnet?: boolean
  multicall?: IBlock
}

/**
 * ## IRpcUrls Interface 📝
 *  The IRpcUrls declaration type
 */
export interface IRpcUrls {
  default: string
  public?: string
}

/**
 * ## INativeCurrency Interface 📝
 *  The INativeCurrency declaration type
 */
export interface INativeCurrency {
  name: string
  symbol: string
  decimals: number
}

/**
 * ## IBlockExplorers Interface 📝
 *  The IBlockExplorers declaration type
 */
export interface IBlockExplorers {
  default: IExplorer
  etherscan?: IExplorer
}

/**
 * ## IExplorer Interface 📝
 *  The IExplorer declaration type
 */
export interface IExplorer {
  name: string
  url: string
}

/**
 * ## IBlock Interface 📝
 *  The IBlock declaration type
 */
export interface IBlock {
  address: string
  blockCreated: number
}
