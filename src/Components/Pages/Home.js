import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import banner  from '../images/banner.jpeg';
import '../style/Homestyle.css'

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home" style={{backgroundImage:`url(${banner})`,backgroundRepeat:'no-repeat',backgroundPosition:'right top'}}>
          <div className="headercontainer">
            <h1>FOODPLAZA</h1>
            <p>Delicious food</p>
            <Link to="/menu">
              <button style={{fontWeight:"bold"}}>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
