import './index.css'

const Thumbnail = props => {
  const {eachImage, onClickThumnailImage} = props
  const {thumbnailUrl, imageUrl} = eachImage

  const onClickThumbnail = () => {
    onClickThumnailImage(imageUrl)
  }

  return (
    <li>
      <button
        className="thumbnail-button"
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default Thumbnail
