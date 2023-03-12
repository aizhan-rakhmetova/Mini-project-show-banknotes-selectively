import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'}>
                <Banknotes>{props.money.banknotes}</Banknotes>
                <Value>{props.money.value}</Value>
                {/*<div>{props.money.number}</div>*/}
            </Banknote>
        </>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
      if(props.color === "blue"){
          return "chartreuse"
      } else{
          return "cyan"
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Banknotes = styled.div`
  font-size: 50px;
`

const Value = styled.div`
  font-size: 80px;
  
`

// {props.money.banknotes === 'Dollars'
//     ? <GreenBankomat>
//         <div>{props.money.banknotes}</div>
//         <div>{props.money.value}</div>
//         <div>{props.money.number}</div>
//     </GreenBankomat>
//
//     :
//     <BlueBankomat>
//         <div>{props.money.banknotes}</div>
//         <div>{props.money.value}</div>
//         <div>{props.money.number}</div>
//     </BlueBankomat>
// }

