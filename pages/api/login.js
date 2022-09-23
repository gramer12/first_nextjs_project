const _id = "ksw";
const _pw = "1234";
export default function handler(req, res) {
  console.log("방금내가 찍은것");
  console.log(req.body);
  const { id, pw } = req.body;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 매서드입니다" });
  }
  console.log(id, pw);
  if (!id) return res.json({ ok: false, message: "아이디 입력하고" });
  if (!pw) return res.json({ ok: false, message: "비번 입력하고" });
  if (id === _id && pw === _pw) {
    res.json({ ok: true, message: "로그인 완료" });
  } else res.json({ ok: true, message: "둘중하나 문제임" });
}
