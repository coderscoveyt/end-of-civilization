import { AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";

const sfx = staticFile('/transition.mp3')

type TransitionProps = {
  number: number | string;
  text: string;
}

export function Transition({ number, text } : TransitionProps) {
  const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
  return (
    <Sequence durationInFrames={150}>
      <AbsoluteFill className="bg-gray-700 text-white">
        <div className="mt-96" />
        <h2 style={{ fontSize: "10rem" }} className="text-center text-white">{number}</h2>
        <div className="mt-40" />
        <h4 className="text-7xl text-center text-white" style={{ opacity }}>{text}</h4>
        <Audio src={sfx} startFrom={30} />
      </AbsoluteFill>
    </Sequence>
  )
}