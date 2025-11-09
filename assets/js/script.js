:root {
  --bs-black: #282a35;
  --bs-pink: #ffc0c7;
  --bs-yellow: #fff4a3;

  --bs-white: #ffffff;

  --bs-neowhite: #e7e9eb;
  --sidebar-bg: #f1f1f1;
  --border-color: #dcdcdc;
}
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", "source sans 3", sans-serif;
  width: 100%;
  background-color: var(--bs-white);
  color: var(--bs-black);
}

header {
  height: 80px;
  background-color: var(--bs-white);
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

/**** utility class ****/
.btn {
  padding: 10px;
  cursor: pointer;
}
.bg-black {
  background-color: var(--bs-black);
  color: var(--bs-white);
}
.bg-pink {
  background-color: var(--bs-pink);
  color: var(--bs-black);
}
.bg-yellow {
  background-color: var(--bs-yellow);
  color: var(--bs-black);
}
.text-white {
  color: var(--bs-white);
}

/**** logo ****/
.logo {
  width: 80px;
  padding: 0px 5px;
  margin-right: 5px;
}
.logo img {
  width: 100%;
  object-fit: contain;
}

/**** header-left ****/
.header-left {
  display: flex;
  align-items: center;
  height: 100%;
}
.header-left .menu-btn {
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0px 15px;
  font-size: 18px;
  font-weight: 600;
  color: var(--bs-black);
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
}
.header-left .menu-btn.text-white {
  color: var(--bs-black);
}
.header-left .menu-btn:hover {
  background-color: rgb(200, 197, 197);
}
.header-left .menu-btn:first-child {
  padding: 0;
}
.header-left .menu-btn:first-child:hover {
  background-color: transparent;
}
.fa-solid {
  padding: 0px 3px;
}

/**** header-right ****/
.LightDark {
  transform: rotate(180deg);
}
.LightDark:hover {
  color: inherit;
}
#light-dark-toggle {
  color: var(--bs-black);
  padding: 5px 8px;
  border-radius: 5px;
  transition: background-color 0.2s;
}
#light-dark-toggle:hover {
  background-color: var(--bs-neowhite);
}
body.dark-mode #light-dark-toggle:hover {
  background-color: var(--sidebar-bg);
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 18px;
}
.header-right a {
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 60px;
  padding: 10px 20px;
}
.header-right a:last-child {
  padding: 10px 45px;
}
.header-right a:hover {
  opacity: 0.8;
}

/**** nested-navigation ****/
.nested-navigation {
  background-color: var(--bs-black);
  color: white;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding-bottom: 50px;
  z-index: 99;
}

.nested_navigation_hidden {
  display: none;
}

.nested-navigation-close-btn {
  position: absolute;
  right: 0;
}
.nested-navigation-close-btn button {
  font-size: 30px;
  padding: 30px;
  background-color: transparent;
  border: none;
  color: var(--bs-white);
  cursor: pointer;
}
.nested-navigation-close-btn button:hover {
  background-color: var(--bs-white);
  color: var(--bs-black);
}
.nested-navigation-content {
  width: 80%;
  margin: auto;
  padding-top: 50px;
}
.nested-navigation-content h1 {
  margin: 0;
  color: var(--bs-yellow);
}
.nasted-navigation-content-data {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
}
.nested-navigation-item {
  margin-right: 20px;
}
.nested-navigation-item h2 {
  color: var(--bs-yellow);
  margin-top: 30px;
}
.nested-navigation-item a,
.nested-navigation-item .nav-topic-btn {
  display: block;
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: 550;
  padding: 5px 7px;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;
}
.nested-navigation-item a:hover,
.nested-navigation-item .nav-topic-btn:hover {
  background-color: var(--bs-neowhite);
  color: var(--bs-black);
}

.main-container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
}

.sidebar {
  width: 250px;
  background-color: var(--sidebar-bg);
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  border-right: 1px solid var(--border-color);
}

.sidebar h2 {
  font-size: 20px;
  margin-top: 0;
  color: var(--bs-black);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: var(--bs-black);
  border-radius: 5px;
  font-weight: 500;
}

.sidebar ul li a:hover {
  background-color: #ddd;
}

.sidebar ul li a.active {
  background-color: var(--bs-black);
  color: var(--bs-white);
}

.content-area {
  flex-grow: 1;
  padding: 30px;
  height: 100%;
  overflow-y: auto;
  line-height: 1.6;
}

.content-area h1 {
  color: var(--bs-black);
  border-bottom: 2px solid var(--bs-yellow);
  padding-bottom: 10px;
}

.content-area p {
  font-size: 16px;
  margin-bottom: 20px;
}

.content-area pre {
  background-color: var(--sidebar-bg);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 15px;
  overflow-x: auto;
  font-family: "Courier New", Courier, monospace;
}

.content-area code {
  font-family: "Courier New", Courier, monospace;
  background-color: var(--bs-sidebar-bg);
  padding: 2px 4px;
  border-radius: 3px;
}

body.dark-mode {
  --bs-black: #e7e9eb;
  --bs-white: #282a35;
  --bs-neowhite: #4a4c5a;
  --sidebar-bg: #3a3c4a;
  --border-color: #555761;
}

body.dark-mode .logo img {
  filter: invert(1);
}

body.dark-mode .header-left .menu-btn:hover {
  background-color: #555761;
}

body.dark-mode .sidebar ul li a:hover {
  background-color: #555761;
}

body.dark-mode .sidebar ul li a.active {
  background-color: var(--bs-black);
  color: #282a35;
}

body.dark-mode .nested-navigation {
  color: var(--bs-white);
}

body.dark-mode .nested-navigation h1,
body.dark-mode .nested-navigation h2 {
  color: var(--bs-white);
}

body.dark-mode .nested-navigation-item a,
body.dark-mode .nested-navigation-item .nav-topic-btn {
  color: var(--bs-white);
}

body.dark-mode .nested-navigation-close-btn button {
  color: var(--bs-white);
}

body.dark-mode .nested-navigation-close-btn button:hover {
  background-color: var(--bs-white);
  color: var(--bs-black);
}

body.dark-mode .header-right a.bg-pink,
body.dark-mode .header-right a.bg-yellow {
  color: var(--bs-black);
  background-color: var(--sidebar-bg);
}
body.dark-mode .header-right a.bg-pink:hover,
body.dark-mode .header-right a.bg-yellow:hover {
  background-color: var(
    --bs-neowhite
  );
  opacity: 1;
}

.content-area .content-box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  line-height: 1.7;
  border: 1px solid transparent;
}

.content-area .info-box {
  background-color: #e7f3fe;
  border-color: #b3d7ff;
  color: #004a99;
}

.content-area .tip-box {
  background-color: var(--bs-yellow);
  border-color: #e6db74;
  color: #333;
}

.content-area .warning-box {
  background-color: #ffebeB;
  border-color: #ffc2c2;
  color: #8c1010;
}

.content-area .content-box h3 {
  margin-top: 0;
  font-weight: 700;
  color: inherit;
}
.content-area .content-box ul,
.content-area .content-box p {
  margin-bottom: 0;
}

.content-area .example-box {
  background-color: var(--sidebar-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 20px 0;
}

.content-area .example-box-header {
  padding: 10px 15px;
  border-bottom: 1px solid var(--border-color);
  font-weight: 600;
  background-color: var(
    --bs-neowhite
  );
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.content-area .example-box pre {
  margin: 0;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

body.dark-mode .content-area .info-box {
  background-color: #2a3b50;
  border-color: #3c5a7d;
  color: #cbe1ff;
}

body.dark-mode .content-area .tip-box {
  background-color: #4f4b23;
  border-color: #7a733f;
  color: var(--bs-yellow);
}

body.dark-mode .content-area .warning-box {
  background-color: #4d2a2a;
  border-color: #7c4f4f;
  color: #ffdddd;
}

body.dark-mode .content-area .example-box-header {
  background-color: #282a35;
}