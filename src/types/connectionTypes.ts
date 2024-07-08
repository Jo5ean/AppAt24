
import { Method } from 'axios';

export interface ConnectionParams {
    method: Method;
    url: string;
    params?: Record<string, any>;
    body?: Record<string, any>;
    headers?: Record<string, string>;
}
