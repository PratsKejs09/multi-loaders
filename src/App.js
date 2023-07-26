import "./styles.css";
import { useEffect, useState } from "react";
import dummyData from "./data";
import CardList from "./components/Cards/CardList";
// import CustomLoader from "./components/CustomLoader/index";

export default function App() {
  // const [records, setRecords] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const url = "https://jsonplaceholder.typicode.com/users";

  // const getNames = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setRecords(data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     getNames();
  //   }, 10000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className="App">
    //   {loading ? (
    //     <CustomLoader style={{backgroundColor: "red", width: 25, height: 70}}
    //     // style={{
    //     //   color: "rgb(155, 236, 34)",
    //     //   height: "70px",
    //     //   width: "70px"
    //     //   // timeout="5000"
    //     // }}
    //     />
    //   ) : (
    //     records &&
    //     records.map((record) => {
    //       return (
    //         <p key={record.website + record.key}>
    //           <li>{record.website} </li>
    //         </p>
    //       );
    //     })
    //   )}
    // </div>
    <div className="App">
      {/* We are using our own custom loader component here */}
      {
        //   loading ? (
        //   <CustomLoader style={{ backgroundColor: "red" }} />
        // ) : (
        videos &&
          videos.map((list, index) => {
            return (
              <section key={index}>
                <h2 className="section-title">{list.section}</h2>
                <CardList loading={loading} list={list} />
                <hr />
              </section>
            );
          })
      }
    </div>
  );
}
