import React from 'react';
import homes from '../../json/game-of-thrones';

import {Link} from 'react-router-dom';
class HomeList extends React.Component{

    render(){
        return(
            <div>
                <ul>

                {homes.houses.map((name, index)=>{
                    return <li><Link to={`/${name.name}`}>{name.name}</Link></li>
                })}
                </ul>
            </div>
        )
    }


}
export default HomeList;