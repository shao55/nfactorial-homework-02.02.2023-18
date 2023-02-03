import './media_as_medium.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import index_1 from './components/img/index_1.png';
import index_2 from './components/img/index_2.png';
import index_3 from './components/img/index_3.png';

const media_as_medium = () => {

  const articles = [
    {
      head: "Article 1",
      content: "This is the content of article 1",
      img: index_1
    },
    {
      head: "Article 2",
      content: "This is the content of article 2",
      img: index_2
    },
    {
      head: "Article 3",
      content: "This is the content of article 3",
      img: index_3
    }
  ];

  return (
    <body>
      <Header />
      {
        articles.map((item, index) => <Main key={index} head={item.head} content={item.content} img={item.img}/>)
      }
      <Footer />
    </body>
  );
}

export default media_as_medium;