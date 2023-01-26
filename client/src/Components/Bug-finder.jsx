import React from "react";
import { useState } from "react";

function Bugfinder() {
  // add state for input and chat tog
  const [bugInput, setbuginput] = useState("");
  const [result, setResult] = useState();

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3080/bug-gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bug: bugInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setbuginput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

 
 
  return (
    <>
      <div className="flex justify-center gap-8">
        <img
          className="svg-styles w-14 h-14 rounded-md"
          src="../../src/assets/bug-fix.svg"
        ></img>
        <h2 className="text-xl">Bug finder</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit} >
      <center>  <input
          type="text"
          name="bug"
          placeholder="Enter a code to find bug in it"
          value={bugInput}
          onChange={(e) => setbuginput(e.target.value)}
          className=" h-40 py-2 px-4 rounded-lg 
        w-1/2 shadow-xl text-2xl bg-base-100  text-white "
        /></center>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-">
          {" "}
          <img
            className="svg-styles w-14 h-14 rounded-md"
            src="../../src/assets/robot-svgrepo-com.svg"
          ></img>
          <input
            type="submit"
            value="Generate shell command"
            className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
          />
        </div>{" "}
      </form>
      <br></br>
      <br></br>
     <div className="flex items-center justify-center self-center">
  <div className="mx-auto my-auto"><div className="card-body">
    <h2 className="card-title">Response from AI</h2>
    
    <div className="card-actions ">
     <div className="p-5 mockup-code font-mono">
      
      {result}
         </div>
         </div>

    </div>
  </div>
</div>

   
    </>
  )
}

export default Bugfinder