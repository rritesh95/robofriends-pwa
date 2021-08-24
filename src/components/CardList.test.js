import { shallow } from "enzyme";
import React from 'react';
import CardList from './CardList';

it('expect to render cardList component', () => {
    const mockRobots = [
        {
            id : 1,
            name: "John",
            email: "John@gmail.com"
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})