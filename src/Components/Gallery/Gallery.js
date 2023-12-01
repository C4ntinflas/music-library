import GalleryItem from './GalleryItem'

function Gallery({ data }) {
  return (
    <div>
      {data.map((item) => (
        <GalleryItem key={item.trackId} item={item} />
      ))}
    </div>
  );
}

export default Gallery