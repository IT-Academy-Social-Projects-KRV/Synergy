import { render } from '@testing-library/react';
import AlertWindow from '../components/Alert/AlertWindow';


describe('Should render Alert component with all items', () => {
  it('Alert component render', () => {
    const { queryByTestId } = render(<AlertWindow />);
    
    const alertTestId = queryByTestId('alertBlock');
    
    expect(alertTestId).toBeInTheDocument();
  });


});