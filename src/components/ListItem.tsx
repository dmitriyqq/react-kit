import { RoundedImage } from './RoundedImage'
import { ThemeProps} from '../themes/theme'
import React, { useState, FC } from 'react'
import { Icon } from './Icon'
import { Text } from './Text'
import styled from 'styled-components'

export interface Props extends ThemeProps {
  label?: string;
  icon?: string;
  image?: string;

  value?: string;

  onClick?: () => void;
  onDelete?: (value: string) => void;
  onNav?: (value: string) => void;
}

interface ImageWithIconFallbackProps extends ThemeProps {
  image?: string
  icon?: string
}

const ImageWithIconFallback: FC<ImageWithIconFallbackProps> = ({ image, icon, theme }) => {
  const [ imageSrc, setImageSrc] = useState(image || '');

  if (imageSrc) {
    return <RoundedImage src={imageSrc} onError={() => setImageSrc('')} />
  }

  if (icon) {
      return <Icon icon={icon} theme={theme} size='3x'/>
  }

  return null;
}

const ListItemBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.slim} ${props => props.theme.spacing.double};
`

const IconContainer = styled.div`
  max-width: 64px;
  max-height: 64px;
  min-width: 64px;
  min-height: 64px;
  border-radius: 100%;
  overflow: hidden;
  display:inline-block;
  vertical-align: middle;
  line-height: 64px;
  object-fit: contain;
  background-color: ${props => props.theme.colors.secondaryBackground};
  text-align: center;
`

const ActionContainer = styled.div`
`

const TextContainer = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.double};
`

export const ListItem: FC<Props> = (props) => {
  const {label, onClick, icon, image, onDelete, onNav, value, theme } = props;
  return (
    <ListItemBase onClick={onClick ? onClick : () => {}} >
      {
        (icon || image) &&
        <IconContainer>
            <ImageWithIconFallback theme={theme} icon={icon} image={image}/>
        </IconContainer>
      }
      <TextContainer>
        <Text variant='regular' align={'left'}>{label}</Text>
      </TextContainer>
      <ActionContainer>
        { onDelete && <Icon icon='close' theme={theme} onClick={() => onDelete(value || '')} /> }
        { onNav && <Icon icon='arrow-right-s' theme={theme} onClick={() => onNav(value || '')} /> }
      </ActionContainer>
    </ListItemBase>
  )
}
