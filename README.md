# InnoTech-guidewire-hackathon
AI-powered parametric insurance platform for gig delivery workers

Problem Statement :
   India’s delivery partners (Zomato, Swiggy, Zepto, etc.) depend on daily earnings but are highly affected by external disruptions like bad weather, pollution, and curfews, leading to 20–30% income loss. Currently, there is no system to protect their lost income.

Challenge : 

          1.Build an AI-powered parametric insurance platform that:
          2.Protects gig workers from income loss due to external disruptions
          3.Provides automatic claim triggering and instant payouts
          4.Uses fraud detection mechanisms to prevent misuse
          5.Follows a weekly premium model aligned with gig workers’ earnings

Requirements :

    1. Target Persona
        Our platform is designed for Urban Food Delivery Partners working on platforms like Zomato, Swiggy, and Zepto.

Work Flow :

                 1. User Registration
                           ↓
                 2. AI-Based Risk Profiling
                           ↓
                 3. Weekly Premium Calculation
                           ↓
                 4. Policy Purchase & Activation
                           ↓
                 5. Continuous Monitoring of External Conditions
                           ↓
                 6. Parametric Trigger Detected (Rain / Pollution / Curfew)
                           ↓
                 7. Automatic Claim Generation
                           ↓
                 8. Fraud Detection & Risk Scoring
                           ↓
                 9. Claim Approval Decision
                           ↓
                 10. Instant Payout (Simulated)

Tech Stack :

        Mobile App (React Native / React)
                ↓
        Backend (Node.js + Express)
                ↓
        Database (MongoDB)
                ↓
        AI Models (Python)
                ↓
        External APIs (Weather + Payment)


AI/ML Integration Plan :

      1.Risk-Based Premium Calculation:
            A machine learning model analyzes factors like location, historical weather patterns, and working conditions to assign a risk score, which is used to dynamically calculate the weekly premium.

      2.Fraud Detection:
            Anomaly detection techniques are used to identify suspicious claims by analyzing location consistency, user activity, and behavior patterns, helping prevent GPS spoofing and duplicate claims.

Platform :
        
        1.The platform follows a modular architecture where each component interacts through APIs.

        2.The frontend (React/React Native) communicates with the backend via REST APIs for user actions and data display.

        3.The backend (Node.js + Express) acts as the central controller, handling business logic, policy management, and claim processing.

        4.The database (MongoDB) stores user, policy, and claim data.

        5.AI/ML models (Python) are integrated via API endpoints to perform risk prediction and fraud detection.

        6.External services such as weather APIs are used for real-time disruption monitoring, and payment gateways are used for payout simulation.
        
        7.We are developing a Mobile Application for delivery partners along with a Web-based Admin Dashboard.

PPT link:
   https://docs.google.com/presentation/d/1v__cnhm1fqzdHLLZL9NB3W6i1JfJEedj9RgzOCpQjho/edit?usp=sharing
