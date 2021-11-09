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
