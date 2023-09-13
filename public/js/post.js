// Initiate the comment form handler
document.addEventListener('DOMContentLoaded', (event) => {
    // This is the event listener for the form that will create a new comment
    const commentFormHandler = document.querySelector('.comment-form');
    if (commentFormHandler) {
        commentFormHandler.addEventListener('submit', async (event) => {
            event.preventDefault();
            // Collect values from the comment form
            const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();
            const post_id = event.target.querySelector('input[name="post_id"]').value;
            // Send a POST request to the API endpoint
            if (comment_text) {
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify({
                        post_id,
                        comment_text
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    console.log('look at me', document.location);
                    document.location.reload();
                } else {
                    alert(response.statusText);
                }
            }
        });
    }
});