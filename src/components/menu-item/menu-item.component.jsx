import React from 'react';

import {withRouter} from 'react-router-dom';


import { MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleHead,
  SubtitleSpan} from './menu-item.styles';

const MenuItem = ({match,title,imageUrl,size,history,linkUrl}) => {
  return (
    <MenuItemContainer size={size} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer 
        className="background-image"
        imageUrl = {imageUrl}
        />
        <ContentContainer className="content">
          <TitleHead>{title.toUpperCase()}</TitleHead>
          <SubtitleSpan>SHOP NOW</SubtitleSpan>
        </ContentContainer>
    </MenuItemContainer>
);}

export default withRouter(MenuItem);