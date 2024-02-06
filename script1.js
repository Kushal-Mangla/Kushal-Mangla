document.addEventListener("DOMContentLoaded", function () {
    displayComments('blog1');
    displayBlogLikes('blog1');
});

var blogLikes = parseInt(localStorage.getItem("blogLikes_blog1")) || 0;

function likeBlog(blogId) {
    blogLikes++;
    localStorage.setItem("blogLikes_" + blogId, blogLikes);
    document.getElementById("blog-like-count").textContent = blogLikes;
}

function displayBlogLikes(blogId) {
    document.getElementById("blog-like-count").textContent = localStorage.getItem("blogLikes_" + blogId) || 0;
}

function addComment(blogId) {
    var commentInput = document.getElementById("comment-input");
    var commentList = document.getElementById("comment-list");

    if (commentInput.value.trim() !== "") {
        var comments = getComments(blogId);

        var newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.textContent = commentInput.value;

        var likeBtn = document.createElement("button");
        likeBtn.className = "like-btn";
        likeBtn.textContent = "Like";
        likeBtn.onclick = function () {
            likeComment(likeBtn);
        };

        newComment.appendChild(likeBtn);
        commentList.appendChild(newComment);

        comments.push(commentInput.value);
        localStorage.setItem("comments_" + blogId, JSON.stringify(comments));

        commentInput.value = "";
    }
}

function likeComment(likeBtn) {
    var currentLikes = parseInt(likeBtn.dataset.likes) || 0;
    currentLikes++;
    likeBtn.dataset.likes = currentLikes;
    likeBtn.textContent = "Liked (" + currentLikes + ")";
}

function displayComments(blogId) {
    var commentList = document.getElementById("comment-list");
    var comments = getComments(blogId);

    comments.forEach(function (commentText) {
        var comment = document.createElement("div");
        comment.className = "comment";
        comment.textContent = commentText;

        var likeBtn = document.createElement("button");
        likeBtn.className = "like-btn";
        likeBtn.textContent = "Like";
        likeBtn.onclick = function () {
            likeComment(likeBtn);
        };

        comment.appendChild(likeBtn);
        commentList.appendChild(comment);
    });
}

function getComments(blogId) {
    var commentsString = localStorage.getItem("comments_" + blogId);
    return JSON.parse(commentsString) || [];
}