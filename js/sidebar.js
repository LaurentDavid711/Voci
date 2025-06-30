document.addEventListener('DOMContentLoaded', function () {
    const concertPoster = document.querySelector('.concert-poster');
    if (concertPoster) {
        concertPoster.addEventListener('click', function () {
            concertPoster.classList.toggle('zoomed');
        });
    }

    fetch('concerts.json')
        .then(response => response.json())
        .then(data => {
            const sidebar = document.querySelector('.sidebar');
            if (!sidebar) return;

            sidebar.innerHTML = ''; // Clear sidebar content

            // Logo cliquable
            const logoLink = document.createElement('a');
            logoLink.href = "index.html";

            const logoElement = document.createElement('img');
            logoElement.src = "images/logo.jpg";
            logoElement.alt = "Logo Voci in Scena";
            logoElement.classList.add("logo");

            logoLink.appendChild(logoElement);
            sidebar.appendChild(logoLink);

            // Titre
            const titleElement = document.createElement('h2');
            titleElement.innerText = "Prochain concert";
            sidebar.appendChild(titleElement);

            // Concerts
            data.concerts.forEach(concert => {
                const nameElement = document.createElement('p');
                nameElement.classList.add('concert-name');
                nameElement.innerText = concert.date;
                sidebar.appendChild(nameElement);

                const infoElement = document.createElement('p');
                infoElement.classList.add('concert-info');
                infoElement.innerText = concert.location;
                sidebar.appendChild(infoElement);

                const programElement = document.createElement('p');
                programElement.classList.add('concert-info');
                programElement.innerText = concert.program;
                sidebar.appendChild(programElement);

                const detailsElement = document.createElement('p');
                detailsElement.classList.add('concert-details');
                detailsElement.innerText = concert.details;
                sidebar.appendChild(detailsElement);
            });

            // Billetterie
            const billetterieContainer = document.createElement('div');
            billetterieContainer.classList.add('billetterie-container');

            const billetterieLink = document.createElement('a');
            billetterieLink.href = "https://my.weezevent.com/claudio-monteverdi-de-guerre-damour-1";
            billetterieLink.target = "_blank";
            billetterieLink.classList.add('billetterie-link');
            billetterieLink.setAttribute('aria-label', 'Billetterie Claudio Monteverdi');

            const billetterieIcon = document.createElement('img');
            billetterieIcon.src = "images/billetterie.png";
            billetterieIcon.alt = "Billetterie";
            billetterieIcon.classList.add('billetterie-icon');
            billetterieLink.appendChild(billetterieIcon);

            const billetterieLabel = document.createElement('span');
            billetterieLabel.classList.add('billetterie-label');
            billetterieLabel.innerText = "Billetterie";
            billetterieLink.appendChild(billetterieLabel);

            billetterieContainer.appendChild(billetterieLink);
            sidebar.appendChild(billetterieContainer);

            // Réseaux sociaux
            const socialContainer = document.createElement('div');
            socialContainer.classList.add('social-container');

            const facebookLink = document.createElement('a');
            facebookLink.href = "https://facebook.com";
            facebookLink.target = "_blank";
            facebookLink.classList.add('social-link');
            facebookLink.setAttribute('aria-label', 'Facebook');

            const facebookIcon = document.createElement('img');
            facebookIcon.src = "images/facebook.png";
            facebookIcon.alt = "Facebook";
            facebookIcon.classList.add('social-icon');
            facebookLink.appendChild(facebookIcon);
            socialContainer.appendChild(facebookLink);

            const instagramLink = document.createElement('a');
            instagramLink.href = "https://instagram.com";
            instagramLink.target = "_blank";
            instagramLink.classList.add('social-link');
            instagramLink.setAttribute('aria-label', 'Instagram');

            const instagramIcon = document.createElement('img');
            instagramIcon.src = "images/instagram.png";
            instagramIcon.alt = "Instagram";
            instagramIcon.classList.add('social-icon');
            instagramLink.appendChild(instagramIcon);
            socialContainer.appendChild(instagramLink);

            sidebar.appendChild(socialContainer);
        })
        .catch(error => console.error('Erreur lors du chargement des données de concert:', error));
});
