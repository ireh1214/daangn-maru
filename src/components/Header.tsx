import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return <header>
<nav>
  <h1 className='logo'>
    logo
</h1>
<ul>
  <li><Link to ="/fleamarket">중고거래 </Link></li>
  <li><Link to ="/nearby-stores">동네업체 </Link></li>
  <li><Link to ="/jobs">알바 </Link></li>
  <li><Link to ="/realty">부동산 </Link></li>
  <li><Link to ="/car">중고차 직거래 </Link></li>
</ul>
</nav>


<div className='right'>
  <input type="text" placeholder='물품이나 동네를 검색해보세요' />
<button type="button">채팅하기</button>
</div>

  </header>
  ;
}
