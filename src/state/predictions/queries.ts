import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsVRTDEX,
  betBaseFields as betBaseFieldsVRTDEX,
  userBaseFields as userBaseFieldsVRTDEX,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'VRT' ? roundBaseFieldsVRTDEX : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'VRT' ? betBaseFieldsVRTDEX : betBaseFieldsBNB

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'VRT' ? userBaseFieldsVRTDEX : userBaseFieldsBNB
