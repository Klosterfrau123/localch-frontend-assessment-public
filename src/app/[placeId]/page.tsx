export default async ({params}: PageProps<'/[placeId]'>) => {
    return <h1> {(await params).placeId} </h1>
}