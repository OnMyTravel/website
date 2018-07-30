import TripApi from '../../services/TripApi'
import Trip from '../../models/Trip'

describe('Services | API | Trips', () => {

  let tripAPI;
  let httpClientMock;
  describe('.getAll()', () => {

    beforeEach(() => {
      httpClientMock = {
        get: jest.fn().mockImplementation(() => Promise.resolve([
          {
            "_id": "5b58a6c010880682dbec3266",
            "name": "Voyage dans le 18eme ... siecle",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor massa. Cras massa enim, pellentesque eget congue eget, malesuada sit amet augue. Integer condimentum, tellus in iaculis eleifend, massa nisi euismod metus, at egestas augue mauris vitae libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu placerat enim. Suspendisse potenti. Integer eget sem id risus placerat cursus quis sit amet lacus.",
            "destination": "ROUEN",
            "owner_id": "5b586ddee27fbe534801bbed"
          }
        ]))
      }

      tripAPI = new TripApi({
        httpClient: httpClientMock
      });
    })


    test('should have a property getAll()', () => {
      expect(tripAPI.getAll).toBeDefined();
    })

    test('should return a User', () => {
      // when
      const promise = tripAPI.getAll()

      // then
      return promise.then((trips) => {
        expect(trips.length).toEqual(1);
        expect(trips[0]).toBeInstanceOf(Trip);
        expect(trips[0]).toEqual({
          "id": "5b58a6c010880682dbec3266",
          "name": "Voyage dans le 18eme ... siecle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor massa. Cras massa enim, pellentesque eget congue eget, malesuada sit amet augue. Integer condimentum, tellus in iaculis eleifend, massa nisi euismod metus, at egestas augue mauris vitae libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu placerat enim. Suspendisse potenti. Integer eget sem id risus placerat cursus quis sit amet lacus.",
          "destination": "ROUEN",
          "userId": "5b586ddee27fbe534801bbed"
        })
      })
    })

    test('should contact the API', () => {
      // when
      const promise = tripAPI.getAll()

      // then
      return promise.then((user) => {
        expect(httpClientMock.get).toHaveBeenCalledWith('/trips');
      })
    })
  })

  describe('.get()', () => {

    beforeEach(() => {
      httpClientMock = {
        get: jest.fn().mockImplementation(() => Promise.resolve({
          "data": {
            "type": "trips",
            "id": "5b58a6c010880682dbec3266",
            "attributes": {
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor massa. Cras massa enim, pellentesque eget congue eget, malesuada sit amet augue. Integer condimentum, tellus in iaculis eleifend, massa nisi euismod metus, at egestas augue mauris vitae libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu placerat enim. Suspendisse potenti. Integer eget sem id risus placerat cursus quis sit amet lacus.",
              "name": "Voyage dans le 18eme ... siecle"
            },
            "relationships": { "days": { "data": [] } }
          }
        }))
      }

      tripAPI = new TripApi({
        httpClient: httpClientMock
      });
    })


    test('should have a property get()', () => {
      expect(tripAPI.get).toBeDefined();
    })

    test('should return a User', () => {
      // when
      const promise = tripAPI.get('5b58a6c010880682dbec3266')

      // then
      return promise.then((trip) => {
        expect(trip).toBeInstanceOf(Trip);
        expect(trip).toEqual({
          "id": "5b58a6c010880682dbec3266",
          "name": "Voyage dans le 18eme ... siecle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor massa. Cras massa enim, pellentesque eget congue eget, malesuada sit amet augue. Integer condimentum, tellus in iaculis eleifend, massa nisi euismod metus, at egestas augue mauris vitae libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu placerat enim. Suspendisse potenti. Integer eget sem id risus placerat cursus quis sit amet lacus.",
          "destination": "ROUEN",
          "userId": "5b586ddee27fbe534801bbed"
        })
      })
    })

    test('should contact the API', () => {
      // when
      const promise = tripAPI.get('5b58a6c010880682dbec3266')

      // then
      return promise.then((user) => {
        expect(httpClientMock.get).toHaveBeenCalledWith('/trips/5b58a6c010880682dbec3266');
      })
    })
  })
})
