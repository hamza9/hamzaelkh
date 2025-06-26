    function loadPage(page) {
      fetch(page)
        .then(res => {
          if (!res.ok) throw new Error("Page not found");
          return res.text();
        })
        .then(data => {
          document.getElementById("main-content").innerHTML = data;
        })
        .catch(err => {
          document.getElementById("main-content").innerHTML = "<p>Erreur de chargement de la page.</p>";
          console.error(err);
        });
    }

    // Load default page
    window.onload = () => {
      loadPage('about.html');
    };