import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { performRedo, performUndo } from '../redux/thunks/historyThunk';


const UndoRedoButtons = () => {
  const dispatch = useAppDispatch();
  const { past, future } = useAppSelector((state) => state.history);

  return (
    <div className="undo-redo-container">
      <button 
        onClick={() => dispatch(performUndo())}
        disabled={past.length === 0}
      >
        Undo ({past.length})
      </button>
      <button 
        onClick={() => dispatch(performRedo())}
        disabled={future.length === 0}
      >
        Redo ({future.length})
      </button>
    </div>
  );
};

export default UndoRedoButtons;