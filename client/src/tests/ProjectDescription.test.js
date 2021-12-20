import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProjectDescription from '../pages/ProjectPage/Project/ProjectDescription/ProjectDescription';

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

describe('Should render ProjectDescription with all data', () => {
  it('ProjectDescription component renders with all data', () => {
    act(() => {
      render(<ProjectDescription description='description' />, container);
    });
    expect(container.querySelector('[data-testid="description"]').textContent).toBe('description');
  });
});


