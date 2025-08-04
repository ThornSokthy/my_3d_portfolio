import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants";
import Target from "../components/hero/Target.jsx";
import ReactLogo from "../components/hero/ReactLogo.jsx";
import Rings from "../components/hero/Rings.jsx";
import Cube from "../components/hero/Cube.jsx";
import Button from "../components/general/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isMobile, isTablet, isSmall);

    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max:w-5xl md:max-w-4xl mx-auto">
            <div className="avatar mt-14">
                <div className="ring-primary ring-offset-base-100 w-26 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"  alt="Logo"/>
                </div>
            </div>
            <span className="font-semibold text-sm md:text-xl">Hi, I’m SokThyy <span className="waving-hand text-xl">👋</span></span>
            <h2 className="text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold">Building digital
                applications, platforms, and experiences.</h2>
            <p className="text-sm md:text-base text-center w-full md:w-2/3">a Full Stack Web Developer based in Phnom Penh.
                I specialize in frontend & backend development, RESTful APIs,
                responsive design, and database architecture.</p>

            <Button name="CONTACT ME" isBeam containerClass="w-full px-8 md:w-fit mt-8" />

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <PerspectiveCamera makeDefault
                                       position={[0, 0, 30]}/>

                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Rings position={sizes.ringPosition} />
                        <Cube position={sizes.cubePosition} />
                    </group>

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                </Canvas>
            </div>

        </div>
    );
};

export default Hero;