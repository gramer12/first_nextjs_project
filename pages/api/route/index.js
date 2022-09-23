export default function handler(request, response) {
  switch (request.method) {
    case "GET":
      response.json({ ok: true, message: "GET call" });
      break;
    case "POST":
      response.json({ ok: true, message: "POST call" });
      break;
    case "DELETE":
      response.json({ ok: true, message: "DELETE call" });
      break;
  }
}
