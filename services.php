<!DOCTYPE html>
<html lang="en">

<head>
  <title>services</title>
  <?php include('partials/head.php'); ?>
  <link rel="stylesheet" href="assets/services.css">
</head>

<body onload="loadServiceContent()">
  <?php include('partials/nav.php'); ?>
  <main>
    <div class="service-container">
      <div class="service-content-wrapper">
        <div class="content-wrapper">
          <h1 id="service-title"></h1>
          <p id="service-description"></p>
          
          <button class="contact-button workflow-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383L8.482 9.25a.5.5 0 0 1-.964 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />
            </svg>
            Get in Touch
          </button>
        </div>
        <div class="content-wrapper">
          <h2>Graphic design</h2>
          <ul>
            <li id="feature1">sub-services1</li>
            <li id="feature2">sub-services2</li>
            <li id="feature3">sub-services3</li>
            <li id="feature4">sub-services4</li>
          </ul>
        </div>
        <div class="content-images-wrapper">
          <div class="content-images">
            <img src="./assets/p.png" alt="Innovative Solutions" />
          </div>
          <div class="content-images">
            <img src="./assets/p.png" alt="Innovative Solutions" />
          </div>
          <div class="content-images">
            <img src="./assets/p.png" alt="Innovative Solutions" />
          </div>
          <div class="content-images">
            <img src="./assets/p.png" alt="Innovative Solutions" />
          </div>
        </div>
      </div>
      <div class="service-image-wrapper">
        <img src="./assets/p.png" alt="Innovative Solutions" />
      </div>
    </div>
  </main>
  <?php include('partials/footer.php'); ?>
  <?php include('partials/scripts.php'); ?>
</body>

</html>