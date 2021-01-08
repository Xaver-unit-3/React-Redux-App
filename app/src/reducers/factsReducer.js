import { FACT_START, FACT_SUCCESS, FACT_FAIL } from "../actions/factsActions";

export const initialState = {
  loading: false,
  errors: "ERROR! Please check your address",
  fact: "",
};

export const factsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACT_START:
      return {
        ...state,
        loading: true,
      };
    case FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload,
        loading: false,
        errors: "",
      };
    case FACT_FAIL:
      return {
        ...state,
        errors: state.errors,
        loading: false,
      };
    default:
      return state;
  }
};
