import React from 'react';
import { Link } from 'react-router-dom';
import { TagRow } from '.';

export default function MasonryPost({post, tagsOnTop}) {

    const windowWidth = window.innerWidth;

const imageBackground = { backgroundImage: `url("${post.image}")`,
transition: "transform 450ms"
}

const style = windowWidth > 900 ? {...imageBackground, ...post.style } : imageBackground;

    return (
        
        <Link to={post.link} className="masonry-post overlay" style={style}>
         <div className="image-text" style={{justifyContent: tagsOnTop ? "space-between" : "flex-end"}}>
            
            <TagRow tags={post.categories}/>
             <div>

                 <h2 className="image-title">
                     {post.title}
                 </h2>
                 <span className="image-date">{post.date}</span>
             </div>
             {/*<img src={image3} alt="Green Wall" />*/}
         </div>
         
        </Link>
       
    )
}