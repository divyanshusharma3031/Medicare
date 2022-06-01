import React from "react";
import "./SearchBox.css";
import disease from "./symptoms";
function SearchBox() {
  let val = "";
  const onclick = async (e) => {
    val = e.target.value;
    console.log(val);
    let data = await fetch("http://localhost:4000/getdisease", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptom: val }),
    });
    data = await data.json();
    let d = document.getElementById("hiddencontainer");
    console.log(d);
    d.style.display = "block";
    console.log(data);
  };
  return (
    <>
      <div className="FirstBox">
        <div className="left">
          Have Access To Your Own Health Encyclopedia At Any Time.
          <select
            class="form-select searchbox"
            aria-label="Default select example"
            onClick={onclick}
          >
            {disease.map((dis) => {
              return (
                <option selected value={dis.symptom}>
                  {dis.symptom}
                </option>
              );
            })}
            <option selected>Select Your Symptoms</option>
          </select>
          <div id="hiddencontainer">Dummy text</div>
        </div>
        <div className="right">
          <img src="./images/cuteanimated.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
