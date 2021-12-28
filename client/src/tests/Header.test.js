
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
});
