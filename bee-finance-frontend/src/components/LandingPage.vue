<script setup>
</script>

<template>
    <body>

        <header>
            <img src="../assets/beelogo.ico" alt="Bee Mascot" class="bee-mascot">
            <button class="launch-app" onclick="showAlert()">Launch App</button>
        </header>
        
        <section class="hero">
            <h1>Secure Your Crypto Hive with Our Wallet Management System</h1>
            <p>Your assets, safe and organized like a beehive.</p>
            <button class="cta-button" onclick="scrollToFeatures()">Get Started</button>
        </section>
        
        <section class="graphics">
            <div class="chart-container">
                <img src="../assets/honeycomb-chart.png" alt="Wallet Activity Chart">
                <img src="../assets/security-metrics.png" alt="Security Metrics">
            </div>
        </section>
        
        <section class="features" id="features">
            <div class="feature">
                <img src="../assets/shield-bee.png" alt="Security Icon">
                <h3>Multi-Layer Security</h3>
            </div>
            <div class="feature">
                <img src="../assets/honeycomb-wallet.png" alt="Wallet Management">
                <h3>Easy Wallet Management</h3>
            </div>
            <div class="feature">
                <img src="../assets/bee-tracking.png" alt="Real-Time Analytics">
                <h3>Real-Time Analytics</h3>
            </div>
        </section>
        
        <footer>
            <nav>
                <a href="#">About Us</a>
                <a href="#">Documentation</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
            </nav>
            <img src="../assets/footer-bee.jpg" alt="Bee Hive Illustration" class="footer-bee">
        </footer>
    </body>
    

</template>

<style scoped>
    body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #ffcc00, #ff9900), url('honeycomb-texture.png');
        background-blend-mode: multiply;
        background-size: cover;
        background-attachment: fixed;
        color: #fff;
        margin: 0;
        padding: 0;
        text-align: center;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    section img, footer img {
        width: 200px;
        height: 120px;
    }

    .launch-app {
        background: linear-gradient(135deg, #ffcc00, #ff9900);
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out;
    }
    .launch-app:hover {
        transform: scale(1.1);
    }
    .bee-mascot {
        width: 90px;
        animation: float 3s infinite ease-in-out;
    }
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    .hero {
        padding: 60px 20px;
        background: url('honeycomb-bg.png') no-repeat center center/cover;
        background-blend-mode: overlay;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    }
    .cta-button {
        background: linear-gradient(135deg, #222, #555);
        color: #ffcc00;
        padding: 15px 30px;
        font-size: 18px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s ease-in-out;
    }
    .cta-button:hover {
        background: linear-gradient(135deg, #555, #888);
        transform: scale(1.1);
    }
    .graphics {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 40px;
    }
    .features {
        display: flex;
        justify-content: center;
        gap: 40px;
        padding: 60px;
        background: url('honeycomb-texture.png') repeat, rgba(0, 0, 0, 0.85);
        background-blend-mode: overlay;
        border-radius: 15px;
        margin: 40px auto;
        max-width: 80%;
        animation: subtle-move 10s infinite alternate ease-in-out;
    }
    @keyframes subtle-move {
        0% { background-position: 0% 0%; }
        100% { background-position: 10% 10%; }
    }
    .feature {
        text-align: center;
        max-width: 250px;
    }
    footer {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 30px;
    }
    footer nav a {
        color: #ffcc00;
        margin: 0 15px;
        text-decoration: none;
        transition: color 0.3s;
    }
    footer nav a:hover {
        color: #fff;
    }
    .footer-bee {
        width: 60px;
        margin-top: 15px;
    }
</style>
