import React from 'react';
import { shallow } from 'enzyme';
import { EstimatedTime } from './estimatedtime';

it('renders without crashing', () => {
    const wrapper = shallow(<EstimatedTime/>);
    expect(wrapper.find('.EstimatedTime__eta')).toBeDefined();
});