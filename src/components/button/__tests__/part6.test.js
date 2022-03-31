import {render, screen} from "@testing-library/react";

import Button from "../part6";
import {createReduxWrapper} from "../../../test/utils";

describe('[Part 6] Redux Button`', () => {
  describe('component: Button', () => {
    it('should render with default props', () => {
      render(<Button/>, {
        wrapper: createReduxWrapper({ label: 'Test' })
      });
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render with text from the store', () => {
      const TEST_LABEL = 'Global Store Text';
      render(<Button/>, {
        wrapper: createReduxWrapper({ label: 'other label' })
      });
      expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
    });

    it('should match snapshot', () => {
      render(<Button/>, {
        wrapper: createReduxWrapper({ label: 'other label' })
      });
      expect(screen.getByRole('button')).toMatchInlineSnapshot('<a>bas</a>');
    })
  });
});
