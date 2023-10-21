import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import 'jest-styled-components';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    render(<StartButton />);
    
    const startButton = screen.getByTestId(TestElement.START_BUTTON);
    expect(startButton).toBeInTheDocument();
    
    const buttonText = screen.getByText(gameConfig.startButton.buttonText);
    expect(buttonText).toBeInTheDocument();
  });

  it('SHOULD Render StartButton with click event', () => {
    render(<StartButton />);
    
    const startButton = screen.getByTestId(TestElement.START_BUTTON);
    
    const alert = jest.spyOn(window, 'alert');
    alert.mockImplementation(() => 'Test alert');
    
    fireEvent.click(startButton);
    
    expect(alert).toHaveBeenCalledWith(
      'You will learn to develop JS games after you join with us! For now, best of luck!'
    );
    
    alert.mockRestore();
  });

  it('SHOULD Render Start Button with height 40px, width 40%, font-size 12px, border-radius 10px WHEN browsers viewport width 360px', () => {
    render(<StartButton />);
    
    const startButton = screen.getByTestId(TestElement.START_BUTTON);
    
    expect(startButton).toHaveStyleRule('width', '40%', {
      media: '(max-width: 360px)',
    });
    expect(startButton).toHaveStyleRule('height', '40px', {
      media: '(max-width: 360px)',
    });
    expect(startButton).toHaveStyleRule('font-size', '12px', {
      media: '(max-width: 360px)',
    });
    expect(startButton).toHaveStyleRule('border-radius', '10px', {
      media: '(max-width: 360px)',
    });
  });
});
