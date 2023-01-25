import React from 'react'
import './index.scss'
const Search = () => {
  return (
<>
<div className='search'>
<div className='yellow'>
<h1>
Register now and get a discount <span>50%</span> discount until 1 January
</h1>
<p>
In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.
</p>
<button>REGISTER NOW</button>
</div>
<div className="form">
<form action="">
    <h3>
    Search for your course
    </h3>
    <input type="text"  placeholder='Courses Name'/>
    <input type="text"  placeholder='Category'/>
    <input type="text"  placeholder='degree'/>
    <button>Search Course</button>
</form>
</div>
</div>
</>
    )
}

export default Search