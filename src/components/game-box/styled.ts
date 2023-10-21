import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
    '@media (max-width: 300px)': {
      width: '300px',
      height: '1000px',
      borderRadius: '16px',
    },
    '@media (max-height: 600px)': {
      height: '600px',
    },
  }),
);
