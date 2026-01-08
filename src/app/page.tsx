import { fetchPlace } from '@/lib/api';
import { config } from '@/lib/config';
import { HomePage } from '@/components/HomePage/HomePage';

export default async function Page() {
  // Use allSettled to handle partial failures gracefully
  const results = await Promise.allSettled(config.examplePlaceIds.map((id) => fetchPlace(id)));
  const places = results
    .filter(
      (result): result is PromiseFulfilledResult<Awaited<ReturnType<typeof fetchPlace>>> =>
        result.status === 'fulfilled'
    )
    .map((result) => result.value);

  return <HomePage places={places} />;
}
