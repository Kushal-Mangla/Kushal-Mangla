document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
});


const elements = document.querySelectorAll('.animate');


const observer = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
       
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
        }
    });
});

// Observe each of the elements
elements.forEach(element => {
    observer.observe(element);
});

// Function to like a blog
function likeBlog(blogId) {
    // Retrieve current like count from local storage or default to 0
    let likes = parseInt(localStorage.getItem(`likes_${blogId}`)) || 0;

    // Increment the like count
    likes++;

    // Update the like count in local storage
    localStorage.setItem(`likes_${blogId}`, likes);

    // Update the displayed like count on the webpage
    document.getElementById(`likes_${blogId}`).innerText = likes;
}

// Function to add a comment to a blog
function addComment(blogId) {
    // Retrieve current comments from local storage or default to an empty array
    let comments = JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];

    // Get the new comment from the textarea
    const newComment = document.getElementById(`comments_${blogId}`).value;

    // Add the new comment to the array
    comments.push(newComment);

    // Update the comments in local storage
    localStorage.setItem(`comments_${blogId}`, JSON.stringify(comments));

    // Display the updated comments on the webpage
    displayComments(blogId, comments);

    // Clear the textarea after adding the comment
    document.getElementById(`comments_${blogId}`).value = '';
}

// Function to display comments on the webpage
function displayComments(blogId, comments) {
    const commentsContainer = document.getElementById(`commentsContainer_${blogId}`);
    commentsContainer.innerHTML = '<h3>Comments</h3>';

    // Create a list of comments and append them to the container
    const ul = document.createElement('ul');
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        ul.appendChild(li);
    });

    commentsContainer.appendChild(ul);
}

// Initial display of likes and comments when the page loads
window.onload = function () {
    // Display likes for blog 1
    const likesBlog1 = parseInt(localStorage.getItem('likes_blog1')) || 0;
    document.getElementById('likes_blog1').innerText = likesBlog1;

    // Display comments for blog 1
    const commentsBlog1 = JSON.parse(localStorage.getItem('comments_blog1')) || [];
    displayComments('blog1', commentsBlog1);

    // Display likes for blog 2
    const likesBlog2 = parseInt(localStorage.getItem('likes_blog2')) || 0;
    document.getElementById('likes_blog2').innerText = likesBlog2;

    // Display comments for blog 2
    const commentsBlog2 = JSON.parse(localStorage.getItem('comments_blog2')) || [];
    displayComments('blog2', commentsBlog2);
};
 $(document).ready(function () {
            $('.slideshow-container').slick({
                dots: true, // Set to false if you don't want dots
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            });
        });