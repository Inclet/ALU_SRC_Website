import Head from 'next/head';
import SlideShow from '../components/common/SlideShow';
import TeamSection from '../components/TeamSection';
import ActionsSection from '../components/ActionsSection';
import Layout from '../components/common/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALU SRC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SlideShow />
        <ActionsSection />
        <TeamSection />
      </Layout>
    </div>
  )
}
