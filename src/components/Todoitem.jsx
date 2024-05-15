function Todoitem(props)
{

    const activityArr =props.activityArr
    const setactivityArr =props.setactivityArr

    function handleDelete(deleted)
    {
        var temparr =activityArr.filter(function(item){
            if(deleted===item.id){
                return false
            }
            else{
                return true
            }

           

        })
        setactivityArr(temparr)


    }

    return(
        <div className="flex justify-between">
    <p>{props.index+1}.{props.item.activity}</p>
    <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
</div>
)
}

export default Todoitem