import { siteConfigs } from '@/configs/site.configs'
import { FooterGroup } from '@/types/ui.types'

export const NavLinksItems = [{ label: 'Media', href: '/media' }]

export const FooterLinksItems: {
  info: FooterGroup
  social: FooterGroup
} = {
  info: {
    title: null,
    key: 'info',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Contact us', href: '/contact-us' },
    ],
  },
  social: {
    title: null,
    key: 'social',
    links: [
      { label: 'X', href: `https://x.com/${siteConfigs.xHandle}`, key: 'x' },
      {
        label: 'Youtube',
        href: `https://www.youtube.com/${siteConfigs.youtubeHandle}`,
        key: 'youtube',
      },
      {
        label: 'Spotify',
        href: `https://open.spotify.com/user/${siteConfigs.spotifyHandle}`,
        key: 'spotify',
      },
    ],
  },
}

export const agendaData = [
  {
    time: '11:00',
    sessions: {
      mainStage: {
        title: 'Welcome',
        speakers: ['Joe Nakamoto'],
      },
      demoRoom: null,
      roundTable: null,
    },
  },
  {
    time: '11:40',
    sessions: {
      mainStage: {
        title: 'Logos Welcome',
        speakers: ['Jarrad Hope'],
      },
      demoRoom: null,
      roundTable: null,
    },
  },
  {
    time: '11:30',
    sessions: {
      mainStage: {
        title: 'Farewell to Westphalia: Beyond the Nation State',
        speakers: ['Tom W. Bell', 'Jarrad Hope', 'Peter Ludlow'],
      },
      demoRoom: {
        title: 'Keycard Pro: A Next-Generation Hardware Wallet',
        speakers: ['Guy Louis Grau'],
      },
      roundTable: null,
    },
  },
  {
    time: '12:30',
    sessions: {
      mainStage: {
        title: 'Lunch',
        speakers: ['Chill Zone'],
      },
      demoRoom: null,
      roundTable: null,
    },
  },
  {
    time: '13:30',
    sessions: {
      mainStage: {
        title: 'Accessing Justice via Decentralised Legal Systems',
        speakers: ['Eric Alston', 'Federico Ast', 'LayerX', 'Kelsie Nabben'],
      },
      demoRoom: {
        title: 'Introduction to Decentralised Self-Organization',
        speakers: ['Andrej Berlin'],
      },
      roundTable: {
        title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
        speakers: [],
      },
    },
  },
  {
    time: '14:30',
    sessions: {
      mainStage: {
        title: 'Bitcoin: A Parallel Global Economy',
        speakers: ['Joe Nakamoto', 'Edan Yago'],
      },
      demoRoom: {
        title: 'Funding the Commons, Pilot Research',
        speakers: ['Puja Ohlhaver'],
      },
      roundTable: null,
    },
  },
  {
    time: '15:00',
    sessions: {
      mainStage: {
        title: 'Zanzibar: Building a Granton Ecosystem in Africa',
        speakers: ['Eva Kailis', 'Mark Lutter'],
      },
      demoRoom: {
        title: 'Community Currencies: How to Price Parallel Societies',
        speakers: ['Joe Nakamoto'],
      },
      roundTable: {
        title: 'Codex Demo: Durable Archiving for Network Societies',
        speakers: ['Evan McMullen', 'Henry de Valence', 'Yana Martsovska'],
      },
    },
  },
  {
    time: '15:30',
    sessions: {
      mainStage: {
        title: 'Coffee Break',
        speakers: [],
      },
      demoRoom: {
        title: 'Chill Zone',
        speakers: [],
      },
      roundTable: {
        title: 'Lightning Talks',
        speakers: [],
      },
    },
  },
]
