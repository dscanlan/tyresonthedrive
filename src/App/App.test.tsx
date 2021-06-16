import { render } from "@testing-library/react";
import { App } from './App';

describe('App', () => {
  it('should render the component', () => {
      const { getByText } = render(<App/>);
      expect(getByText(/this is the app/i)).toBeInTheDocument();
    })
  })