import { useContext } from "react";
import styled from "styled-components";
import MenuContext from "../context/MenuContext";
import { VideoCard } from "./VideoCard";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  padding-top: 6rem;
  transition: 0.3s;

  @media (min-width: 768px) {
    padding-left: ${props => props.toggleMenu === true ? '15rem' : '0rem'};
  }
  
`
const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 72rem;
  gap: 1rem;
  flex-wrap: wrap;
`

export function Content() {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <VideoContainer toggleMenu={toggleMenu}>
      <VideoContent>

        <VideoCard
          thumbnail='/2.png'
          duration='7:07'
          videoTitle='Zack Hemsey - "The Way"'
          channelName='Zack Hemsey'
          videoViews='64M'
          yearsAgo='9 years ago'
          channelIcon='/avatar.png'
        />

        <VideoCard
          thumbnail='/3.png'
          duration='1:00'
          videoTitle="Organization Admin Settings: Dashboard overview [1/7]"
          channelName="Figma"
          videoViews='1M'
          yearsAgo='6 years ago'
          channelIcon='/avatar4.png'

        />

        <VideoCard
          thumbnail='/12.png'
          duration='10:13'
          videoTitle='4 Beautiful Soundtracks | Relaxing Piano [10min]'
          channelName="Jacob's Piano"
          videoViews='63M'
          yearsAgo='4 years ago'
          channelIcon='/avatar2.png'
        />

        <VideoCard
          thumbnail='/8.png'
          duration='24:45'
          videoTitle='Config Europe 2020 - Keynote, Dylan Field - Embracing the tension betw...'
          channelName="Figma"
          videoViews='27K'
          yearsAgo='1 months ago'
          channelIcon='/avatar4.png'
        />

        <VideoCard
          thumbnail='/9.png'
          duration='3:03'
          videoTitle="The Dark Knight Rises (2012) - Batman's Sacrifice Scene (9/10)..."
          channelName="Movieclips Trailers"
          videoViews='10M'
          yearsAgo='3 years ago'
          channelIcon='/avatar1.png'
        />

        <VideoCard
          thumbnail='/10.png'
          duration='54:48'
          videoTitle='Build it in Figma: Create a design system — Components'
          channelName='Figma'
          videoViews='16K'
          yearsAgo='2 Months ago'
          channelIcon='/avatar4.png'
        />

        <VideoCard
          thumbnail='/2.png'
          duration='7:07'
          videoTitle='Zack Hemsey - "The Way"'
          channelName='Zack Hemsey'
          videoViews='64M'
          yearsAgo='9 years ago'
          channelIcon='/avatar.png'
        />

        <VideoCard
          thumbnail='/4.png'
          duration='2:03'
          videoTitle='Who Am I - No System Is Safe Official Trailer #1 (2014) - Tom... '
          channelName='Movieclips Trailers'
          videoViews='64M'
          yearsAgo='6 years ago'
          channelIcon='/avatar1.png'
        />

        <VideoCard
          thumbnail='/5.png'
          duration='2:03'
          videoTitle="Interstellar Main Theme - Hans Zimmer ( Epic instrumental/piano..."
          channelName="Jacob's Piano"
          videoViews='11M'
          yearsAgo='5 years ago'
          channelIcon='/avatar2.png'
        />

        <VideoCard
          thumbnail='/6.png'
          duration='7:11'
          videoTitle="Figma Tutorial: Device Frames and Scrolling"
          channelName="Figma"
          videoViews='90K'
          yearsAgo='1 months ago'
          channelIcon='/avatar4.png'
        />

        <VideoCard
          thumbnail='/7.png'
          duration='7:11'
          videoTitle="Batman v Superman: Dawn of Justice Official Teaser Trailer #1..."
          channelName="Movieclips Trailers"
          videoViews='90K'
          yearsAgo='1 months ago'
          channelIcon='/avatar1.png'
        />

        <VideoCard
          thumbnail='/13.png'
          duration='2:33'
          videoTitle="The Batman Teaser Trailer (2021) | Movieclips Trailers"
          channelName="Movieclips Trailers"
          videoViews='35K'
          yearsAgo='8 months ago'
          channelIcon='/avatar1.png'
        />

        <VideoCard
          thumbnail='/13.png'
          duration='15:00'
          videoTitle="4 Pieces by Yiruma | Relaxing Piano [15min]"
          channelName="Jacob's Piano"
          videoViews='25K'
          yearsAgo='12 months ago'
          channelIcon='/avatar2.png'
        />

        <VideoCard
          thumbnail='/8.png'
          duration='24:45'
          videoTitle='Config Europe 2020 - Keynote, Dylan Field - Embracing the tension betw...'
          channelName="Figma"
          videoViews='27K'
          yearsAgo='1 months ago'
          channelIcon='/avatar4.png'
        />

        <VideoCard
          thumbnail='/7.png'
          duration='7:11'
          videoTitle="Batman v Superman: Dawn of Justice Official Teaser Trailer #1..."
          channelName="Movieclips Trailers"
          videoViews='90K'
          yearsAgo='1 months ago'
          channelIcon='/avatar1.png'
        />

        <VideoCard
          thumbnail='/10.png'
          duration='54:48'
          videoTitle='Build it in Figma: Create a design system — Components'
          channelName='Figma'
          videoViews='16K'
          yearsAgo='2 Months ago'
          channelIcon='/avatar4.png'
        />

      </VideoContent>
    </VideoContainer>

  )
}