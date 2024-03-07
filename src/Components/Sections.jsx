import { useState } from "react";

const Sections = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (index) => {
    setSelectedSection(selectedSection === index ? null : index);
  };

  return (
    <div className="flex gap-10 font-semibold text-lg mt-5 justify-center">
      {["Overview", "Fundamentals", "News insights", "Sentiments", "Team", "Technicals", "Tokenomics"].map((section, index) => (
        <div
          key={section}
          className={`flex flex-col items-center cursor-pointer ${selectedSection === index ? "text-[#0052FE]" : "hover:text-[#0052FE]"
            }`}
          onClick={() => handleClick(index)}
        >
          <h3>{section}</h3>
          {selectedSection === index && <p className="font-extrabold">___________</p>}
        </div>
      ))}
    </div>
  );
};

export default Sections;
