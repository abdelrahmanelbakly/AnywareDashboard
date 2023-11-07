interface AuthState {
    isAuthenticated: boolean;
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
  };
  
  type AuthAction = { type: "LOGIN" } | { type: "LOGOUT" };
  
  const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, isAuthenticated: true };
      case "LOGOUT":
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;