import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy SafeSTOS',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9eab0a93b0cd5d904493694f041bdcedb97b88c6',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Bscscan',
        href: 'https://bscscan.com/token/0x9eab0a93b0cd5d904493694f041bdcedb97b88c6',
      },
      {
        label: 'Chart',
        href: 'https://charts.bogged.finance/?token=0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
      },
      {
        label: 'Coingecko Coming Soon',
        href: '#',
      },
      {
        label: 'CoinMarketCap Coming Soon',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/stosent/',
      },
      {
        label: 'Medium',
        href: 'https://stos-entertainment-co.medium.com/',
      },
    ],
  },
  {
    label: 'Audits Coming Soon',
    icon: 'AuditIcon',
    href: '#',
  },
]

export default config
