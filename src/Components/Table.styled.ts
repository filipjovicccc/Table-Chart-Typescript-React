import styled from "styled-components";


const TableStyle = styled.table `

border: 5px solid black;
    padding: 0;
    margin: 0 auto;
    border-collapse: collapse;
    width: 800px;
  
    thead {
        border: 2px solid black;
        background-color: green;
       
    }
    tbody > tr > td {
        border: 1px solid black;
    }
` 

export default TableStyle