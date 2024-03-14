import { AbsoluteFill, Audio, Img, Sequence, staticFile, Video } from "remotion"

const audio = staticFile('/part3.m4a');
const visual = staticFile('/reusable1.mp4');
const christopher = staticFile(`/scene-assets/christopher.png`);
const robots = staticFile(`/scene-assets/robots.jpg`);
const breaker = staticFile(`/scene-assets/fenderbender.mp4`);
const brilliant = staticFile(`/scene-assets/brilliant.png`);
const statement = staticFile(`/scene-assets/statement.png`);
const referr = staticFile(`/scene-assets/referenceerror.jpg`);

export function Four() {
  return (
    <>
      <Sequence durationInFrames={2645}>
        <AbsoluteFill>
          <Video src={visual} loop />
            <Sequence from={130} durationInFrames={120}>
              <Img className="w-full" src={christopher} />
              <div style={{ bottom: "33rem", right: '26rem', fontSize: "15rem" }} className="absolute text-red-700">&darr;</div>
              <div style={{ bottom: "33rem", right: '31rem', fontSize: "15rem" }} className="absolute text-red-700">&darr;</div>
              <div style={{ bottom: "33rem", right: '21rem', fontSize: "15rem" }} className="absolute text-red-700">&darr;</div>
            </Sequence>
            <Sequence from={1010} durationInFrames={90}>
              <div className="w-full h-full flex justify-center">
                <Img src={robots} />
              </div>
            </Sequence>
            <Sequence from={1270} durationInFrames={240}>
              <Video src={breaker} muted />
            </Sequence>
            <Sequence from={1560} durationInFrames={50}>
              <div className="w-full h-full grid place-items-center">
                <Img src={brilliant} style={{ width: '1004px', height: "236px" }} />
              </div>
            </Sequence>
            <Sequence from={1740} durationInFrames={30}>
              <h1 className="text-9xl bg-black text-stone-200 absolute right-0 bottom-0">*a man in the video</h1>
            </Sequence>
            <Sequence from={1890} durationInFrames={270}>
              <div className="w-full h-full grid place-items-center">
                <Img className="w-2/3 h-2/3" src={statement} />
              </div>
            </Sequence>
            <Sequence from={2470} durationInFrames={60}>
              <div className="w-full h-full grid place-items-center">
                <Img className="w-2/3 h-2/3" src={referr} />
              </div>
            </Sequence>
          <Audio src={audio} />
        </AbsoluteFill>
      </Sequence>
    </>
  )
}