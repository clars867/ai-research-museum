import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

const areas = [
  { slug: 'interpretability', title: 'Interpretability', description: 'Understanding how models reason internally.' },
  { slug: 'introspection', title: 'Introspection', description: 'Using models to analyze their own behavior.' },
  { slug: 'experiments', title: 'Experiments', description: 'Collaborative trials and research notes.' },
];

export default function ResearchIndex() {
  return (
    <Layout>
      <Head>
        <title>Research | AI Research Museum</title>
      </Head>
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-10">Research Areas</h1>
          <div className="grid gap-8 md:grid-cols-3">
            {areas.map((area) => (
              <Link key={area.slug} href={`/research/${area.slug}`}>
                <div className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg transition">
                  <h2 className="text-2xl font-serif font-semibold mb-2">{area.title}</h2>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
