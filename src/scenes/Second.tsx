import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, Video } from "remotion"

const audio = staticFile('/part1.m4a');
const visual = staticFile('/reusable1.mp4');

export function Second() {
  const frame = useCurrentFrame();
  return (
    <>
      <Sequence durationInFrames={810} >
        <AbsoluteFill>
          <Video src={visual} loop />
          <Audio src={audio} muted={frame > 0 && frame < 15} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}