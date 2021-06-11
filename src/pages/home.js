import React from 'react';
import {MasonryPost, PostMasonry, PostGrid}  from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';


const trendingConfig = {
    1: {
        gridArea: "1 / 2 / 3 / 3"
    }
    
}

const featuredConfig = {
    0: {
        gridArea: "1 / 1 / 2 / 3",
        height: "300px"
    },
    1: {
        height: "300px"
    }, 
    3: {
        height: "630px",
        marginLeft: "30px",
        width: "630px"
    }

}

const mergeStyles = function (posts, config) {
        posts.forEach((post, index) => {
            post.style = config[index]
            post.author = "Ebuka Victor";
            post.description = " Bitcoin has fallen down for the past week and no one know if it will resurface anytime soon"

        });
}

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Home (){

    return (
     <main className="home">
        <section className="container">
    
         <div className="row">
         
         
         <div className="featured-post-container">
         <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
         <MasonryPost post={lastFeatured} tagsOnTop={true}/>
         </div>
         </div>
         </section>
     
      <section className="bg-white">
       <section className="container">
        <div className="row">
         <h3>Recent Posts</h3>
         <PostGrid posts={recentPosts} />
         </div>
     </section>
     </section>

    <section className="container">
        <div className="row">
         
         <PostMasonry posts={trending} columns={3} tagsOnTop={true} />
         </div>
     </section>
     


    </main>
    )
}
