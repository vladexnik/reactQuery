
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { CoinsTable } from './CoinsTable';
import { useQuery } from 'react-query';
import Button from 'react-bootstrap/Button';

function App() {

  async function fetchCoins(page=1) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'LYX6/nW1Yco89A2Rx8MzFpy3Co2KABtyBEf956JOEyk='
      }
    };
    
        const response=await axios(`https://openapiv1.coinstats.app/coins?page=${page}&limit=10&currency=EUR`, options);
        return response.data.result;

  }

  const [page,setPage]=useState(1);
  const {data, isLoading, isError}=useQuery(
    ['coins', page], 
    ()=> fetchCoins(page),
    { 
      keepPreviousData: true, 
      refetchOnWindowFocus: true

    }
  );
  console.log(data);


  if(!data){
    return <h2 style={{textAlign: 'center'}}>Нет данных криптовалют</h2>
  }

  if(isLoading){
    return <h2>Загрузка данных...</h2>
  }

  if(isError){
    return <h2>Ошибка данных...</h2>
  }
  

  return(
    <div >
        <CoinsTable data={data}/>
        <div style={{ textAlign: 'center', marginTop: 20}}>
          <Button onClick={()=> setPage((p) => p-1)} disabled={page===1 ? 1 : 0}>
            back
          </Button>
        
          <Button onClick={()=> setPage((p) => p+1)}>
            next
          </Button>
        </div>

        

    </div>
  )
}

export default App;
