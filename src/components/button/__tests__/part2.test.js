import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../part2";

describe('[Part 2] Button', () => {
  describe('component: Button', () => {

    it('should render with default props', () => {
      render(<Button/>);
      expect(screen.getByText('click me')).toBeInTheDocument();
    });

    it('should change the label', () => {
      render(<Button label="dont click me" />);
      expect(screen.getByText('dont click me')).toBeInTheDocument();
    });

    it('should call callback when clicked', () => {
      const fn = jest.fn();
      render(<Button onClick={fn} to="https://example.org" />);
      const button = screen.getByRole('link');
      userEvent.click(button);
      expect(fn).toBeCalledTimes(1);
    });


    it('should call callback when clicked and isn\'t a valid anchor', () => {
      const fn = jest.fn();
      render(<Button onClick={fn} />);
      const button = screen.getByRole('link');
      userEvent.click(button);
      expect(fn).toBeCalledTimes(1);
    });

    it('should set the correct link href', () => {
      const fn = jest.fn();
      const linkHref = 'https://example.org';
      render(<Button to={linkHref} />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', linkHref);
    });
  });
});
