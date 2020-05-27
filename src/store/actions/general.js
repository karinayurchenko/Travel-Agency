export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = (open) => ({
  type: TOGGLE_SIDEBAR,
  payload: open,
});
