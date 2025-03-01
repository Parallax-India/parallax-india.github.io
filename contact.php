<!DOCTYPE html>
<html lang="en">

<head>
    <title>contact</title>
    <?php include('partials/head.php'); ?>
    <link rel="stylesheet" href="./assets/contact.css">
</head>

<body>
    <?php include('partials/nav.php'); ?>
    <main>
        <div id="contact-info-container">
            <h1>Have an idea? <br> let's do it together!</h1>
            <p>Get in touch today and let's turn your idea into a remarkable success story!</p>
            <ul>
                <li> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383L8.482 9.25a.5.5 0 0 1-.964 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />
            </svg>Faridabad, Haryana, India</li>
                <li> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383L8.482 9.25a.5.5 0 0 1-.964 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />
            </svg>(+91) 858 800 8108, 844 832 4434</li>
                <li> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383L8.482 9.25a.5.5 0 0 1-.964 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />
            </svg>projects@parallaxindia.in</li>
            </ul>
        </div>
        <div id="contact-form-container">
            <div id="services-container">
                <h2>service</h2>
                <div id="services">
                  <div class="service">Graphic Design</div>
                  <div class="service">Web Development</div>
                  <div class="service">Zoho Development</div>
                  <div class="service">Performace Marketing</div>
                  <div class="service">Video Production</div>
                  <div class="service">Podcast Production</div>
                </div>
            </div>

            <div id="budget-container">
                <h2>Budget in INR</h2>
                <div id="budgets">
                  <div class="budget">10K-20K</div>
                  <div class="budget">20K-50K</div>
                  <div class="budget">50K-100K</div>
                  <div class="budget">100K+</div>
                  <div class="budget">other</div>
                </div>
            </div>

            <div id="contact-form">
                <form>
                    <input type="text" placeholder="Name" required>
                    <input type="text" name="Company (optional)" >
                    <input type="email" placeholder="Email address" required>
                    <input type="tel" placeholder="Phone number" required>
                    <input type="text" placeholder="Project Description" required>
                    <button type="submit">BOOK A MEETING</button>
                </form>
            </div>
        </div>
    </main>
    <?php include('partials/footer.php'); ?>
    <?php include('partials/scripts.php'); ?>
</body>

</html>