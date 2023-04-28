import styled from "styled-components";
import {theme} from "./ColourTheme";

export const StyledPrimaryButton = styled.a`   
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.backgroundColor};   
    display: inline-block;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    // font-weight: var(--font-medium);   
  
    @media (min-width: 768px) {    
    .button--flex {
        display: inline-flex;
      }
    };

    &:hover {
        background-color:  ${props => props.theme.backgroundColorHover};
        box-shadow: 0px 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    }
`;

StyledPrimaryButton.defaultProps = {
    theme: theme
}