import styled from "styled-components"

const StyledFeedbackForm = styled.form`
    background:#fff;
    border-radius:5px;
    padding:4.5rem 2.4rem 2.4rem;
    position:relative;
    margin-top:5rem;

    .svgCont{
        color:#fff;
        font-size:3rem;
        background-image:linear-gradient(to bottom left, #E84D70, #A337F6, #28A7ED);
        border-radius:50%;
        width:4rem;
        height:4rem;
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        top:-2rem;
    }

    h2{
        color:#3A4374;
        font-size:1.8rem;
        margin-bottom:2.4rem;
    }

    h3{
        font-size:1.3rem;
        color:#3A4374;
        margin-bottom:3px;
    }

    small{
        display:block;
        font-size:1.3rem;
        color:#647196;
        margin-bottom:1.6rem;
    }

    .input{
        display:block;
        background:#F7F8FD;
        width:100%;
        border-radius:5px;
        padding:1.5rem 1rem;
        margin-bottom:2.4rem;
        color:#3A4374;
    }

    textarea{
        color:#3A4374;
    }

    button{
        width:100%;
        border-radius:5px;
        padding:1.5rem 3.5rem;
        font-size:1.3rem;
    }

    .add{
        background:#AD1FEA;
        margin-bottom:1.6rem;
        color:#fff;
    }

    .cancel{
        background:#3A4374;
        color:#fff;
    }

    .delete{
        background:#D73737;
        margin-top:1.6rem;
        color:#fff;
    }

    .select{
        padding:1rem;
        border-radius:unset;
        text-align:left;
        color:#647196;
    }

    .select:not(:last-child){
        border-bottom:1px solid #647196;
    }

    .category{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:#3A4374;
    }

    .categorySelect{
        box-shadow:0px 0px 8px 3px rgba(0,0,0, .1);
        border-radius:5px;
        margin-bottom:1rem;
        position:absolute;
        top:10rem;
        left:0;
        background:#fff;
        opacity:0;
        visibility:hidden;
        transition:all .2s;
    }

    .showSelect{
        opacity:1;
        visibility:visible;
    }

    .arrow{
        transform:rotate(0deg);
        transition:all .2s;
    }

    .rotate{
        transform:rotate(-180deg);
        transition:all .2s;
    }

    .error{
        font-size:2rem;
    }
`

export default StyledFeedbackForm