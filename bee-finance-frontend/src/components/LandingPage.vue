<script setup>

import { useRouter } from 'vue-router'; // Importando o hook para navegação
import beelogo from "../assets/beelogo.ico";
import honeycombchart from "../assets/honeycomb-chart.png";
import securitymetrics from "../assets/security-metrics.png";
import honeycombwallet from "../assets/honeycomb-wallet.png";
import shieldbee from "../assets/shield-bee.png";
import beetracking from "../assets/bee-tracking.png";

const router = useRouter(); // Inicializa o hook do router

const goToApp = () => {
  router.push('/app'); // Redireciona para a rota '/app'
};

</script>

<template>
    <div class="body">

        <header>
            <img :src="beelogo" alt="Bee Mascot" class="bee-mascot">
            <button class="launch-app" @click="goToApp">Launch App</button>
        </header>
        
        <section class="hero">
            <h1>Secure Your Crypto Hive with Our Wallet Management System</h1>
            <p>Your assets, safe and organized like a beehive.</p>
            <button class="cta-button">Get Started</button>
        </section>
        
        <section class="graphics">
            <div class="chart-container">
                <img :src="honeycombchart" alt="Wallet Activity Chart">
            </div>
            <div class="chart-container">
                <img :src="securitymetrics" alt="Security Metrics">
            </div>
        </section>
        
        <section class="features" id="features">
            <div class="feature">
                <img :src="shieldbee" alt="Security Icon">
                <h3>Multi-Layer Security</h3>
            </div>
            <div class="feature">
                <img :src="honeycombwallet" alt="Wallet Management">
                <h3>Easy Wallet Management</h3>
            </div>
            <div class="feature">
                <img :src="beetracking" alt="Real-Time Analytics">
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
        </footer>
    </div>
    

</template>

<style scoped>
    .body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #ffcc00, #ff9900);
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
        padding: 30px 20px;
        background: url('honeycomb-bg.png') no-repeat center center/cover;
        background-blend-mode: overlay;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    }

    .hero h1 {
        font-size: 32px;
        margin: 0;
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
    }

    .chart-container {
        display: flex;
        align-content: center;
        width: 500px;
        height: 300px;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin: 0px 20px 50px 20px;
    }

    .chart-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .chart-container:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    .chart-container:hover img {
        transform: scale(1.1);
    }

    .features {
        flex-wrap: wrap;
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
        display: flex;
        align-content: center;
        width: 250px;
        height: 125px;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .feature:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    .feature:hover img {
        transform: scale(1.1);
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
