import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import GalleryItem from './GalleryItem';

function Gallery() {
  // Get the data using useContext outside the display function
  const data = useContext(DataContext);

  // Map over the data to create GalleryItem components
  const display = data.map(item => {
    return <GalleryItem key={item.trackId} item={item} />;
  });

  return (
    <div>
      {display}
    </div>
  );
}

export default Gallery;
