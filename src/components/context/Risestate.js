import { useEffect, useState } from "react";
import RuralContext from "./ruralContext";

const RiseState = (props) => {
  // There getShare method Not Working
  const [business, setBusiness] = useState({});
  const getBusinessDetails = () => {
    try {
      console.log("Enter in fetch for businessData");
      fetch("http://localhost:5000/api/data/businessData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          businesstoken: localStorage.getItem("businesstoken"),
        },
      })
        .then((response) => {
          setBusiness(response.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(
            "Error in making data set using setBusiness in business get fetch api",
            err
          );
        });
    } catch (err) {
      console.error(
        "Network error! Please try again later. from risestate of businessData get"
      );
      console.log(err);
    }
  };
  return (
    <RuralContext.Provider
      value={{
        business,
        setBusiness,
        getBusinessDetails,
      }}
    >
      {props.children}{" "}
    </RuralContext.Provider>
  );
};
export default RiseState;
