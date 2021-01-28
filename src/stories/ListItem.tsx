import { RoundedImage } from '../components/RoundedImage'
import { ColorType } from '../themes/theme'
import React, { useState } from 'react'
import { Icon } from '../components/Icon'
import styled from 'styled-components'

export interface ISelectListItem {
  label?: string;
  children?: any;
  onClick?: () => void;
  onDelete?: (value: string) => void;
  icon?: string;
  iconColor?: ColorType;
  value?: string;
  link?: string;
  imgSrc?: string | null;
}

export const FlatListItem = styled.div`
    padding: 10px;
`

const ListItemFlexWrapper = styled(FlatListItem)`
    display: flex;
    align-items: center;
`

const Label = styled(Text)`
    width: 100%;
    max-width: 300px;
`

const Content = styled(Text)`
    width: 100%;
    @media screen and (max-width: 400px) {
      margin: 8px 0px;
      text-align: right;
    }
    overflow-wrap: normal;
    word-break: normal;
`

export const ListItem = (props: ISelectListItem) => {
  const {label, children, onClick, icon, iconColor, link, imgSrc, onDelete, value } = props;
  const [ imageSrc, setImageSrc] = useState(imgSrc)

  const iconComponent = imageSrc ? <RoundedImage src={imageSrc} onError={() => setImageSrc('')} /> :
    icon ? <Icon icon={icon} color={iconColor || 'grey'} /> : null;

  return (
    <ListItemFlexWrapper onClick={onClick ? onClick : () => {}} >
      {iconComponent}
      { label ? <Label variant='label'>{label}</Label> : null}
      <Content variant='sublabel'>{children || ''}</Content>
      { onDelete && <CustomIconDelete icon={faTimes} onClick={() => onDelete(value || '')} />}
      { link ? <Link to={link}><CustomIconRight icon={faChevronRight} /></Link> : null }
    </ListItemFlexWrapper>
  )
}
