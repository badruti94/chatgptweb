// Mengambil id dari URL parameter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Memfilter data berdasarkan id yang diberikan
        const filteredData = data.posts.filter(item => item.id == id);

        // Menampilkan hasil filter ke halaman
        const element = document.getElementById("post-detail");
        if (filteredData.length > 0) {
            const item = filteredData[0];
            element.innerHTML = `

        <h2 id="post-title">${item.title}</h2>
            <img id="post-image" src="${item.image}" alt="gambar">
            <p id="post-author">${item.author}</p>
            <p id="post-content">${item.content}</p>
    `;
        } else {
            element.innerHTML = "<p>Postingan tidak ditemukan</p>";
        }
    });

