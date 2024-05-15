import { useState } from "react";

function AddTodoForm(props) 
{
  const activityArr=props.activityArr
  const setactivityArr=props.setactivityArr

  const [newactivity,setNewactivity]=useState("")

  function hanglechange(event)
  {
    setNewactivity(event.target.value)

  }

  function addActivity()
  {
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])

    setNewactivity("")
  }



  return(
    <div className="flex flex-col gap-3 ">
      <h1 className="text-2xl font-medium">Mange Activities</h1>
      <div>
        <input
          type="text" value={newactivity} onChange={hanglechange}
          className="border border-black bg-transparent p-1"
          placeholder="Next Activity"
        />
        <button onClick={addActivity} className="bg-black text-white p-1 border border-black">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
