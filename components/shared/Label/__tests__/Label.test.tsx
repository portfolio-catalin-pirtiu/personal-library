import Label from '../Label';
import { render, screen } from '@testing-library/react';

test('if the Label component displays the props correctly', () => {
  const labelText = 'username';
  const inputElementID = 'username-input';

  render(<Label htmlFor={inputElementID} label={labelText} />);
  expect(screen.getByText(labelText)).toHaveAttribute('for', inputElementID);
});
