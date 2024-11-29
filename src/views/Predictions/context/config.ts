import addresses from 'config/constants/contracts'

import { GRAPH_API_PREDICTION_VRTDEX, GRAPH_API_PREDICTION_BNB } from 'config/constants/endpoints'
import { getAddress } from 'utils/addressHelpers'
import { bscTokens } from 'config/constants/tokens'
import { BigNumber } from '@ethersproject/bignumber'

const DEFAULT_MIN_PRICE_USD_DISPLAYED = BigNumber.from(10000)

export default {
  SEI: {
    address: getAddress(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBNB),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.bnb,
  },
  VRT: {
    address: getAddress(addresses.predictionsVRTDEX),
    api: GRAPH_API_PREDICTION_VRTDEX,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleVRTDEX),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.cake,
  },
}
