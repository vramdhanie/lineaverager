import React from 'react';
import { shallow } from 'enzyme';
import { Timer } from './timer';

it('renders without crashing', () => {

    shallow(<Timer/>);
});