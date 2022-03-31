import { createSelector } from 'reselect';

export const selectButtonLabel = createSelector(
  (state) => state.label,
  (label) => label
)
