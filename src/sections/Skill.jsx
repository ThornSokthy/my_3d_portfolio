import {technologies} from "../constants/index.js";

function Skill() {
    return (
        <section className="py-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center p-5 bg-base-content shadow-md rounded-lg hover:scale-105 transform transition duration-300 w-[100px] h-[100px]"
                    >
                        <div className="flex items-center justify-center w-2/3 h-2/3 ">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-full h-full object-contain "
                            />
                        </div>
                        <p className="text-gray-500 font-medium text-sm text-center line-clamp-2">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;