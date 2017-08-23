import { renderComponent , expect } from '../test_helper';
import Clock from '../../src/components/clock';

describe('Clock' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Clock);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
