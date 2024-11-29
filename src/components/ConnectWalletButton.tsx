import { Button, useWalletModal, ButtonProps } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from 'hooks/useEagerConnect.bmp.ts'
import { useTranslation } from '@pancakeswap/localization'
import Trans from './Trans'

// const MediaButton = styled(Button) => {}

// const CustomConnectButton = styled.div`
//   @media screen and (max-width: 576px){
//     scale: gm; 
//   }

// `

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { t } = useTranslation()
  const { login } = useAuth()
  const handleActive = useActiveHandle()
  const { onPresentConnectModal } = useWalletModal(login, t)

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      onPresentConnectModal()
    }
  }

  return (
      <Button onClick={handleClick} scale='gm' variant='swap' {...props}>
        {children || <Trans>Connect Wallet</Trans>}
      </Button>
  )
}

export default ConnectWalletButton
