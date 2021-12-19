import { render } from '@testing-library/react';
import ProjectDiagram from '../pages/ProjectPage/Project/ProjectDiagram/ProjectDiagram';


describe('Should render ProjectDiagram component', () => {
  it('ProjectDiagram component render', () => {
    const { queryByTestId } = render(<ProjectDiagram />);

    const projectDiagramTestId = queryByTestId('projectDiagramSection');

    expect(projectDiagramTestId).toBeInTheDocument();
  });
});