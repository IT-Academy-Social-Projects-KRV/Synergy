
import Header from '../components/Header/Header';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { setUser } from '../redux';

configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

describe('Should render Header component with all items', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      sideClass: 'moved',
      //changeClass: jest.fn()
    });

    component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findAllByType('div')[3].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      setUser(null)
    );
  });
  //   it('Header component render', () => {
  //     const { queryByTestId } = render(<Header {...baseProps} />);

  //     const headerTestId = queryByTestId('headerBlock');

  //     expect(headerTestId).toBeInTheDocument();
  //   });
  //it('Header have  : logo, changed className and buttons', () => {
  //const header = shallow(<Header {...baseProps} />);
  //const divTestId = queryByTestId('headerLogoBlock');
  //expect(divTestId.classList.contains('sideClass')).toBe(true);
  //});
  // it('Header have  : logo, changed className and buttons', () => {
  //   const mockStore = configureStore();
  //   const store = mockStore(baseProps);
  //   const { getByRole } = render(<Provider store={store}><Header {...baseProps} /></Provider>);

  //   const logoImg = getByRole('img', { name: 'logo' });
  //   const btnImg = getByRole('img', { name: 'logoButton' });
  //   const exitImg = getByRole('img', { name: 'exit' });

  //   expect(logoImg).toHaveAttribute('src');
  //   expect(btnImg).toHaveAttribute('src');
  //   expect(exitImg).toHaveAttribute('src');

  //   //expect(getByTestId('logoButton').getAttribute('onClick','changeClasss'));
  //   //expect(getByTestId('headerLogoBlock').getAttribute('className')).toEqual('sideBlock moved');
  // });
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
