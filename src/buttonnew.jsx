import React from 'react';

const ButtonHoover = () => {
    return (
        <button className="rounded-btn">Hover Me</button>
    );
};

// Inline CSS Styles
const styles = `
:root {
    --bg-color: #e7e7e7;
    --hover-color: #4a90e2;
    --text-color: #fff;
}

body {
    background-color: #d5d2ce;
    font-family: Arial, sans-serif;
    color: rgb(44, 44, 44);
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rounded-btn {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
    border-radius: 50px; /* Makes the button rounded */
    padding: 1rem 2rem; /* Adjust padding for size */
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    position: relative;
    overflow: hidden;
}

.rounded-btn:hover {
    transform: scale(1.1); /* Scale up the button on hover */
    background-color: var(--hover-color); /* Change background color on hover */
}
`;

// Append styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ButtonHoover;
