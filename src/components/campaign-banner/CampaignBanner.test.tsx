import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom extensions
import { CampaignBanner } from './CampaignBanner'; // Import your CampaignBanner component
import { TestElement } from '../../enums/TestElement';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const campaignBanner = getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(campaignBanner).toBeInTheDocument();

    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
    });
    expect(campaignBanner).toHaveTextContent('Score 200 points and get 10% discount on your next mobile Recharge!');
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    window.innerWidth = 250;
    const { getByTestId } = render(<CampaignBanner />);
    const campaignBanner = getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(campaignBanner).toBeInTheDocument();
    // Add assertions for responsiveness, e.g., font size and width
    // expect(campaignBanner).toHaveStyle({ fontSize: '12px' });
    // expect(campaignBanner).toHaveStyle({ width: '70%' });
     // Adjust to match your responsive design
     const computedStyles = getComputedStyle(campaignBanner);
     expect(computedStyles.fontSize).toBe('12px');
     expect(computedStyles.width).toBe('70%');
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport height is 600 px', () => {
    global.innerHeight = 600;
    const { getByTestId } = render(<CampaignBanner />);
    const campaignBanner = getByTestId(TestElement.CAMPAIGN_BANNER);
    expect(campaignBanner).toBeInTheDocument();
  });
});
