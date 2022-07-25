import styled from "styled-components"

const StyledHeader = styled.header`
  .head{
    position:fixed;
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
    position:fixed;
    left:0;
    top:7rem;
  }

  .subHead a{
    background:#AD1FEA;
    padding:1rem 1.5rem;
    border-radius:1rem;
    text-decoration:none;
    color:#fff;
    font-size:1.3rem;
  }

  .menu{
    position:fixed;
    bottom:0;
    left:0;
    top:7rem;
    background:rgba(0, 0, 0, .6);
    width:100%;
    opacity:0;
    visibility:hidden;
    transition:all .2s;
    z-index:1;
  }

  .showMenu{
    opacity:1;
    visibility:visible;
  }

  .nav{
    position:fixed;
    bottom:0;
    top:7rem;
    right:0;
    background:#F7F8FD;
    width:75%;
    padding:7.4rem 2.4rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:2.4rem;
    transform:translateX(100rem);
    visibility:hidden;
    opacity:0;
    transition:all .5s;
    z-index:2;
  }

  .showNav{
    transform:translateX(0);
    opacity:1;
    visibility:visible;
  }

  .card{
    background:#fff;
    border-radius:4px;
    padding:2.4rem;
    width:100%;
  }

  .card-1 button{
    background:#F2F4FF;
    color:#4661E6;
    padding:1rem 1.5rem;
    border-radius:1rem;
    margin:.5rem;
    font-size:1.3rem;
  }

  .flex{
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:1.6rem;
    color:#647196;
    margin-bottom:8px;
  }

  .top{
    margin-bottom:2.4rem;
  }

  .card h3{
    font-size:18px;
    color:#3A4374;
  }

  .view{
    text-decoration:underline;
    background:transparent;
    color:#4661E6;
    font-size:1.3rem;
  }

  .circle{
    width:8px;
    height:8px;
    display:inline-block;
    border-radius:50%;
    margin-right:1.6rem;
  }

  .orange{
    background:#F49F85;
  }

  .purple{
    background:#AD1FEA;
  }

  .blue{
    background:#62BCFA;
  }
`

export default StyledHeader