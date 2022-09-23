export default function handler(request, response) {
  console.log(request.query);

  response.json({ ok: true, message: "GET call" });
}
