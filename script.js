<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HONEYS - Honeys Hive</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <h1>[HONEYS] Honeys Hive</h1>
                <p>Nitro Type Team</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#requirements">Requirements</a></li>
                    <li><a href="#stats">Stats</a></li>
                    <li><a href="#join">Join Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h2>Grinding for Legend League</h2>
                <p>Join our active community and help us climb the ranks!</p>
                <button class="cta-button" id="joinBtn">Join the Hive</button>
            </div>
            <div class="hero-image">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2>About Our Team</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Honeys Hive is a dedicated Nitro Type team formed on May 29, 2024. We're focused on reaching Legend League through consistent effort and teamwork. Our community is active, supportive, and always ready to race!</p>
                </div>
                <div class="about-image">
                    <div class="honeycomb">
                        <div class="comb-cell"></div>
                        <div class="comb-cell"></div>
                        <div class="comb-cell"></div>
                        <div class="comb-cell"></div>
                        <div class="comb-cell"></div>
                        <div class="comb-cell"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stats" class="stats">
        <div class="container">
            <h2>Team Statistics</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Members</h3>
                    <div class="stat-value" id="memberCount">20</div>
                </div>
                <div class="stat-card">
                    <h3>Formed</h3>
                    <div class="stat-value">May 29, 2024</div>
                </div>
                <div class="stat-card">
                    <h3>Team Page Views</h3>
                    <div class="stat-value">82</div>
                </div>
                <div class="stat-card">
                    <h3>Enrollment</h3>
                    <div class="stat-value">Open</div>
                </div>
            </div>
        </div>
    </section>

    <section id="requirements" class="requirements">
        <div class="container">
            <h2>Team Requirements</h2>
            <div class="requirements-content">
                <div class="min-requirements">
                    <h3>Minimum Requirements</h3>
                    <ul>
                        <li>Any Number of Races</li>
                        <li>Any Speed</li>
                    </ul>
                </div>
                <div class="special-requirements">
                    <h3>Special Requirements</h3>
                    <ul>
                        <li>10 Races per day</li>
                        <li>3,800+ all-time races</li>
                        <li>Active community participation</li>
                        <li>Team-focused mindset</li>
                    </ul>
                </div>
            </div>
            <div class="note">
                <p>All eligible players can join this team. We're looking for active racers who can contribute to our goal of reaching Legend League!</p>
            </div>
        </div>
    </section>

    <section id="join" class="join">
        <div class="container">
            <h2>Join Honeys Hive</h2>
            <p>Ready to become part of our buzzing community?</p>
            <div class="join-form">
                <input type="text" id="username" placeholder="Your Nitro Type Username">
                <button id="applyBtn">Apply Now</button>
            </div>
            <div id="message" class="message"></div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 [HONEYS] Honeys Hive - All rights reserved</p>
            <p>Nitro Type Team</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
