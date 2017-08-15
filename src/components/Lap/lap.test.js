import React from 'react';
import { shallow } from 'enzyme';
import Lap from './lap';

it('renders without crashing', () => {
    shallow(<Lap />);
});