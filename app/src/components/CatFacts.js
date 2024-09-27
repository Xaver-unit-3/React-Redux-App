import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const CatFacts = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        { props.loading ? <Loader /> : 
          props.facts && props.facts.map((item) => {
            console.log(item)
            return <div  className="facts" key={item._id}>{item.text}</div>
          })
        }
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  facts: state.fact,
  loading: state.loading,
});

export default connect(mapStateToProps, {})(CatFacts);
