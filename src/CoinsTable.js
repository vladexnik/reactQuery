// import Table from 'react-bootstrap/Table';
import { nanoid } from 'nanoid';


export const CoinsTable=(props)=>{

    console.log(props);
    return(
    <table className="table" style={{margin: '0 auto', maxWidth: 600 }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            {props?.data?.map(obj=>(
                <tr key={nanoid()}>
                    <td>{obj.rank}</td>
                    <td>
                        <img src={obj.icon} width={20} style={{marginRight: 10}}/>
                        {obj.name}
                    </td>
                    <td>$ {obj.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}