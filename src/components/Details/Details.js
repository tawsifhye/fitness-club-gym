import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
const Details = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //filtering data base on param
  useEffect(() => {
    const foundService = services.find((service) => service.id === serviceId);
    setSingleService(foundService);
  }, [services]);
  // console.log(singleService);
  return (
    <div>
      <div className="text-center ">
        <h1 className="p-2">{singleService?.title}</h1>
        <p className="p-2">{singleService?.description}</p>
        <img className="w-100" src={singleService?.thumb} alt="" />
      </div>
    </div>
  );
};

export default Details;
