
import { useState } from "react";

function Codeexp() {
  // add state for input and chat tog
  const [codeInput, setcodeinput] = useState("");
  const [result, setResult] = useState();

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3080/code-gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: codeInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setcodeinput("");
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
          src="../../src/assets/code-green.svg"
        ></img>
        <h2 className="text-xl">Code Explainer</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit} >
      <center>  <input
          type="text"
          name="code"
          placeholder="Enter a code to get its explanation"
          value={codeInput}
          onChange={(e) => setcodeinput(e.target.value)}
          className=" h-40 py-2 px-4 rounded-lg 
        w-1/2 shadow-xl text-2xl bg-base-100  text-white "
        /></center>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center">
          {" "}
          <img
            className="svg-styles w-14 h-14 rounded-md"
            src="../../src/assets/robot-svgrepo-com.svg"
          ></img>
          <input
            type="submit"
            value="Generate code explanation"
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

export default Codeexp