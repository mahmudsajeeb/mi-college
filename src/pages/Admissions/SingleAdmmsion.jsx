import React from 'react'

function SingleAdmmsion({uname}) {
  const {name} = uname
  return (
    <div className="card w-96 cursor-pointer hover:bg-slate-200 bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
  )
}

export default SingleAdmmsion