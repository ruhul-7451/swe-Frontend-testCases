import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import 'jest-styled-components';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    render(
      <GameBox>
        <div>Content goes here</div>
      </GameBox>
    );
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    
    expect(gameBox).toBeInTheDocument();
    expect(gameBox).toHaveStyle({
      width: `${gameConfig.container.maxWidth}px`,
      height: `${gameConfig.container.maxHeight}px`,
    });
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    global.innerWidth = 300;
    render(
      <GameBox>
        <div>Content goes here</div>
      </GameBox>
    );
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    
    expect(gameBox).toBeInTheDocument();
    expect(gameBox).toHaveStyleRule('width', '300px', {
        media: '(max-width: 300px)',
      });
    expect(gameBox).toHaveStyleRule('height', '1000px', {
        media: '(max-width: 300px)',
      });
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    global.innerHeight = 600;
    render(
      <GameBox>
        <div>Content goes here</div>
      </GameBox>
    );
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    
    expect(gameBox).toBeInTheDocument();
    expect(gameBox).toHaveStyleRule('height', '600px', {
        media: '(max-height: 600px)',
      });
  });
});
