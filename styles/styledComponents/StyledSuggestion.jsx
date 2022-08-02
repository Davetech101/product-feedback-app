import styled from 'styled-components'

const StyledSuggestions = styled.div`
    width:100%;
    background:#fff;
    padding:2.4rem;
    margin-bottom:1.6rem;
    border-radius:4px;
    border-top:${props => props.border} solid ${props => props.color};
    
    h3{
        font-size:1.5rem;
        color:#3A4374;
        margin-bottom:.9rem;
        text-transform:capitalize;
    }

    small{
        font-size:1.5rem;
        color:#647196;
        margin-bottom:.9rem;
        display:block;
    }

    .category{
        display:inline-block;
        background:#F2F4FF;
        color:#4661E6;
        padding:1rem 1.5rem;
        border-radius:1rem;
        margin:.5rem;
        font-size:1.3rem;
    }

    .color{
        width:8px;
        height:8px;
        background:${props => props.color};
        display:inline-block;
        border-radius:50%;
    }

    .group{
        display:flex;
        align-items:center;
        gap:8px;
    }
`

export default StyledSuggestions