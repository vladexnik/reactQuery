import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { PosterTable } from './PosterTable';

export const Post=(props)=>{
    async function fetchProducts() {
        const response=await axios.get(`https://65e3549b88c4088649f5a5e3.mockapi.io/api/cur/query/queryCurr`);
        return response.data;

    }

    async function createProducts(data) {
        const response=await axios.post(`https://65e3549b88c4088649f5a5e3.mockapi.io/api/cur/query/queryCurr`, data);
        return response;

    }


  const {data, isLoading, isError}=useQuery(
    'products',
    fetchProducts
  );
  console.log(data);

  const mutation=useMutation(
    (newProd)=> createProducts(newProd), 
    {
        onSuccess:()=>queryClient.invalidateQueries(['products'])
    }
  ); 
  const queryClient=useQueryClient();

  const onSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData(event.target);
    const fields=Object.fromEntries(formData);
    console.log(fields);

    mutation.mutate(fields);

    event.target.reset();
  }


  if(!data){
    return <h2 style={{ textAlign: 'center'}}>Загрузка ...</h2>
  }

  if(isLoading){
    return <h2>Загрузка данных...</h2>
  }

  if(isError){
    return <h2>Ошибка данных...</h2>
  }

    return(
        <Container style={{marginTop: 70, maxWidth: 600}}>
            <PosterTable data={data}/>
            <hr/>

            <Form onSubmit={onSubmit} style={{marginBottom: 70}}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" name="price" />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>
    )
}

export default Post;