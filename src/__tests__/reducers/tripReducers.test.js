import tripReducers from '../../reducers/tripReducers';
import { TRIP_DETAILS_LOADED } from '../../actions/actiontypes'
import API from '../../services/API';

jest.mock('../../services/API');

describe('Unit | Reducer | tripReducers', () => {

  beforeEach(() => {
    API.setToken.mockReset()
  })

  describe('TRIP_DETAILS_LOADED', () => {
    test('should not change the state', () => {
      // given
      const trip = { id: '1a32e6ba7c278945edd03', name: 'Hello' }

      // when
      const nextState = tripReducers(undefined, {
        type: TRIP_DETAILS_LOADED,
        result: trip
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': trip
      })
    })

  //   test('should set the API token from previous state', () => {
  //     // when
  //     const nextState = tripReducers(undefined, {
  //       type: REHYDRATE, payload: {
  //         user: {
  //           api_token: 'my-token'
  //         }
  //       }
  //     });

  //     // then
  //     expect(nextState).toEqual({})
  //     expect(API.setToken).toHaveBeenCalledWith('my-token')
  //   })

  //   test('should not set the API token', () => {
  //     // when
  //     const nextState = tripReducers(undefined, {
  //       type: REHYDRATE, payload: null
  //     });

  //     // then
  //     expect(nextState).toEqual({})
  //     expect(API.setToken).not.toHaveBeenCalled()
  //   })
  })
})