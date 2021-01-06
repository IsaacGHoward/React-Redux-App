import {connect} from 'react-redux';
function CharacterDisplay(props) {
  return (
    <div>
      <h6>Character:</h6>
      <h5>{props.character}</h5>
    </div>
    
  );
}
const mapStateToProps = state => {
  return {
    character: state.character,
  };
};

export default connect(
  mapStateToProps,
)(CharacterDisplay);

//export default CharacterDisplay;
