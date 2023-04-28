import styled from 'styled-components';
import {theme} from './ColourTheme';

export const SectionTitle = styled.h2`
      font-size: 1.25rem;
      text-align: center;
      color: ${props => props.theme.titleColor};
      font-weight: 600;

      @media screen and (min-width: 968px) {
        font-size: 1.5rem;
      }
`;

SectionTitle.defaultProps = {
    theme: theme
}