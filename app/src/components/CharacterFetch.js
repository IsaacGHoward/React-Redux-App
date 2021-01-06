import { connect } from 'react-redux';
import { getCharacter } from '../actions/actions'

function CharacterFetch(props) {
  function getCharacter(){
    props.getCharacter();
  }
  return (
    <>
      <h1>Fetch Random Star Wars Character</h1>
      <button onClick={() => getCharacter()}>FETCH</button>
    </>
  );
}

export default connect(
  null,
  {getCharacter}
)(CharacterFetch)
