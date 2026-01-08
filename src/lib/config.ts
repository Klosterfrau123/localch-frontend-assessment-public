export const config = {
  api: {
    baseUrl: 'https://web.staticlocal.ch/coding-session-rest-api',
    cacheTime: 3600, // 1 hour
  },
  examplePlaceIds: ['GXvPAor1ifNfpF0U5PTG0w', 'ohGSnJtMIC5nPfYRi_HTAg'],
  // Maps API keys to German labels for RatingSummary
  dimensions: {
    ambiente: 'Ambiente',
    service: 'Service',
    food: 'Essen',
  } as Record<string, string>,
};
