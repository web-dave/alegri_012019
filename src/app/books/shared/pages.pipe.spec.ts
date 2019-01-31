import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('bar', 'foo')).toBe('foo: bar');
    expect(pipe.transform('bar')).toBe('baz: bar');

  });
});
