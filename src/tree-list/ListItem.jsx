 import List from './List.jsx';
 import { useState } from 'react';

 function ListItem({item}){
    const [unfolded, setUnfolded] = useState(false);
    return (
        <li className='list-item' key={item.id}>
            {item.label}
            {item.children && item.children.length > 0 && (
            <>
                <button className='button-unfold' onClick={() => setUnfolded(!unfolded)}>
                    {unfolded ? "-" : "+"}
                </button>
                {unfolded && <List data={item.children} />}
            </>
            )}
        </li>
    
    
)}
export default ListItem;