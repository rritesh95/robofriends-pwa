import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('searchRobots reducer', () => {
    const intitialStateSearch = {
        searchField: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(intitialStateSearch);
    })

    it('should handle CHANGE_SEARCHFIELD action', () => {
        expect(reducers.searchRobots(intitialStateSearch, {
            type : CHANGE_SEARCHFIELD,
            payload : "abc"
        })).toEqual({
            searchField: 'abc'
        })
    })
})

describe('requestRobots reducer', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_SUCCESS,
            payload : [{
                id : 123,
                name : "test",
                email : "test@gmail.com"
            }]
        })).toEqual({
            robots: [{
                id : 123,
                name : "test",
                email : "test@gmail.com"
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type : REQUEST_ROBOTS_FAILED,
            payload : "Nooooooo!!!!"
        })).toEqual({
            error : "Nooooooo!!!!",
            robots: [],
            isPending: false
        })
    })

})