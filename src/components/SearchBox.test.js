import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('expect to render searchBox component', () => {
    const mockSearchChange = () => {
        console.log("search box changed");
    };

    expect(shallow(<SearchBox searchChange={mockSearchChange}/>)).toMatchSnapshot();
})