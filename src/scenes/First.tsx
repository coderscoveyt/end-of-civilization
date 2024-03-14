import { Sequence, staticFile, Video } from "remotion";
const intro = staticFile('/intro.mp4')

export const First: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={140}>
        <Video src={intro} />
      </Sequence>
    </>
  )
}