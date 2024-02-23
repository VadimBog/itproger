

export default function ClientId({
    params,
}: {
    params: { clientId: string };
}) {
    return (
        <h1>Client id: { params.clientId } page</h1>
    );
}