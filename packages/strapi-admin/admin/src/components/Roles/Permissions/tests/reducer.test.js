import reducer from '../reducer';

describe('ADMIN | COMPONENTS | ROLES | PERMISSIONS | reducer', () => {
  describe('DEFAULT_ACTION', () => {
    it('should return the initialState', () => {
      const state = {
        test: true,
      };

      expect(reducer(state, {})).toEqual(state);
    });
  });

  describe('GET_DATA_ERROR', () => {
    it('should set isLoading to false is an error occured', () => {
      const action = {
        type: 'GET_CONTENT_TYPES_ERROR',
      };
      const initialState = {
        collectionTypes: [],
        singleTypes: [],
        isLoading: true,
      };
      const expected = {
        collectionTypes: [],
        singleTypes: [],
        isLoading: false,
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('GET_CONTENT_TYPES_SUCCEDED', () => {
    it('should return the state with the collectionTypes and singleTypes', () => {
      const action = {
        type: 'GET_CONTENT_TYPES_SUCCEDED',
        data: [
          {
            uid: 'app.homepage',
            isDisplayed: true,
            schema: {
              kind: 'singleType',
            },
          },
          {
            uid: 'permissions.role',
            isDisplayed: false,
            schema: {
              kind: 'collectionType',
            },
          },
          {
            uid: 'app.category',
            isDisplayed: true,
            schema: {
              kind: 'collectionType',
            },
          },
        ],
      };
      const initialState = {
        collectionTypes: [],
        singleTypes: [],
        isLoading: true,
      };
      const expected = {
        collectionTypes: [
          {
            uid: 'app.category',
            isDisplayed: true,
            schema: {
              kind: 'collectionType',
            },
          },
        ],
        singleTypes: [
          {
            uid: 'app.homepage',
            isDisplayed: true,
            schema: {
              kind: 'singleType',
            },
          },
        ],
        isLoading: false,
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});
