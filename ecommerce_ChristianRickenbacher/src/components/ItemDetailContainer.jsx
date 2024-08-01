import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import data from '../data/products.json'

export const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve,reject) => {
            setTimeout(() => resolve(data), 2000);
        })
        .then((response) => {
            if(!id){//No tengo item
                setItems(response);
            }   else {
                const finded = response.find((i) => i.id === Number(id));
                setItems(finded);
            }
        })
        .finally(() => setLoading(false) );
    }, [id]);

    if(loading) return <Container className="mt-4 d-flex">Wait....</Container>
    if(!item) return <Container className="mt-4">No existe ningun producto.</Container>

    return(
        <Container className="mt-4">
            <h1>Productos</h1>
            <h2>{item.name}</h2>
            <img src={item.img} alt="" />
            <h4>{item.category}</h4>
            <p>{item.detail}</p>
        </Container>
    )
};
