import { Sequence, staticFile, Video } from "remotion";
const intro = staticFile('/outro.mp4')

export const Ten: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={200}>
        <Video src={intro} />
      </Sequence>
    </>
  )
}