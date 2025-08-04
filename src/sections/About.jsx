import Globe from "react-globe.gl";
import Button from "../components/general/Button.jsx";
import {useThemeStore} from "../store/useThemeStore.js";
import {useState} from "react";

const About = () => {
    const { theme } = useThemeStore();

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("sokthythorn@gmail.com");
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="mt-48 mb-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6
            md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className=" w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="assets/grid1dark.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="text-xl font-semibold mb-2  font-generalsans">Hi, I'm SokThyy</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                With 6 months of experience, I have honed my skills in frontend and backend development, with a focus on web app
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img
                            src={ theme === 'black' ? "assets/grid2dark.png" : "assets/grid2light.png"}
                            alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="text-xl font-semibold mb-2 font-generalsans">Tech Stack</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl={
                                    theme === 'black'
                                        ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                                        : "//unpkg.com/three-globe/example/img/earth-day.jpg"
                                }
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                atmosphereColor={
                                    theme === 'black'
                                        ? "#3fc9ff"
                                        : "#8cc8ff"
                                }
                                labelsData={[{
                                    lat: 40, lng: 10, text: "Phnom Penh",
                                    color: theme === 'black' ? "#3fc9ff" : "#8cc8ff",
                                    size: 30,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mb-2 font-generalsans">I work remotely across most timezones.</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I'm based in Phnom Penh, with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="w-full h-full rounded-md overflow-hidden">
                            <img
                                src={theme === 'black' ? "assets/grid3dark.png" : "assets/grid3light.png"}
                                alt="grid-3"
                                className="w-full sm:h-[266px] h-fit object-cover rounded-md"
                            />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mb-2  font-generalsans">My Passion for Coding</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
                            <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">sokthythorn@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;