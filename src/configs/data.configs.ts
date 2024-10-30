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
        title: 'WELCOME',
        speakers: ['Joe Nakamoto'],
      },
      demoRoom: null,
      roundTable: null,
    },
  },
  {
    time: '11:10',
    sessions: {
      mainStage: {
        title: 'LOGOS WELCOME',
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
        title: 'FAREWELL TO WESTPHALIA; BEYOND THE NATION STATE',
        speakers: ['Tom W. Bell', 'Jarrad Hope', 'Peter Ludlow'],
      },
      demoRoom: {
        title: 'KEYCARD PRO: A NEXT-GENERATION HARDWARE WALLET',
        speakers: ['Guy Louis Grau'],
      },
      roundTable: null,
    },
  },
  {
    time: '12:30',
    sessions: {
      mainStage: {
        title: 'LUNCH',
        speakers: ['Chill Zone'],
      },
      demoRoom: {
        title: 'LUNCH',
        speakers: ['Chill Zone'],
      },
      roundTable: {
        title: 'LUNCH',
        speakers: ['Chill Zone'],
      },
    },
  },
]
