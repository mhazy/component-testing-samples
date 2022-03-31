import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {defaultKeyMap} from "@testing-library/user-event/dist/keyboard/keyMap";

import Button from "../part1";

describe('[Part 5] Button', () => {
  describe('component: Button', () => {
    it('should render with default props', () => {
      render(<Button/>);
    });

    it('should have a button', () => {
      render(<Button/>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should call callback', () => {
      const fn = jest.fn();
      render(<Button onClick={fn}/>);
      userEvent.click(screen.getByText('click me'));
      expect(fn).toBeCalledTimes(1);
    });

    it('should call callback when focused and activated', () => {
      const fn = jest.fn();
      render(<Button onClick={fn} />);
      screen.getByRole('button').focus();
      userEvent.keyboard('[Enter][Space]');
      expect(fn).toBeCalledTimes(2);
    });

    it('should not call callback when focused and other keys pressed', () => {
      const fn = jest.fn();
      render(<Button onClick={fn} />);
      screen.getByRole('button').focus();
      // Exclude Space/Enter from keys (standard 104 key map)
      defaultKeyMap
        .filter(({ code }) => code !== 'Enter' && code !== 'Space')
        .every(({ code }) => userEvent.keyboard(`[${code}]`));
      expect(fn).toBeCalledTimes(0);
    });
  });
});
