import { memo, useState } from 'react';
import Layout from '../components/layout';
import City from '../components/city';
import Reviews from '../components/reviews';
import Chats from '../components/chats';
import list from '../fixtures/reviews';
import chatList from '../fixtures/chat';
import Gallery from '../components/gallery';

function App() {
  const [images, setImages] = useState([]);

  return (
    <Layout>
      <City />
      <Reviews list={list} onClick={setImages} />
      <Chats list={chatList} />
      {images.length > 0 ? <Gallery images={images} onClick={setImages} /> : null}
    </Layout>
  );
}

export default memo(App);
