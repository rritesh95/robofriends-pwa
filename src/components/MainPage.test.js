import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe("render MainPage with isPending false", () => {

    let wrapper;

    beforeEach( () => {
        const mockProps = {
            onRequestRobots : jest.fn(),
            searchField : '',
            robots : [],
            isPending : false
        }

        wrapper = shallow(<MainPage {...mockProps} />);
    })

    it('render MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('filters robots correctly', () => {
        expect(wrapper.instance().filteredRobots()).toEqual([]);

        const mockProps2 = {
            onRequestRobots : jest.fn(),
            searchField : 'john',
            robots : [{
                id : 3,
                name : "John",
                email : "john@gmail.com"
            }],
            isPending : false
        }

        const wrapper2 = shallow(<MainPage {...mockProps2} />);

        expect(wrapper2.instance().filteredRobots()).toEqual([{
            id : 3,
            name : "John",
            email : "john@gmail.com"
        }]);
    })
})

it('render MainPage with isPending true', () => {
    const PendingTrueMock = {
        onRequestRobots : jest.fn(),
        searchField : '',
        robots : [],
        isPending : true
    };

    const wrapperTrue = shallow(<MainPage {...PendingTrueMock} />);
    expect(wrapperTrue).toMatchSnapshot();
})