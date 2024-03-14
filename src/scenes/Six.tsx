import { AbsoluteFill, Audio, Sequence, staticFile, Video, Img } from "remotion"

// Init
const audio = staticFile('/part5.m4a');
const audio2 = staticFile('/part5.1.m4a');
const visual = staticFile('/reusable1.mp4');

// Additionals
const drugs = staticFile(`/scene-assets/drugs.jpg`);
const law = staticFile(`/scene-assets/discovery.jpg`);
const servers = staticFile(`/scene-assets/servers.jpg`);
const blogs = staticFile(`/scene-assets/blogs.jpg`);
const designer = staticFile(`/scene-assets/designer.webp`);
const classroom = staticFile(`/scene-assets/classroom.webp`);
const teacherbot = staticFile(`/scene-assets/teacherbot.png`);
const irisTeacher = staticFile(`/scene-assets/iris-teacher.jpg`);
const objects = staticFile(`/scene-assets/objects.jpg`)
const daycare = staticFile(`/scene-assets/daycare.jpg`);
const class12 = staticFile(`/scene-assets/class12.webp`);
const english = staticFile(`/scene-assets/abcs.png`);
const hindi = staticFile(`/scene-assets/hindi.jpg`);
const malaylam = staticFile(`/scene-assets/malaylam.jpg`);
const doctor = staticFile(`/scene-assets/trust-me.webp`);

export function Six() {
  return (
    <>
      <Sequence durationInFrames={2910}>
        <AbsoluteFill>
          <Video src={visual} loop />
          <Sequence from={270} durationInFrames={10}>
            <Img src={drugs} className="mx-auto" />
          </Sequence>
          <Sequence from={290} durationInFrames={15}>
            <Img src={law} className="mx-auto" />
          </Sequence>
          <Sequence from={340} durationInFrames={20}>
            <Img src={servers} className="mx-auto" />
          </Sequence>
          <Sequence from={390} durationInFrames={20}>
            <Img src={blogs} className="mx-auto" />
          </Sequence>
          <Sequence from={430} durationInFrames={20}>
            <Img src={designer} className="mx-auto" />
          </Sequence>
          <Sequence from={870} durationInFrames={110}>
            <Img src={classroom} className="mx-auto" />
          </Sequence>
          <Sequence from={1210} durationInFrames={60}>
            <Img src={teacherbot} className="mx-auto" />
          </Sequence>
          <Sequence from={1320} durationInFrames={60}>
            <Img src={irisTeacher} className="mx-auto" />
          </Sequence>
          <Sequence from={1580} durationInFrames={60}>
            <Img src={objects} className="mx-auto" />
          </Sequence>
          <Sequence from={1800} durationInFrames={130}>
            <Img style={{ top: "20rem" }} src={daycare} className="absolute w-1/3 h-1/3" />
            <Sequence from={30} durationInFrames={100}>
              <div style={{ fontSize: "12rem", left: "850px", top: "20rem" }} className="absolute text-red-700">&rarr;</div>
              <Img style={{ top: "20rem", right: 0 }} src={class12} className="absolute w-1/3 h-1/3" />
            </Sequence>
          </Sequence>
          <Sequence from={2000} durationInFrames={150}>
            <Img style={{ top: 0, left: "700px" }} className="w-auto absolute mx-auto h-1/3" src={english} />
            <Sequence from={40} durationInFrames={110}>
              <Img style={{ top: "33.33%", left: "700px" }} className="w-auto absolute mx-auto h-1/3" src={hindi} />
              <Sequence from={70} durationInFrames={40}>
                <Img style={{ bottom: 0, left: "700px" }} className="w-auto absolute mx-auto h-1/3" src={malaylam} />
              </Sequence>
            </Sequence>
          </Sequence>
          <Sequence from={2315} durationInFrames={5}>
            <Img src={doctor} />
          </Sequence>
          {/* Add something for "trust me, I'm a doctor" */}
          <Audio src={audio} endAt={2330} />
          <Sequence from={2330}>
            <Audio src={audio2} endAt={528} />
          </Sequence>
        </AbsoluteFill>
      </Sequence>
    </>
  )
}