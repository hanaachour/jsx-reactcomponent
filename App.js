import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';



function App() {
  return (
    <div >
      <FullName></FullName>
      <ProfilePhoto></ProfilePhoto>
 <Address></Address>
    </div>
  );
}

export default App;
