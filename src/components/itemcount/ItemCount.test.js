import React from 'react';
import { shallow } from 'enzyme';
import ItemCount from './ItemCount';

it('should render without crashing', ()=>{
    let wrapper = shallow(<ItemCount/>);
    expect(wrapper.find('.ItemCount_inner')).toBeDefined();
});