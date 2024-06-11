// lib/fetchPosts.ts
export async function fetchPosts() {
  const res = await fetch("/api/posts");
  const data = await res.json();
  return data.data;
}

export async function fetchPostById(id: string) {
  const res = await fetch(`/api/posts/${id}`);
  const data = await res.json();
  return data.data;
}
