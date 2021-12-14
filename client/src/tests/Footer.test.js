import { render } from '@testing-library/react';
import Footer from '../components/Footer/Footer';


describe('Should render Footer component will all images', () => {
  it('Footer component render', () => {
    const { queryByTestId } = render(<Footer />);

    const headerTestId = queryByTestId('footerBlock');

    expect(headerTestId).toBeInTheDocument();
  });
  it('Footer has all images', () => {
    const { getByRole } = render(<Footer/>);

    const logoImg = getByRole('img', { name: 'Synergy logo' });
    const facebookImg = getByRole('img', { name: 'Facebook logo' });
    const linkedInImg =  getByRole('img', { name: 'LinkedIn logo' });
    const gitImg = getByRole('img', { name: 'Git logo' });
    const copyRightImg =  getByRole('img', { name: 'Copyright sign' });

    expect(logoImg).toHaveAttribute('src');
    expect(facebookImg).toHaveAttribute('src');
    expect(linkedInImg).toHaveAttribute('src');
    expect(gitImg).toHaveAttribute('src');
    expect(copyRightImg).toHaveAttribute('src');
  });
});