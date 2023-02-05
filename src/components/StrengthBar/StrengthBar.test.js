import React from 'react';
import ReactDOM from 'react-dom';
import StrengthBar from './StrengthBar';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';

describe('<StrengthBar/>', () => {
  let onBarChange = jest.fn();
  let defaultPassedProps = {
    widgetBackGroundColor: 'hsl(197deg 38% 31%)',
    focusBarColor: 'white',
    BarColor: 'hsl(197deg 18% 58%)',
  };

  test('should render strength bars', () => {
    render(<StrengthBar onBarChange={onBarChange} {...defaultPassedProps} />);
    expect(screen.getByTestId('strengthBarContainer')).toBeInTheDocument();
    expect(screen.getByTestId('strengthStatus')).toBeInTheDocument();
  });

  test('should update strength bars', async () => {
    render(<StrengthBar onBarChange={onBarChange} {...defaultPassedProps} />);
    expect(screen.getByText('low')).toBeInTheDocument();
    fireEvent.click(screen.getAllByTestId('strengthBar-5')[1]);
    await waitFor(() => {
      expect(onBarChange).toHaveBeenCalled();
      expect(screen.getByText('high')).toBeInTheDocument();
      expect(screen.getAllByTestId('strengthBar-5')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-4')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-3')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-2')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-1')[1]).toHaveStyle({
        backGround: 'white',
      });
    });
    fireEvent.click(screen.getAllByTestId('strengthBar-3')[1]);
    await waitFor(() => {
      expect(onBarChange).toHaveBeenCalled();
      expect(screen.getByText('medium')).toBeInTheDocument();

      expect(screen.getAllByTestId('strengthBar-3')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-2')[1]).toHaveStyle({
        backGround: 'white',
      });
      expect(screen.getAllByTestId('strengthBar-1')[1]).toHaveStyle({
        backGround: 'white',
      });
    });
  });

  test('should modify UI based on passed props', () => {
    let modifiedProps = {
      ...defaultPassedProps,
      widgetBackGroundColor: 'red',
      focusBarColor: 'blue',
      BarColor: 'grey',
    };
    render(<StrengthBar onBarChange={onBarChange} {...modifiedProps} />);
    expect(screen.getByTestId('strengthBarContainer')).toHaveStyle({
      backGround: 'red',
    });
  });
});
