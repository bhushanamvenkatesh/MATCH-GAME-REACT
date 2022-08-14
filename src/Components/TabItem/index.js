import './index.css'

const TabItem = props => {
  const {eachTab1, changeTab} = props
  const {displayText, tabId} = eachTab1

  const onClickChangeThumbnails = () => {
    changeTab(tabId)
  }
  return (
    <button className="button" onClick={onClickChangeThumbnails} type="button">
      {displayText}
    </button>
  )
}

export default TabItem
