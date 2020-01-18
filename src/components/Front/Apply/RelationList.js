import React, { useState } from "react";
import Relation, { RelForm } from "./Relation";
import uuid from "uuid/v4";

const RelationList = ({ name, phone, setRel }) => {
  // const [rels, setRel] = useState([
  //   { name: "Peter", phone: "07062275085", id: 1 }
  // ]);
  const rels = [{ name: "Peter", phone: "07062275085", id: 1 }];
  const addRelations = () => {
    // setRel(...rel, { name, title });
    setRel([...rels, { name, phone, id: uuid() }]);
    console.log({ name, phone });
  };
  const removeRel = id => {
    const newRel = rels.filter(rel => rel.id !== id);
    setRel(newRel);
    console.log(rels);
  };
  return (
    <div>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {rels &&
          rels.map(rel => (
            <Relation
              key={rel.id}
              name={rel.name}
              phone={rel.phone}
              removeRel={() => {
                removeRel(rel.id);
              }}
            />
          ))}
      </ul>
      <RelForm addRel={addRelations} />
    </div>
  );
};

export default RelationList;
