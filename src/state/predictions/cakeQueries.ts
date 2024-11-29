import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponseVRTDEX extends UserResponse<BetResponseVRTDEX> {
  totalVRTDEX: string
  totalVRTDEXBull: string
  totalVRTDEXBear: string
  averageVRTDEX: string
  totalVRTDEXClaimed: string
  netVRTDEX: string
}

export interface BetResponseVRTDEX extends BetResponse {
  claimedVRTDEX: string
  claimedNetVRTDEX: string
  user?: UserResponseVRTDEX
  round?: RoundResponseVRTDEX
}

export type HistoricalBetResponseVRTDEX = HistoricalBetResponse<UserResponseVRTDEX>

export type RoundResponseVRTDEX = RoundResponse<BetResponseVRTDEX>

export interface TotalWonMarketResponseVRTDEX {
  totalVRTDEX: string
  totalVRTDEXTreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedVRTDEX
 claimedNetVRTDEX
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalVRTDEX
  totalVRTDEXBull
  totalVRTDEXBear
  totalBetsClaimed
  totalVRTDEXClaimed
  winRate
  averageVRTDEX
  netVRTDEX
`
