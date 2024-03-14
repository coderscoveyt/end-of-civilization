import { AbsoluteFill, Audio, Sequence, staticFile, Video } from "remotion"

const audio = staticFile('/part8.m4a');
const visual = staticFile('/reusable1.mp4');

export function Nine() {
  return (
    <>
      <Sequence durationInFrames={290}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}