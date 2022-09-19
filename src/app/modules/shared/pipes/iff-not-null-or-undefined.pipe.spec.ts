import { IffNotNullOrUndefinedPipe } from './iff-not-null-or-undefined.pipe';

describe('IffNotNullOrUndefinedPipe', () => {
  it('create an instance', () => {
    const pipe = new IffNotNullOrUndefinedPipe();
    expect(pipe).toBeTruthy();
  });
});
