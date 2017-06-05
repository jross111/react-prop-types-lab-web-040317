import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
    <div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
    </div>
  )}

}

Product.defaultProps = {
  hasWatermark: false
}
const other = []

function makeArray(array){
  for (var i = 80; i < 301; i++) {
     array.push(i)
  }
  return array
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(makeArray(other)).isRequired
}

export default Product
