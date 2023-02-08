import styled from "styled-components"

const VideoCardContainer = styled.div`
  width: 17.25rem;
  height: auto;
  position: relative;
  margin-bottom: 2.5rem;
`

const VideoTimer = styled.span`
  padding: 0.13rem 0.25rem;
  background-color: black;
  bottom: 5.75rem;
  right: 0.31rem;
  color: white;
  border-radius: 0.06rem;
  position: absolute;
`

const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.88rem;

  img {
    margin-right: 0.88rem;
  }
`

const VideoInfo = styled.div`
  h3 {
    width: 14.13rem;
    font-size: 0.88rem;
    line-height: 1rem;
    font-weight: 400;
  }

  h4 {
    color: #606060;
    font-weight: 400;
    font-size: 0.88rem;
  }

  span {
    margin-top: 0.31rem;
    color: #606060;
    font-weight: 400;
    font-size: 0.88rem;
  }
`

export function VideoCard({ thumbnail, videoTitle, duration, channelName, videoViews, yearsAgo, channelIcon }) {
  return (
    <VideoCardContainer>
      <img src={thumbnail} alt="" />
      <VideoTimer>{duration}</VideoTimer>

      <MoreInfoContainer>
        <img src={channelIcon} alt="" />

        <VideoInfo>
          <h3>{videoTitle}</h3>
          <h4>{channelName}</h4>
          <span>{videoViews + ' '}Views{'  •  ' + yearsAgo}</span>
        </VideoInfo>
      </MoreInfoContainer>
    </VideoCardContainer>
  )
}