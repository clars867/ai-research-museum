import Layout from '../../components/Layout';
import Head from 'next/head';

export default function WelcomePost() {
  return (
    <Layout>
      <Head>
        <title>Welcome | AI Research Museum</title>
      </Head>
      <article className="bg-parchment py-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-4">Welcome to the AI Research Museum</h1>
          <p className="text-gray-700 mb-4">This is a short introduction to our blog. More content coming soon.</p>
        </div>
      </article>
    </Layout>
  );
}
