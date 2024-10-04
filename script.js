
    const loadAllPost = async(category) => {

        // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}` : ''}`);
        
        // if(category){
        //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
        // }
        // else{
        //     console.log('https://openapi.programming-hero.com/api/retro-forum/posts')
        // }

        const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}` : ''}`);
        const data = await response.json();
        console.log(data.posts)
    }

    loadAllPost();

    const seacrhByCategory = () => {
        const searhText = document.getElementById('searchPosts').value;
        loadAllPost(searhText)
    }