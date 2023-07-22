import React from 'react'
import Edit from '../img/edit.jpg'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''></img>
        <div className="user">
          <img src='https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=' alt=''></img>
          <div className="info">
            <span>john</span>
            <p>posted 3 days ago</p>
          </div>
          <div className="edit">
            {/* <link to={`/write?edit=2`}> */}
            <img src={Edit} alt="" />
            {/* </link> */}
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem neque pariatur enim? Sequi molestiae laudantium aperiam nulla a voluptates delectus nobis dolores provident?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam harum ipsa officiis voluptates nulla! Sapiente expedita at explicabo vero quod, nam nostrum excepturi, atque sed rerum non. Saepe,
          totam illo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius temporibus, blanditiis et tenetur ipsa eum rerum quaerat nobis dolore quas corrupti illo quibusdam odit doloribus voluptas recusandae atque dolorem excepturi.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single


// 34.56