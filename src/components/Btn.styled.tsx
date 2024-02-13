import styled, { css } from "styled-components" 
 
type BtnPropsType = { 
  color?: string 
  firstBtn?: boolean 
  secondBtn?: boolean 
} 
 
export const Btn = styled.button<BtnPropsType>`
  position: absolute; 
  width: 86px; 
  height: 30px;   
  border-radius: 5px; 
  color: ${props => props.color || "white"}; 
  font-family: Inter; 
  font-size: 12px; 
  font-weight: 800; 
 
  ${props => props.firstBtn && css<BtnPropsType>` 
    left: 20px; 
    right: -20px; 
    top: 298px; 
    bottom: -298px; 
    background: rgb(78, 113, 254); 
    border: 0; 
  `} 
 
  ${props => props.secondBtn && css<BtnPropsType>` 
    left: 118px; 
    top: 298px; 
    box-sizing: border-box; 
    border: 2px solid rgb(78, 113, 254); 
  `} 
`;