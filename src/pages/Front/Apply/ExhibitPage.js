import React, { useState } from "react";
import Exhibit, { ExForm } from "../../../components/Front/Apply/Exhibit";
import uuid from "uuid/v4";

const ExhibitPage = () => {
  const [exhibits, setExhibits] = useState([{}]);
  const addEx = ({ name, file }) => {
    setExhibits([...exhibits, { name, file, id: uuid() }]);
    console.log(file.name);
  };

  const removeFile = id => {
    let newEx = exhibits.filter(exhibit => exhibit.id !== id);
    setExhibits(newEx);
  };

  return (
    <div>
      <div className="exhibits">
        {exhibits &&
          exhibits.map((item, i) => (
            <Exhibit key={i + 1} name={item.name} removeFile={removeFile} />
          ))}
      </div>
      <ExForm addEx={(name, file) => addEx(name, file)} />
    </div>
  );
};

export default ExhibitPage;
