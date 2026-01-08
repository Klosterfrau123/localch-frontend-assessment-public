import { fetchPlace } from '@/lib/api';
import { config } from '@/lib/config';
import { HomePage } from '@/components/HomePage/HomePage';

export default async function Page() {
  const places = await Promise.all(config.examplePlaceIds.map((id) => fetchPlace(id)));

  return <HomePage places={places} />;
}
