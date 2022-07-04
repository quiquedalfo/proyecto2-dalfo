import React from "react";
import CartWidgetSVG from "../CartWidget/CartWidgetSVG"
import styled from "styled-components"

const Btn = styled.button`
  border: none;
  padding: 4px 8px 0 0;
  border-radius: 4px;
  position: relative;
`;
const Badge = styled.span`
  background-color: #f00;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  font-size: 5px;
`;

const CartWidget = ({count}) => {
  return(
    <Btn>
      <Badge>{count}</Badge>
      <CartWidgetSVG />
    </Btn>
  );
};

export default CartWidget 