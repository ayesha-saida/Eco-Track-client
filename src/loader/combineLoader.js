// loader.js
export async function combineLoader({params}) {
  const [issuesRes, contributionsRes ] = await Promise.all([
   fetch(`http://localhost:3000/issues/${params.id}`),
   fetch('http://localhost:3000/my-contribution'),
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

