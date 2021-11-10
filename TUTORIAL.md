# Mô tả: MOVIE APP

## Setup

1. Cài đặt 1 số thư viện sau:
  - axios
  - node-sass
  - sass
  - react-router-dom
  - query-string
  - swiper

2. setup file `scss` ở thư mục **/assets**
  - `_variable` tạo các biến
  - `_mixin` tạo function dùng chung
  - `_breakpoint` tạo breakpoint cho các thiết bị mobile và tablet
  - `_index` gọi tất cả 3 file scss vừa định nghĩa

3. setup `api` ở thư mục **/api**
  - `apiConfig` tạo baseUrl, apiKey và Image từ api
  - `axiosClient` tạo biến axios và config interceptors request và response

4. setup `routes` ở thư mục **/routes**
  - `Routes` tạo Switch bọc các Route, render mỗi component là mỗi path khác nhau
  - ở `App.js` thêm BrowserRoute và setup thêm Header, Route, Footer

## Components

1. make Header
  - tạo 1 array các chỉ mục trên navbar gồm display_name và path
  - render ra lần lượt từng chỉ mục qua thẻ Link
  - active từng chỉ mục bằng cách tạo pathname từ hook `useLocation` so sánh với path của từng chỉ mục

2. make Button
  - tạo 2 loại button: button và outline button
  - dùng `props.children` để tuỳ chỉnh name khi kế thừa button
  - thêm event onClick cho button và check nếu không có props đó thì trả về null

3. make Modal
  - tạo function Modal là vỏ bọc có hook `useState` check active là true/false, hook `useEffect` để set lại state từ component cha, render lại là div modal có class là active nếu active là true, trong div dùng `props.children` để tuỳ chỉnh khi kế thừa Modal
  - tạo function ModalContent là nội dung có nút close và `props.children` để tuỳ chỉnh khi kế thừa ModalContent. Xử lý event close qua function closeModal qua hook `useRef`, sau đó trỏ đến parentNode và remove class active từ Modal.

4. make Slide
  - tạo function Slide là vỏ bọc slide có hook `useState` là array, hook `useEffect` gọi api từ tmdbApi truyền params là page: 1, sau đó setMovies là data vừa nhận. Sử dụng Swiper làm div cha, map data ra SwiperSlide, tiếp tục check attr `isActive` của thư viện Swiperjs và truyền class active vào SlideItem. Bên ngoài Swiper map data ra TrailerModal
  - tạo function TrailerModal sẽ là 1 iframe mô tả movie. Sử dụng component Modal và truyền props active và id, trong Modal là ModalContent và truyền props onClose, trong ModalContent là iframe, setAttribute src cho iframe là empty string nếu click vào nút close.
  - tạo function SlideItem