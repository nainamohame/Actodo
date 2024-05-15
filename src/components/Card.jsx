function Card(props)
{
    return(
        <div className="px-10 py-5 border rounded-md text-center flex-grow" style={{backgroundColor:props.bgcolor}} > 
         <h1 className="text-2xl font-medium">{props.title}</h1>
         <p>{props.subtitle}</p>

      </div>

    )
}

export default Card