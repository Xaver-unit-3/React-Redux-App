import { connect } from 'react-redux';

const CatFacts = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Hey</h2>
    </div>
  )
}

export default connect((state) => ({facts: state.fact}))(CatFacts);