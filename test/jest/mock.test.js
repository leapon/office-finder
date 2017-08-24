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
