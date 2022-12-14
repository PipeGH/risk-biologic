
export default function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

  
    return (
        <div className={"card-l4" + itemClass} onClick={() => handleClick(id) }> 
            <img src={item.img} alt=""  />
        </div>
    )
}
