function showPage(page) {
    const content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = `<h2>Home</h2><p>Experience luxury and comfort at Hotel Paradise.</p>`;
            break;
        case 'services':
            content.innerHTML = `
                <h2>Food Services</h2>
                <p>We offer a variety of exquisite dishes to satisfy your cravings.</p>
                <h3>Menu</h3>
                <ul>
                    <li>Pizza - $12</li>
                    <li>Pasta - $10</li>
                    <li>Burger - $8</li>
                    <li>Salad - $7</li>
                    <li>Dessert - $5</li>
                </ul>
            `;
            break;
        case 'facilities':
            content.innerHTML = `
                <h2>Facilities</h2>
                <p>Our hotel offers a range of facilities to make your stay comfortable:</p>
                <ul>
                    <li>Free Wi-Fi</li>
                    <li>Swimming Pool</li>
                    <li>Gym</li>
                    <li>Spa Services</li>
                    <li>Room Service</li>
                </ul>
            `;
            break;
        case 'contact':
            content.innerHTML = `<h2>Contact Us</h2><p>Email us at info@hotelparadise.com for inquiries.</p>`;
            break;
        default:
            content.innerHTML = `<h2>Home</h2><p>Experience luxury and comfort at Hotel Paradise.</p>`;
    }
}
