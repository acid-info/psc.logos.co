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

export const agendaData = {
  mainStage: [
    {
      title: 'Doors Open',
      speakers: [],
      startTime: '10:30',
      endTime: '11:00',
    },
    {
      title: 'Welcome',
      speakers: ['Joe Nakamoto'],
      startTime: '11:00',
      endTime: '11:10',
    },
    {
      title: 'Logos Welcome',
      speakers: ['Jarrad Hope'],
      startTime: '11:10',
      endTime: '11:30',
    },
    {
      title: 'Farewell to Westphalia: Beyond the Nation State',
      speakers: ['Tom W. Bell', 'Jarrad Hope', 'Peter Ludlow'],
      startTime: '11:30',
      endTime: '12:30',
    },
    {
      title: 'Lunch',
      speakers: ['Chill Zone'],
      startTime: '12:30',
      endTime: '13:30',
    },
    {
      title: 'Accessing Justice via Decentralised Legal Systems',
      speakers: ['Eric Alston', 'Federico Ast', 'LayerX', 'Kelsie Nabben'],
      startTime: '13:30',
      endTime: '14:30',
    },
    {
      title: 'Bitcoin: A Parallel Global Economy',
      speakers: ['Joe Nakamoto', 'Edan Yago'],
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      title: 'Zanzalu: Building a Growth Ecosystem in Africa',
      speakers: ['Eva Kailis', 'Mark Lutter'],
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      title: 'Zanzalu: Building a Growth Ecosystem in Africa',
      speakers: ['Eva Kailis', 'Mark Lutter'],
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '16:00',
      endTime: '16:30',
    },
    {
      title: 'How Governments Can Benefit from Parallel Societies',
      speakers: ['Angelo Alessio', 'William Wang'],
      startTime: '16:30',
      endTime: '17:00',
    },
    {
      title: 'How to Start Your Own Pop-up Village',
      speakers: ['Audrey Tang', 'Timour Koster', 'Veronika Scherm'],
      startTime: '17:00',
      endTime: '18:00',
    },
    {
      title: 'Regenerative Public Goods for Sustainable Communities',
      speakers: ['David Casey', 'Kevin Owocki', 'Michel Bauwens'],
      startTime: '18:00',
      endTime: '19:00',
    },
    {
      title: 'Closing Message',
      speakers: ['Michel Bauwens', 'David Casey', 'Kevin Owocki'],
      startTime: '19:00',
      endTime: '19:10',
    },
    {
      title: 'Thai Food market & Drinks',
      speakers: ['chill zone'],
      startTime: '19:10',
      endTime: '21:00',
    },
    {
      title: 'Drinks Only',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
    },
  ],
  demoRoom: [
    {
      title: 'Doors Open',
      speakers: [],
      startTime: '10:30',
      endTime: '11:00',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Keycard Pro: A Next-Generation Hardware Wallet',
      speakers: ['Guy Louis Grau'],
      startTime: '11:40',
      endTime: '12:30',
    },
    {
      title: 'Lunch',
      speakers: ['Chill Zone'],
      startTime: '12:30',
      endTime: '13:30',
    },
    {
      title: 'Introduction to Decentralised Self-Organization',
      speakers: ['Andrej Berlin'],
      startTime: '13:30',
      endTime: '14:30',
    },
    {
      title: 'Funding the Commons, Pilot Research',
      speakers: ['Puja Ohlhaver'],
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      title: 'Community Currencies: How to Price Parallel Societies',
      speakers: ['Joe Nakamoto'],
      startTime: '15:00',
      endTime: '15:30',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '15:30',
      endTime: '16:00',
    },
    {
      title: 'Codex Demo: Durable Archiving for Network Societies',
      speakers: ['Aqeel Mohammad', 'Arnaud Deville'],
      startTime: '16:00',
      endTime: '17:00',
    },
    {
      title: 'Codex Demo: Durable Archiving for Network Societies',
      speakers: ['Aqeel Mohammad', 'Arnaud Deville'],
      startTime: '16:00',
      endTime: '17:00',
    },
    {
      title: 'Kleros Dispute Resolution: From Disagreements to Resolution',
      speakers: ['Yann Aouidef'],
      startTime: '17:00',
      endTime: '18:00',
    },
    {
      title: 'Parallel Society Tech: State of the Art and Future',
      speakers: ['Franck Royer', 'Kieram Mesquita', "Rachel-Rose O'Leary"],
      startTime: '18:00',
      endTime: '19:00',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Thai Food market & Drinks',
      speakers: ['chill zone'],
      startTime: '19:10',
      endTime: '21:00',
    },
    {
      title: 'Drinks Only',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
    },
  ],
  roundTable: [
    {
      title: 'Doors Open',
      speakers: [],
      startTime: '10:30',
      endTime: '11:00',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Lunch',
      speakers: ['Chill Zone'],
      startTime: '12:30',
      endTime: '13:30',
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Mastrosoeva'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Mastrosoeva'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Mastrosoeva'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '15:30',
      endTime: '16:00',
    },
    {
      title: 'Lightning Talks',
      speakers: ['Kimberly Adams'],
      startTime: '16:00',
      endTime: '18:00',
    },
    {
      title: 'Lightning Talks',
      speakers: ['Kimberly Adams'],
      startTime: '16:00',
      endTime: '18:00',
    },
    {
      title: 'Lightning Talks',
      speakers: ['Kimberly Adams'],
      startTime: '16:00',
      endTime: '18:00',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Thai Food market & Drinks',
      speakers: ['chill zone'],
      startTime: '19:10',
      endTime: '21:00',
    },
    {
      title: 'Drinks Only',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
    },
  ],
}
