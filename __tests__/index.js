import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import Typed from 'typed.js';
import useTyped from '../src/index.js';

test('should not get the typed instance', () => {
  const { result } = renderHook(() => {
    const ref = React.useRef(null);
    return useTyped(ref, { strings: ['123'] });
  });
  expect(result.current).toBe(null);
});

test('should get the typed instance', () => {
  const { result } = renderHook(() => {
    const ref = React.useRef(document.body);
    return useTyped(ref, { strings: ['123'] });
  });
  expect(result.current instanceof Typed).toBe(true);
});

test('should cleanup', () => {
  const mockFunc = jest.fn();
  const { result, unmount } = renderHook(() => {
    const ref = React.useRef(document.body);
    return useTyped(ref, {
      strings: ['123'],
      onDestroy: mockFunc
    });
  });
  expect(result.current instanceof Typed).toBe(true);
  expect(mockFunc).toHaveBeenCalledTimes(0);
  unmount();
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

test('instance function should work', () => {
  const mockFunc = jest.fn();
  const { result } = renderHook(() => {
    const ref = React.useRef(document.body);
    return useTyped(ref, {
      strings: ['123'],
      onDestroy: mockFunc
    });
  });
  result.current.destroy();
  expect(mockFunc).toHaveBeenCalledTimes(1);
});
