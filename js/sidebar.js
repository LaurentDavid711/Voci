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

            // ===== BOUTON BILLETTERIE =====
            const billetterieLink = document.createElement('a');
            billetterieLink.href = "https://www.helloasso.com/associations/voci-in-scena/evenements/die-sehnsucht-ou-l-ame-du-romantisme-allemand-brahms";
            billetterieLink.target = "_blank";
            billetterieLink.classList.add('sidebar-button', 'billetterie-button');
            billetterieLink.innerText = "🎟️ Billetterie";
            sidebar.appendChild(billetterieLink);
             
            // Titre
            const titleElement = document.createElement('h2');
            titleElement.innerText = "Prochain concert";
            sidebar.appendChild(titleElement);

            // Concerts
            data.concerts.forEach(concert => {

                const programElement = document.createElement('p');
                programElement.classList.add('concert-info');
                programElement.innerText = concert.program;
                sidebar.appendChild(programElement);

                const nameElement = document.createElement('p');
                nameElement.classList.add('concert-name');
                nameElement.innerText = concert.date;
                sidebar.appendChild(nameElement);

                const infoElement = document.createElement('p');
                infoElement.classList.add('concert-info');
                infoElement.innerText = concert.location;
                sidebar.appendChild(infoElement);

                const detailsElement = document.createElement('p');
                detailsElement.classList.add('concert-details');
                // detailsElement.innerText = concert.details;
                detailsElement.innerHTML = concert.details;
                sidebar.appendChild(detailsElement);
            });


            // ===== BOUTON REJOIGNEZ-NOUS =====
            const rejoindreLink = document.createElement('a');
            rejoindreLink.href = "RejoignezNous.html";
            rejoindreLink.classList.add('sidebar-button', 'random-color-button');
            rejoindreLink.innerText = "Rejoignez-nous !";
            sidebar.appendChild(rejoindreLink);


            // ===== COULEUR ALEATOIRE POUR REJOIGNEZ-NOUS =====
            const colors = [
                //"#0c5fdc",  // bleu
                //"#27ae60",  // vert
                //"#8e44ad",  // violet
                "#e67e22"//,  // orange
                //"#16a085",  // turquoise
                //"#c0392b"   // rouge
            ];

            const randomButton = document.querySelector('.random-color-button');

            if (randomButton) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                randomButton.style.backgroundColor = randomColor;
            }


            

            // Réseaux sociaux
            /* const socialContainer = document.createElement('div');
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

            sidebar.appendChild(socialContainer); */
        })
        .catch(error => console.error('Erreur lors du chargement des données de concert:', error));
});
