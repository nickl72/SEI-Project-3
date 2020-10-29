import styled from 'styled-components';



export const ResultHead = styled.div`
height: 25px;
width: 100%;
display: flex;
`

export const ResultHolder = styled.div `
display: flex;
flex-direction: column;
align-items: center;
&.message {
    padding: 15px;
    text-align: center;
}
`

export const ResultList = styled.div` 
// border: solid 5px #6f3c05;
height: 90vh;
width: 25%;
background: #f2a743;
`

export const ViewButton = styled.div `
display: flex;
margin: 0;
background: #fbdc81;
border-left: 2px solid #fbdc81;
border-right: 2px solid #fbdc81;
height: 100%;
width: 50%;
cursor: pointer;
align-items: center;
justify-content: center;
&:hover {
    background: #f2a743;
    border-left: 2px solid #fbdc81;
    border-right: 2px solid #fbdc81;

}
&.active {
    background: #f2a743;
    border-left: 2px solid #f2a743;
    border-right: 2px solid #f2a743;
}
`