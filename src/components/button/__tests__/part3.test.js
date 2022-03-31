import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../part3";

describe('[Part 3] Button', () => {
  describe('component: Button', () => {
    it('should render with default props', () => {
      render(<Button/>);
    });

    it('should act like a button when `to` is undefined', () => {
      render(<Button/>);
      expect(screen.queryByRole('link')).toBe(null)
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should act like a link when `to` is defined', () => {
      render(<Button to="https://example.org" />);
      expect(screen.queryByRole('button')).toBe(null)
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should call callback when clicked', () => {
      const fn = jest.fn();
      render(<Button onClick={fn}/>);
      userEvent.click(screen.getByRole('button'));
      expect(fn).toBeCalledTimes(1);
    });
  });
});
