import {useState} from "react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
import {myEducation, myExperience} from "../constants";

function ExpAndEdu() {
    const [experienceData, setExperienceData] = useState(myExperience);
    const [educationData, setEducationData] = useState(myEducation);

    const toggleShowMore = (section, id) => {
        if (section === 'experience') {
            setExperienceData(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, showMore: !item.showMore } : item
                )
            );
        } else {
            setEducationData(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, showMore: !item.showMore } : item
                )
            );
        }
    };

    const renderTimelineItem = (item, section) => {
        const allActivities = [...item.activities.items];
        const visibleActivities = allActivities.slice(0, item.activities.items.length - item.activities.hiddenItems.length);

        return (
            <li key={item.id} className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        className="bi bi-circle-fill fill-gray-400"
                        viewBox="0 0 16 16"
                    >
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                </div>
                <div className="w-full">
                    <span className="text-gray-600">{item.period}</span>
                    <h2 className="text-xl font-semibold mb-3">
                        {item.position || item.institution}
                    </h2>
                    <p className="text-gray-700 mb-4">{item.description}</p>

                    <h2 className="text-xl font-semibold mb-3 mt-2">{item.activities.title}</h2>
                    <div>
                        <ul className="pl-5 space-y-1">
                            {visibleActivities.map((activity, index) => (
                                <li key={index} className="text-gray-700 list-disc">{activity}</li>
                            ))}

                            <div className={`transition-all duration-500 ease-in-out ${
                                item.showMore ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
                            }`}>
                                {item.activities.hiddenItems.map((activity, index) => (
                                    <li key={`hidden-${index}`} className="text-gray-700 list-disc">{activity}</li>
                                ))}

                                {item.technologies && (
                                    <>
                                        <h2 className="text-xl font-semibold mb-3 mt-3">{item.technologies.title}</h2>
                                        <ul className="list-none flex flex-col gap-3">
                                            {item.technologies.items.map((tech, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="max-w-[25px]">
                                                        <img
                                                            src={tech.icon}
                                                            className="w-full"
                                                            alt={tech.name}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    {tech.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </ul>

                        <button
                            className="mt-6 btn btn-outline rounded-md"
                            onClick={() => toggleShowMore(section, item.id)}
                        >
                            {item.showMore ? (
                                <>
                                    See less <BiChevronUp className="text-xl" />
                                </>
                            ) : (
                                <>
                                    See more <BiChevronDown className="text-xl" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </li>
        );
    };
    return (
        <div className="my-28 space-y-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
                <h2 className="text-2xl font-bold mb-5">
                    Experience <span className="text-blue-600 text-sm">■</span>
                </h2>
                <ul>
                    {experienceData.map(item => renderTimelineItem(item, 'experience'))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-5">
                    Education <span className="text-blue-600 text-sm">■</span>
                </h2>
                <ul>
                    {educationData.map(item => renderTimelineItem(item, 'education'))}
                </ul>
            </section>
        </div>
    );
}

export default ExpAndEdu;