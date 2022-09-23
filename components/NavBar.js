import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <nav>
        <ul className="flex bg-slate-400 justify-around">
          <li>
            <Link href="/">
              <a className={cls(router.pathname === "/" ? "bg-blue-500" : "")}>
                홈
              </a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                className={cls(
                  router.pathname === "/counter" ? "bg-blue-500" : ""
                )}
              >
                카운터
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={cls(
                  router.pathname === "/about" ? "bg-blue-500" : ""
                )}
              >
                개발자소개
              </a>
            </Link>
          </li>
          <li>
            <Link href="/todo">
              <a
                className={cls(
                  router.pathname === "/todo" ? "bg-blue-500" : ""
                )}
              >
                todo리스트
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/ssr">
              <a
                className={cls(
                  router.pathname === "/users/ssr" ? "bg-blue-500" : ""
                )}
              >
                사용자목록(SSR)
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
