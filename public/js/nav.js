const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/wine-logo.png" class="brand-logo" alt="">
        <h2 class="title">Sommelier Master</h2>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">Search</button>
            </div>

            <a href="#"><img src="img/user.png" alt="User logo"></a>
            <a href="#"><img src="img/cart.png" alt="Cart logo"></a>
        </div>
    </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Wine</a></li>
        </ul>
    `;
}

createNav();