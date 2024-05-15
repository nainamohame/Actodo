import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {

  const users = props.users;
  const setusers = props.setusers;
  const navigate=useNavigate()

  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  //const [ecpassword,setECpassword]=useState()

  function handleUInput(event) {
    setEusername(event.target.value);
  }

  function handlePInput(event) {
    setEpassword(event.target.value);
  }

 /* function handleCPInput(event) {
    setECpassword(event.target.value);
  }*/

  function addUser(){
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")
  }



  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1>Hey Hi</h1>
        <p>Sign Up Here :)</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            type=""
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUInput}
          />

          <input
            type=""
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}
          />

          <input
            type=""
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="confirm password"
            //onChange={handleCPInput}
          />

          <button onClick={addUser} className="bg-[#fca201] w-24 p-1 rounded-md">Sign Up</button>
          <p>
            Already have an account?{" "}
            <Link className="underline" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
