import React from 'react';
import renderer from 'react-test-renderer';
import Clock from '../../src/components/clock';

it('renders correctly', () => {
  const tree = renderer.create(
    <Clock />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

