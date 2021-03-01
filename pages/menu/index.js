import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';

const menu = {
  tacos: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
  pizza: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
  sushi: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif"
};

export default function Menu() {
  const router = useRouter();
  console.log("== router:", router);
  return (
    <Layout>
      <h1>Menu</h1>
      <ul>
        {Object.keys(menu).map(key => (
          <li key={key}>
            <Link href={`${router.asPath}/${key}`}>
              <a>{key}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
