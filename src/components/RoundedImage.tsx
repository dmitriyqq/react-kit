import styled from 'styled-components'

export interface Props {
  src: string;
}

export const RoundedImage = styled.img<Props>`
  max-width: 64px;
  max-height: 64px;
  min-width: 64px;
  min-height: 64px;
  border-radius: 100%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
  object-fit: contain;
`
