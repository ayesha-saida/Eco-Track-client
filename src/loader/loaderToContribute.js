// loader.js
export async function loaderToContribute() {
  const [issuesRes, contributionsRes ] = await Promise.all([
   fetch('https://eco-track-server-chi.vercel.app/issues'),
   fetch('https://eco-track-server-chi.vercel.app/my-contribution'),
  ]);

   if (!issuesRes.ok || !contributionsRes.ok) {
    throw new Response("Failed to load data", { status: 500 });
  }

  const [issues, contributions ] = await Promise.all([
    issuesRes.json(),
    contributionsRes.json(),
  ]);

  return { issues, contributions };
}

