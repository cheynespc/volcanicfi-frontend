import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { useGetStats } from 'hooks/api'
import { useFarms, usePriceCakeBusd, useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const lavaPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = lavaPrice.times(circSupply)
  const totalValue = useTotalValue()

  let lavaPerBlock = 0
  if (farms && farms[0] && farms[0].lavaPerBlock) {
    lavaPerBlock = new BigNumber(farms[0].lavaPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="3px">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          {/* </Heading> */}
          <Text color="textSubtle" mb="25px">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
        <Heading size="lg" mb="15px">
          {TranslateString(534, 'Current $LAVA Statistics')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10101, 'Price per $LAVA')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(lavaPrice)} decimals={4} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New $LAVA/block')}</Text>
          <Text bold fontSize="14px">{lavaPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
