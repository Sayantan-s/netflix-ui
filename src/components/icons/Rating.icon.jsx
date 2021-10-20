import React from 'react';

const Rating = ({ size, stroke }) => {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.83555 4.27559C9.14631 0.241469 14.8535 0.241469 16.1643 4.27559C16.5497 5.46167 17.655 6.26471 18.9021 6.26471C23.1438 6.26471 24.9074 11.6926 21.4758 14.1858C20.4669 14.9188 20.0447 16.2182 20.4301 17.4043C21.7408 21.4384 17.1236 24.793 13.692 22.2998C12.683 21.5667 11.3168 21.5667 10.3079 22.2998C6.87624 24.793 2.25902 21.4384 3.56978 17.4043C3.95516 16.2182 3.53298 14.9188 2.52404 14.1858C-0.907588 11.6926 0.856037 6.26471 5.09776 6.26471C6.34488 6.26471 7.45017 5.46167 7.83555 4.27559ZM14.7102 7.64541C14.5773 7.25309 14.1516 7.04279 13.7593 7.17568C13.3669 7.30857 13.1566 7.73434 13.2895 8.12666C13.7206 9.39931 14.9433 10.2337 16.2923 10.2337C16.7066 10.2337 17.0423 9.89787 17.0423 9.48366C17.0423 9.06945 16.7066 8.73366 16.2923 8.73366C15.5529 8.73366 14.9245 8.27803 14.7102 7.64541Z"
                fill={stroke || '#2D264B'}
            />
        </svg>
    );
};

export default Rating;
