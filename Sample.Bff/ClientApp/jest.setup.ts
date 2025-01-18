import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });
globalThis.IS_REACT_ACT_ENVIRONMENT = true;