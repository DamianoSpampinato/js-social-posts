const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//Seleziono il container dei post
const postContainer = document.querySelector('#container.posts-list');
//scorro l'array dei post
posts.forEach((postItem) =>{
    const postTemplate = generatePostItemTemplate(postItem);
    postContainer.innerHTML += postTemplate;
})
//creo array liked post
const likedPost=[];
//seleziono tutti i bottoni mi piace
const allLikeButton = document.querySelectorAll('.js-like-button')
allLikeButton.forEach((singleLikeButton) =>{
    singleLikeButton.addEventListener('click', function(){
        //blocco refresh pagina al click
        event.preventDefault();
        singleLikeButton.classList.toggle('like-button--liked');
        //seleziono id
        const thisId= this.dataset.postid;
        //pusho id liked post
        //converto il contatore like in dato numerico e aggiungo +1
        let likeCounter = document.querySelector(`#like-counter-${thisId}`);
        if(likedPost.includes(thisId)){
            likeCounter.innerHTML= parseInt(likeCounter.innerHTML) - 1;
            likedPost.splice(0, thisId)
        }else{
            likeCounter.innerHTML= parseInt(likeCounter.innerHTML) + 1;
            likedPost.push(thisId);
        }
       console.log(likedPost)
    
    })
    
} )


//functions
function generatePostItemTemplate(postItem){
    const {content, likes, created, author, media , id} = postItem
    const fullName = author.name.split(' ');
    const [firstname, surname] = fullName;
    console.log(firstname[0])
    let imageString;
    if(author.image){
       imageString = `<img class="profile-pic" src=${author.image} alt="Phil Mangione"></img>`
    }else{
        imageString = `<span class="profile-pic-default">${firstname[0]}${surname[0]}</span>`
    }
    
    const postTemplate =`
    <div class="post">
    <div class="post__header">
    <div class="post-meta">                    
    <div class="post-meta__icon">
    ${imageString}                    
    </div>
                    <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${created}</div>
                        </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src=${media} alt="">
            </div>
            <div class="post__footer">
            <div class="likes js-likes">
            <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid=${id}>
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
            </a>
                    </div>
                    <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                    </div> 
                    </div>            
                    </div>
                    `
                    return postTemplate
}

function getImage(name, surname){
    let stringImg ;
    if(image){
        stringImg =`<img class="profile-pic" src=${author.image} alt="Phil Mangione">`  
    } else{
        stringImg = `<span>${name[0]}${surname[0]}`
        console.log
    }
}