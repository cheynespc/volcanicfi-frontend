import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Volcanic Finance',
    icon: 'NftIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.....com/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange....com/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Hot Spots',
    icon: 'SunIcon',
    href: '/hotspots',
  },
  {
    label: 'Magma Pools',
    icon: 'PoolIcon',
    href: '/magmapools',
  },
  // {
  //   label: 'Governance',
  //   icon: 'GroupsIcon',
  //   href: '/governance',
  // },
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
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SpiritSwap',
        href: 'https://pancakeswap.info/token/...',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/...',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/...',
      },
    ],
  },
  {
    label: 'Resources',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Documentation',
        href: 'https://....gitbook.io/.../', // fix
      },
      {
        label: 'Github',
        href: 'https://github.com/.../', // fix
      },
      {
        label: 'Blog',
        href: 'https://....medium.com/', // fix
      },
    ],
  },

  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://...', // fix
  },

  {
    label: 'Discord',
    icon: 'GroupsIcon',
    href: 'https://...', // fix
  },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://...',
  // },
]

export default config
