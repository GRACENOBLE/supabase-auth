import Container from "@/components/container";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = decodeURIComponent((await params).slug);
  return (
    <div>
      <Container>{slug}</Container>
    </div>
  );
}
