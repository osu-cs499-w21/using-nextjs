import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const menu = {
  tacos: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
  pizza: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
  sushi: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif"
};

export default function MenuItem() {
  const router = useRouter();
  console.log("== router.query:", router.query);
  return (
    <Layout>
      <h1>Menu Item</h1>
      <p>Selected item: {router.query.item}</p>
      <img src={menu[router.query.item]} />
    </Layout>
  )
}
