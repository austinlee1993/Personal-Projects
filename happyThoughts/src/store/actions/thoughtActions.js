export const createThought = (thought) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
    
      const authorId = getState().firebase.auth.uid;

        // make async call to database
      const firestore = getFirestore();
      firestore.collection('thoughts').add({
        ...thought,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_THOUGHT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_THOUGHT_ERROR' }, err);
      });
    }
  };

  