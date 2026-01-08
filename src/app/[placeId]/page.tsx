import { fetchPlace } from '@/lib/api';
import { getPlaceName } from '@/lib/placeUtils';
import { PlaceDetail } from '@/components/PlaceDetail/PlaceDetail';

interface PlacePageProps {
  params: Promise<{ placeId: string }>;
}

export async function generateMetadata({ params }: PlacePageProps) {
  const { placeId } = await params;
  try {
    const place = await fetchPlace(placeId);
    return { title: `${getPlaceName(place)} | Home Assignment` };
  } catch {
    return { title: 'Place Not Found | Home Assignment' };
  }
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { placeId } = await params;
  const place = await fetchPlace(placeId);

  return <PlaceDetail place={place} />;
}
