<script setup>

import beelogo from "@/assets/beelogo.ico";
import honeycomb from "@/assets/honeycomb-chart.png"

</script>

<template>
    <div class="body">
        <header>
            <img :src="beelogo" alt="Bee Mascot" class="bee-mascot">
            <nav>
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#security">Security</a></li>
                    <li><a href="#analytics">Analytics</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <section id="dashboard" class="section">
                <h1>Welcome to Your Crypto Hive</h1>
                <p>Manage and secure your assets efficiently.</p>
                <div class="dashboard-widgets">
                    <div class="widget"><h2>Wallet Balance</h2><p>$10,450</p></div>
                    <div class="widget"><h2>Recent Transactions</h2><p>3 Pending</p></div>
                    <div class="widget"><h2>Security Status</h2><p>All Secure</p></div>
                </div>
            </section>
            
            <section id="analytics" class="section">
                <h2>Analytics</h2>
                <div class="chart-container">
                    <img :src="ahoneycomb" alt="Wallet Activity Chart">
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2025 Crypto Hive - All Rights Reserved</p>
        </footer>
    </div>

</template>

<style scoped>

.body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #ffcc00, #ff9900);
    color: #fff;
    margin: 0;
    padding: 0;
    text-align: center;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
}
nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}
nav ul li a {
    color: #ffcc00;
    text-decoration: none;
}
.dashboard-widgets {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
.widget {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.chart-container {
    margin: 20px auto;
    width: 80%;
}
footer {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    margin-top: 20px;
}

</style>