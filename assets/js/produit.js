function toggleContent(id) {
    var moreContent = document.getElementById(id);
    var btn = document.querySelector('button');

    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        btn.textContent = 'Lire moins'; // Change le texte du bouton
    } else {
        moreContent.style.display = 'none';
        btn.textContent = 'Lire plus'; // Change le texte du bouton
    }
}
