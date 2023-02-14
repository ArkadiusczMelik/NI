import React from 'react';
import './NavBar.css';
import ray from './img/ni.png';
const NavBar = ()=>{

return <header className='header'>
    <nav className='nav'>
<div className="headerComp"> 
    <img src={ray} alt="logo"  className='app-logo'/>
    </div>

    <div className='itemHeader'>
 <h1 className='app-header'>NAZAR INTELLIGENCE</h1>
</div>
 
 <div className='link-wrapper'>

    <div className='item'>
    <a>Analytics</a>
</div>

<div className='item'>
    <a>News</a>
</div>

<div className='item'>
    <a>Learning</a>
</div>

<div className='item'>
    <a>Diary</a>
</div>

<div className='item'>
    <a>Top Traders</a>
</div>

<div className='item'>
    <a>FAQ</a>
</div>

<div className='item'>
    <a>Login</a>
</div> 

</div>
</nav>
</header>






}
export default NavBar;