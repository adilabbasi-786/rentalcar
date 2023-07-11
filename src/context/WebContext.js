import React, { createContext, useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
export const WebContext = createContext();
function Webinfo(props) {
  const [loading, setLoading] = useState(true);
  const [webinfoData, setWebinfoData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let request = await fetch("http://localhost:1337/api/web-info");
      let res = await request.json();
      setWebinfoData(res);

      setLoading(false);
    };

    getData();
  }, []);
  return (
    <WebContext.Provider value={webinfoData}>
      <div>
        {loading && <Loader />}
        {!loading && props.children}
      </div>
    </WebContext.Provider>
  );
}

export default Webinfo;
