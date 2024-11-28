export default function Header() {
  return (
    <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-gray-500 backdrop-blur-3xl bg-opacity-40 shadow-lg w-4/12 sm:w-4/12 md:w-4/12 rounded-full">
      <nav className="space-x-4 text-center flex justify-center items-center gap-6 px-2 py-4 text-white">
        <a
          href="#about"
          className="hover:text-teal-400 transition font-semibold flex items-center gap-1 group"
        >
          <span className="icon">
            <svg
              className="w-4 h-4 fill-current text-white transition group-hover:text-teal-400"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>about</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="about-white"
                  fill="currentColor"
                  transform="translate(42.666667, 42.666667)"
                >
                  <path
                    d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
          <span className="text">About</span>
        </a>

        <a
          href="#skills"
          className="hover:text-teal-400 transition font-semibold flex items-center gap-1 group"
        >
          <span>
            <svg
              className="w-4 h-4 fill-current text-white transition group-hover:text-teal-400"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  class="st0"
                  d="M283.92,374.523c-3.227-1.207-6.742-2.87-10.316-4.839l-59.776,82.622l-4.251-54.124h-31.765l-4.257,54.133
		l-59.774-82.631c-3.677,2.06-7.225,3.747-10.323,4.839C72.164,385.542-4.734,417.233,0.229,476.594
		c1.192,14.245,79.52,29.028,193.462,29.028c113.937,0,192.274-14.782,193.466-29.028
		C392.12,417.175,315.023,386.155,283.92,374.523z"
                />
                <path
                  class="st0"
                  d="M123.113,251.946c4.35,24.652,11.663,46.399,21.3,57.111c0,12.847,0,22.22,0,29.722
		c0,0.753-0.132,1.546-0.352,2.366l33.751,16.254v23.841h31.765v-23.848l33.73-16.238c-0.211-0.819-0.339-1.614-0.339-2.374
		c0-7.503,0-16.876,0-29.722c9.637-10.712,16.95-32.46,21.301-57.111c10.15-3.623,15.948-9.422,23.191-34.792
		c7.71-27.025-11.593-26.107-11.593-26.107c15.613-51.676-4.938-100.242-39.359-96.677c-23.742-41.534-103.254,9.488-128.178,5.931
		c0,14.244,5.931,24.924,5.931,24.924c-8.66,16.445-5.319,49.236-2.878,65.822c-1.414-0.025-18.868,0.157-11.465,26.107
		C107.164,242.524,112.963,248.323,123.113,251.946z"
                />
                <path
                  class="st0"
                  d="M503.687,61.893c-7.999-16.685-21.135-30.524-37.382-40.228c-16.263-9.695-35.686-15.271-56.54-15.287
		c-27.765,0.016-53.062,9.918-71.658,26.322c-9.293,8.206-16.924,18.066-22.24,29.193c-5.327,11.109-8.318,23.492-8.318,36.464
		c-0.008,16.528,4.877,32.08,13.24,45.324c7.144,11.324,16.805,21.011,28.2,28.588l-17.161,42.866l12.392-1.53
		c42.812-5.353,83.793-21.376,103.257-29.788c18.492-6.601,34.454-17.885,45.944-32.543c11.564-14.758,18.592-33.098,18.579-52.918
		C512.013,85.386,509.005,73.003,503.687,61.893z M482.675,140.777c-9.62,12.301-23.497,22.244-39.926,28.018l-0.223,0.066
		l-0.224,0.1c-16.842,7.312-50.911,20.589-87.126,26.893l12.276-30.624l-6.026-3.449c-12.16-6.948-22.116-16.412-28.97-27.273
		c-6.861-10.895-10.626-23.121-10.637-36.15c0-10.232,2.328-19.953,6.63-28.953c6.439-13.475,17.421-25.263,31.517-33.676
		c14.1-8.412,31.264-13.409,49.798-13.401c24.751-0.008,46.998,8.884,62.827,22.873c7.908,6.99,14.212,15.221,18.505,24.204
		c4.297,9,6.626,18.72,6.634,28.953C497.723,113.941,492.312,128.451,482.675,140.777z"
                />
                <path
                  class="st0"
                  d="M369.454,88.207c-6.129,0-11.098,5.559-11.098,12.391c0,6.849,4.968,12.4,11.098,12.4
		c6.13,0,11.105-5.551,11.105-12.4C380.559,93.766,375.583,88.207,369.454,88.207z"
                />
                <path
                  class="st0"
                  d="M412.275,88.207c-6.134,0-11.109,5.559-11.109,12.391c0,6.849,4.976,12.4,11.109,12.4
		c6.13,0,11.101-5.551,11.101-12.4C423.376,93.766,418.405,88.207,412.275,88.207z"
                />
                <path
                  class="st0"
                  d="M455.083,88.207c-6.129,0-11.102,5.559-11.102,12.391c0,6.849,4.972,12.4,11.102,12.4
		c6.138,0,11.109-5.551,11.109-12.4C466.193,93.766,461.221,88.207,455.083,88.207z"
                />
              </g>
            </svg>
          </span>
          <span>Skills</span>
        </a>
        <a
          href="#projects"
          className="hover:text-teal-400 transition font-semibold flex items-center gap-1 group"
        >
          <span className="icon">
            <svg
              className="w-3 h-3 fill-current text-white transition group-hover:text-teal-400"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                stroke-width="2"
                d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"
              />
            </svg>
          </span>
          <span className="text">Projects</span>
        </a>
        <a
          href="#contact"
          className="hover:text-teal-400 transition font-semibold flex items-center gap-1 group"
        >
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current text-white transition group-hover:text-teal-400"
            >
              <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
            </svg>
          </span>
          <span className="text">Contact</span>
        </a>
      </nav>
    </header>
  );
}