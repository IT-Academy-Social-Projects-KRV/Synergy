import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProjectInfo from '../pages/ProjectPage/Project/ProjectInfo/ProjectInfo';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Should render ProjectInfo with all data', () => {
  it('ProjectInfo component renders with all fields', () => {
    act(() => {
      render(<ProjectInfo firstName='firstName'
        lastName='lastName' orderDate='orderDate' releaseDate='releaseDate' />, container);
    });
    expect(container.querySelector('h4').textContent).toBe('firstName lastName');
    expect(container.querySelector('[data-testid="orderDate"]').textContent).toBe('Order date: orderDate');
    expect(container.querySelector('[data-testid="releaseDate"]').textContent).toBe('Release date: releaseDate');
  });
});
