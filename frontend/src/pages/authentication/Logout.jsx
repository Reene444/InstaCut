
const Logout=()=>{

  localStorage.removeItem('token');
  window.location.assign('/login');
}

export default Logout;