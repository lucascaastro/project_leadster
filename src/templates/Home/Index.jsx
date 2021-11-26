import { useState, useEffect } from 'react';

import './styles.scss';

import { Photos } from '../../components/Photos';
import { loadPhotos } from '../../utils/load-photos';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [allPhotos, setAllPhotos] = useState([]);
  const [page, setPage] = useState(null);
  const [postsPerPage] = useState(15);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPage(0);
    handleLoadPhotos(0, 'cool');
  }, []);

  const noMorePhotos = (page * postsPerPage) >= totalPhotos;

  const clickSearch = async () => {
    if (!inputValue) {
      window.alert('Por favor informe uma categoria de foto!');
      return;
    }
    setPage(0);
    setAllPhotos([]);
    setTotalPhotos(0);
    handleLoadPhotos(0, inputValue);
  }

  const handleLoadPhotos = async (page, searchValue) => {
    setLoading(true);
    const { photos, total_results } = await loadPhotos(page, searchValue);
    if (photos.length) {
      if (page === 0) {
        setAllPhotos([...photos]);
      } else {
        setAllPhotos([...allPhotos, ...photos]);
      }
      setTotalPhotos(total_results);
    }
    setLoading(false);
  };

  const handleInput = (event) => {
    if (event.keyCode === 13) {
      clickSearch();
    }
  }

  const loadMorePhotos = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleLoadPhotos(nextPage, inputValue);
  }

  return (
    <>
      <Header />
      <div className="container-search">
        <input
          className="input-search"
          placeholder="Buscar fotos"
          onKeyDown={handleInput}
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button
          className="btn-search"
          onClick={clickSearch}
          disabled={false}
        >
          Buscar
        </button>
      </div>

      {
        !loading && !!allPhotos.length && <Photos data={allPhotos} />
      }

      {
        !loading && page !== null && !allPhotos.length && (
          <div className="noPhotos">
            Não existem imagens para essa categoria😭
          </div>
        )
      }

      {
        !loading && page !== null && !noMorePhotos && inputValue !== '' && (
          <section className="container">
            <div className="button-container">
              <br />
              <Button
                text="Carregar mais"
                onClick={loadMorePhotos}
                disabled={noMorePhotos}
              />
            </div>
          </section>
        )
      }
      <Footer />
    </>
  )
}

export default Home;
