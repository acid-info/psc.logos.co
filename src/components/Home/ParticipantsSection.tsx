import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import SpeakerCard from '../Cards/SpeakerCard'
import { Section, SectionTitle } from './StyledComponents'

interface Speaker {
  id: string
  initial: string
  name: string
  title: string
  org: string
  profileImage?: string
  bio: string
}

const speakersData: Speaker[] = [
  {
    id: 'andrej-berlin',
    initial: 'A',
    name: 'Andrej Berlin',
    title: 'Organisational Designer &\nBusiness Manager',
    org: 'DeepWork',
    profileImage: '/assets/participants/andrej-berlin.jpg',
    bio: 'Andrej Berlin is an expert in web3-native business management and organisational design. He is the creator of the decentralised design firm and organisational consultancy Deep Work, with 10 years of experience from over 100 different organisations, services, and products.',
  },
  {
    id: 'angelo-alessio',
    initial: 'A',
    name: 'Angelo Alessio',
    title: 'Founder',
    org: 'build_cities',
    profileImage: '/assets/participants/angelo-alessio.png',
    bio: 'Angelo Alessio is the founder and protocol architect at build_cities, a protocol for economic development. Prior to build_cities, Angelo was a Director of Product at Acorns following an acquisition of his previous company Harvest, which automatically negotiated bank fees for consumers using AI. Before Harvest and Acorns, Angelo consulted for various startups in the product and growth domains. Angelo holds an MBA from New York University and is an army veteran.',
  },
  {
    id: 'arnaud-deville',
    initial: 'A',
    name: 'Arnaud Deville',
    title: 'Full Stack Engineer',
    org: 'Codex',
    profileImage: '/assets/participants/arnaud-deville.png',
    bio: "Arnaud Deville is a full-stack developer with 12 years of experience in a variety of programming languages, including TypeScript, JavaScript, React, and Go. Currently, he is part of the Institute of Free Technology, working on the Codex project as a full-stack developer for the website and the protocol's marketplace component.\n\nOver the past decade, he has contributed to various sectors, dedicating three years to health projects and four years to education. His most recent engagement was in fintech, where he worked on developing an alternative currency system based on gold.",
  },
  {
    id: 'aqeel-mohammad',
    initial: 'A',
    name: 'Aqeel Mohammad',
    title: 'Product Strategy',
    org: 'Codex',
    profileImage: '/assets/participants/aqeel.png',
    bio: 'Aqeel Mohammad is a product strategist and designer focused on leading market adoption for emerging technologies and democratising their production. Currently, he is a contributor at the Institute of Free Technology, working on the Codex project.',
  },
  {
    id: 'audrey-tang',
    initial: 'A',
    name: 'Audrey Tang',
    title: 'Founder',
    org: 'Shan Hai Woo, DRK Lab',
    profileImage: '/assets/participants/audrey.png',
    bio: 'Audrey Tang founded DRK Lab, which actively supports blockchain public goods development through grants and support for research and developer communities. It also fosters Web3 industry growth through initiatives like the Shanhaiwoo community and has launched the Web3 Young Scholars Program and Web3 Scholars Conference to drive industry development and collaboration among scholars, researchers, and practitioners. Audrey has over eight years of experience in the blockchain industry and draws on a background in investment, project strategy, ecosystem development, and brand expansion.',
  },
  {
    id: 'david-casey',
    initial: 'D',
    name: 'David Casey',
    title: 'Director',
    org: 'Funding the Commons',
    profileImage: '/assets/participants/david-casey.png',
    bio: "A four-time founder, David Casey enjoys working at the ecosystem level to engineer systemic change and currently is a Director at Funding the Commons, which aims to accelerate blockchain-based public goods funding. In 2013, David became interested in blockchain technology's utility for cross-border payments within one of his own companies. By 2015, he deployed his first blockchain-based asset using Bitcoin’s Colored Coins protocol. Within the blockchain industry, David has worn multiple hats, including roles as a founder and CEO.",
  },
  {
    id: 'edan-yago',
    initial: 'E',
    name: 'Edan Yago',
    title: 'CEO & Co-founder',
    org: 'BitcoinOS',
    profileImage: '/assets/participants/edan-yago.jpg',
    bio: 'Edan Yago is CEO and Co-founder of BitcoinOS, the smart contract operating system for Bitcoin. He is also an early core contributor to Sovryn, a decentralised Layer 2 Bitcoin trading and lending and asset management platform. As an anti-finance financier and radical optimist, he is a passionate advocate for the mass adoption of open, borderless and incorruptible finance. Yago is a believer in both the reliable permanence of Bitcoin and the decentralised innovation of crypto.',
  },
  {
    id: 'eva-klaus',
    initial: 'E',
    name: 'Eva Klaus',
    title: 'Researcher at Africa Urban Lab',
    org: 'Co-Founder at Zanzalu',
    profileImage: '/assets/participants/eva-klaus.jpg',
    bio: 'Eva is a researcher at the Africa Urban Lab under the Cities, Culture, and Technology research cluster. Prior to joining AUL, she held positions at the Charter Cities Institute, London School of Economics, and World Bank. Most recently, she co-founded Zanzalu, a pop-up city based in Fumba Town, Zanzibar.',
  },
  {
    id: 'evin-mc-mullen',
    initial: 'E',
    name: 'Evin Mc Mullen',
    title: 'Co-Founder',
    org: 'Privado ID',
    profileImage: '/assets/participants/evin-mc-mullen.jpg',
    bio: 'Evin McMullen is Chief Strategy Officer and co-Founder of Privado ID, enabling Unified Identity across blockchains and legacy systems. Evin previously served as CEO and founder of verifiable data platform Disco.xyz, and as a Director at Berkshire Hathaway and ConsenSys. She is a cofounder of DAO Jones and inkDAO, and an advisor to Boys Club. She is a graduate of Yale University.',
  },
  {
    id: 'federico-ast',
    initial: 'F',
    name: 'Federico Ast',
    title: 'Co-Founder',
    org: 'Kleros',
    profileImage: '/assets/participants/federico-ast.png',
    bio: 'Federico Ast earned degrees in economics and philosophy from the University of Buenos Aires and holds a PhD in management from IAE Business School. He is the co-founder and CEO of Kleros. A pioneer in the field of decentralised justice, Federico has lectured at prestigious universities, including Stanford and Oxford, and spoken at international organisations such as the United Nations. He is passionate about leveraging exponential technologies like artificial intelligence, crowdsourcing, and blockchain to drive social innovation.',
  },
  {
    id: 'franck-royer',
    initial: 'F',
    name: 'Franck Royer',
    title: 'Program Lead',
    org: 'Waku',
    profileImage: '/assets/participants/franck-royer.jpg',
    bio: 'Franck is currently leading the Waku project, a suite of protocol and network that enables censorship-resistant and private off-chain communications, using novel zero-knowledge technology to prevent spamming. He joined the blockchain ecosystem for the Cypherpunk and privacy values, previously working on multi-chain private swap protocols.',
  },
  {
    id: 'guy-louis-grau',
    initial: 'G',
    name: 'Guy-Louis Grau',
    title: 'Program Lead',
    org: 'Keycard',
    profileImage: '/assets/participants/guy-louis.png',
    bio: 'From a young age, Guy-Louis Grau has been passionate about hacking electronic devices, turning household gadgets into his personal playground. He graduated as an electronics engineer from École Centrale Paris and led the development of innovative consumer electronics at various companies for more than 15 years. His introduction to Ethereum in 2017 lit a fire under him and sparked an obsession with crafting software and hardware to uphold user sovereignty. Currently, Guy-Louis is leading the development of Keycard, an open-source, principle-backed hardware wallet, for the IFT.',
  },
  {
    id: 'henry-de valence',
    initial: 'H',
    name: 'Henry de Valence',
    title: 'CTO',
    org: 'Penumbra',
    profileImage: '/assets/participants/henry-de valence.jpg',
    bio: 'Henry is a cryptographer, interested in fast, safe zero-knowledge cryptography for privacy-preserving systems. Previously, he did cryptography work at the Zcash Foundation, Interstellar, Chain Inc., Cloudflare, and in grad school. his other interests include number theory, algebra, geometry, privacy, freedom, and the number 24.',
  },
  {
    id: 'jarrad-hope',
    initial: 'J',
    name: 'Jarrad Hope',
    title: 'Co-Founder',
    org: 'Logos, IFT',
    profileImage: '/assets/participants/jarrad-hope.png',
    bio: 'Jarrad Hope came to Bitcoin in early 2011 through agorism, counter-economics, and crypto anarchy. Seeing that Bitcoin could operate a monetary policy in a hostile environment, he began to view public blockchains as a voluntary social order, one that did not depend on a monopoly of violence. From there, he participated in early attempts to generalise the Bitcoin script to advance institutional libertarianism, ultimately becoming an early contributor to Ethereum. While advancing privacy technologies through the development of the e2e and p2p private messaging client and super app Status, Jarrad realised that privacy technologies are not enough and now advocates for self-sovereign crypto networks and the realisation of a latent cypherpunk dream, the cryptostate.',
  },
  {
    id: 'joe-nakamoto',
    initial: 'J',
    name: 'Joe Nakamoto',
    title: 'Host',
    org: 'Parallel Society Congress',
    profileImage: '/assets/participants/joe-nakamoto.jpg',
    bio: '@joenakamoto is a journalist, documentary maker & MC. As an independent journalist, Joe pushes the boundaries of Bitcoin content, giving away free Sats to strangers and shooting Youtube-friendly challenge videos. Joe is multi-lingual and travels the world trying to make sense of Bitcoin.',
  },
  {
    id: 'kelsie-nabbens',
    initial: 'K',
    name: 'Kelsie Nabben',
    title: 'Max Weber Fellow',
    org: 'European University Institute,\nBlockchainGov',
    profileImage: '/assets/participants/kelsie-nabbens.jpg',
    bio: 'Dr Kelsie Nabben is an ethnographic researcher specialising in the social impacts of emerging technologies, particularly decentralised digital infrastructure (including blockchains, peer-to-peer protocols, and Decentralised Autonomous Organisations) and other algorithmic systems (such as Large-Language-Models). Her interdisciplinary research involves analysis of the interplay between social and technical elements of digital infrastructure with a focus on resilience and accountability in contexts of digital governance.',
  },
  {
    id: 'kevin-owocki',
    initial: 'K',
    name: 'Kevin Owocki',
    title: 'Founder',
    org: 'Gitcoin',
    profileImage: '/assets/participants/kevin-owocki.jpg',
    bio: 'Kevin Owocki is a blockchain expert, computer scientist, and host of the Greenpill.network podcast. Since founding Gitcoin in 2017, his vision of a positive-sum ecosystem has facilitated the distribution of over $62 million to projects, solidifying Gitcoin as an essential component of the Ethereum ecosystem. In 2021, the Gitcoin DAO launched, and Gitcoin Grants evolved into a suite of modular and decentralised protocols. As of 2023, web3 projects integrate Gitcoin Grants through Grants Stack or Allo Protocol, further reinforcing its pivotal role in supporting and marketing countless innovative projects.',
  },
  {
    id: 'kieran-mesquita',
    initial: 'K',
    name: 'Kieran Mesquita',
    title: 'Contributor',
    org: 'Railgun DAO',
    profileImage: '/assets/participants/kieran-mesquita.jpg',
    bio: 'Kieran is a long-time advocate for freedom-enabling technologies, with a strong background in crypto as an early adopter. He has contributed to multiple decentralised projects, and is currently focused on researching and developing protocol designs for RAILGUN DAO, a privacy-enabling technology.',
  },
  {
    id: 'kimberly-adams',
    initial: 'K',
    name: 'Kimberly Adams',
    title: 'Lightning Talks Host',
    org: 'Bankless Ventures',
    profileImage: '/assets/participants/kimberly-adams.jpg',
    bio: 'Kimberly Adams is a 10-year crypto veteran and builder who initially spent her time focusing on banking the unbanked in the Caribbean where she led the roll out of the world’s first CBDC. Kimberly has lived a bankless journey for the past decade, operating solely in crypto showing what it’s like to live a crypto native lifestyle. She now leads all research efforts at Bankless ventures.',
  },
  {
    id: 'layer0x',
    initial: 'L',
    name: 'Layer0x',
    title: 'Legal Architect',
    org: 'Powerhouse\n(MakerDAO spinoff)',
    profileImage: '/assets/participants/layer0x.jpg',
    bio: 'Powerhouse builds operational and legal infrastructure as public goods for network organisations. As a legal architect for Sky (formerly MakerDAO) and Powerhouse itself, Layer0x handles legal system design for DAOs, i.e., frameworks, processes, and entities that fulfil legal functions, such as public procurement, fundraising, project management, IP management, insurance, and legal defence. This includes designing open-source hybrid techno-legal tools that will help DAOs derisk and operate efficiently at scale.',
  },
  {
    id: 'mark-lutter',
    initial: 'M',
    name: 'Mark Lutter',
    title: 'Founder and Executive Chairman',
    org: 'The Charter Cities Institute',
    profileImage: '/assets/participants/mark-lutter.png',
    bio: 'Mark Lutter is the founder and Executive Chairman of the Charter Cities Institute, a nonprofit building the ecosystem for charter cities. He is also the founder and CEO of Braavos Cities, a charter city development company. He has a PhD in economics from George Mason University and has been published or quoted in the New Yorker, Chicago Tribune, Financial Times, and other publications.',
  },
  {
    id: 'peter-ludlow',
    initial: 'P',
    name: 'Peter Ludlow',
    title: 'Author',
    org: 'Crypto Anarchy, Cyberstates,\nand Pirate Utopias',
    profileImage: '/assets/participants/peter-ludlow.png',
    bio: 'Peter Ludlow entered the world of philosophy through a deep interest in linguistics, the philosophy of language, and digital technologies. His early work in artificial intelligence and natural language processing showed him the cooperative part of language comprehension – an idea explored in his book, Living Words. This led him to make significant contributions to our understanding of how meaning is a shared, collaborative enterprise. As a leading voice in the philosophy of mind and language, Peter has authored and contributed to influential works on the intersection of technology and society, including the seminal anthology on how cyberspace is poised to impact human organisation, Crypto Anarchy, Cyberstates, and Pirate Utopias. His current focus is on the potential for digital platforms to foster self-sovereign communities and new, decentralised yet collaborative social orders.',
  },
  {
    id: 'puja-ohlhaver',
    initial: 'P',
    name: 'Puja Ohlhaver',
    title: 'Researcher',
    org: 'Harvard Getting-Plurality',
    profileImage: '/assets/participants/puja-ohlhaver.jpg',
    bio: "Puja Ohlhaver is a lawyer, innovator, and technologist. She is a member of the Getting Plurality Research Group at Harvard's Allen Lab for Democracy Renovation. Her writing has been featured in the New York Times, Washington Post, Politico, and WIRED. She previously practised law at Skadden, Arps and founded ClearPath Surgical, Inc., a women’s healthcare company.",
  },
  {
    id: 'rachel-rose',
    initial: 'R',
    name: "Rachel-Rose O'Leary",
    title: 'Core Dev',
    org: 'DarkFi',
    profileImage: '/assets/participants/rachel-rose.jpg',
    bio: "Rachel-Rose O'Leary is a DarkFi core developer and writer. She authored 'Lunarpunk and the Dark Side of the Cycle', a text which helped create a web3 privacy revival. She is the lead editor of the philosophy journal Agorism in the 21st Century. She was the tech lead for CoinDesk 2017-2018, and has written for WIRED, Rekt News and Defiant. She has a background in philosophy and digital art.",
  },
  {
    id: 'timour-kosters',
    initial: 'T',
    name: 'Timour Kosters',
    title: 'Co-founder',
    org: 'Edge City',
    profileImage: '/assets/participants/timour-kosters.jpg',
    bio: 'Timour Kosters is the Co-Founder of Edge City, an organisation that convenes builders from the frontiers of tech, science, and society in popup villages across the globe. Prior, he was a partner at Seed Club Ventures, and a startup operator, where he built Artsy, Kama, and Impact media.',
  },
  {
    id: 'tom-w-bell',
    initial: 'T',
    name: 'Tom W. Bell',
    title: 'Author',
    org: 'Your Next Government',
    profileImage: '/assets/participants/tom-w-bell.png',
    bio: 'Professor Tom W. Bell earned his JD degree from the University of Chicago and then practised law in Silicon Valley and Washington, DC before joining the faculty of Chapman University Fowler School of Law in Orange County, California. He teaches Constitutional Law, all of the first-year common law courses, and electives in IP, technology, and business law. Tom has published widely on special jurisdictions, copyrights, Internet law, prediction markets, and the Third Amendment. His books include Intellectual Privilege: Copyright, Common Law, and the Common Good and Your Next Government?: From the Nation State to Stateless Nations. As a consultant, Bell has an active practice designing, installing, and supporting legal systems for special jurisdictions.',
  },
  {
    id: 'veronica-schrenk',
    initial: 'V',
    name: 'Veronica Schrenk',
    title: 'Founder',
    org: 'ZuVillage Georgia, Zuzalu.city',
    profileImage: '/assets/participants/veronica.png',
    bio: 'Veronica Schrenk is the co-initiator of ZuVillage, organised the ZuVillage Georgia experiment this summer, and leads operations at Zuzalu.city, the decentralised and open-source platform powering the Zuzalu ecosystem. With a background in education and the rationality community, she seeks to infuse truth-seeking into Zuzalu as it evolves. Current side quests include the AI critical thinking tutor Socratic.bot and the UChicago Alumni Free Speech Alliance.',
  },
  {
    id: 'william-wang',
    initial: 'W',
    name: 'William Wang',
    title: 'CEO',
    org: 'Cryptic Labs (RNS.ID)',
    profileImage: '/assets/participants/william-wang.jpg',
    bio: 'William is the CEO of Cryptic Labs (RNS.ID), leading the Palau Digital Residency Program. He advises at Universidade NOVA de Lisboa, Harvard Blockchain Club, and previously at Stanford DTI. He pioneers secure digital identity solutions, driving innovation in the global identity space.',
  },
  {
    id: 'yan-mastrosova',
    initial: 'V',
    name: 'Yana Mastrosova',
    title: 'Software Developer',
    org: 'Nym',
    profileImage: '/assets/participants/yan-mastrosova.jpg',
    bio: 'Yana is a Software Developer at Nym, deeply engaged with the Ukrainian Nym community. She also contributes to RawBox, a community-driven project focused on building a router that runs on the native Nym mixnet. Additionally, Yana is a core contributor to the "Women In Privacy" initiative, advocating for privacy for women and non-binary in the digital space.',
  },
  {
    id: 'yann-aouidef',
    initial: 'V',
    name: 'Yann Aouidef',
    title: 'Researcher',
    org: 'Paris Center of Law, Kleros',
    profileImage: '/assets/participants/yann.png',
    bio: 'Yann Aouidef is building the mechanism design of Kleros, considering law and economics, game theory, social choice theory, and economic experiments. Yann is a PhD candidate at the Paris Center in Law and Economics. His topic thesis is "Economics and Law of the Blockchain: Applications To Decentralized Justice Mechanisms".',
  },
]

const MOBILE_LIMIT = 6

const ParticipantsSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean
  }>({})

  const { width } = useWindowSize()

  const [mobileSeeAll, setMobileSeeAll] = useState(false)

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleMobileSeeAll = () => {
    setMobileSeeAll((prev) => !prev)
  }

  return (
    <Section id="participants">
      <SectionTitle>Participants</SectionTitle>
      <SpeakerGrid>
        {speakersData
          .slice(
            0,
            width < breakpoints.sm && !mobileSeeAll
              ? MOBILE_LIMIT
              : speakersData.length,
          )
          .map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              {...speaker}
              expanded={!!expandedCards[speaker.id]}
              onToggle={() => toggleCard(speaker.id)}
              className={`speaker-card-${index + 1}`}
            />
          ))}
      </SpeakerGrid>
      {!mobileSeeAll && (
        <MobileSeeAllButton onClick={handleMobileSeeAll}>
          See All
        </MobileSeeAllButton>
      )}
    </Section>
  )
}

const SpeakerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-top: 24px;
  width: 100%;
  gap: 40px 16px;
  align-items: start;

  * {
    overflow: hidden;
    word-wrap: break-word;
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 16px;
    margin-top: 16px;
  }
`

const MobileSeeAllButton = styled.button`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;

  font-size: 12px;
  line-height: 20px;

  width: 100%;
  text-transform: uppercase;
  margin-top: 32px;

  cursor: pointer;

  @media (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`

export default ParticipantsSection
