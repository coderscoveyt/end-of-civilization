import { Audio, Series, staticFile, useCurrentFrame } from 'remotion';
import { Eight } from './scenes/Eight';
import { First } from './scenes/First';
import { Five } from './scenes/Five';
import { Four } from './scenes/Four';
import { Nine } from './scenes/Nine';
import { Second } from './scenes/Second';
import { Seven } from './scenes/Seven';
import { Six } from './scenes/Six';
import { Ten } from './scenes/Ten';
import { Three } from './scenes/Three';
import { Transition } from './Transition';

const crushedDreams = staticFile(`/music/crushed-dreams.mp3`);
const error = staticFile(`/music/error.mp3`);
const lastPlaceOnEarth = staticFile(`/music/last-place-on-earth.mp3`);

export const MyComposition: React.FC = () => {
	const frame = useCurrentFrame()
	return (
		<>
			<Series>
				<Series.Sequence durationInFrames={140}>
					<First />
				</Series.Sequence>
				<Series.Sequence durationInFrames={810}>
					<Second />
					<Audio src={crushedDreams} startFrom={0} volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={1050}>
					<Three />
					<Audio src={crushedDreams} startFrom={27 * 30} volume={0.01} loop />
				</Series.Sequence>
				<Series.Sequence durationInFrames={150}>
					<Transition number={1} text="The Queen's Gambit" />
				</Series.Sequence>
				<Series.Sequence durationInFrames={2645}>
					<Four />
					<Audio src={error} startFrom={0} volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={150}>
					<Transition number={2} text="The Social Network (2010)" />
				</Series.Sequence>
				<Series.Sequence durationInFrames={2970}>
					<Five />
					<Audio src={error} startFrom={0} volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={150}>
					<Transition number={3} text="The Brainwasher?" />
				</Series.Sequence>
				<Series.Sequence durationInFrames={2910}>
					<Six />
					<Audio src={lastPlaceOnEarth} startFrom={0} volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={150}>
					<Transition number={4} text="The teacher's pet" />
				</Series.Sequence>
				<Series.Sequence durationInFrames={890}>
					<Seven />
					<Audio src={lastPlaceOnEarth} startFrom={0} volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={150}>
					<Transition number={5} text="The pinnacle of Dystopia" />
				</Series.Sequence>
				<Series.Sequence durationInFrames={3930}>
					<Eight />
					<Audio src={crushedDreams} loop volume={0.01} />
				</Series.Sequence>
				<Series.Sequence durationInFrames={290}>
					<Nine />
				</Series.Sequence>
				<Series.Sequence durationInFrames={200}>
					<Ten />
				</Series.Sequence>
			</Series>
		</>
	);
};
