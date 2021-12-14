import { render } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Should render Loader component with image', () => {
  it('Loader component renders without crashing', () => { 
    const div = document.createElement('div');
    render(<Loader/>, div);
  });

  it('Loader component render', () => {
    const { queryByTestId } = render(<Loader/>);
    
    const loaderTestId = queryByTestId('loaderDiv');

    expect(loaderTestId).toBeInTheDocument();
  });

  it('Image render', () => {
    const { getByRole } = render(<Loader/>);

    const logoImg = getByRole('img', { name: 'logo' });
    
    expect(logoImg).toHaveAttribute('src');
  });

});