// ---- Storage Utility ----

// Save complete users list
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Get users list
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Save logged-in user
export const setAuthUser = (user) => {
  localStorage.setItem("authUser", JSON.stringify(user));
};

// Get logged-in user
export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem("authUser"));
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("authUser");
};

// Save profile setup data
export const saveProfile = (data) => {
  localStorage.setItem("profileData", JSON.stringify(data));
};

export const getProfile = () => {
  return JSON.parse(localStorage.getItem("profileData"));
};
