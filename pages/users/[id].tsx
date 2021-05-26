import { useRouter } from 'next/router';

import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const user = sampleUserData.filter((user) => user.id.toString() === id)[0];

  if (!user) {
    return (
      <Layout title='Error | Next.js + TypeScript Example'>
        <p>
          <span style={{ color: 'red' }}>Error</span>
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        user ? user.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {user && <ListDetail item={user} />}
    </Layout>
  );
};

export default UserDetail;
