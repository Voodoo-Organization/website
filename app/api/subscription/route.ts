export async function POST(req: Request, res: Response) {
  console.log("Request body:", req);

  const reqString = JSON.stringify(req);

  return new Response(reqString, {
    headers: { "content-type": "application/json" },
  });
}
