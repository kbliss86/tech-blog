document.addEventListener('DOMContentLoaded', (event) => {
    const commentFormHandler = document.querySelector('.comment-form');
    if (commentFormHandler) {
        commentFormHandler.addEventListener('submit', async (event) => {
            event.preventDefault();

            const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
            const post_id = event.target.querSelector('input[name="post-id"]').value;

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
                    document.location.reload();
                } else {
                    alert(response.statusText);
                }
            }
        });
    }
});