import { render } from '@testing-library/react';
import Sum from '../components/Sum';
import React from 'react';

test('renders correctly', () => {
    const { getByText } = render(<Sum a={2} b={3} />);
    expect(getByText('Sum Component')).toBeInTheDocument();
    expect(getByText('The sum of 2 and 3 is 5')).toBeInTheDocument();
});
