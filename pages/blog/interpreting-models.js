import Layout from '../../components/Layout';
import Head from 'next/head';

export default function InterpretingModelsPost() {
  return (
    <Layout>
      <Head>
        <title>Interpreting Models | AI Research Museum</title>
      </Head>
      <article className="bg-parchment py-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-4">Interpreting Large Language Models</h1>
          <p className="text-gray-700 mb-4">We share initial thoughts on how to peer inside transformer networks.</p>
        </div>
      </article>
    </Layout>
  );
}
