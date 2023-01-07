export function pickContentMeta(data, type) {
  console.log(data)
  return (
    data data.filter((item) => item.slug.startsWith(type.slice(0, 1)))
  );
}
