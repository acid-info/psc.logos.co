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
      shrink: true,
      highlight: true,
      removeBorderRight: true,
    },
    {
      title: 'Welcome',
      speakers: ['Joe Nakamoto', 'Jarrad Hope'],
      startTime: '11:00',
      endTime: '11:30',
    },
    {
      title: 'Farewell to Westphalia: Post Nation State Governance',
      speakers: ['Jarrad Hope', 'Tom W. Bell', 'Peter Ludlow'],
      startTime: '11:30',
      endTime: '12:30',
    },
    {
      title: 'Lunch',
      speakers: ['Chill Zone'],
      startTime: '12:30',
      endTime: '13:30',
      highlight: true,
      removeBorderRight: true,
    },
    {
      title: 'Accessing Justice via Decentralised Legal Systems',
      speakers: ['Federico Ast', 'Eric Alston', 'Layer0x', 'Kelsie Nabben'],
      startTime: '13:30',
      endTime: '14:30',
    },
    {
      title: 'How Bitcoin Changed Emerging Markets',
      speakers: ['Joe Nakamoto', 'Edan Yago'],
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      title: 'Zanzalu: Building a Growth Ecosystem in Africa',
      speakers: ['Eva Klaus', 'Mark Lutter'],
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      title: 'Zanzalu: Building a Growth Ecosystem in Africa',
      speakers: ['Eva Klaus', 'Mark Lutter'],
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '16:00',
      endTime: '16:30',
      gray: true,
    },
    {
      title: 'How Governments Can Benefit from Parallel Societies',
      speakers: ['Angelo Alessio', 'William Wang'],
      startTime: '16:30',
      endTime: '17:00',
    },
    {
      title: 'How to Start Your Own Pop-up Village',
      speakers: [
        'Audrey Tang',
        'Timour Koster',
        'Veronica Schrenk',
        'Eva Klaus',
      ],
      startTime: '17:00',
      endTime: '18:00',
    },
    {
      title: 'Regenerative Public Goods for Sustainable Communities',
      speakers: ['Michel Bauwens', 'David Casey', 'Kevin Owocki'],
      startTime: '18:00',
      endTime: '19:00',
    },
    {
      title: 'Closing Message',
      speakers: [''],
      startTime: '19:00',
      endTime: '19:10',
    },
    {
      title: 'Thai Food market & Drinks',
      speakers: ['chill zone'],
      startTime: '19:10',
      endTime: '21:00',
      highlight: true,
      removeBorderRight: true,
    },
    {
      title: 'The Paradise Bangkok Molam International Band',
      speakers: [''],
      startTime: '20:30',
      endTime: '21:30',
    },
    {
      title: 'Drinks',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
      highlight: true,
      removeBorderRight: true,
    },
  ],
  demoRoom: [
    {
      title: 'Doors Open',
      speakers: [],
      startTime: '10:30',
      endTime: '11:00',
      shrink: true,
      highlight: true,
      merged: true,
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
      startTime: '11:45',
      endTime: '12:30',
    },
    {
      title: 'Lunch',
      speakers: ['Chill Zone'],
      startTime: '12:30',
      endTime: '13:30',
      highlight: true,
      merged: true,
    },
    {
      title: 'How Might We Solve Local Economic Challenges Together',
      speakers: ['Andrej Berlin'],
      startTime: '13:30',
      endTime: '14:30',
    },
    {
      title: 'Building Real-World Blockchain Pilots: Partnerships for Impact',
      speakers: ['David Casey'],
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      title: 'Common Knowledge Machines',
      speakers: ['Puja Ohlhaver'],
      startTime: '15:00',
      endTime: '15:30',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '15:30',
      endTime: '16:00',
      gray: true,
      removeBorderRight: true,
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
      speakers: ['Franck Royer', 'Kieran Mesquita', "Rachel-Rose O'Leary"],
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
      highlight: true,
      merged: true,
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Drinks',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
      highlight: true,
      merged: true,
    },
  ],
  roundTable: [
    {
      title: 'Doors Open',
      speakers: [],
      startTime: '10:30',
      endTime: '11:00',
      shrink: true,
      highlight: true,
      merged: true,
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
      highlight: true,
      merged: true,
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Matrosova'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Matrosova'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Sovereign Tools: Workshop by Women in Web3 Privacy',
      speakers: ['Evin McMullen', 'Henry de Valence', 'Yana Matrosova'],
      startTime: '13:30',
      endTime: '15:30',
    },
    {
      title: 'Coffee Break',
      speakers: ['Chill Zone'],
      startTime: '15:30',
      endTime: '16:00',
      highlight: true,
      merged: true,
    },
    {
      title:
        'Lightning Talks:\n\n4Seas,\nGelephu Mindfulness City,\nLiberland,\nRegistryChain,\nZu-Grama,\nZuitzerland',
      speakers: [''],
      startTime: '16:00',
      endTime: '19:00',
    },
    {
      title:
        'Lightning Talks:\n\n4Seas,\nGelephu Mindfulness City,\nLiberland,\nRegistryChain,\nZu-Grama,\nZuitzerland',
      speakers: [''],
      startTime: '16:00',
      endTime: '19:00',
    },
    {
      title:
        'Lightning Talks:\n\n4Seas,\nGelephu Mindfulness City,\nLiberland,\nRegistryChain,\nZu-Grama,\nZuitzerland',
      speakers: [''],
      startTime: '16:00',
      endTime: '19:00',
    },
    {
      title:
        'Lightning Talks:\n\n4Seas,\nGelephu Mindfulness City,\nLiberland,\nRegistryChain,\nZu-Grama,\nZuitzerland',
      speakers: [''],
      startTime: '16:00',
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
      highlight: true,
      merged: true,
    },
    {
      title: '',
      speakers: [''],
      startTime: '',
      endTime: '',
    },
    {
      title: 'Drinks',
      speakers: ['chill zone'],
      startTime: '21:00',
      endTime: '22:00',
      highlight: true,
      merged: true,
    },
  ],
}
