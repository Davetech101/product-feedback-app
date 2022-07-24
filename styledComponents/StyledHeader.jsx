import styled from "styled-components"

const StyledHeader = styled.header`
  display:block;

  .head{
    position:sticky;
    top:0;
    width:100%;
    left:0;
    height:7rem;
    background-image:linear-gradient(to bottom left, #E84D70, #A337F6, #28A7ED);
    color:#fff;
    padding:0 2.4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .head h1{
    font-size:1.5rem;
    padding:.5rem 0;
  }

  .head span{
    font-size:1.3rem;
  }

  .remove{
    display:none;
  }
  
  .subHead{
    width:100%;
    height:5rem;
    background:#373F68;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 2.4rem;
    color:#fff;
    font-size:1.3rem;
  }

  .menu{
    position:fixed;
    bottom:0;
    top:7rem;
    background:rgba(0, 0, 0, .6);
    width:100%;
  }

  .nav{
    position:fixed;
    bottom:0;
    top:7rem;
    right:0;
    background:#F7F8FD;
    width:75%;
    padding:2.4rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:2.4rem;
  }

  .card{
    background:#fff;
    border-radius:4px;
    padding:2.4rem;
    width:100%;
  }

  .card button{
    background:#F2F4FF;
    color:#4661E6;
    padding:1rem 1.5rem;
    border-radius:1rem;
    margin:.5rem;
    font-size:1.3rem;
  }
`

export default StyledHeader