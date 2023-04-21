import React, { useState, useEffect } from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import styled from 'styled-components';

const ScrollUpButton = styled.a`
    position: fixed;
    right: 1rem;
    bottom: -30%;
    background-color: var(--container-color);
    box-shadow: 0 4px 12px hsla(0, 0%, 20%, 0.1);
    border-radius: 0.5rem;
    display: inline-flex;
    padding: 0.25rem;
    z-index: var(--z-tooltip);
    opacity: 0.8;
    transition: 0.4s;

    &:hover {
        opacity: 1;
    }

    .scrollup__icon {
        font-size: 1.5rem;
        color: var(--first-color);
    }

    &.show-scroll {
        bottom: 3.5rem;
    }
`;


function ScrollUp () {

const [scrollUp, setScrollUp] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () =>{
      setScrollUp(window.scrollY >= 350);
  });
}, [])

    return(
    <ScrollUpButton href="#" className={scrollUp ? "scrollup show-scroll" : "scrollup"}>
        <BsFillArrowUpSquareFill className='scrollup__icon'/>
    </ScrollUpButton>
    );  
};

export default ScrollUp;