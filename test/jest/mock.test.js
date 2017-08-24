function forEach(arrayInput, callback) {
    for (var i = 0; i < arrayInput.length; i++) {
      callback && callback(arrayInput[i]);
    }
}

test('mock callback test', () => {
  const mockCallback = jest.fn();
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
})

test('mock property test', () => {
  const myMock = jest.fn();
  
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound('first arg', 'second arg');
  
  // The function was called twice 
  expect(myMock.mock.calls.length).toBe(2);

  // The first arg of the first call to the function was 'first arg'
  expect(myMock.mock.calls[1][0]).toBe('first arg');

  // The second arg of the first call to the function was 'second arg'
  expect(myMock.mock.calls[1][1]).toBe('second arg');

  // This function was instantiated exactly twice
  expect(myMock.mock.instances.length).toBe(2);
})

test('mock return value test', () => {
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10)
   .mockReturnValueOnce('x')
   .mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
})