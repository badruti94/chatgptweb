// Memuat data JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Menampilkan list postingan
        const postList = document.getElementById('post-list');
        data.posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.classList.add('post-item')
            const link = document.createElement('a');
            const image = document.createElement('img');
            const title = document.createElement('h3');

            link.href = `detail.html?id=${post.id}`;
            image.src = post.image;
            title.textContent = post.title;

            link.appendChild(image);
            link.appendChild(title);
            listItem.appendChild(link);
            postList.appendChild(listItem);
        });
    });

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const filterValue = searchInput.value.toLowerCase();
    const postList = document.getElementById('post-list');
    const listItems = postList.querySelectorAll('li');


    listItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
