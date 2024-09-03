import styled from '@emotion/styled'
import React, { useState } from 'react'
import SpeakerCard from '../Cards/SpeakerCard'
import { Section, SectionTitle } from './StyledComponents'

interface Speaker {
  id: number
  initial: string
  name: string
  title: string
  bio: string
}

const speakersData: Speaker[] = [
  {
    id: 1,
    initial: 'J',
    name: 'Jarrad Hope',
    title: 'co-founder Logos, IFT',
    bio: 'Jarrad came to Bitcoin in early 2011 through agorism, counter-economics and crypto-anarchy. Seeing that Bitcoin could operate a monetary policy in a hostile environment, he began to view public blockchains as a voluntary social order, one that did not depend on a monopoly of violence. From there, he participated in early attempts to generalise the Bitcoin script to advance institutional libertarianism, ultimately becoming an early contributor to Ethereum. While Jarrad advances privacy technologies through the development of an e2e and p2p private messaging client and super app, Status, he realised that privacy technologies are not enough and now advocates for self-sovereign crypto-networks, the realisation of a latent cypherpunk dream, the cryptostate.',
  },
  {
    id: 2,
    initial: 'P',
    name: 'Peter Ludlow',
    title: 'author Crypto Anarchy, Cyberstates, and Pirate Utopias',
    bio: 'Peter Ludlow entered the world of philosophy through a deep interest in linguistics, the philosophy of language, and digital technologies. His early work in artificial intelligence and natural language processing showed him the cooperative part of language comprehension – an idea explored in his book, Living Words. This led him to make significant contributions to our understanding of how meaning is a shared, collaborative enterprise. As a leading voice in the philosophy of mind and language, Ludlow has authored influential works on the intersection of technology and society, including the seminal anthology on how cyberspace is poised to impact human organisation, Crypto Anarchy, Cyberstates, and Pirate Utopias. His current focus is on the potential for digital platforms to foster self-sovereign communities and new, decentralised yet collaborative social orders.',
  },
  {
    id: 3,
    initial: 'T',
    name: 'Tom W. Bell',
    title: 'author Your Next Government',
    bio: 'Professor Tom W. Bell earned his J.D. from the University of Chicago, then practised law in Silicon Valley and Washington, D.C. before joining the faculty of Chapman University Fowler School of Law in Orange County, California. He teaches Constitutional Law, all of the first-year common law courses, and electives in IP, technology, and business law. Bell has published widely on special jurisdictions, copyrights, Internet law, prediction markets, and the Third Amendment (the one about quartering troops). His books include "Intellectual Privilege: Copyright, Common Law, and the Common Good" (Mercatus 2014) and "Your Next Government? From the Nation State to Stateless Nations" (Cambridge University Press 2018). As a consultant, Bell has an active practice designing, installing, and supporting legal systems for special jurisdictions.',
  },
  {
    id: 4,
    initial: 'A',
    name: 'Angelo Alessio',
    title: 'founder build_cities',
    bio: 'Bio',
  },
  {
    id: 5,
    initial: 'M',
    name: 'Mark Lutter',
    title: 'founder and Executive Chairman of the Charter Cities Institute',
    bio: 'Bio',
  },
  {
    id: 6,
    initial: 'G',
    name: 'Guy-Louis Grau',
    title: 'program lead Keycard',
    bio: 'From a young age, Guy-Louis Grau has been passionate about hacking electronic devices, turning household gadgets into his personal playground. He graduated as an electronics engineer from École Centrale Paris and led the development of innovative consumer electronics at various companies for more than 15 years. His introduction to Ethereum in 2017 lit a fire under him and sparked an obsession with crafting software and hardware to uphold user sovereignty. Currently, Guy-Louis is leading the development of Keycard, an open-source, principle-backed hardware wallet, for the IFT.',
  },
  {
    id: 7,
    initial: 'F',
    name: 'Federico Ast',
    title: 'co-founder Kleros',
    bio: 'Federico Ast earned degrees in economics and philosophy from the University of Buenos Aires and holds a Ph.D. in management from IAE Business School. He is co-founder and CEO at Kleros. A pioneer in the field of decentralised justice, Ast has lectured at prestigious universities, including Stanford and Oxford, and spoken at international organisations such as the United Nations. He is passionate about leveraging exponential technologies like artificial intelligence, crowdsourcing, and blockchain to drive social innovation.',
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
    <Section id="speakers">
      <SectionTitle>PARTICIPANTS</SectionTitle>
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
  margin-top: 64px;
  width: 100%;
  gap: 16px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 64px;
  }
`

export default ParticipantsSection
