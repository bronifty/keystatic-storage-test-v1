import Image from "next/image";
import { reader } from "../../reader";

export default async function AuthorPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const author = await reader.collections.authors.read(slug);
  return (
    <>
      <div>Author: {author.name}</div>
      <Image src={author?.avatar} height={100} width={100}></Image>
    </>
  );
}
