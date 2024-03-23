import React from "react";

interface Props {
    color?: string;
    size: string
}

export default function LogoIcon({color = "#f2f2f2", size}: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.03601 25.9698C6.02724 25.9709 6.01837 25.9709 6.0096 25.9698C5.86557 25.942 5.71951 25.9261 5.57288 25.9221C5.54038 25.9221 5.50788 25.9221 5.47132 25.9221C4.70229 25.9221 3.96477 26.2276 3.42099 26.7714C2.8772 27.3152 2.57171 28.0527 2.57171 28.8217V28.8288C2.57481 29.3966 2.74462 29.951 3.06005 30.4232C3.37547 30.8953 3.82263 31.2645 4.34601 31.4847C3.2079 31.1285 2.20998 30.4247 1.49244 29.4721C0.774895 28.5196 0.373786 27.3662 0.345459 26.174C0.345459 26.1313 0.345459 26.0877 0.345459 26.043C0.345459 25.2888 0.645067 24.5654 1.17837 24.0321C1.71168 23.4988 2.435 23.1992 3.18921 23.1992C3.21155 23.1992 3.23593 23.1992 3.25827 23.1992C3.9885 23.2159 4.68429 23.513 5.20143 24.0288C5.71858 24.5446 6.01742 25.2397 6.03601 25.9698Z"
                fill={color}
            />
            <path
                d="M11.699 26.7995C11.5155 28.1685 10.8415 29.4245 9.80203 30.3341C8.76257 31.2437 7.42833 31.7453 6.04706 31.7456C5.85003 31.7456 5.65604 31.7354 5.46409 31.7171C5.08723 31.6775 4.71511 31.6013 4.353 31.4896C3.82912 31.2682 3.38194 30.8976 3.06717 30.4239C2.7524 29.9502 2.58394 29.3944 2.58276 28.8257V28.8186C2.58276 28.0495 2.88826 27.312 3.43204 26.7682C3.97582 26.2244 4.71335 25.9189 5.48237 25.9189C5.51487 25.9189 5.54737 25.9189 5.58394 25.9189C5.73059 25.9226 5.87668 25.9385 6.02065 25.9667C6.02878 25.9667 6.03792 25.9667 6.04706 25.9667C6.07039 25.9651 6.0938 25.9651 6.11714 25.9667C6.11714 25.985 6.11714 26.0205 6.11714 26.0388C6.10873 26.7329 6.35446 27.406 6.80802 27.9315C7.26158 28.4569 7.89166 28.7983 8.57951 28.8913C9.26736 28.9844 9.9655 28.8226 10.5423 28.4366C11.1192 28.0505 11.5349 27.4668 11.7112 26.7954L11.699 26.7995Z"
                fill={color}
            />
            <path
                d="M11.7488 26.0424C11.7487 26.2954 11.7321 26.5482 11.699 26.799C11.5227 27.4704 11.107 28.0541 10.5302 28.4402C9.9533 28.8262 9.25517 28.988 8.56732 28.8949C7.87947 28.8019 7.24939 28.4605 6.79583 27.9351C6.34226 27.4096 6.09653 26.7364 6.10495 26.0424C6.10495 26.0241 6.10495 26.0068 6.10495 25.9875V25.9703C6.84734 25.9705 7.56039 25.6804 8.09175 25.1619C8.62312 24.6435 8.93067 23.9378 8.9487 23.1956C8.95022 23.1712 8.95022 23.1468 8.9487 23.1225C8.94896 22.524 8.76043 21.9408 8.40995 21.4557C8.05947 20.9707 7.56491 20.6085 6.99666 20.4209C8.19741 20.6241 9.30161 21.2063 10.1477 22.0822C10.9938 22.9581 11.5374 24.0817 11.699 25.2888C11.732 25.5386 11.7486 25.7904 11.7488 26.0424Z"
                fill={color}
            />
            <path
                d="M8.95256 23.1227C8.95408 23.1471 8.95408 23.1715 8.95256 23.1958C8.93453 23.938 8.62698 24.6437 8.09562 25.1622C7.56425 25.6806 6.8512 25.9707 6.10881 25.9705H6.03873C6.02064 25.2398 5.72189 24.5441 5.20448 24.0279C4.68707 23.5116 3.99073 23.2144 3.25998 23.1979C3.23764 23.1979 3.21326 23.1979 3.19092 23.1979C2.43671 23.1979 1.71339 23.4975 1.18008 24.0308C0.646776 24.5641 0.347168 25.2874 0.347168 26.0416C0.347455 25.2121 0.528696 24.3925 0.878252 23.6402C1.22781 22.8879 1.73727 22.2209 2.3711 21.6856C3.00493 21.1504 3.74788 20.7599 4.54814 20.5414C5.34839 20.3228 6.1867 20.2814 7.00459 20.4201C7.57224 20.6085 8.06604 20.9711 8.41576 21.4563C8.76548 21.9415 8.95332 22.5246 8.95256 23.1227Z"
                fill={color}
            />
            <path
                d="M24.1465 19.626C22.7897 20.2993 21.5516 21.0032 20.7533 21.6572C18.0039 21.846 15.2687 22.2042 12.5633 22.7297C12.3218 22.7691 12.0745 22.7129 11.8737 22.573C11.673 22.4331 11.5345 22.2205 11.4878 21.9803C11.4411 21.7402 11.4897 21.4912 11.6233 21.2862C11.757 21.0813 11.9652 20.9364 12.2038 20.8823C16.1406 20.1171 20.1367 19.6968 24.1465 19.626Z"
                fill={color}
            />
            <path
                d="M40.4219 22.2427C40.3776 22.4525 40.2626 22.6407 40.0963 22.776C39.93 22.9113 39.7223 22.9855 39.5079 22.9862C39.4417 22.9865 39.3756 22.9797 39.3108 22.9659C34.7318 21.9911 30.0632 21.4989 25.3815 21.4973H25.3551C23.8215 21.4973 22.2883 21.5501 20.7554 21.6557C21.5537 21.0047 22.7866 20.3009 24.1486 19.6245C24.5508 19.6177 24.9529 19.614 25.3551 19.6133H25.3826C30.1957 19.6145 34.9954 20.1207 39.7029 21.1235C39.8237 21.1496 39.9381 21.1993 40.0396 21.2698C40.1412 21.3402 40.2278 21.43 40.2946 21.5339C40.3614 21.6379 40.407 21.754 40.4289 21.8756C40.4507 21.9973 40.4484 22.122 40.4219 22.2427Z"
                fill={color}
            />
            <path
                d="M38.1874 26.7247H13.7586C13.5092 26.7247 13.2699 26.6256 13.0936 26.4492C12.9172 26.2729 12.8181 26.0336 12.8181 25.7842C12.8181 25.5348 12.9172 25.2956 13.0936 25.1192C13.2699 24.9428 13.5092 24.8438 13.7586 24.8438H38.1874C38.4368 24.8438 38.6761 24.9428 38.8524 25.1192C39.0288 25.2956 39.1279 25.5348 39.1279 25.7842C39.1279 26.0336 39.0288 26.2729 38.8524 26.4492C38.6761 26.6256 38.4368 26.7247 38.1874 26.7247Z"
                fill={color}
            />
            <path
                d="M19.6809 14.8994C17.674 15.5393 16.1861 16.6717 15.8804 17.7239C13.9282 18.3167 12.0359 19.0913 10.2284 20.0375C10.0076 20.1536 9.74961 20.1772 9.51134 20.1031C9.27306 20.029 9.07398 19.8633 8.95789 19.6424C8.84179 19.4215 8.8182 19.1636 8.89229 18.9253C8.96638 18.687 9.13209 18.4879 9.35296 18.3718C12.592 16.6795 16.0773 15.5077 19.6809 14.8994Z"
                fill={color}
            />
            <path
                d="M42.6259 19.9457C42.5669 20.0543 42.4869 20.1502 42.3907 20.2277C42.2944 20.3053 42.1838 20.3631 42.0651 20.3977C41.9465 20.4323 41.8222 20.4432 41.6993 20.4296C41.5764 20.416 41.4575 20.3782 41.3493 20.3185C38.9985 19.0332 36.4986 18.0419 33.9058 17.3671C34.4232 17.3038 34.9351 17.202 35.4373 17.0624C36.0417 16.8981 36.6296 16.6781 37.1933 16.4053C38.9373 17.0222 40.6284 17.7793 42.2501 18.6691C42.4692 18.7887 42.6318 18.9903 42.7022 19.2297C42.7727 19.469 42.7453 19.7266 42.6259 19.9457Z"
                fill={color}
            />
            <path
                d="M37.1932 16.4079C36.6293 16.6797 36.0414 16.8986 35.4372 17.062C34.935 17.2016 34.423 17.3034 33.9056 17.3667C32.7019 17.0511 31.4812 16.8046 30.2494 16.6283C28.7177 16.4087 27.1725 16.297 25.6252 16.2942C25.3591 16.2942 25.0907 16.2965 24.8198 16.3013C21.7895 16.3628 18.7821 16.8412 15.8823 17.7231C16.187 16.671 17.6759 15.5385 19.6828 14.8987C20.936 14.6863 22.2 14.5432 23.469 14.4701C23.901 14.4437 24.3391 14.4261 24.7833 14.4173C29.0065 14.3264 33.2113 15.0008 37.1942 16.4079H37.1932Z"
                fill={color}
            />
            <path
                d="M24.1465 32.1961C22.7897 31.5227 21.5516 30.8199 20.7533 30.1648C18.0039 29.9756 15.2688 29.6174 12.5633 29.0923C12.3218 29.053 12.0745 29.1092 11.8737 29.2491C11.673 29.389 11.5345 29.6015 11.4878 29.8417C11.4411 30.0819 11.4897 30.3309 11.6233 30.5358C11.757 30.7408 11.9652 30.8857 12.2038 30.9398C16.1406 31.7049 20.1367 32.1253 24.1465 32.1961Z"
                fill={color}
            />
            <path
                d="M40.4219 29.5755C40.3776 29.3657 40.2626 29.1775 40.0963 29.0422C39.93 28.9069 39.7223 28.8327 39.5079 28.832C39.4417 28.8319 39.3757 28.8383 39.3108 28.8513C34.7319 29.8271 30.0632 30.3193 25.3815 30.3199H25.3551C23.8215 30.3199 22.2883 30.2674 20.7554 30.1625C21.5537 30.8135 22.7866 31.5163 24.1486 32.1938C24.5508 32.2019 24.9529 32.2056 25.3551 32.2049H25.3826C30.1956 32.2041 34.9954 31.6982 39.7029 30.6957C39.8238 30.6696 39.9383 30.6198 40.0399 30.5494C40.1415 30.4789 40.2282 30.389 40.295 30.2849C40.3619 30.1808 40.4075 30.0646 40.4292 29.9428C40.451 29.8211 40.4485 29.6963 40.4219 29.5755Z"
                fill={color}
            />
            <path
                d="M19.6808 36.9185C17.6739 36.2786 16.186 35.1462 15.8803 34.094C13.9281 33.5012 12.0359 32.7266 10.2284 31.7804C10.008 31.668 9.7522 31.647 9.51642 31.7218C9.28063 31.7967 9.08385 31.9615 8.9687 32.1804C8.85354 32.3994 8.8293 32.6549 8.90121 32.8916C8.97312 33.1283 9.13541 33.3271 9.3529 33.445C12.5919 35.1378 16.0772 36.3099 19.6808 36.9185Z"
                fill={color}
            />
            <path
                d="M42.6259 31.8723C42.545 31.724 42.4256 31.6003 42.2803 31.5142C42.135 31.428 41.9691 31.3826 41.8002 31.3828C41.6424 31.3827 41.4872 31.4229 41.3493 31.4996C38.9987 32.786 36.4987 33.7782 33.9058 34.4541C34.4231 34.5148 34.9351 34.6146 35.4373 34.7527C36.0417 34.917 36.6296 35.137 37.1933 35.4098C38.937 34.7934 40.6281 34.0373 42.2501 33.149C42.4692 33.0294 42.6318 32.8278 42.7022 32.5884C42.7727 32.3491 42.7453 32.0915 42.6259 31.8723Z"
                fill={color}
            />
            <path
                d="M37.1932 35.4098C36.6294 35.137 36.0415 34.9171 35.4372 34.7527C34.9349 34.6147 34.4229 34.5149 33.9056 34.4541C32.7018 34.7689 31.4811 35.015 30.2494 35.1915C28.7177 35.411 27.1725 35.523 25.6252 35.5266C25.3591 35.5266 25.0907 35.5243 24.8198 35.5195C21.7896 35.457 18.7823 34.9786 15.8823 34.0977C16.187 35.1498 17.6759 36.2823 19.6828 36.9221C20.936 37.1345 22.2 37.2776 23.469 37.3507C23.901 37.3771 24.3391 37.3947 24.7833 37.4035C26.6209 37.4424 28.4587 37.3371 30.2798 37.0887C32.6356 36.7668 34.9522 36.2042 37.1932 35.4098Z"
                fill={color}
            />
            <path
                d="M48.8597 28.8001C48.3881 28.8002 47.9239 28.683 47.5089 28.4591C47.0938 28.2352 46.741 27.9115 46.4821 27.5173L44.3696 29.2155V26.844H40.3203C40.4865 27.8938 40.9427 28.8762 41.6373 29.6807C42.3319 30.4852 43.2374 31.0796 44.2518 31.397C44.6139 31.5088 44.986 31.585 45.3629 31.6245C45.5548 31.6428 45.7498 31.653 45.9459 31.653C47.328 31.6548 48.6639 31.1548 49.7051 30.2458C50.7463 29.3368 51.4222 28.0807 51.607 26.7109C51.4404 27.3116 51.0816 27.8412 50.5854 28.2185C50.0892 28.5958 49.483 28.8001 48.8597 28.8001Z"
                fill={color}
            />
            <path
                d="M51.6565 25.9526C51.6564 26.2053 51.6398 26.4577 51.6068 26.7082C51.4634 27.2375 51.17 27.714 50.762 28.0803C50.3541 28.4467 49.8489 28.6872 49.3073 28.7731C48.7658 28.859 48.2109 28.7864 47.7096 28.5642C47.2084 28.342 46.782 27.9797 46.4819 27.5207L48.5944 25.8206L47.8419 25.2112C48.1512 24.9526 48.4019 24.6309 48.577 24.2676C48.7521 23.9044 48.8478 23.5079 48.8575 23.1048C48.8575 23.0794 48.8575 23.055 48.8575 23.0307C48.8578 22.4324 48.6694 21.8492 48.3191 21.3642C47.9689 20.8791 47.4745 20.5169 46.9065 20.3291C48.1062 20.533 49.2092 21.1152 50.0545 21.9906C50.8998 22.8661 51.443 23.9888 51.6047 25.195C51.6385 25.4461 51.6558 25.6992 51.6565 25.9526Z"
                fill={color}
            />
            <path
                d="M46.9087 20.3295C45.4532 20.0824 43.9586 20.4093 42.7391 21.2413C41.5195 22.0734 40.67 23.3458 40.3691 24.7911H44.3697V22.4186L46.4822 24.1178L47.8421 25.2116C48.1515 24.9529 48.4021 24.6312 48.5773 24.268C48.7524 23.9048 48.848 23.5083 48.8577 23.1052C48.8577 23.0798 48.8577 23.0554 48.8577 23.031C48.8582 22.433 48.6701 21.85 48.3202 21.365C47.9703 20.88 47.4764 20.5176 46.9087 20.3295Z"
                fill={color}
            />
        </svg>
    );
}
