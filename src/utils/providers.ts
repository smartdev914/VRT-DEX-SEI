import { StaticJsonRpcProvider } from '@ethersproject/providers'

// export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://evm-rpc.arctic-1.seinetwork.io'
export const BSC_PROD_NODE = 'https://evm-rpc.arctic-1.seinetwork.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
