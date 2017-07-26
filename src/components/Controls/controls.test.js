import React from 'react';
import { shallow } from 'enzyme';
import Controls from './controls';

it('should render without crashing', ()=>{
    let wrapper = shallow(<Controls/>);
    expect(wrapper.find('.btn')).toBeDefined();
});