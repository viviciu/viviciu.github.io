import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post( { postData } ) {
  return (
  <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <h1 className={utilStyles.headingXL}>{postData.title}</h1>
    <br />
    <h3>{postData.id}</h3>
    <br />
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
    </div>
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
  );
}