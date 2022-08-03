import styled from 'styled-components'

const StyledRoadmap = styled.section`
   .head{
    background:#373F68;
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:10rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:2.4rem;
   }

   .head h3{
    font-size:18px;
    margin-top:3px;
   }

   .subHead{
    position:fixed;
    top:10rem;
    left:0;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:1.3rem;
    border-bottom:1px solid #dfdfdf;
    background:#F7F8FD;
   }

   .subHead button{
      color:grey;    
      padding:2.4rem 2rem;
   }

   .subHead button.active{
      color:#3A4374;
      font-weight:bold;
      border-bottom:2px solid ${props => 
         props.group === "In-Progress" ? "#AD1FEA" : props.group === "Planned" ? "#F49F85" : "#62BCFA"}};
   }

   .top{
      margin-bottom:2.4rem;
   }

   .top h3{
      font-size:1.8rem;
      color:#3A4374;
   }

   .top small{
      font-size:1.3rem;
      color:#647196;
   }
`

export default StyledRoadmap