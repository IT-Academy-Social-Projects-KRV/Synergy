import { render } from '@testing-library/react';
import BillSettings from '../components/BillSettings/BillSettings';


describe('Should render BillSettings component with all items', () => {
  it('BillSettings component render', () => {
    const { queryByTestId } = render(<BillSettings />);
    
    const billBlock = queryByTestId('billBlock');
    
    expect(billBlock).toBeInTheDocument();
  });
});