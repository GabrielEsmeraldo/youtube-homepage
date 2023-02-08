import styled from "styled-components"

import { SideBarButton } from "./Button";

import  Sub1 from '../assets/sub1.svg'
import  Sub2  from '../assets/sub2.svg'
import  Sub3  from '../assets/sub3.svg'
import  Sub4  from '../assets/sub4.svg'

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SensorsIcon from '@mui/icons-material/Sensors';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useContext } from "react";
import MenuContext from "../context/MenuContext";

const SideBarContainer = styled.aside`
  width: 15rem;
  height: calc(100% - 3.5rem);
  background-color: white;
  overflow-y: scroll;
  position: fixed;
  top: 3.5rem;
  transition: 0.3s;
  z-index: 99;
  left: ${props => props.toggleMenu === false ? '-15rem' : '0rem'};


`

const FirstButtonGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: white;
`

const SecondButtonGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: white;
`

const Subscriptions = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: white;
`

const SubscriptionTitle = styled.h2`
  font-weight: 500;
  font-size: 0.88rem;
  font-style: normal;
  line-height: 1rem;
  padding-left: 1.5rem;
  padding-bottom: 0.63rem;
  margin-top: 0.94rem;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  color: #606060;
  background-color: white;
`

const MoreFromYoutube = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  background-color: white;
`

export function SideBar() {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <SideBarContainer toggleMenu={toggleMenu}>
      <FirstButtonGroup>
        <ul>
          <li><SideBarButton icon={<HomeIcon />}>Home</SideBarButton></li>
          <li><SideBarButton icon={<WhatshotIcon />}>Trending</SideBarButton></li>
          <li><SideBarButton icon={<SubscriptionsIcon />}>Subscription</SideBarButton></li>
        </ul>
      </FirstButtonGroup>

      <SecondButtonGroup>
        <ul>
          <li><SideBarButton icon={<VideoLibraryIcon />}>Library</SideBarButton></li>
          <li><SideBarButton icon={<HistoryIcon />}>History</SideBarButton></li>
          <li><SideBarButton icon={<SlideshowIcon />}>Your Videos</SideBarButton></li>
          <li><SideBarButton icon={<WatchLaterIcon />}>Whatch Later</SideBarButton></li>
          <li><SideBarButton icon={<ThumbUpIcon />}>Liked Videos</SideBarButton></li>
        </ul>
      </SecondButtonGroup>

      <Subscriptions>
        <SubscriptionTitle>Subscription</SubscriptionTitle>

        <ul>
          <li><SideBarButton><img src={Sub1} alt="" />Oktay Candan</SideBarButton></li>
          <li><SideBarButton><img src={Sub2} alt="" />Arnold Morrison</SideBarButton></li>
          <li><SideBarButton><img src={Sub3} alt="" />Hudson Snyder</SideBarButton></li>
          <li><SideBarButton><img src={Sub4} alt="" />Thomas Burns</SideBarButton></li>
          <li><SideBarButton icon={<AddCircleIcon />}>Browse channels</SideBarButton></li>
        </ul>
      </Subscriptions>

      <MoreFromYoutube>
        <SubscriptionTitle>More From Youtube</SubscriptionTitle>

        <ul>
          <li><SideBarButton icon={<YouTubeIcon />}>YouTube Premium</SideBarButton></li>
          <li><SideBarButton icon={<SportsEsportsIcon />}>Gaming</SideBarButton></li>
          <li><SideBarButton icon={<SensorsIcon />}>Live</SideBarButton></li>
          <li><SideBarButton icon={<SettingsIcon />}>Settings</SideBarButton></li>
          <li><SideBarButton icon={<FlagIcon />}>Report history</SideBarButton></li>
          <li><SideBarButton icon={<HelpIcon />}>Help</SideBarButton></li>
          <li><SideBarButton icon={<FeedbackIcon />}>Send feedback</SideBarButton></li>
        </ul>
      </MoreFromYoutube>

    </SideBarContainer>
  )
}