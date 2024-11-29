import { GetStaticPaths, GetStaticProps } from 'next'
import RemoveLiquidity from 'views/RemoveLiquidity'

export default RemoveLiquidity

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|SEI)-(0x[a-fA-F0-9]{40}|SEI)$/

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { currency: [] } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { currency = [] } = params
  const [currencyIdA, currencyIdB] = currency
  const match = currencyIdA?.match(OLD_PATH_STRUCTURE)

  if (match?.length) {
    return {
      redirect: {
        statusCode: 301,
        destination: `/remove/${match[1]}/${match[2]}`,
      },
    }
  }

  if (currencyIdA && currencyIdB && currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return {
      redirect: {
        statusCode: 303,
        destination: `/remove/${currencyIdA}`,
      },
    }
  }

  return {
    props: {},
  }
}
