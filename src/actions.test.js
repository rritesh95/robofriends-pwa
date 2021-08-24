import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as actions from './actions';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);
const store = mockStore();

beforeEach( () => {
    store.clearActions();
});

describe("setSearchField to work", () => {
    it("should create an action which sets search field", () => {
        const text = "hello";
        const expectedAction = { 
            type: CHANGE_SEARCHFIELD, 
            payload: text
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
})

describe("requestRobots to work", () => {
    // const mockResponse = (status, statusText, response) => {
    //     return new window.Response(response, {
    //       status: status,
    //       statusText: statusText,
    //       headers: {
    //         'Content-type': 'application/json'
    //       }
    //     });
    // };
    
    it("should create an action which request robots", () => {
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type : REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    })

    // it('calls request and success actions if the fetch response was successful', () => {
    //     window.fetch = jest.fn().mockImplementation(() =>
    //       Promise.resolve(mockResponse(200, null, `[{
    //         id : 123,
    //         name : "test",
    //         email : "test@gmail.com"
    //       }]`)));
      
    //     store.dispatch(actions.requestRobots());

    //     const expectedActions = store.getActions();
    //     expect(expectedActions.length).toBe(2);
    //     expect(expectedActions).toContainEqual({type: REQUEST_ROBOTS_PENDING});
    //     expect(expectedActions).toContainEqual({
    //         type: REQUEST_ROBOTS_SUCCESS, 
    //         payload : [{
    //             id : 123,
    //             name : "test",
    //             email : "test@gmail.com"
    //         }] 
    //     });
    //   });
})