export const loaderPost = async ({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    //Redirigir a la vista not-found
    if (!res.ok)
      throw {
        status: res.status,
        statusText: "Not Found",
      };
      
    const post = await res.json();
    return {post}
}