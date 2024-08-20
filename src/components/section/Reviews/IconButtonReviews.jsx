import './Reviews.css'

export const IconButtonReviews = ({
 direction,
  disable,
  onClick
}) => {
  let cls = 'icon-button-reviews'
  if (direction === 'left') cls += ' left'
  if (direction === 'right') cls += ' right' 
  if (disable) cls += ' disable'

  return (
    <div className={cls} onClick={onClick} />
  )
}