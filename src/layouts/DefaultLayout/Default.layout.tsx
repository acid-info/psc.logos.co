import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Main = styled.main`
  width: 100%;
`

export default function DefaultLayout(props: PropsWithChildren) {
  return <Main>{props.children}</Main>
}
