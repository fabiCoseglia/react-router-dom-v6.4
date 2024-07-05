export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok)
    throw {
      status: res.status,
      statusText: "Not Found",
    };
  const posts = await res.json();
  return { posts };
};
