import { useEffect, useState } from "react";
import RuralContext from "./ruralContext";

const RiseState = (props) => {
  // There getShare method Not Working
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("businesstoken") ? true : false;
  });
  const [business, setBusiness] = useState({});
  const getBusinessDetails = async () => {
    try {
      console.log("Fetching business details...");

      const response = await fetch(
        "http://localhost:5000/api/data/businessData",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            businesstoken: localStorage.getItem("businesstoken"),
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setBusiness(data.businessData); // Assuming setBusiness is a state updater function

      return data.businessData; // Return data so caller can use it
    } catch (err) {
      console.error("Error fetching business details:", err);
    }
  };

  return (
    <RuralContext.Provider
      value={{
        business,
        setBusiness,
        getBusinessDetails,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}{" "}
    </RuralContext.Provider>
  );
};
export default RiseState;
