import './index.css'

const Thumbnail = props => {
  const {eachImage, onClickThumnailImage} = props
  const {thumbnailUrl} = eachImage
  const onClickThumbnail = () => {
    onClickThumnailImage(thumbnailUrl)
  }
  return (
    <button
      className="thumbnail-button"
      onClick={onClickThumbnail}
      type="button"
    >
      <img src={thumbnailUrl} alt="" className="thumbnail-image" />
    </button>
  )
}

export default Thumbnail
