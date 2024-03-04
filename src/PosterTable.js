// import Table from 'react-bootstrap/Table';
import { nanoid } from 'nanoid';

export const PosterTable=(props)=>{

    console.log(props);
    return(
    <table className="table" style={{marginTop: 40, maxWidth: 600 }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
            {props?.data?.map(obj=>(
                <tr key={nanoid()}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>
                    <td>
                        <img src={obj.avatar} width={20} style={{marginRight: 10}}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}