import styled from '@emotion/styled'
import React, { useState } from 'react'
import SpeakerCard from '../Cards/SpeakerCard'
import { Section, SectionTitle } from './StyledComponents'

interface Speaker {
  id: number
  initial: string
  name: string
  title: string
  org: string
  profileImage?: string
  bio: string
}

const speakersData: Speaker[] = [
  {
    id: 1,
    initial: 'A',
    name: 'Angelo Alessio',
    title: 'Founder',
    org: 'build_cities',
    profileImage: '/assets/participants/angelo-alessio.png',
    bio: 'Angelo Alessio is the founder and protocol architect at build_cities, a protocol for economic development. Prior to build_cities, Angelo was a Director of Product at Acorns following an acquisition of his previous company Harvest, which automatically negotiated bank fees for consumers using AI. Before Harvest and Acorns, Angelo consulted for various startups in the product and growth domains. Angelo holds an MBA from New York University and is an army veteran.',
  },
  {
    id: 2,
    initial: 'A',
    name: 'Arnaud Deville',
    title: 'Full Stack Engineer',
    org: 'Codex',
    profileImage: '/assets/participants/arnaud-deville.png',
    bio: "Arnaud Deville is a full-stack developer with 12 years of experience in a variety of programming languages, including TypeScript, JavaScript, React, and Go. Currently, he is part of the Institute of Free Technology, working on the Codex project as a full-stack developer for the website and the protocol's marketplace component.\n\nOver the past decade, he has contributed to various sectors, dedicating three years to health projects and four years to education. His most recent engagement was in fintech, where he worked on developing an alternative currency system based on gold.",
  },
  {
    id: 3,
    initial: 'A',
    name: 'Aqeel Mohammad',
    title: 'Product Strategy',
    org: 'Codex',
    profileImage: '/assets/participants/aqeel.png',
    bio: 'Aqeel Mohammad is a product strategist and designer focused on leading market adoption for emerging technologies and democratising their production. Currently, he is a contributor at the Institute of Free Technology, working on the Codex project.',
  },
  {
    id: 4,
    initial: 'A',
    name: 'Audrey Tang',
    title: 'Founder',
    org: 'Shan Hai Woo, DRK Lab',
    profileImage: '/assets/participants/audrey.png',
    bio: 'Audrey Tang founded DRK Lab, which actively supports blockchain public goods development through grants and support for research and developer communities. It also fosters Web3 industry growth through initiatives like the Shanhaiwoo community and has launched the Web3 Young Scholars Program and Web3 Scholars Conference to drive industry development and collaboration among scholars, researchers, and practitioners. Audrey has over eight years of experience in the blockchain industry and draws on a background in investment, project strategy, ecosystem development, and brand expansion.',
  },
  {
    id: 5,
    initial: 'D',
    name: 'David Casey',
    title: 'Director',
    org: 'Funding the Commons',
    profileImage: '/assets/participants/david-casey.png',
    bio: "A four-time founder, David Casey enjoys working at the ecosystem level to engineer systemic change and currently is a Director at Funding the Commons, which aims to accelerate blockchain-based public goods funding. In 2013, David became interested in blockchain technology's utility for cross-border payments within one of his own companies. By 2015, he deployed his first blockchain-based asset using Bitcoin’s Colored Coins protocol. Within the blockchain industry, David has worn multiple hats, including roles as a founder and CEO.",
  },
  {
    id: 6,
    initial: 'F',
    name: 'Federico Ast',
    title: 'Co-Founder',
    org: 'Kleros',
    profileImage: '/assets/participants/federico-ast.png',
    bio: 'Federico Ast earned degrees in economics and philosophy from the University of Buenos Aires and holds a PhD in management from IAE Business School. He is the co-founder and CEO of Kleros. A pioneer in the field of decentralised justice, Federico has lectured at prestigious universities, including Stanford and Oxford, and spoken at international organisations such as the United Nations. He is passionate about leveraging exponential technologies like artificial intelligence, crowdsourcing, and blockchain to drive social innovation.',
  },
  {
    id: 7,
    initial: 'G',
    name: 'Guy-Louis Grau',
    title: 'Program Lead',
    org: 'Keycard',
    profileImage: '/assets/participants/guy-louis.png',
    bio: 'From a young age, Guy-Louis Grau has been passionate about hacking electronic devices, turning household gadgets into his personal playground. He graduated as an electronics engineer from École Centrale Paris and led the development of innovative consumer electronics at various companies for more than 15 years. His introduction to Ethereum in 2017 lit a fire under him and sparked an obsession with crafting software and hardware to uphold user sovereignty. Currently, Guy-Louis is leading the development of Keycard, an open-source, principle-backed hardware wallet, for the IFT.',
  },
  {
    id: 8,
    initial: 'J',
    name: 'Jarrad Hope',
    title: 'Co-Founder',
    org: 'Logos, IFT',
    profileImage: '/assets/participants/jarrad-hope.png',
    bio: 'Jarrad Hope came to Bitcoin in early 2011 through agorism, counter-economics, and crypto anarchy. Seeing that Bitcoin could operate a monetary policy in a hostile environment, he began to view public blockchains as a voluntary social order, one that did not depend on a monopoly of violence. From there, he participated in early attempts to generalise the Bitcoin script to advance institutional libertarianism, ultimately becoming an early contributor to Ethereum. While advancing privacy technologies through the development of the e2e and p2p private messaging client and super app Status, Jarrad realised that privacy technologies are not enough and now advocates for self-sovereign crypto networks and the realisation of a latent cypherpunk dream, the cryptostate.',
  },
  {
    id: 9,
    initial: 'J',
    name: 'Janine Leger',
    title: 'Co-founder',
    org: 'EdgeCity',
    profileImage: '/assets/participants/janine.png',
    bio: "Janine Leger is the Co-founder of Edge City, an organisation that convenes builders across tech, science and society in pop-up villages around the globe. She's one of the co-creators of Zuzalu and led the Public Goods Funding team at Gitcoin.",
  },
  {
    id: 10,
    initial: 'M',
    name: 'Mark Lutter',
    title: 'Founder and Executive Chairman',
    org: 'The Charter Cities Institute',
    profileImage: '/assets/participants/mark-lutter.png',
    bio: 'Mark Lutter is the founder and Executive Chairman of the Charter Cities Institute, a nonprofit building the ecosystem for charter cities. He is also the founder and CEO of Braavos Cities, a charter city development company. He has a PhD in economics from George Mason University and has been published or quoted in the New Yorker, Chicago Tribune, Financial Times, and other publications.',
  },
  {
    id: 11,
    initial: 'P',
    name: 'Peter Ludlow',
    title: 'Author',
    org: 'Crypto Anarchy, Cyberstates, and Pirate Utopias',
    profileImage: '/assets/participants/peter-ludlow.png',
    bio: 'Peter Ludlow entered the world of philosophy through a deep interest in linguistics, the philosophy of language, and digital technologies. His early work in artificial intelligence and natural language processing showed him the cooperative part of language comprehension – an idea explored in his book, Living Words. This led him to make significant contributions to our understanding of how meaning is a shared, collaborative enterprise. As a leading voice in the philosophy of mind and language, Peter has authored and contributed to influential works on the intersection of technology and society, including the seminal anthology on how cyberspace is poised to impact human organisation, Crypto Anarchy, Cyberstates, and Pirate Utopias. His current focus is on the potential for digital platforms to foster self-sovereign communities and new, decentralised yet collaborative social orders.',
  },
  {
    id: 12,
    initial: 'T',
    name: 'Tom W. Bell',
    title: 'Author',
    org: 'Your Next Government',
    profileImage: '/assets/participants/tom-w-bell.png',
    bio: 'Professor Tom W. Bell earned his JD degree from the University of Chicago and then practised law in Silicon Valley and Washington, DC before joining the faculty of Chapman University Fowler School of Law in Orange County, California. He teaches Constitutional Law, all of the first-year common law courses, and electives in IP, technology, and business law. Tom has published widely on special jurisdictions, copyrights, Internet law, prediction markets, and the Third Amendment. His books include Intellectual Privilege: Copyright, Common Law, and the Common Good and Your Next Government?: From the Nation State to Stateless Nations. As a consultant, Bell has an active practice designing, installing, and supporting legal systems for special jurisdictions.',
  },
  {
    id: 13,
    initial: 'V',
    name: 'Veronica Schrenk',
    title: 'Founder',
    org: 'ZuVillage Georgia, Zuzalu.city',
    profileImage: '/assets/participants/veronica.png',
    bio: 'Veronica Schrenk is the co-initiator of ZuVillage, organised the ZuVillage Georgia experiment this summer, and leads operations at Zuzalu.city, the decentralised and open-source platform powering the Zuzalu ecosystem. With a background in education and the rationality community, she seeks to infuse truth-seeking into Zuzalu as it evolves. Current side quests include the AI critical thinking tutor Socratic.bot and the UChicago Alumni Free Speech Alliance.',
  },
  {
    id: 14,
    initial: 'V',
    name: 'Yann Aouidef',
    title: 'Researcher',
    org: 'Paris Center of Law, Kleros',
    profileImage: '/assets/participants/yann.png',
    bio: 'Yann Aouidef is building the mechanism design of Kleros, considering law and economics, game theory, social choice theory, and economic experiments. Yann is a PhD candidate at the Paris Center in Law and Economics. His topic thesis is "Economics and Law of the Blockchain: Applications To Decentralized Justice Mechanisms".',
  },
  {
    id: 15,
    initial: 'L',
    name: 'Layer0x',
    title: 'Legal Architect',
    org: 'Powerhouse (MakerDAO spinoff)',
    bio: 'Powerhouse builds operational and legal infrastructure as public goods for network organisations. As a legal architect for Sky (formerly MakerDAO) and Powerhouse itself, Layer0x handles legal system design for DAOs, i.e., frameworks, processes, and entities that fulfil legal functions, such as public procurement, fundraising, project management, IP management, insurance, and legal defence. This includes designing open-source hybrid techno-legal tools that will help DAOs derisk and operate efficiently at scale.',
  },
]

const ParticipantsSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean
  }>({})

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <Section id="participants">
      <SectionTitle>Participants</SectionTitle>
      <SpeakerGrid>
        {speakersData.map((speaker, index) => (
          <SpeakerCard
            key={speaker.id}
            {...speaker}
            expanded={!!expandedCards[speaker.id]}
            onToggle={() => toggleCard(speaker.id)}
            className={`speaker-card-${index + 1}`}
          />
        ))}
      </SpeakerGrid>
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

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px 16px;
    margin-top: 16px;
  }
`

export default ParticipantsSection
