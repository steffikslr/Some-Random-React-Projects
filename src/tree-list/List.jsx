import ListItem from "./ListItem";
import './list.css'

function List ({data}){
    
    return (
        <ul className="list">
        {data.map(item => (
        <ListItem key={item.id} item={item}/>
    ))}
    </ul>
    )
}

export default List;