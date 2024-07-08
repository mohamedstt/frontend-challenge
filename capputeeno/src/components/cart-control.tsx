import { useLocalStorage } from "@/Hooks/useLocalStorage";
import { CartIcons } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px; 
    height: 17px;
    border-radius:50%; 
    padding: 0px 5px; 
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.div`
    postion: relative;
`


export function CartControl (){
    const { value } = useLocalStorage('cart-items');
    return (
        <Container>
            <CartIcons/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}