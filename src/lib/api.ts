import { config } from './config';
import type { Place } from './types';

const API_BASE = config.api.baseUrl;

/** Structured API error. statusCode 0 = network error (no HTTP response) */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public context: string,
    message?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }

  get isNotFound() {
    return this.statusCode === 404;
  }

  get isServerError() {
    return this.statusCode >= 500;
  }
}

/** Fetches place data from API. Throws ApiError on failure. */
export async function fetchPlace(placeId: string): Promise<Place> {
  try {
    const response = await fetch(`${API_BASE}/${placeId}`, {
      next: { revalidate: config.api.cacheTime },
    });

    if (!response.ok) {
      throw new ApiError(response.status, 'FETCH_PLACE', `Place ${placeId} not found`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(0, 'NETWORK', 'Network error'); // DNS, timeout, etc.
  }
}
