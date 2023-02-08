import styled from 'styled-components';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import YoutubeLogo from '../assets/youtube-logo.svg'
import ProfilePhoto from '../assets/profilePhoto.jpg'
import { createContext, useState } from 'react';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.69rem;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  gap: 3rem;
  position: fixed;
  z-index: 999;
`

const LeftSideContainer = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
`

const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;

    svg {
      color: #606060;
      cursor: pointer;
    }
  }
`

const SearchContainer = styled.div`
  width: 35.81rem;
  display: flex;
  align-items: center;

`
const SearchInput = styled.input`
  width: 100%;
  height: 1.88rem;
  padding: 0.31rem 0.75rem;
  color: #606060;
  border: 1px solid #CCCCCC;
  box-shadow: inset 0px 0.06rem 0.06rem #EEEEEE;
  border-radius: 0.13rem 0px 0px 0.13rem;
`

const SeachButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 3.94rem;
  width: 100%;
  height: 1.88rem;
  background: #F4F4F4;
  border: 1px solid #CCCCCC;
  border-radius: 0px 0.13rem 0.13rem 0px;
  cursor: pointer;

  svg {
    color: #606060;
  }
`

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #606060;
  }
`

const ProfilePhotoContainer = styled.button`
  max-width: fit-content;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: transparent;
  border: none;
  margin-left: 1.5rem;
  cursor: pointer;

  img {
    border-radius: 999px;
  }
`

export default function Navbar() {

  return (
    <NavbarContainer>
      <LeftSideContainer>
        <MenuButton><MenuOutlinedIcon /></MenuButton>
        <img src={YoutubeLogo} alt="" />
      </LeftSideContainer>

      <SearchContainer>
        <SearchInput type="text" placeholder='Search' />
        <SeachButton><SearchOutlinedIcon /></SeachButton>
      </SearchContainer>

      <RightSideContainer>
        <ul>
          <li><EmergencyRecordingIcon /></li>
          <li><AppsIcon /></li>
          <li><NotificationsIcon /></li>
        </ul>

        <ProfilePhotoContainer>
          <img src={ProfilePhoto} alt="" />
        </ProfilePhotoContainer>
      </RightSideContainer>
    </NavbarContainer>
  )
}