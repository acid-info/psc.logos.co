import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Layout = styled.div`
  width: 100%;
`

export default function DefaultLayout(props: PropsWithChildren) {
  return <Layout>{props.children}</Layout>
}
