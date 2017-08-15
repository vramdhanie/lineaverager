import React from 'react';
import { shallow } from 'enzyme';
import { Laps } from './laps';

it('renders without crashing', () => {
    shallow(<Laps laps={[]}/>);
});