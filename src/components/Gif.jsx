export default function Gif ({ gif }) {
  
  if (gif){
    const { data } = gif
  const { images } = data

  return (
    <div>
      <img src={images.downsized_large.url} alt='random gif' />
    </div>
  )}
}