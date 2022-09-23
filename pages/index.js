import Head from "next/head";
import Layout from "../components/Layout";
function Page() {
  return (
    <>
      <Layout test="hello">
        <div className="text-3xl font-bold underline">안녕 빛</div>
      </Layout>
      <div>hello world</div>
    </>
  );
}
export default Page;
