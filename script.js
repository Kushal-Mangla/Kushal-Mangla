document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
});


// const elements = document.querySelectorAll('.animate');


// const observer = new IntersectionObserver((entries, observer) => {
    
//     entries.forEach(entry => {
       
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fadeIn');
//             observer.unobserve(entry.target);
//         }
//     });
// });

// elements.forEach(element => {
//     observer.observe(element);
// });

// function likeBlog(blogId) {

//     let likes = parseInt(localStorage.getItem(`likes_${blogId}`)) || 0;

//     likes++;

//     localStorage.setItem(`likes_${blogId}`, likes);


//     document.getElementById(`likes_${blogId}`).innerText = likes;
// }


// function addComment(blogId) {

//     let comments = JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];


//     const newComment = document.getElementById(`comments_${blogId}`).value;


//     comments.push(newComment);


//     localStorage.setItem(`comments_${blogId}`, JSON.stringify(comments));


//     displayComments(blogId, comments);


//     document.getElementById(`comments_${blogId}`).value = '';
// }


// function displayComments(blogId, comments) {
//     const commentsContainer = document.getElementById(`commentsContainer_${blogId}`);
//     commentsContainer.innerHTML = '<h3>Comments</h3>';


//     const ul = document.createElement('ul');
//     comments.forEach(comment => {
//         const li = document.createElement('li');
//         li.textContent = comment;
//         ul.appendChild(li);
//     });

//     commentsContainer.appendChild(ul);
// }


// window.onload = function () {

//     const likesBlog1 = parseInt(localStorage.getItem('likes_blog1')) || 0;
//     document.getElementById('likes_blog1').innerText = likesBlog1;


//     const commentsBlog1 = JSON.parse(localStorage.getItem('comments_blog1')) || [];
//     displayComments('blog1', commentsBlog1);


//     const likesBlog2 = parseInt(localStorage.getItem('likes_blog2')) || 0;
//     document.getElementById('likes_blog2').innerText = likesBlog2;


//     const commentsBlog2 = JSON.parse(localStorage.getItem('comments_blog2')) || [];
//     displayComments('blog2', commentsBlog2);
// };
 $(document).ready(function () 
 {
    $('.slideshow-container').slick(
    {
        dots: true, // Set to false if you don't want dots
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});