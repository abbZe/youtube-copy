import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectYouTube } from "../../redux/youtube/selectors"

const Home: React.FC = () => {
  const dispatch = useAppDispatch
  const videos = useAppSelector(selectYouTube.videos)
  return <div></div>
}

export default Home
