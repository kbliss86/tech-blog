// Initiate the dashboard page
document.addEventListener('DOMContentLoaded', (event) => {
    const dashboardHandler = document.querySelector('.post-form');
    // This is the event listener for the form that will create a new post
    if (dashboardHandler) {
        dashboardHandler.addEventListener('submit', async (event) => {
            event.preventDefault();

            const post_text = document.querySelector('textarea[name="post_text"]').value.trim();
            const post_title = document.querySelector('textarea[name="post_title"]').value.trim();

            if (post_text) {
                const response = await fetch('/api/post', {
                    method: 'POST',
                    body: JSON.stringify({ post_text, post_title }),
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    document.location.reload();
                } else {
                    alert('Failed to create post');
                }
            }
        });
    }
});
