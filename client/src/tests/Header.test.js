import { render } from '@testing-library/react';
import Header from '../components/Header/Header';
//import { shallow } from 'enzyme';

const baseProps = {
  sideClass: 'moved',
  changeClass : jest.fn()
};

describe('Should render Header component with all items', () => {
  it('Header component render', () => {
    const { queryByTestId } = render(<Header {...baseProps} />);

    const headerTestId = queryByTestId('headerBlock');

    expect(headerTestId).toBeInTheDocument();
  });
  it('Header have  : logo, changed className and buttons', () => {
    const { getByRole } = render(<Header {...baseProps} />);

    const logoImg = getByRole('img', { name: 'logo' });
    const btnImg = getByRole('img', { name: 'logoButton' });
    const exitImg = getByRole('img', { name: 'exit' });

    expect(logoImg).toHaveAttribute('src');
    expect(btnImg).toHaveAttribute('src');
    expect(exitImg).toHaveAttribute('src');

    //expect(getByTestId('logoButton').getAttribute('onClick','changeClasss'));
    //expect(getByTestId('headerLogoBlock').getAttribute('className')).toEqual('sideBlock moved');
  });
  // it('Header component props ', () => {
  //   const baseProps = {
  //     sideClass: 'moved',
  //     changeClass : jest.fn()
  //   };
  //   const header = shallow(<Header {...baseProps} />);
  //   header.find('img').simulate('click');
  //   expect(header.state('sideClass')).toBe('');
  // });
});
