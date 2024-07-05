import React from 'react'
import axios from 'axios';


function DownlaodImage() {
    function getData(){
        try {
            axios.get("http://localhost:7000/download").then((data) => {
                console.log("Data successfully occured ==> ", data.data);
            })
        } catch (error) {
            console.log("some error occured ==> ", error);
        }
    }
  return (
    <button onClick={(e) => {
        e.preventDefault();

        getData();
    }}>Click for Download</button>
  )
}

export default DownlaodImage