import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  return <div>This is details {serviceId}</div>;
};

export default Details;
