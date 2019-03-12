import { authentication } from '../../reducers/authenticarionReducers';

describe('Auth reducers dont change state on', () => {
  it('maintains state', () => {
    expect(authentication(undefined, { type: 'unexpected' }))
      .toEqual([]);
  });
  it('maintains state on signup', () => {
    const data = {
      type: 'SIGN_UP_SUCCESS',
    };
    expect(authentication(undefined, data))
      .toEqual([]);
  });
  it('maintains state on login', () => {
    const data = {
      type: 'LOGIN_SUCCESS',
    };
    expect(authentication(undefined, data))
      .toEqual([]);
  });
},

);

