// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});

// Back to top button
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Research data tabs
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and content
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission (in a real scenario, you would use AJAX)
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Randomly show success or error for demo purposes
    if (Math.random() > 0.3) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        this.reset();
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
    
    // Scroll to message
    window.scrollTo({
        top: document.getElementById('contact').offsetTop + 100,
        behavior: 'smooth'
    });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }, 5000);
});

// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Charts
// Thrust Comparison Chart
const thrustCtx = document.getElementById('thrustChart').getContext('2d');
const thrustChart = new Chart(thrustCtx, {
    type: 'bar',
    data: {
        labels: ['AG-1 (30kV)', 'AG-2 (40kV)', 'AG-3 (50kV)'],
        datasets: [{
            label: 'Thrust Generated (g)',
            data: [2.1, 3.8, 6.5],
            backgroundColor: [
                'rgba(0, 176, 255, 0.7)',
                'rgba(0, 176, 255, 0.7)',
                'rgba(0, 176, 255, 0.7)'
            ],
            borderColor: [
                'rgba(0, 176, 255, 1)',
                'rgba(0, 176, 255, 1)',
                'rgba(0, 176, 255, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'System Weight (g)',
            data: [12, 18, 25],
            backgroundColor: [
                'rgba(255, 64, 129, 0.7)',
                'rgba(255, 64, 129, 0.7)',
                'rgba(255, 64, 129, 0.7)'
            ],
            borderColor: [
                'rgba(255, 64, 129, 1)',
                'rgba(255, 64, 129, 1)',
                'rgba(255, 64, 129, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Thrust vs. System Weight Comparison',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Grams (g)'
                }
            }
        }
    }
});

// Thrust Over Time Chart
const thrustOverTimeCtx = document.getElementById('thrustOverTimeChart').getContext('2d');
const thrustOverTimeChart = new Chart(thrustOverTimeCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22', 'Week 23', 'Week 24'],
        datasets: [{
            label: 'AG-1 Thrust (g)',
            data: [0.5, 0.8, 1.1, 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.3,
            fill: true
        },
        {
            label: 'AG-2 Thrust (g)',
            data: [null, null, null, null, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.6, 3.7, 3.7, 3.8, 3.8, 3.8, 3.8],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.3,
            fill: true
        },
        {
            label: 'AG-3 Thrust (g)',
            data: [null, null, null, null, null, null, null, null, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.3, 5.6, 5.8, 6.0, 6.2, 6.3, 6.4, 6.5, 6.5, 6.5],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Thrust Improvement Over 6-Month Research Period',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Thrust (g)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Research Timeline (Weeks)'
                }
            }
        }
    }
});

// Voltage vs Thrust Chart
const voltageThrustCtx = document.getElementById('voltageThrustChart').getContext('2d');
const voltageThrustChart = new Chart(voltageThrustCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Thrust vs Voltage',
            data: [
                {x: 10, y: 0.2},
                {x: 15, y: 0.5},
                {x: 20, y: 0.9},
                {x: 25, y: 1.4},
                {x: 30, y: 2.1},
                {x: 35, y: 3.0},
                {x: 40, y: 3.8},
                {x: 45, y: 5.0},
                {x: 50, y: 6.5}
            ],
            backgroundColor: 'rgba(0, 176, 255, 0.7)',
            borderColor: 'rgba(0, 176, 255, 1)',
            borderWidth: 1,
            showLine: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Thrust vs. Applied Voltage',
                font: {
                    size: 16
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Thrust (g)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Voltage (kV)'
                }
            }
        }
    }
});

// Efficiency Chart
const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
const efficiencyChart = new Chart(efficiencyCtx, {
    type: 'radar',
    data: {
        labels: ['Energy Efficiency', 'Thrust Consistency', 'Payload Capacity', 'Voltage Stability', 'Environmental Tolerance', 'Control Precision'],
        datasets: [{
            label: 'Initial Prototype',
            data: [50, 60, 40, 55, 45, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },
        {
            label: 'Final Prototype',
            data: [85, 90, 82, 88, 80, 87],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'System Performance Improvements',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

// Environmental Chart
const environmentCtx = document.getElementById('environmentChart').getContext('2d');
const environmentChart = new Chart(environmentCtx, {
    type: 'bar',
    data: {
        labels: ['15°C', '20°C', '25°C', '30°C', '35°C', '40°C'],
        datasets: [{
            label: 'Thrust at 40% RH (g)',
            data: [3.6, 3.7, 3.8, 3.8, 3.7, 3.5],
            backgroundColor: 'rgba(0, 176, 255, 0.7)',
            borderColor: 'rgba(0, 176, 255, 1)',
            borderWidth: 1
        },
        {
            label: 'Thrust at 80% RH (g)',
            data: [2.9, 3.0, 3.1, 3.1, 3.0, 2.8],
            backgroundColor: 'rgba(255, 64, 129, 0.7)',
            borderColor: 'rgba(255, 64, 129, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Temperature and Humidity Impact on Thrust',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 2.5,
                title: {
                    display: true,
                    text: 'Thrust (g)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            }
        }
    }
});
