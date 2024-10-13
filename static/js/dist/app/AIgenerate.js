function toggleFields(selectedTab) {
        // Hide all sections first
        document.getElementById("text_editor").parentElement.style.display = 'none';
        document.getElementById("html_editor").parentElement.style.display = 'none';
        document.getElementById("aiFields").style.display = 'none';
        document.getElementById("aiResult").style.display = 'none';  // Hide AI result as well initially

        if (selectedTab === 'text') {
            document.getElementById("text_editor").parentElement.style.display = 'block';
        } else if (selectedTab === 'html') {
            document.getElementById("html_editor").parentElement.style.display = 'block';
        } else if (selectedTab === 'AI') {
            document.getElementById("aiFields").style.display = 'block';
        }
    }

    // Functie care trimite datele și afișează rezultatul
    function trimiteDate() {
        var email = document.getElementById("email_input").value;
        var link = document.getElementById("link_input").value;

        if (email === "" || link === "") {
            alert("Vă rugăm să introduceți atât un email, cât și un link.");
            return;
        }

        // Creăm obiectul cu datele ce vor fi trimise
        var date = {
            email: email,
            link: link
        };

        // Trimiterea datelor la server folosind fetch API
        fetch('/path_to_server_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(date)
        })
        .then(response => response.json())
        .then(data => {
            // Afișăm rezultatul primit de la server
            document.getElementById("aiResultText").innerText = data.result; // Serverul trebuie să trimită un obiect JSON cu un câmp `result`
            document.getElementById("aiResult").style.display = "block"; // Afișăm secțiunea de rezultat
        })
        .catch((error) => {
            console.error('Eroare:', error);
            alert("Eroare la trimiterea datelor.");
        });
    }
