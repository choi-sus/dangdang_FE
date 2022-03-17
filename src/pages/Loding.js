import React from "react";
import {history} from "../redux/configStore"
import {Grid} from "../elements/Index"
import styled, {keyframes} from "styled-components";

const Loding = () => {

    const timeout = () => {
        setTimeout(() => {
            history.replace("/guideslide");
        }, 3000);
    };

    React.useEffect(() => {
        timeout();
        return () => {clearTimeout(timeout);};
    });

    

    return(
        <Load>
            <Grid height="auto" center padding="0 15%;">
                <img src="img/main.PNG" alt="intro img"></img>
                <LoadTitle>
                    <svg width="140" height="108" viewBox="0 0 140 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M103.884 72.4505C104.365 73.4395 104.436 74.5781 104.082 75.6193C103.729 76.6604 102.979 77.5201 101.995 78.0118C101.012 78.5035 99.8738 78.5875 98.8288 78.2456C97.7837 77.9037 96.9156 77.1635 96.4129 76.1856C95.3817 74.1223 95.1567 69.4912 97.2191 68.46C99.2815 67.4288 102.852 70.3872 103.884 72.4505Z" fill="#FFD04C"/>
                        <path d="M125.347 72.5839C124.862 73.5936 124.793 74.7535 125.156 75.8133C125.518 76.8731 126.283 77.7478 127.285 78.2487C128.287 78.7495 129.446 78.8363 130.511 78.4904C131.576 78.1444 132.463 77.3934 132.98 76.3995C134.015 74.3269 134.213 69.6615 132.105 68.6072C129.997 67.5529 126.383 70.5113 125.347 72.5839Z" fill="#FFD04C"/>
                        <path d="M114.1 67.1621C114.232 67.7619 114.245 68.382 114.137 68.9866C114.028 69.5913 113.8 70.1683 113.467 70.6843C113.134 71.2003 112.701 71.6451 112.195 71.9927C111.688 72.3403 111.118 72.5838 110.517 72.7093C109.915 72.8347 109.295 72.8395 108.692 72.7233C108.089 72.6072 107.514 72.3724 107.003 72.0327C106.491 71.6929 106.052 71.255 105.71 70.7442C105.369 70.2333 105.133 69.6599 105.015 69.057C104.491 66.5475 105.563 61.5091 108.07 60.9861C110.576 60.4631 113.58 64.6536 114.1 67.1621Z" fill="#FFD04C"/>
                        <path d="M115.437 67.1621C115.313 67.7587 115.307 68.3739 115.42 68.9727C115.534 69.5714 115.764 70.142 116.098 70.6518C116.432 71.1616 116.863 71.6007 117.366 71.9439C117.87 72.2872 118.436 72.5279 119.032 72.6523C120.237 72.9036 121.492 72.6659 122.522 71.9917C123.032 71.6578 123.471 71.2268 123.814 70.7233C124.157 70.2198 124.398 69.6535 124.523 69.057C125.046 66.5475 123.975 61.5091 121.468 60.9861C118.961 60.4631 115.961 64.6536 115.437 67.1621Z" fill="#FFD04C"/>
                        <path d="M126.804 82.4666C125.535 79.9957 123.551 77.965 121.111 76.6397C118.67 75.3144 115.886 74.7562 113.123 75.0381C104.813 75.6435 98.1514 83.5542 101.351 92.6647C102.775 95.9971 106.025 99.1166 112.394 105.311C112.913 105.816 113.611 106.097 114.335 106.092C115.06 106.086 115.754 105.796 116.266 105.283C121.996 99.5387 124.913 97.0098 126.145 94.9779C127.043 93.4871 127.65 91.8387 127.932 90.1209C128.395 87.5146 127.999 84.8284 126.804 82.4666ZM117.806 92.5934C117.424 92.5245 117.046 92.4317 116.675 92.3157C115.074 91.7415 113.323 91.7435 111.723 92.3212C111.101 92.4964 110.47 92.6339 109.831 92.7332C109.3 92.7233 108.778 92.583 108.313 92.3244C107.848 92.0659 107.454 91.697 107.165 91.2503C106.876 90.8037 106.701 90.2928 106.656 89.7627C106.611 89.2326 106.696 88.6996 106.905 88.2103C107.278 87.3613 107.774 86.5723 108.378 85.8693C109.163 84.8428 110.036 83.8838 110.867 82.8933C111.238 82.4564 111.558 81.9787 111.958 81.5752C112.279 81.2349 112.669 80.967 113.101 80.7895C113.534 80.6121 114 80.5291 114.467 80.5461C114.935 80.5631 115.393 80.6797 115.812 80.8881C116.231 81.0966 116.6 81.392 116.895 81.7547C117.347 82.2851 117.683 82.9128 118.118 83.4598C118.745 84.2485 119.462 84.9687 120.051 85.7823C120.752 86.6003 121.319 87.5245 121.731 88.5204C121.916 89.0737 121.945 89.667 121.816 90.2359C121.688 90.8048 121.406 91.3275 121.001 91.7474C120.596 92.1672 120.084 92.4681 119.52 92.6175C118.956 92.7668 118.362 92.7588 117.802 92.5943L117.806 92.5934Z" fill="#FFD04C"/>
                        <path d="M8.83156 20.914L18.4233 21.0871C19.4578 21.103 20.4713 21.3814 21.3688 21.8961C21.777 22.1293 22.1056 22.4799 22.3118 22.9024C22.518 23.3249 22.5923 23.7996 22.525 24.2649C22.5356 24.7985 22.3723 25.321 22.0597 25.7535C21.747 26.1861 21.3021 26.5051 20.7921 26.6624C19.5592 27.0517 18.271 27.2371 16.9784 27.2113H15.9092C15.3125 27.2113 14.5806 27.2208 13.7135 27.24C12.8465 27.2591 11.9208 27.269 10.9365 27.2696H8.25211C6.97285 27.2795 5.6957 27.1633 4.43927 26.9225C3.90131 26.8305 3.38792 26.6292 2.93082 26.3309C2.47372 26.0327 2.08262 25.644 1.78167 25.1887C1.42515 24.6665 1.17943 24.0767 1.05965 23.4558C0.930941 22.8442 0.834243 22.2262 0.769928 21.6045C0.715187 21.1057 0.695997 20.6037 0.712526 20.1021C0.731656 19.6788 0.741227 19.4286 0.741227 19.3514L0.856935 9.00893V8.37393C0.858736 8.03622 0.877903 7.69883 0.914338 7.36309C0.953216 6.99776 1.01121 6.62195 1.08835 6.23563C1.14206 5.90725 1.26002 5.59269 1.43548 5.30997C1.71607 4.84507 2.07751 4.43408 2.50276 4.09641C2.94213 3.80059 3.44963 3.62156 3.97737 3.57619C5.08497 3.39734 6.20662 3.32019 7.32828 3.3457C7.5202 3.3457 8.03026 3.35526 8.85842 3.37439C9.68659 3.39352 10.5814 3.41265 11.5429 3.43178L14.2273 3.48917C14.7392 3.48914 15.2507 3.51819 15.7593 3.57619C16.2585 3.57619 16.7784 3.58575 17.319 3.60488C17.8439 3.62262 18.3659 3.6905 18.8778 3.80761C19.3739 3.92145 19.8509 4.10633 20.2941 4.35652C20.7597 4.62933 21.1473 5.01726 21.4197 5.48306C21.8081 6.02287 22.0201 6.66946 22.027 7.3344C21.9724 8.00865 21.7217 8.6522 21.3059 9.18574C21.1358 9.48119 20.907 9.73872 20.6337 9.94249C20.3604 10.1463 20.0482 10.2919 19.7165 10.3706C19.0802 10.5055 18.4314 10.5731 17.7809 10.5724H17.5652C16.4201 10.5649 15.2849 10.7841 14.2248 11.2171C13.1647 11.6502 12.2008 12.2886 11.3884 13.0957C10.5761 13.9028 9.93138 14.8626 9.49146 15.9199C9.05154 16.9771 8.82507 18.111 8.82509 19.2561L8.83156 20.914ZM3.9792 40.0373C3.92593 38.4522 4.47233 36.9053 5.50935 35.7052C6.64577 34.4711 8.0633 33.5296 9.64152 32.9606C11.6143 32.2299 13.6724 31.7543 15.7657 31.5453C18.2596 31.2675 20.7673 31.1321 23.2766 31.1398C25.7848 31.1326 28.2916 31.258 30.7866 31.5156C32.8774 31.7082 34.9354 32.1645 36.9117 32.8736C38.4905 33.4262 39.909 34.3589 41.042 35.5895C42.0925 36.8275 42.6393 38.4151 42.574 40.0373C42.658 41.7154 42.1116 43.3643 41.042 44.6601C39.912 45.887 38.4917 46.8101 36.9117 47.3446C34.9337 48.0318 32.8747 48.459 30.7866 48.6155C28.436 48.8266 25.9327 48.9324 23.2766 48.933C20.6206 48.9336 18.1169 48.8278 15.7657 48.6155C13.6778 48.4594 11.6191 48.0322 9.64152 47.3446C8.06075 46.8105 6.63975 45.8874 5.50935 44.6601C4.43998 43.3643 3.89414 41.7153 3.9792 40.0373ZM34.7743 40.0373C34.7674 39.7053 34.6659 39.3821 34.4816 39.1057C34.2972 38.8294 34.0378 38.6115 33.7339 38.4776C32.8924 38.0441 31.9856 37.7514 31.0495 37.6112C29.8246 37.407 28.5878 37.2833 27.3468 37.2409C25.9799 37.1823 24.6222 37.1533 23.2739 37.1539C21.9255 37.1545 20.5866 37.1835 19.2574 37.2409C18.0566 37.2832 16.86 37.4069 15.676 37.6112C14.7755 37.7492 13.9057 38.0424 13.1054 38.4776C12.8126 38.6204 12.5655 38.842 12.3919 39.1175C12.2182 39.3931 12.1249 39.7116 12.1223 40.0373C12.1373 40.3452 12.237 40.643 12.4105 40.8978C12.584 41.1526 12.8244 41.3546 13.1054 41.4814C13.9053 41.9177 14.7752 42.2112 15.676 42.3487C16.8606 42.5553 18.0565 42.6904 19.2574 42.7533C20.5866 42.8304 21.9255 42.8686 23.2739 42.868H27.3468C28.5849 42.8767 29.822 42.7997 31.0495 42.6375C31.9895 42.535 32.9009 42.2521 33.7339 41.8044C34.055 41.6369 34.3225 41.3822 34.5057 41.0697C34.6889 40.7572 34.7804 40.3994 34.7697 40.0373H34.7743ZM31.9427 24.9008C31.9421 25.3303 31.8839 25.7577 31.7696 26.1717C31.6484 26.6067 31.4527 27.0173 31.1911 27.3853C30.9329 27.7599 30.5981 28.0754 30.2089 28.311C29.7868 28.5521 29.3064 28.6723 28.8204 28.6581C28.364 28.6669 27.9115 28.5727 27.4965 28.3827C27.0814 28.1926 26.7145 27.9115 26.423 27.5603C25.8066 26.8798 25.4663 25.9939 25.4686 25.0758V7.22147C25.47 6.73755 25.5087 6.25447 25.5843 5.7765C25.6518 5.30645 25.7881 4.84888 25.9888 4.41854C26.1876 4.00624 26.4849 3.64923 26.8543 3.37902C27.2809 3.07445 27.779 2.88536 28.3002 2.8301C28.9182 2.69712 29.5633 2.78937 30.1192 3.09021C30.598 3.37377 30.9899 3.78328 31.2522 4.27414C31.5361 4.81751 31.7311 5.40285 31.8298 6.00792C31.9451 6.65634 32.0033 7.31361 32.0038 7.97219V8.05827C32.0038 8.03976 31.9927 8.14528 31.9751 8.3767C31.9575 8.60812 31.9455 9.04041 31.9455 9.67264V12.5903C32.415 12.6487 32.8877 12.6778 33.3609 12.6774C34.1125 12.6965 34.853 12.7255 35.5825 12.7644L35.6408 6.69754C35.6377 6.14227 35.7055 5.58887 35.8426 5.05077C35.9615 4.56322 36.189 4.10884 36.5081 3.72152C36.8375 3.34063 37.2529 3.04363 37.7198 2.85509C38.3101 2.63303 38.9469 2.56361 39.5712 2.6533C40.0323 2.71426 40.4698 2.89347 40.8412 3.17352C41.1894 3.44416 41.4588 3.8031 41.6215 4.21304C41.801 4.65946 41.9272 5.12553 41.9973 5.60155C42.072 6.07932 42.1107 6.56203 42.113 7.04559V25.8246C42.0976 26.6794 41.8147 27.5078 41.304 28.1934C41.0586 28.5626 40.7226 28.8626 40.3281 29.0649C39.9337 29.2671 39.4939 29.3648 39.0509 29.3486C38.4476 29.3712 37.8493 29.2319 37.3181 28.9451C36.8771 28.6973 36.5086 28.3387 36.2489 27.9046C35.9923 27.4677 35.8161 26.9884 35.7287 26.4893C35.6336 25.9844 35.5849 25.4719 35.5834 24.9582V19.0654H31.9446L31.9427 24.9008Z" fill="#FFD04C"/>
                        <path d="M54.1856 20.914L63.7773 21.0871C64.8118 21.103 65.8253 21.3814 66.7228 21.8961C67.131 22.1293 67.4596 22.4799 67.6658 22.9024C67.872 23.3249 67.9463 23.7996 67.879 24.2649C67.8895 24.7984 67.7261 25.3209 67.4135 25.7534C67.1009 26.1859 66.656 26.5049 66.1462 26.6624C64.9132 27.0517 63.625 27.2371 62.3324 27.2113H61.2623C60.6662 27.2113 59.9346 27.2208 59.0676 27.24C58.2005 27.2591 57.2749 27.269 56.2906 27.2696H53.6061C52.3268 27.2796 51.0497 27.1634 49.7933 26.9225C49.2553 26.8305 48.7419 26.6292 48.2848 26.3309C47.8277 26.0327 47.4366 25.644 47.1357 25.1887C46.7788 24.6665 46.5328 24.0768 46.4127 23.4558C46.2848 22.8441 46.1884 22.2262 46.1239 21.6045C46.0687 21.1057 46.0495 20.6037 46.0665 20.1021C46.0857 19.6788 46.0952 19.4286 46.0952 19.3514L46.2109 9.00893V8.37393C46.2127 8.03622 46.2319 7.69883 46.2683 7.36309C46.3066 6.99776 46.3646 6.62195 46.4424 6.23563C46.4962 5.90743 46.6138 5.59295 46.7886 5.30997C47.0697 4.84521 47.4314 4.43427 47.8568 4.09641C48.2959 3.8007 48.803 3.62167 49.3304 3.57619C50.4384 3.39735 51.5603 3.3202 52.6823 3.3457C52.8736 3.3457 53.3836 3.35526 54.2124 3.37439C55.0412 3.39352 55.936 3.41265 56.8969 3.43178L59.5813 3.48917C60.0932 3.48914 60.6047 3.51819 61.1133 3.57619C61.6125 3.57619 62.1321 3.58575 62.6721 3.60488C63.1973 3.62256 63.7196 3.69044 64.2318 3.80761C64.7279 3.92145 65.2049 4.10633 65.6481 4.35652C66.1137 4.62933 66.5013 5.01726 66.7737 5.48306C67.1621 6.02287 67.3742 6.66946 67.381 7.3344C67.326 8.00855 67.0754 8.65198 66.6599 9.18574C66.4897 9.48129 66.2608 9.73888 65.9873 9.94265C65.7138 10.1464 65.4015 10.2921 65.0696 10.3706C64.4335 10.5055 63.7851 10.5731 63.1349 10.5724H62.9193C61.7741 10.5649 60.6389 10.7841 59.5788 11.2171C58.5187 11.6502 57.5548 12.2886 56.7424 13.0957C55.9301 13.9028 55.2854 14.8626 54.8455 15.9199C54.4055 16.9771 54.1791 18.111 54.1791 19.2561L54.1856 20.914ZM49.3323 40.0373C49.2793 38.4521 49.826 36.9051 50.8634 35.7052C51.9994 34.4711 53.4166 33.5296 54.9946 32.9606C56.9677 32.23 59.0261 31.7544 61.1198 31.5453C63.6133 31.2675 66.1207 31.1321 68.6297 31.1398C71.1382 31.1325 73.6453 31.258 76.1406 31.5156C78.2314 31.7082 80.2894 32.1645 82.2657 32.8736C83.8443 33.4262 85.2625 34.3589 86.3951 35.5895C87.4459 36.8273 87.9928 38.415 87.9271 40.0373C88.0116 41.7155 87.4651 43.3645 86.3951 44.6601C85.2655 45.8869 83.8454 46.8101 82.2657 47.3446C80.2877 48.0318 78.2287 48.459 76.1406 48.6155C73.79 48.8266 71.2864 48.9324 68.6297 48.933C65.973 48.9336 63.4697 48.8278 61.1198 48.6155C59.0316 48.4593 56.9725 48.0321 54.9946 47.3446C53.4141 46.8106 51.9934 45.8874 50.8634 44.6601C49.7937 43.3644 49.2476 41.7154 49.3323 40.0373ZM80.1284 40.0373C80.1215 39.7051 80.0198 39.3818 79.8353 39.1055C79.6508 38.8291 79.3912 38.6113 79.087 38.4776C78.2456 38.0438 77.3387 37.7511 76.4025 37.6112C75.1792 37.4073 73.9439 37.2836 72.7045 37.2409C71.3364 37.1823 69.9787 37.1533 68.6316 37.1539C67.2844 37.1545 65.9459 37.1835 64.616 37.2409C63.4152 37.2832 62.2187 37.4069 61.0346 37.6112C60.1341 37.7491 59.2643 38.0422 58.464 38.4776C58.1711 38.6202 57.9239 38.8418 57.7502 39.1174C57.5765 39.393 57.4833 39.7116 57.4809 40.0373C57.4957 40.3453 57.5954 40.6431 57.7689 40.898C57.9424 41.1528 58.1829 41.3547 58.464 41.4814C59.2639 41.9179 60.1338 42.2114 61.0346 42.3487C62.2192 42.5553 63.4152 42.6904 64.616 42.7533C65.9453 42.8304 67.2838 42.8686 68.6316 42.868H72.7045C73.941 42.8764 75.1766 42.7994 76.4025 42.6375C77.3426 42.5352 78.2541 42.2524 79.087 41.8044C79.4091 41.6376 79.6775 41.3833 79.8616 41.0707C80.0456 40.7581 80.1378 40.3999 80.1274 40.0373H80.1284ZM77.2967 24.9008C77.2961 25.3303 77.2379 25.7577 77.1236 26.1717C77.0024 26.6067 76.8067 27.0173 76.5451 27.3853C76.2866 27.7597 75.9519 28.0751 75.563 28.311C75.1408 28.5521 74.6604 28.6722 74.1744 28.6581C73.7181 28.6667 73.2656 28.5724 72.8506 28.3824C72.4356 28.1923 72.0687 27.9114 71.777 27.5603C71.1609 26.8797 70.8209 25.9938 70.8235 25.0758V7.22147C70.8249 6.73755 70.8636 6.25447 70.9392 5.7765C71.0062 5.30635 71.1426 4.84872 71.3438 4.41854C71.5422 4.00599 71.8395 3.64889 72.2093 3.37902C72.6356 3.0746 73.1333 2.88552 73.6542 2.8301C74.2725 2.69706 74.9179 2.7893 75.4741 3.09021C75.9509 3.37457 76.3408 3.784 76.6016 4.27414C76.8851 4.81767 77.08 5.40295 77.1792 6.00792C77.2944 6.65634 77.3527 7.31361 77.3532 7.97219V8.05827C77.3532 8.03976 77.3421 8.14528 77.3236 8.3767C77.3051 8.60812 77.2949 9.04041 77.2949 9.67264V12.5903C77.7641 12.6487 78.2365 12.6778 78.7093 12.6774C79.461 12.6965 80.2015 12.7255 80.9309 12.7644L80.9892 6.69754C80.9861 6.14227 81.054 5.58887 81.191 5.05077C81.3097 4.5633 81.5369 4.10892 81.8556 3.72152C82.1854 3.34059 82.601 3.0436 83.0683 2.85509C83.6586 2.63303 84.2953 2.56361 84.9196 2.6533C85.3807 2.71443 85.8182 2.89362 86.1896 3.17352C86.5379 3.44416 86.8073 3.8031 86.97 4.21304C87.1491 4.6596 87.2752 5.12561 87.3458 5.60155C87.4205 6.07932 87.4592 6.56203 87.4615 7.04559V25.8246C87.4456 26.6793 87.1627 27.5076 86.6525 28.1934C86.4071 28.5626 86.0711 28.8626 85.6766 29.0649C85.2821 29.2671 84.8424 29.3648 84.3994 29.3486C83.7961 29.3712 83.1978 29.2319 82.6665 28.9451C82.2255 28.6971 81.8567 28.3385 81.5965 27.9046C81.3406 27.4674 81.1644 26.9881 81.0763 26.4893C80.9819 25.9843 80.9335 25.4719 80.9318 24.9582V19.0654H77.293L77.2967 24.9008Z" fill="#FFD04C"/>
                        <path d="M118.835 18.2004C118.842 19.9857 118.427 21.7473 117.623 23.3416C116.819 24.9541 115.652 26.3583 114.214 27.4441C112.927 28.3964 111.464 29.0836 109.91 29.4658C106.827 30.2338 103.579 30.0013 100.637 28.8021C99.2111 28.2288 97.8928 27.4182 96.7379 26.4046C95.5987 25.4 94.6664 24.1828 93.9932 22.8213C93.2877 21.3843 92.9313 19.8011 92.9528 18.2004C92.9315 16.7833 93.1664 15.374 93.6461 14.0404C94.0887 12.8418 94.7333 11.7278 95.5521 10.7469H94.5116C93.6177 10.7725 92.7485 10.4519 92.0854 9.85179C91.7742 9.5834 91.5252 9.25042 91.3558 8.87603C91.1863 8.50163 91.1005 8.09481 91.1042 7.68388C91.0967 7.26454 91.1806 6.84861 91.35 6.46496C91.5195 6.08131 91.7704 5.73916 92.0854 5.46227C92.7485 4.86221 93.6177 4.54152 94.5116 4.56715H102.139V2.71582C102.138 2.33851 102.226 1.96623 102.396 1.62969C102.567 1.29315 102.815 1.00199 103.12 0.780242C103.806 0.273462 104.637 0 105.49 0C106.343 0 107.174 0.273462 107.86 0.780242C108.165 1.00225 108.413 1.29346 108.583 1.62994C108.754 1.96642 108.842 2.33857 108.841 2.71582V4.56715H116.871C117.765 4.54157 118.635 4.86224 119.298 5.46227C119.614 5.73899 119.865 6.08109 120.034 6.46476C120.204 6.84843 120.288 7.26445 120.28 7.68388C120.284 8.09491 120.198 8.50181 120.029 8.87622C119.859 9.25064 119.61 9.58357 119.298 9.85179C118.635 10.4518 117.765 10.7725 116.871 10.7469H116.178C116.999 11.7313 117.653 12.844 118.114 14.0404C118.612 15.37 118.857 16.7809 118.835 18.2004ZM103.12 48.5873C101.776 48.6517 100.444 48.2986 99.3084 47.5765C98.8909 47.3386 98.5398 46.9997 98.2873 46.5908C98.0349 46.182 97.8891 45.7162 97.8635 45.2364V36.9165C97.7857 36.0518 97.7857 35.1819 97.8635 34.3172C97.9142 33.5632 98.2561 32.8585 98.8169 32.352C99.4177 31.8363 100.192 31.5679 100.983 31.6013C101.175 31.6013 101.522 31.6115 102.023 31.63C102.375 31.627 102.725 31.6757 103.063 31.7744C103.512 31.8977 103.92 32.1368 104.248 32.4677C104.537 32.7771 104.763 33.14 104.912 33.5359C105.067 33.9447 105.164 34.3726 105.202 34.8078C105.238 35.2512 105.278 35.6844 105.316 36.1037C105.316 36.258 105.326 36.6144 105.345 37.1729C105.364 37.7314 105.383 38.3284 105.403 38.9641C105.422 39.5991 105.441 40.1853 105.46 40.7228C105.458 41.0522 105.487 41.3811 105.547 41.705C105.861 41.7762 106.18 41.8245 106.501 41.8494C107.021 41.908 107.994 41.937 109.419 41.9364C110.653 41.9364 111.413 41.9173 111.7 41.879C111.99 41.841 112.152 41.8207 112.192 41.8207H131.085C131.505 41.9424 131.912 42.1071 132.299 42.3122C132.622 42.4977 132.913 42.7315 133.165 43.0055C133.43 43.2867 133.61 43.6371 133.685 44.0164C133.812 44.6053 133.81 45.2146 133.68 45.8028C133.551 46.3911 133.296 46.9446 132.933 47.4256C132.556 47.9103 132.027 48.2555 131.432 48.4068C130.891 48.5228 130.602 48.5808 130.565 48.5808L103.12 48.5873ZM107.05 23.3388C108.258 23.1196 109.375 22.5465 110.257 21.692C110.715 21.2369 111.073 20.6908 111.307 20.0888C111.54 19.4869 111.645 18.8426 111.614 18.1976C111.652 17.1696 111.358 16.1567 110.776 15.3086C110.233 14.5528 109.508 13.9475 108.667 13.5498C107.798 13.1403 106.851 12.9237 105.89 12.9148C104.935 12.8858 103.985 13.0732 103.113 13.4628C102.265 13.849 101.537 14.4566 101.005 15.2216C100.42 16.1008 100.126 17.1421 100.167 18.1976C100.139 19.1242 100.358 20.0415 100.802 20.8552C101.195 21.5545 101.75 22.1489 102.421 22.5881C103.085 23.0154 103.834 23.2916 104.616 23.3971C105.425 23.5147 106.247 23.4959 107.05 23.3416V23.3388ZM132.068 20.8552V28.4235C132.028 28.8474 131.975 29.2816 131.894 29.7194C131.808 30.1817 131.632 30.6223 131.374 31.0153C131.143 31.4762 130.781 31.8582 130.333 32.1132C129.742 32.5301 129.035 32.7523 128.311 32.7491C127.721 32.7563 127.14 32.5958 126.637 32.2863C126.238 32.0779 125.892 31.7816 125.625 31.4199C125.399 31.1135 125.205 30.7844 125.047 30.4377C124.89 30.0479 124.783 29.6398 124.729 29.2232V7.22289C124.729 7.03035 124.758 6.59837 124.815 5.92696C124.851 5.33666 124.999 4.75851 125.249 4.2228C125.516 3.79017 125.89 3.43452 126.336 3.191C126.782 2.94748 127.283 2.82452 127.791 2.8343C128.37 2.70462 128.97 2.71562 129.544 2.86639C130.117 3.01715 130.645 3.30328 131.085 3.70072C131.297 3.97539 131.472 4.27664 131.605 4.59677C131.722 4.88815 131.818 5.18724 131.894 5.4919C132.011 5.88654 132.079 6.29413 132.097 6.70545C132.115 7.12926 132.106 7.55385 132.068 7.97639V14.3894C132.22 14.3894 132.531 14.4098 132.994 14.4468C133.456 14.4838 133.937 14.5144 134.439 14.5338C134.942 14.5533 135.411 14.582 135.854 14.6199C136.155 14.6396 136.454 14.6783 136.75 14.7356C137.372 14.815 137.967 15.0429 138.483 15.4002C138.82 15.6752 139.063 16.0492 139.176 16.4694C139.258 16.9563 139.296 17.4494 139.292 17.9431C139.308 18.4377 139.188 18.9273 138.945 19.3584C138.706 19.7337 138.383 20.0489 138.003 20.2793C137.622 20.5097 137.193 20.6491 136.75 20.6867C135.656 20.8097 134.557 20.8678 133.456 20.8608L132.068 20.8552Z" fill="#FFD04C"/>
                        <path d="M19.5471 68.3227C19.5471 67.9386 19.5665 67.3971 19.6044 66.7056C19.6459 65.997 19.782 65.2972 20.009 64.6247C20.2265 63.9551 20.5923 63.3431 21.0791 62.8345C21.3594 62.5703 21.6914 62.3672 22.0542 62.2378C22.4169 62.1084 22.8026 62.0557 23.1868 62.0828C23.9482 62.0684 24.6953 62.2906 25.3251 62.7187C25.8574 63.131 26.2343 63.7115 26.3942 64.3655C26.6569 65.2218 26.8312 66.1027 26.9145 66.9944C27.0095 67.9571 27.0576 68.9201 27.0589 69.8834C27.0601 70.8467 27.041 71.6363 27.0015 72.2522V94.6978C27.0015 95.4112 26.9629 96.2199 26.8858 97.124C26.8086 98.0281 26.6834 98.9537 26.51 99.901C26.3846 100.694 26.1409 101.463 25.787 102.184C25.6473 102.488 25.4622 102.768 25.2381 103.017C24.9875 103.306 24.8046 103.508 24.6892 103.623C24.4 103.917 24.0568 104.153 23.6783 104.316C23.3128 104.47 22.9363 104.596 22.5518 104.692C22.2095 104.78 21.8624 104.847 21.5123 104.895C21.3014 104.925 21.0891 104.944 20.8763 104.952H8.74267C7.86114 104.956 6.98111 104.878 6.11375 104.721C5.28027 104.564 4.49728 104.207 3.83198 103.681C3.33317 103.298 2.94429 102.79 2.70453 102.208C2.46349 101.644 2.28889 101.053 2.18429 100.449C2.09371 99.9242 2.04604 99.393 2.04175 98.8605V67.7451C2.04761 67.1428 2.11493 66.5426 2.24263 65.954C2.36971 65.3209 2.58369 64.7085 2.87854 64.1341C3.15048 63.596 3.53463 63.1226 4.00509 62.7456C4.5022 62.3684 5.11434 62.1745 5.73795 62.1967C6.55393 62.1179 7.37222 62.3217 8.05597 62.7739C8.73971 63.2262 9.24745 63.8994 9.4943 64.6812C9.68197 65.2025 9.79873 65.7468 9.84142 66.2992C9.87969 66.8392 9.91826 67.3782 9.95713 67.9164V68.0321C9.95713 68.3024 9.94604 68.9661 9.92753 70.025C9.90902 71.084 9.89883 72.192 9.89883 73.3473V76.439C9.89883 77.3443 9.9374 77.797 10.0145 77.797L19.4314 77.7386C19.483 77.5304 19.5122 77.3172 19.5184 77.1027C19.5375 76.7942 19.5471 76.4572 19.5471 76.0919V68.3163V68.3227ZM19.5471 97.9043L19.4887 84.9042L16.7469 84.92C14.8195 84.9312 12.9749 85.7048 11.616 87.0717C10.257 88.4386 9.49427 90.2877 9.4943 92.2152V97.9626L19.5471 97.9043ZM43.4099 78.6069C43.5938 78.6061 43.7773 78.6257 43.9569 78.6652C44.1376 78.7041 44.322 78.7233 44.5068 78.7226C44.7169 78.7638 44.9293 78.7928 45.1427 78.8096C45.3729 78.8288 45.604 78.8575 45.836 78.8957C46.2778 78.9797 46.7054 79.1259 47.1061 79.3299C47.5173 79.5282 47.8452 79.8656 48.0317 80.2824C48.309 80.7336 48.4498 81.2553 48.4372 81.7847C48.4372 82.0939 48.4261 82.3725 48.4075 82.6178C48.3822 82.9008 48.3339 83.1813 48.2632 83.4565C48.1854 83.7651 48.0987 84.0921 48.003 84.4377C47.9206 84.7634 47.7263 85.0498 47.4541 85.2467C46.9882 85.5967 46.4583 85.852 45.8944 85.9984C45.1459 86.0792 44.392 86.0984 43.6404 86.0558C42.8898 86.0175 42.1378 86.0175 41.3873 86.0558C41.3651 86.0573 41.3434 86.0632 41.3235 86.0732C41.3037 86.0832 41.286 86.0971 41.2716 86.1141H41.2142L41.1559 86.1715V93.624C41.2336 95.6278 41.2336 97.5924 41.1559 99.5178V100.326C41.1559 100.827 41.1463 101.376 41.1272 101.973C41.1087 102.561 41.0605 103.148 40.9828 103.731C40.909 104.293 40.7736 104.846 40.5792 105.378C40.4071 105.864 40.131 106.306 39.7701 106.674C39.5428 106.94 39.2581 107.151 38.9374 107.291C38.6168 107.431 38.2685 107.497 37.9188 107.483L37.8031 107.426C36.99 107.427 36.2028 107.14 35.5815 106.616C35.0181 106.107 34.583 105.473 34.3115 104.764C34.0225 104.033 33.8374 103.265 33.7616 102.482C33.6845 101.692 33.6459 100.99 33.6459 100.373V65.5207C33.6519 65.1331 33.6906 64.7466 33.7616 64.3655C33.847 63.8928 33.9728 63.4283 34.1375 62.977C34.2874 62.5335 34.5344 62.129 34.8604 61.7931C35.1941 61.4891 35.6028 61.2795 36.0443 61.1858C36.5061 61.0593 36.9819 60.9911 37.4606 60.9831C37.8571 60.9744 38.2511 61.0468 38.6187 61.1958C38.9862 61.3448 39.3194 61.5672 39.598 61.8495C40.0881 62.3027 40.4219 62.8997 40.5514 63.5546C40.644 64.1526 40.7365 64.7774 40.8097 65.4328C40.855 65.6607 40.8746 65.8929 40.868 66.1252C40.9457 66.7815 40.993 67.4545 41.0124 68.1478C41.0318 68.8411 41.0614 69.5363 41.0994 70.2278C41.0994 70.6517 41.109 71.0658 41.1281 71.47C41.1475 71.8745 41.1568 72.2892 41.1568 72.7113C41.119 72.9311 41.1094 73.1547 41.1281 73.3769C41.1472 73.5892 41.1568 73.7913 41.1568 73.9832V77.8543C41.154 78.0715 41.1933 78.2871 41.2725 78.4894C41.2725 78.5282 41.466 78.5477 41.8511 78.5477H42.486C42.7496 78.6199 43.0249 78.6394 43.296 78.6051L43.4099 78.6069Z" fill="#FFD04C"/>
                        <path d="M51.2078 93.5735C50.6578 93.5334 50.1148 93.4265 49.5906 93.2551C49.0099 93.0552 48.4916 92.7067 48.0874 92.2443C47.8425 91.9708 47.6551 91.6509 47.5362 91.3037C47.4172 90.9564 47.3692 90.5888 47.3949 90.2226C47.3702 89.4864 47.6166 88.7666 48.0874 88.2C48.3619 87.8888 48.7096 87.6509 49.0991 87.5076C49.4839 87.3597 49.8802 87.2436 50.2839 87.1605C50.6163 87.0893 50.9549 87.0505 51.2948 87.0448H74.492C75.2622 87.0448 76.0712 87.0834 76.9191 87.1605C77.7161 87.2174 78.4698 87.5438 79.0565 88.0862C79.3765 88.3933 79.6232 88.7686 79.7785 89.184C79.917 89.5933 79.9856 90.0229 79.9812 90.455C79.9868 91.0109 79.8474 91.5587 79.5767 92.0443C79.3128 92.5215 78.8794 92.8822 78.3623 93.0552C77.6865 93.3593 76.9635 93.5449 76.2249 93.6041C75.4936 93.6615 74.762 93.7096 74.0301 93.7485C72.9119 93.7874 72.0452 93.8259 71.4299 93.8642C70.8143 93.9031 70.3025 93.9318 69.8979 93.9512C69.4934 93.9707 69.1084 93.9799 68.7436 93.9799H67.2116L67.1533 102.646C67.175 103.704 66.8051 104.733 66.1147 105.535C65.7969 105.923 65.3878 106.227 64.924 106.418C64.4602 106.609 63.9562 106.683 63.4571 106.632C63.0456 106.596 62.6387 106.519 62.2427 106.401C61.8636 106.289 61.5106 106.102 61.2041 105.853C60.8732 105.572 60.6153 105.215 60.4524 104.813C60.2391 104.252 60.1409 103.654 60.1636 103.054L59.9896 93.9253C58.4882 93.887 57.0827 93.8389 55.7732 93.7809C54.4636 93.7229 52.9419 93.6538 51.2078 93.5735ZM60.4524 68.499C59.0269 68.499 57.5344 68.5469 55.975 68.6425C54.4811 68.7422 52.981 68.6942 51.4966 68.499C51.147 68.4372 50.8224 68.2764 50.5614 68.0357C50.3004 67.795 50.1138 67.4845 50.0238 67.1411C49.6911 66.2856 49.5246 65.3745 49.5332 64.4567C49.5245 64.0739 49.6094 63.6947 49.7805 63.3522C49.9517 63.0097 50.204 62.7142 50.5154 62.4915C51.0976 62.0838 51.7409 61.7714 52.4213 61.5658C53.1823 61.3422 53.9686 61.2159 54.7614 61.19C55.5131 61.1708 56.3122 61.1418 57.1589 61.103C57.6976 61.103 58.315 61.1131 59.0102 61.1326C59.7054 61.152 60.32 61.1613 60.8616 61.1613H65.4834C65.7149 61.1613 65.946 61.1517 66.1768 61.1326C66.4085 61.1135 66.6417 61.1231 66.871 61.1613H68.4882C68.8344 61.1613 69.1812 61.1708 69.5286 61.19C69.876 61.2091 70.2031 61.2187 70.5098 61.2187H71.5503C71.8973 61.2191 72.244 61.2386 72.5889 61.277H73.11C73.2712 61.2787 73.4298 61.3183 73.5728 61.3927C73.8043 61.4695 74.0153 61.5463 74.2088 61.6232C74.5498 61.8125 74.8776 62.0246 75.19 62.2582C75.4992 62.4908 75.7554 62.7864 75.9416 63.1255C76.2842 63.6923 76.5102 64.3217 76.6063 64.9769C76.7022 65.6275 76.7505 66.2844 76.7507 66.9421C76.7507 67.8282 76.7605 68.8199 76.7803 69.9172C76.8 71.0144 76.8192 72.1314 76.8377 73.2681C76.8562 74.4042 76.8658 75.5212 76.8664 76.619C76.867 77.7168 76.8479 78.7085 76.809 79.5941C76.7714 80.0167 76.7618 80.4412 76.7803 80.865C76.7989 81.1544 76.789 81.445 76.7507 81.7324C76.7104 82.0078 76.6428 82.2785 76.5489 82.5405C76.3971 82.9214 76.2131 83.2887 75.999 83.6384C75.6906 84.1785 75.2545 84.6349 74.729 84.9676C74.2155 85.3047 73.6328 85.5221 73.0239 85.6035C72.4479 85.683 71.8611 85.6132 71.3198 85.4008C70.7669 85.1783 70.3007 84.7832 69.9905 84.2743C69.7094 83.8197 69.4589 83.3469 69.2407 82.8589C69.0956 82.5253 68.9888 82.1762 68.9223 81.8185C68.8631 81.4558 68.8534 81.0868 68.8936 80.7216C68.9319 80.3174 68.951 79.7876 68.951 79.1322H51.9011C51.6208 79.1392 51.3408 79.1099 51.068 79.0452C50.8349 78.9789 50.6117 78.8818 50.4043 78.7564C50.161 78.6096 49.9615 78.4002 49.8267 78.1501C49.5746 77.5877 49.4558 76.9747 49.4796 76.3589C49.448 75.7544 49.5883 75.1533 49.8841 74.6251C50.062 74.2804 50.3605 74.0132 50.7227 73.8744C51.0097 73.7979 51.3077 73.721 51.6169 73.6439C51.7355 73.6504 51.8541 73.6305 51.964 73.5856C52.2767 73.5079 52.5959 73.4596 52.9175 73.4412C53.2452 73.4227 53.5812 73.3931 53.9274 73.3542C54.468 73.3162 55.1604 73.2875 56.0092 73.2681L58.6668 73.2098C59.5925 73.1913 60.4975 73.1817 61.3818 73.1811H66.2064C67.1876 73.1811 68.1021 73.2005 68.9501 73.2394V71.0178C68.9501 70.305 68.9115 69.5645 68.8344 68.7962C67.6402 68.7591 66.2631 68.711 64.7031 68.6518C63.143 68.5925 61.7471 68.5447 60.5154 68.5083L60.4524 68.499ZM89.8026 105.764C89.5913 106.285 89.2028 106.715 88.7057 106.977C88.2863 107.245 87.8114 107.413 87.3172 107.469C86.8176 107.526 86.3127 107.517 85.8157 107.44C85.2798 107.345 84.7801 107.105 84.3708 106.746C84.0144 106.424 83.7458 106.016 83.5904 105.562C83.4219 105.1 83.2871 104.627 83.1868 104.147C83.0805 103.575 83.0321 102.995 83.0424 102.414V65.7785C83.0423 65.2374 83.0809 64.6969 83.1581 64.1614C83.2252 63.6627 83.3311 63.1699 83.4747 62.6877C83.5861 62.2868 83.7947 61.9196 84.0819 61.6185C84.435 61.2345 84.9001 60.9715 85.4112 60.8669C85.9077 60.7875 86.4099 60.7491 86.9127 60.7521C87.5481 60.7463 88.1712 60.9272 88.7048 61.2724C89.2388 61.6126 89.6448 62.1205 89.859 62.7164C90.2025 63.5122 90.3985 64.3637 90.4376 65.2296C90.4758 66.0935 90.5144 66.9698 90.5533 67.8585C90.6292 70.9403 90.6483 74.0216 90.6107 77.1022C90.573 80.1828 90.5539 83.091 90.5533 85.8266V100.267C90.5521 101.164 90.5039 102.06 90.4089 102.951C90.3016 103.905 90.0985 104.846 89.8026 105.759V105.764Z" fill="#FFD04C"/>
                    </svg>
                </LoadTitle>
                <ProgressBar>
                    <Bar></Bar>
                </ProgressBar>
            </Grid>
        </Load>
    )
}

export default Loding;

const BarWidth = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const Load = styled.div`
    height: 100vh;
    background-color: #fffbf1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        margin-bottom: 20px;
    }
`

const LoadTitle = styled.div`
    
`

const ProgressBar = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 12px;
    margin: 120px 0 0;
    border-radius: 36px;
    background-color: #ffd04c;
`

const Bar = styled.div`
    position: absolute; 
    left: 0; 
    top: 0;
    bottom: 0; 
    background-color: #ebebeb;
    width: 0%;
    height: 12px;
    animation: ${BarWidth} 3s 1 linear;
`
