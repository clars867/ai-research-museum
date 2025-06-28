import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Introspection() {
  return (
    <Layout>
      <Head>
        <title>Introspection | AI Research Museum</title>
      </Head>
      <section className="bg-parchment py-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-4">Introspection</h1>
          <p className="text-gray-700">Research updates will appear here soon.</p>
        </div>
      </section>
    </Layout>
  );
}
