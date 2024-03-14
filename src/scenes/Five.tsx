import { Img, AbsoluteFill, Audio, Sequence, staticFile, Video } from "remotion"

const audio = staticFile('/part4.m4a');
const visual = staticFile('/reusable1.mp4');
const aliceBob = staticFile(`/scene-assets/alice-bob.png`);
const botSpeech = staticFile(`/scene-assets/botspeech.png`);
const negotiation = staticFile(`/scene-assets/negotiation.png`);
const uj = staticFile(`/scene-assets/union.jpg`);

export function Five() {
  return (
    <>
      <Sequence durationInFrames={2970}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Sequence from={1040} durationInFrames={60}>
            <div className="w-full h-full grid place-items-center">
              <Img src={aliceBob} />
            </div>
          </Sequence>
          <Sequence from={1220} durationInFrames={90}>
            <div className="w-full h-full grid place-items-center">
              <Img src={botSpeech} />
            </div>
          </Sequence>
          <Sequence from={1740} durationInFrames={60}>
            <Img src={negotiation} className="mx-auto" />
          </Sequence>
          <Sequence from={1960} durationInFrames={60}>
            <Img src={uj} className="mx-auto" />
          </Sequence>
          <Sequence from={2760} durationInFrames={60}>
            <div className="w-full h-full grid place-items-center">
              <Img src={botSpeech} />
            </div>
          </Sequence>
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}