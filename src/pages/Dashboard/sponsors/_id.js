import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
// import applican from "../../../db/sponsors";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import sponsors from "../../../db/sponsors";
// import { GiPrivateFirstClass } from "react-icons/gi";

const Sponsors_Profile = () => {
  const [user, setUser] = useState([]);
  let { id } = useParams();

  // let b1 = sponsors.find(sponsor => sponsor._id == id);
  // console.log(b1);
  const fetchData = async id => {
    let profile = await sponsors.find(sponsor => sponsor._id === id);
    setUser(profile);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return (
    <div>
      <div className="page_wrapper">
        <Container className="showcase bg-green-800 ">
          <div className="container">
            <div className="image_dp flex flex-col items-center ">
              <img src={user.pic} alt="pic" className="rounded-full " />
              <div className="text-content text-white pt-2">
                <h3 className="text-center">{`${user.firstName} ${user.lastName}`}</h3>
                <h6 className="text-center">{user.gender}</h6>
                <h6 className="text-center">
                  {user.annonimous ? <Visibility /> : <VisibilityOff />}{" "}
                  {user.state}
                </h6>
              </div>
            </div>
            <div className="panel text-white ">
              <div>Help</div>
              <div>Donate</div>
              <div>Show intrest</div>
            </div>
          </div>
        </Container>

        <main>
          <h1 className="text-center my-2">Brief</h1>
          <div className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            voluptate aperiam, culpa vero facere rerum temporibus amet molestias
            autem, quae cum explicabo nulla error dolores fugiat labore dolor
            iure minus!
          </div>
        </main>
      </div>
    </div>
  );
};

const Container = styled.div`
  height: 50vh;
  /* background-color:  */
  position: relative;
  .container {
    display: grid;
    place-items: center;
    height: 100%;
  }
  .panel {
    display: grid;
    position: relative;
    bottom: -10%;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    width: 100%;
  }
`;

export default Sponsors_Profile;
