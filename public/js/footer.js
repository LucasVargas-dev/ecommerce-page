const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="footer-content">
                <!-- <img src="img/wine-logo.png" class="logo" alt=""> -->
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">Vinhos</li>
                        <li><a href="#" class="footer-link">Suave</a></li>
                        <li><a href="#" class="footer-link">Tinto</a></li>
                        <li><a href="#" class="footer-link">Rosé</a></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">Espumantes</li>
                        <li><a href="#" class="footer-link">Moscatel</a></li>
                        <li><a href="#" class="footer-link">Brut</a></li>
                        <li><a href="#" class="footer-link">Doce</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-title">Sobre a empresa</p>
            <p class="footer-info">ahh falação</p>
            <p class="info">suport emails - helpwines@gmail.com</p>
            <p class="info">telefone 99999-9999</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">Termos e serviços</a>
                    <a href="#" class="social-link">Página de privacidade</a>
                </div>
                <div>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Facebook</a>
                </div>
            </div>
            <p class="footer-credit">Wines, Best Sommelier online store</p>
    `;
}

createFooter();