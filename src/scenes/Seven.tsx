import { Img, AbsoluteFill, Audio, Sequence, staticFile, Video } from "remotion"

const audio = staticFile('/part6.m4a');
const visual = staticFile('/reusable1.mp4');
const nao = staticFile(`/scene-assets/naobot.webp`);
const naoSnippet = staticFile(`/scene-assets/nao-snippet.mp4`);

export function Seven() {
  return (
    <>
      <Sequence durationInFrames={890}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Sequence from={50} durationInFrames={60}>
            <Img src={nao} className="mx-auto" />
          </Sequence>
          <Sequence from={90} durationInFrames={720}>
            <Video muted src={naoSnippet} className="mx-auto" />
          </Sequence>
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}