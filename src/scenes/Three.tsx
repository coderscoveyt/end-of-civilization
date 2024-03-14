import { AbsoluteFill, Audio, Sequence, staticFile, Video } from "remotion"

const audio = staticFile('/part2.m4a');
const visual = staticFile('/reusable1.mp4');

export function Three() {
  return (
    <>
      <Sequence durationInFrames={1050}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}