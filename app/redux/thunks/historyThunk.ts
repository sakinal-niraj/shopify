import { createAsyncThunk } from '@reduxjs/toolkit';
import { redo, undo } from '../slices/historySlice';
import { RootState } from '../store';

export const performUndo = createAsyncThunk(
  'history/performUndo',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    
    if (state.history.past.length === 0) return;
    
    const previousState = state.history.past[state.history.past.length - 1];
    
    // Reset all slices to previous state
    dispatch({ type: 'color/resetColorState', payload: previousState.color });
    dispatch({ type: 'typography/resetTypographyState', payload: previousState.typography });
    dispatch({ type: 'button/resetButtonState', payload: previousState.button });
    dispatch({ type: 'product/resetProductState', payload: previousState.product });
    
    dispatch(undo());
  }
);

export const performRedo = createAsyncThunk(
  'history/performRedo',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    
    if (state.history.future.length === 0) return;
    
    const nextState = state.history.future[state.history.future.length - 1];
    
    // Reset all slices to next state
    dispatch({ type: 'color/resetColorState', payload: nextState.color });
    dispatch({ type: 'typography/resetTypographyState', payload: nextState.typography });
    dispatch({ type: 'button/resetButtonState', payload: nextState.button });
    dispatch({ type: 'product/resetProductState', payload: nextState.product });
    
    dispatch(redo());
  }
);