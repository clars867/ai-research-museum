import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

const posts = [
  { slug: 'welcome', title: 'Welcome to the AI Research Museum', excerpt: 'An introduction to our mission and what you can find here.' },
  { slug: 'interpreting-models', title: 'Interpreting Large Language Models', excerpt: 'A quick overview of interpretability techniques we are exploring.' },
];

export default function BlogIndex() {
  return (
    <Layout>
      <Head>
        <title>Blog | AI Research Museum</title>
      </Head>
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-8">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-serif font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
