import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import applicants from "../../../db/applicants";
import { useParams } from "react-router-dom";
import axios from "axios";

const Applicant_Profile = () => {
  const [user, setUser] = useState([]);
  let { id } = useParams();
  let uri = "http://localhost:3005/api/v1";

  // let b1 = applicants.find(applicant => applicant._id == id);
  // console.log(b1);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(`${uri}/applicants/${id}`);
      setUser(data.data);
    };
    fetchData();
  }, [id, uri]);
  return (
    <div>
      <div className="page_wrapper">
        <Container className="showcase bg-green-800 ">
          <div className="container">
            <div className="image_dp flex flex-col items-center">
              <img src={user.pic} alt="pic" className="rounded-full" />
              <div className="text-center text-white pt-2">
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                <h6>{user.state}, Not in Prison</h6>
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

export default Applicant_Profile;
