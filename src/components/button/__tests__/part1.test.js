import {render, screen} from "@testing-library/react";

import Button from "../part1";

describe('[Part 1] Button', () => {
  describe('component: Button', () => {
    it('should render with default props', () => {
      render(<Button/>);
      expect(screen.getByText('click me')).toBeInTheDocument();
    });
  });
});
