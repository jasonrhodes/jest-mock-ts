/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { a } from './A';

jest.mock('./C');

describe('TS test file importing TS files', () => {
  test('a() should be undefined', () => {
    expect(a()).toBeUndefined();
  });
});
