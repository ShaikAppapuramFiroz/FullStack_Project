<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack Web Development</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #f3e7e9, #e3eeff);
            overflow-x: hidden;
        }

        /* Splash Screen Styles */
        .splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            animation: fadeOut 3s ease-out forwards;
        }

        .splash-content {
            text-align: center;
            color: white;
        }

        .splash-content img {
            width: 150px;
            height: auto;
            animation: scaleUp 2s ease-in-out infinite;
        }

        header {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 50px;
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        header p {
            font-size: 1.2rem;
            color: #f1f1f1;
        }

        .header-buttons {
            margin-top: 20px;
        }

        .header-button {
            display: inline-block;
            margin: 10px;
            padding: 12px 25px;
            font-size: 1rem;
            color: white;
            background-color: #0056b3;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .header-button:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

         /* Styling for Project Overview Section */
    .project-details {
        margin: 20px;
        font-family: 'Roboto', sans-serif;
        color: #333;
    }

    h2 {
        font-size: 2rem;
        color: #007bff;
    }

    .project-media {
        margin-top: 30px;
    }
        /* Gallery Section */
        .gallery-container1 {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
        }
    
        .gallery-item {
            width: 300px;
            perspective: 1000px;
        }
    
        .gallery-card1 {
            position: relative;
            width: 100%;
            height: 300px; /* Fixed height for uniformity */
            border-radius: 50%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-card1 img {
            width: 100%;
            height: 100%;
            object-fit: cover;  /* Ensures image fills the circle without distortion */
        }
    /* Gallery Section 1*/
    .gallery-container {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
    }

    .gallery-item {
        width: 300px;
        perspective: 1000px;
    }

    .gallery-card {
        position: relative;
        width: 100%;
        height: 300px; /* Fixed height for uniformity */
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-card:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .gallery-img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        object-fit: contain;
    }

    .gallery-card:hover .gallery-img {
        transform: scale(1.1);
    }

    .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 20px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0s ease 0.3s;
    }

    .gallery-card:hover .gallery-overlay {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }

    .gallery-overlay h4 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .gallery-overlay p {
        font-size: 1rem;
    }

    .gallery-card:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .gallery-img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        object-fit: contain;
    }

    .gallery-card:hover .gallery-img {
        transform: scale(1.1);
    }

    .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 20px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0s ease 0.3s;
    }

    .gallery-card:hover .gallery-overlay {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s;
    }

    .gallery-overlay h4 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .gallery-overlay p {
        font-size: 1rem;
    }

    /* Video Section */
    .video-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        height: 300px; /* Fixed height for uniformity */
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure uniform size by covering the area */
    }

    .video-overlay {
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
        font-size: 1.2rem;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 5px;
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    .video-container:hover .video-overlay {
        opacity: 1;
    }

    /* Text Enhancements */
    .video-overlay h4 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .video-overlay p {
        font-size: 1rem;
    }

        .features-title {
            font-size: 2rem;
            text-align: center;
            margin-top: 40px;
            color: #007bff;
        }

        .features {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 40px;
            animation: fadeInStagger 2s ease-in-out;
            padding: 20px;
        }

        .feature-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #007bff;
        }

        .feature-card p {
            font-size: 1rem;
            color: #666;
        }

        .feature-card img {
            width: 100%;
            height: auto;
            margin: 15px 0;
            border-radius: 8px;
        }

        footer {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
            margin-top: 50px;
        }

        footer a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }

        footer a:hover {
            text-decoration: underline;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInStagger {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes scaleUp {
            0% {
                transform: scale(1);
                opacity: 1;
            }

            50% {
                transform: scale(1.2);
                opacity: 0.8;
            }

            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes fadeOut {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Splash Screen with Animated Image -->
    <div class="splash-screen">
        <div class="splash-content">
            <img src="https://camo.githubusercontent.com/db4c7f852ac5951515814bba18551cd7aeb48c4271df6f9ab1519bb8f49b4866/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f322f32312f4e65632e706e672e6a70672f32323070782d4e65632e706e672e6a7067" alt="College Logo">
            <p>Welcome You All...</p>
        </div>
    </div>
  
    <header>
        <h1>Welcome to the ParentPing </h1>
        <p>An Interactive Full-Stack Web Development Project</p>
        <div class="header-buttons">
            <a href="#"><button class="header-button">Home</button></a>
            <a href="initial.html"><button class="header-button">Get Students Info</button></a>
            <a href="code.html"><button class="header-button">Code</button></a>
            <a href="https://1drv.ms/w/s!Appmr_udzsjjdWAF1XDZgWBBP2w?e=Me4Iu1"><button class="header-button">Documentation</button></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=appapuramfiroz@gmail.com"><button class="header-button">Contact me</button></a>


        </div>
    </header>
    <h2 text-align="center">Full-Stack Web Development Using Java and MySQL</h2>
        <!-- Insert Image Between Header and Project Overview -->
    <img src="https://vsa.edu.in/wp-content/uploads/2024/12/Full-stack-web-development.webp"
     style="width: 100%; height: auto; max-width: 100%; max-height: 100vh;"
     alt="Project Overview Image" class="project-image">
    <!-- Project Details Section -->
    <div class="project-details">
    <h2>Project Overview</h2>
    <p>This web project aims to provide a dynamic, user-friendly interface for managing and interacting with student data. Built using Java, Spring Boot, and MySQL, it includes real-time data retrieval, filtering, and interactive elements for improved communication.</p>
    <div class="container">
        <h1>Full-Stack Web Development Using Java and MySQL</h1>
        <p class="section-content">This is a comprehensive outline of the architecture and frameworks involved in building a Full-Stack Web Application that retrieves data from a MySQL database, allowing users to interact with call and message functionalities.</p>
        <h2>Overview of Project</h2>
        <p class="section-content">This project involves building a web application using Java (Spring Boot) on the backend to interact with a MySQL database. The application will retrieve student details, including their contact information, and provide users with options to call or message them directly from the interface.</p>

        <h3 class="section-title">Main Features</h3>
        <ul class="key-features-list">
            <li><strong>Data Retrieval:</strong> Data about students (such as name, branch, section, year, phone number, etc.) is retrieved from a MySQL database.</li>
            <li><strong>Interactive UI:</strong> Users can filter the data based on criteria like branch, section, or year.</li>
            <li><strong>Call & Message:</strong> Interactive icons will allow users to call or message students directly by interacting with their contact numbers.</li>
        </ul>

        <h3 class="section-title">Technologies and Frameworks Used:</h3>
        <h4 class="section-title">1. Backend:</h4>
        <p class="section-content"><strong>Java (Spring Boot):</strong> Spring Boot simplifies the development of production-ready applications. It is used to create RESTful APIs that fetch and display data. Spring Data JPA will be used to interact with the MySQL database via entities and repositories.</p>
        <p class="section-content"><strong>MySQL:</strong> MySQL is used as the relational database management system (RDBMS). It will store student data such as names, contact details, and other personal information.</p>
        <p class="section-content"><strong>Spring Security (Optional):</strong> You could use Spring Security for authentication and authorization if you need to restrict access to the app or protect certain routes for admins or users.</p>
        <p class="section-content"><strong>REST APIs:</strong> Spring Boot will expose RESTful APIs to communicate with the frontend. These APIs will perform CRUD operations on the student data.</p>

        <h4 class="section-title">2. Frontend:</h4>
        <p class="section-content"><strong>HTML:</strong> HTML will be used to structure the content of the web application. It provides the basic skeleton of the webpage.</p>
        <p class="section-content"><strong>CSS/Bootstrap:</strong> CSS is used for styling the UI, providing layouts and design. Bootstrap is a responsive framework that helps design modern and mobile-friendly user interfaces quickly.</p>
        <p class="section-content"><strong>JavaScript:</strong> JavaScript will be used to enhance the interactivity of the application, allowing the frontend to make AJAX calls to the backend and update the UI dynamically without refreshing the page. JavaScript will also handle the Call and Message functionalities by using the tel: and sms: protocols.</p>
        <p class="section-content"><strong>AJAX:</strong> AJAX will be used for making asynchronous requests to the backend, allowing real-time data retrieval without page reloads. This is useful for fetching filtered student data dynamically based on user input (branch, section, and year).</p>

        <h3 class="section-title">3. Data Flow and Interaction:</h3>
        <div class="project-media">
            <!-- Photo Gallery Section -->
            <div class="gallery">
                <h2> Technology Photo Gallery</h2>
                <div class="gallery-container1">
                    <div class="gallery-item">
                        <div class="gallery-card1">
                            <img src="data:image/png;base64,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" alt="Project Screenshot 1" class="gallery-img">
                        </div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-card1">
                            <img src="data:image/png;base64,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" alt="Project Screenshot 2" class="gallery-img">
                        </div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-card1">
                            <img src="data:image/png;base64,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" alt="Project Screenshot 2" class="gallery-img">
                        </div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-card1">
                            <img src="data:image/png;base64,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" alt="Project Screenshot 2" class="gallery-img">
                        </div>
                    </div>
                    <div class="gallery-item">
                        <div class="gallery-card1">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhUSEhEVFRQWGCAbGBcVGCEXGRsfHRoaFh4hGxceKCgjGx0lHRgVIjIhJSkrLy8uGiAzODMtNygtLisBCgoKDg0OGxAQGi0mHyUuKzgtMjcrLS0wLS4tKy0vMi01LS0tLS0tLiwyLS0vKzgtLi0tLy4rLS0rLS0tLSs3Mv/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgEBQYBAwL/xABEEAABAwIDAwcJBgQEBwAAAAABAAIDBBEFBhIHITETFUFRU5GSCBQiYXGBgqGxIzJScsHCQkOisjNi0eEWFzRjc5Px/8QAGQEBAQADAQAAAAAAAAAAAAAAAAIBAwUE/8QAJBEBAAICAQMDBQAAAAAAAAAAAAECAxEEEkFREzFxBSGBwfD/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXGbRdoMWR2Ra4jK+Uus1rtNg21yTY9LgO/qXZlV0zTJHn3bDyEkobTRExai4NAbG1znWJ3XMmodyCcMm5kjzXl+OqjaWh9wWE3LS0kEE9x9hC3agfyfsaOH43UYdI4ekS9ljca2ei+x6btsfgXzxzNOOT7TJ6GkqSTrcyNpawNY3TruTb+Fv8RugnxFBeUM64rgW0BuG4lLyokcGHVYlrni7HMeALg3aLHr6CscZrxzPmZ52YbMIYYSbC7Wt06i1pc4gkudYm3BBPiKENn2dsSqM71MVfMQyCGR8sWloAdFpabG1x0ncbFa3CsxZi2g180tFMIY4zuYC1rRe5a25BL3WG8nd7EEh5l2kjA86RYd5qXulfEBJrs0CV4bfTYm439PQu+HBVw2liqp9pVDYiSsbFTb3ABr5g88QLAAv6rBbTC81Y3gm0uGjrqgScrIxr2DSY9MhsC2wFiL/JBPaKAMc2gVuPY9UthxKKggguIg770pBLRvDS4kkX3bgCNx4rtti2eJ82YdNHUkOmgLftAANbX6rXA3agWngBxCCSUREBERAREQEREBERAREQEREBER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" alt="Project Screenshot 2" class="gallery-img">
                        </div>
                    </div>
                </div>
            </div>
    
        <p class="section-content"><strong>Frontend:</strong> Users will input search filters (such as branch, section, or year) into the UI. The frontend will send an AJAX request to the backend's REST API to retrieve filtered student data based on the search criteria. The returned data will be dynamically displayed in a list or table on the webpage. The UI will display call and message buttons next to each student's contact information.</p>
        <p class="section-content"><strong>Backend:</strong> The backend will consist of Spring Boot controllers that handle requests from the frontend. When the frontend requests student data, the backend will query the MySQL database to retrieve the requested data using Spring Data JPA. REST APIs will be used to send student information (such as name, phone number, and photo URL) to the frontend.</p>
        <p class="section-content"><strong>Call and Message Functionality:</strong> The call functionality will trigger a phone dialer through the browser’s native support for the tel: protocol (e.g., tel:+1234567890). The message functionality will trigger an SMS application using the sms: protocol (e.g., sms:+1234567890).</p>

        <h3 class="section-title">System Architecture:</h3>
        <pre>
+-------------------+        +-------------------------+        +------------------+
|                   |        |                         |        |                  |
|     Frontend      | <----> |   Spring Boot Backend   | <----> |   MySQL Database |
|                   |        |                         |        |                  |
+-------------------+        +-------------------------+        +------------------+
   (HTML/CSS/JS)           (REST APIs / Spring Data JPA)           (Student Data)
   + Interactive UI             + Business Logic
   + AJAX requests             + Data Access Layer
   + Call / Message Icons      + CRUD operations
        </pre>

        <h3 class="section-title">Detailed Flow:</h3>
        <h4>User Interaction (Frontend):</h4>
        <p class="section-content">The user enters filters (branch, section, year) in the input fields. The frontend sends an AJAX request to the backend to fetch the filtered student data.</p>
        <h4>Data Retrieval (Backend):</h4>
        <p class="section-content">The backend uses Spring Data JPA to query the MySQL database based on the filter criteria. The Spring Boot controller returns the student data in JSON format.</p>
        <h4>Display Data (Frontend):</h4>
        <p class="section-content">The frontend dynamically displays the list of students retrieved from the backend, showing details like name, contact, and photo. Call and Message buttons will be shown next to each student's contact number.</p>
        <h4>Call and Message (Frontend):</h4>
        <p class="section-content">When the user clicks the Call button, the browser will open the phone’s dialer with the student’s phone number. When the user clicks the Message button, the browser will open the SMS app with the student’s phone number.</p>

        <h3 class="section-title">Key Features:</h3>
        <ul class="key-features-list">
            <li><strong>Dynamic Data Retrieval:</strong> The backend (Spring Boot) interacts with the MySQL database to fetch student data based on user input. The frontend displays this data dynamically using AJAX.</li>
            <li><strong>Search and Filter:</strong> Users can filter students by entering values in the search fields (branch, section, year). The frontend will send the filter data to the backend, which retrieves the matching data.</li>
            <li><strong>Interactive Call and Message Buttons:</strong> Each student’s contact info will have interactive Call and Message buttons. These buttons will trigger the phone’s native functionalities to either call or message the student using the respective contact number.</li>
            <li><strong>Responsive UI:</strong> The application is mobile-friendly, ensuring that it works seamlessly across devices (desktop, tablet, mobile) using Bootstrap for responsive design.</li>
        </ul>

        <h3 class="section-title">Advantages of This Approach:</h3>
        <ul class="key-features-list">
            <li><strong>Separation of Concerns:</strong> The frontend and backend are decoupled, allowing for easier maintenance and future enhancements (e.g., adding more features or switching frontend frameworks).</li>
            <li><strong>Scalability:</strong> The Spring Boot backend is scalable, and MySQL is a proven database solution for handling large datasets efficiently.</li>
            <li><strong>Responsive Design:</strong> Using Bootstrap ensures that the application looks good on all screen sizes, providing a better user experience.</li>
            <li><strong>Real-time Data Interaction:</strong> Using AJAX enables real-time data fetching and updating, improving the overall performance and user experience.</li>
        </ul>

        <h3 class="section-title">Further Enhancements:</h3>
        <ul class="key-features-list">
            <li><strong>Authentication & Authorization:</strong> Add Spring Security for user authentication and role-based access control (e.g., admin access to manage student data).</li>
            <li><strong>Pagination:</strong> Implement pagination on the frontend to handle large datasets and improve load times.</li>
            <li><strong>Data Validation:</strong> Implement server-side validation on the backend to ensure the integrity of student data.</li>
            <li><strong>File Upload:</strong> Allow students to upload their photos, and store the photos either on the server or a cloud storage service.</li>
        </ul>
    </div>
    <div class="project-media">
        <!-- Photo Gallery Section -->
        <div class="gallery">
            <h2>Photo Gallery</h2>
            <div class="gallery-container">
                <div class="gallery-item">
                    <div class="gallery-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTS6k1Ce37t9H3ogn6yqxVA4fpsjDv80KuA&s" alt="Project Screenshot 1" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4>Student Data Interface</h4>
                            <p>A snapshot of the student data interface with dynamic filtering and interaction.</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgNOw83BxAOUOiC7zWOyyM7AP0brIryc2PQ&s" alt="Project Screenshot 2" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4>Interactive Calling and Messaging</h4>
                            <p>Interactive icons for calling and messaging students directly from the interface.</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKaThPEZZGQz-KrloL_OQEHEmTsGAz7Yiaw&s" alt="Project Screenshot 2" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4>Interactive Calling and Messaging</h4>
                            <p>Interactive icons for calling and messaging students directly from the interface.</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OgZ_wYIpIu_NiwCbDfVLsK71WSvawjKlbA&s" alt="Project Screenshot 2" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4>MYSql Database</h4>
                            <p>Backend used for Full Stack Web Development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Video Section -->
        <div class="project-video">
            <h2>Project Demo Video</h2>
            <p>Watch the video to see a demonstration of the web application in action.</p>
            <div class="video-container">
                <video controls>
                    <source src="https://1drv.ms/v/s!Appmr_udzsjjd1LYZ9-qYgRlxQE?e=k76Qpl" type="video/mp4" target="_blank">
                    Your browser does not support the video tag.
                </video>
                <div class="video-overlay">
                    <h4>Project Overview Video</h4>
                    <p>This video showcases the main features of the web application, including the interactive interface and data management.</p>
                </div>
            </div>
            <a href="https://1drv.ms/v/s!Appmr_udzsjjd1LYZ9-qYgRlxQE?e=zsvXqy" target="_blank"><button class="header-button" style="display: flex; justify-content: center; align-items: center;">Click to Watch </button></a>
        </div>
    </div>
</div>


    <!-- Features Title -->
    <div class="features-title">
        <h2>Key Features</h2>
    </div>

    <div class="features">
        <div class="feature-card">
            <h3>Dynamic Data Retrieval</h3>
            <img src="https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1695059532/Dynamic_website_In_text/Dynamic_website_In_text-png?_i=AA" alt="Dynamic Data Retrieval">
            <p><strong>The system connects to a MySQL database to fetch and display student information dynamically, ensuring real-time data consistency and scalability.</strong></p>
        </div>
        <div class="feature-card">
            <h3>Search & Filter by Branch, Section, and Year</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKskPVTfaXZyaJYyJ7FfdmXd57Kf4Z0mOxQ&s" alt="Search & Filter">
            <p><strong> Users can easily filter students using an intuitive interface to quickly locate specific information.</strong></p>
        </div>
        <div class="feature-card">
            <h3>Interactive Icons for Call and Message</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqfPkfCWppEIo_psfRNOi-Bn1LrWsuVwYBQ&s" alt="Interactive Icons">
            <p><strong>Our interface includes interactive icons to quickly call or message students and their contacts, making communication efficient and direct.</strong></p>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 Enhanced Web Page. All rights reserved.</p>
        <p>For more details, visit <a href="https://1drv.ms/w/s!Appmr_udzsjjdWAF1XDZgWBBP2w?e=Me4Iu1">Documentation</a> or <a href="https://mail.google.com/mail/?view=cm&fs=1&to=appapuramfiroz@gmail.com">Contact Us</a></p>

    </footer>

    <script>
        // Hide splash screen after 3 seconds
        setTimeout(function() {
            document.querySelector('.splash-screen').style.display = 'none';
        }, 3000);
    </script>
</body>
</html>

