import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';

const SearchButtonGroup = () => {
  const navigate = useNavigate();
  const params = useParams();
  function handleOnClick(e) {
    navigate(`/search/${params.q}/${e.target.name}`);
  }

  return (
    <div>
      <Button
        group="search"
        onClick={handleOnClick}
        name="all"
        variation="dark"
        style={
          params.type === 'all'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        All
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="songs"
        variation="dark"
        style={
          params.type === 'songs'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Songs
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="artists"
        variation="dark"
        style={
          params.type === 'artists'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Artists
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="playlist"
        variation="dark"
        style={
          params.type === 'playlist'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Playlist
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="album"
        variation="dark"
        style={
          params.type === 'album'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Albums
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="podcasts"
        variation="dark"
        style={
          params.type === 'podcasts'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Podcasts
      </Button>
      <Button
        group="search"
        onClick={handleOnClick}
        name="shows"
        variation="dark"
        style={
          params.type === 'shows'
            ? { display: 'inline-block', backgroundColor: '#fff', color: '#000' }
            : { display: 'inline-block' }
        }>
        Shows
      </Button>
    </div>
  );
};

export default SearchButtonGroup;
