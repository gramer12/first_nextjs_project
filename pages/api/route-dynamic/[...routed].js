export default function handler(request, response) {
  console.log(request.query);
  const id = request.query.routed[0];
  const ip = request.query.routed[1];
  const pd = request.query.routed[2];
  console.log(id);
  console.log(ip);
  console.log(pd);
  response.json({ ok: true });
}
