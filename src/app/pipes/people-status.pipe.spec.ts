import { PeopleStatusPipe } from './people-status.pipe';

describe('PeopleStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new PeopleStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
