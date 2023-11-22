import React from "react";
import Link from "next/link";
import Button from "../components/button";

export default function Links() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center pt-6 px-9">
        <Link href="/" className="hidden sm:block text-2xl font-bold">
          config<span className="text-accent">.json</span>
        </Link>
        <div className="text-sm md:text-base flex justify-end items-center gap-9 w-full">
          <Link href={"/links"}>Links</Link>
          <Button link={true} href={"/work"}>
            Work
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-6 px-6 items-center justify-center">
        <h4 className="text-xl lg:text-2xl text-center">Socials</h4>
        <Link
          href={"https://twitter.com/config_json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_28)">
              <path
                d="M11.9047 8.46958L19.3513 0H17.5873L11.1187 7.35251L5.956 0H0L7.80867 11.1194L0 19.9999H1.764L8.59067 12.2338L14.044 19.9999H20M2.40067 1.30158H5.11067L17.586 18.7623H14.8753"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_28">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>@config_json</p>
        </Link>
        <Link
          href={"https://medium.com/@config.json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_48)">
              <path
                d="M20 9.85653C20 12.506 19.556 14.6551 19.0081 14.6551C18.4602 14.6551 18.0164 12.5065 18.0164 9.85653C18.0164 7.20652 18.4604 5.05798 19.0081 5.05798C19.5558 5.05798 20 7.20633 20 9.85653Z"
                fill="inherit"
              />
              <path
                d="M17.4691 9.85646C17.4691 12.8142 16.2064 15.2129 14.6487 15.2129C13.0911 15.2129 11.8284 12.8142 11.8284 9.85646C11.8284 6.8987 13.0909 4.5 14.6485 4.5C16.2062 4.5 17.4689 6.89793 17.4689 9.85646"
                fill="inherit"
              />
              <path
                d="M11.2812 9.8565C11.2812 12.9988 8.75578 15.5461 5.6407 15.5461C2.52561 15.5461 0 12.9982 0 9.8565C0 6.71481 2.52542 4.16675 5.6407 4.16675C8.75598 4.16675 11.2812 6.71423 11.2812 9.8565Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_48">
                <rect width="20" height="20" fill="inherit" />
              </clipPath>
            </defs>
          </svg>
          <p>@config.json</p>
        </Link>
        <Link
          href={"https://youtube.com/@config_json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <g clip-path="url(#clip0_1036_52)">
              <path
                d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79687 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0_1036_52">
                <rect width="20" height="20" fill="inherit" />
              </clipPath>
            </defs>
          </svg>
          <p>@config_json</p>
        </Link>
        <Link
          href={"https://github.com/config-json"}
          target="_blank"
          className="w-full max-w-lg flex gap-4 justify-center border-2 rounded-md px-6 py-3 fill-white hover:fill-background hover:text-background hover:bg-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="inherit"
          >
            <g clip-path="url(#clip0_1217_4)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0002 0.416626C7.62627 0.417858 5.33013 1.25867 3.52241 2.78873C1.71469 4.31878 0.513273 6.4383 0.132974 8.76829C-0.247325 11.0983 0.218293 13.4868 1.44658 15.5068C2.67487 17.5267 4.58572 19.0464 6.83746 19.7941C7.33423 19.8863 7.52135 19.5784 7.52135 19.3166C7.52135 19.0548 7.51141 18.2958 7.5081 17.466C4.72618 18.0669 4.13834 16.292 4.13834 16.292C3.68462 15.1395 3.02888 14.8365 3.02888 14.8365C2.12145 14.2208 3.09678 14.2323 3.09678 14.2323C4.10192 14.3031 4.63015 15.258 4.63015 15.258C5.52103 16.7777 6.96993 16.3381 7.53956 16.0813C7.62898 15.4375 7.88896 14.9995 8.17543 14.7509C5.95321 14.5007 3.61839 13.6478 3.61839 9.83781C3.60461 8.84972 3.97337 7.89417 4.64836 7.16886C4.5457 6.9186 4.20292 5.90765 4.74606 4.53449C4.74606 4.53449 5.58561 4.26776 7.49652 5.55366C9.13558 5.10798 10.8649 5.10798 12.504 5.55366C14.4132 4.26776 15.2511 4.53449 15.2511 4.53449C15.7959 5.90436 15.4531 6.9153 15.3505 7.16886C16.0276 7.89429 16.3971 8.8515 16.3821 9.8411C16.3821 13.6593 14.0423 14.5007 11.8168 14.746C12.1744 15.0555 12.494 15.6598 12.494 16.5884C12.494 17.9188 12.4824 18.989 12.4824 19.3166C12.4824 19.5817 12.6629 19.8912 13.1696 19.7941C15.4216 19.0463 17.3327 17.5264 18.561 15.5061C19.7892 13.4858 20.2546 11.0969 19.8739 8.76667C19.4931 6.43646 18.2911 4.31692 16.4828 2.78713C14.6745 1.25734 12.3778 0.417077 10.0035 0.416626H10.0002Z"
                fill="inherit"
              />
              <path
                d="M6.68986 16.646C6.68986 16.7267 6.59713 16.7959 6.47791 16.7975C6.35868 16.7991 6.26099 16.7333 6.26099 16.6526C6.26099 16.5719 6.35371 16.5028 6.47294 16.5011C6.59216 16.4995 6.68986 16.5637 6.68986 16.646Z"
                fill="none"
              />
              <path
                d="M7.45154 16.5193C7.46644 16.6 7.38365 16.684 7.26442 16.7037C7.1452 16.7235 7.04087 16.6757 7.02597 16.5967C7.01107 16.5177 7.09718 16.432 7.21309 16.4106C7.329 16.3892 7.43664 16.4386 7.45154 16.5193Z"
                fill="none"
              />
              <path
                d="M5.87185 16.5901C5.84701 16.6675 5.73441 16.702 5.62181 16.6691C5.50921 16.6362 5.43469 16.544 5.45622 16.4649C5.47775 16.3859 5.592 16.3497 5.70626 16.3859C5.82052 16.4221 5.89338 16.5094 5.87185 16.5901Z"
                fill="none"
              />
              <path
                d="M5.12168 16.2674C5.06704 16.3283 4.95609 16.3118 4.86502 16.2295C4.77394 16.1472 4.75241 16.0352 4.80706 15.9759C4.8617 15.9167 4.97265 15.9331 5.06703 16.0138C5.16142 16.0945 5.17964 16.2081 5.12168 16.2674V16.2674Z"
                fill="none"
              />
              <path
                d="M4.58685 15.7142C4.52558 15.757 4.42125 15.7142 4.3633 15.6286C4.34727 15.6132 4.33453 15.5948 4.32582 15.5744C4.31711 15.5541 4.31262 15.5322 4.31262 15.51C4.31262 15.4879 4.31711 15.466 4.32582 15.4456C4.33453 15.4253 4.34727 15.4068 4.3633 15.3915C4.42457 15.3503 4.52889 15.3915 4.58685 15.4755C4.64481 15.5594 4.64646 15.6714 4.58685 15.7142V15.7142Z"
                fill="none"
              />
              <path
                d="M4.19273 15.1428C4.15844 15.16 4.11921 15.1648 4.08175 15.1563C4.04429 15.1479 4.01094 15.1268 3.9874 15.0967C3.92282 15.0275 3.90957 14.932 3.95924 14.8892C4.00892 14.8464 4.09835 14.8662 4.16293 14.9353C4.22751 15.0045 4.24241 15.1 4.19273 15.1428Z"
                fill="none"
              />
              <path
                d="M3.78705 14.6933C3.76552 14.7427 3.68604 14.7575 3.62146 14.7229C3.55688 14.6883 3.50886 14.6241 3.53205 14.5731C3.55523 14.522 3.63306 14.5089 3.69764 14.5434C3.76222 14.578 3.81189 14.6439 3.78705 14.6933Z"
                fill="none"
              />
            </g>
            <defs>
              <clipPath id="clip0_1217_4">
                <rect width="20" height="20" fill="inherit" />
              </clipPath>
            </defs>
          </svg>
          <p>@config-json</p>
        </Link>
      </div>
    </div>
  );
}
