import { Img, AbsoluteFill, Audio, Sequence, staticFile, Video, useCurrentFrame } from "remotion"

const audio = staticFile('/part7.m4a');
const visual = staticFile('/reusable1.mp4');
const elon = staticFile(`/scene-assets/elon.jpg`)
const neuralink = staticFile(`/scene-assets/neuralink.jpg`)
const bci = staticFile(`/scene-assets/bci.jpg`)
const monkeysDied = staticFile(`/scene-assets/monkeysdied.png`)
const monkeyPong = staticFile(`/scene-assets/monkeypong.mp4`)
const humanChip = staticFile(`/scene-assets/humanchip.png`)
const breaches = staticFile(`/scene-assets/breaches.png`)
const neuralinkLand = staticFile(`/scene-assets/neuralinkland.png`)


export function Eight() {
  const frame = useCurrentFrame();
  const breachesTransition = -1 * (frame - 2350) * 32;
  
  return (
    <>
      <Sequence durationInFrames={3930}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Sequence from={100} durationInFrames={60}>
            <Img src={elon} className="mx-auto" />
          </Sequence>
          <Sequence from={520} durationInFrames={60}>
            <Img src={neuralink} className="mx-auto" />
          </Sequence>
          <Sequence from={720} durationInFrames={10}>
            <Img src={neuralink} className="mx-auto" />
          </Sequence>
          <Sequence from={820} durationInFrames={240}>
            <Img src={bci} className="mx-auto" />
          </Sequence>
          <Sequence from={1300} durationInFrames={300}>
            <Video src={monkeyPong} muted className="mx-auto" />
          </Sequence>
          <Sequence from={1660} durationInFrames={45}>
            <Img src={monkeysDied} className="mx-auto" />
          </Sequence>
          <Sequence from={1850} durationInFrames={150}>
            <Img src={humanChip} className="mx-auto" />
          </Sequence>
          <Sequence from={2050} durationInFrames={60}>
            <div className="w-full h-full grid place-items-center">
              <h1 className="text-9xl text-black">"Promising"</h1>
            </div>
          </Sequence>
          <Sequence from={2350} durationInFrames={900}>
            <Img src={breaches} className="mx-auto" style={{ transition: "all 30s ease", transform: `translateY(${breachesTransition}px)`, width: "1190px", height: "28692px" }} />
          </Sequence>
          <Sequence from={3520} durationInFrames={60}>
            <Img src={neuralinkLand} className="mx-auto" />
          </Sequence>
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}