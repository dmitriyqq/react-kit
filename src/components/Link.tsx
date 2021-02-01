import styled from 'styled-components'

const InnerLink = styled.a`
  
`

interface Props extends ThemeProps {
  to: string;
  children: ReactNode;
}

export const Link = ({ children }) => {
  return <InnerLink>{children}</InnerLink>
}