// Get the Sidebar

window.onload = function () {
  showContent("courseInfo");
};

// editor
const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
});

// set up sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = "block";
    overlayBg.style.display = "block";
  }
}

//  hidden layout
function hiddenLayout(layout) {
  layout.classList.add("hidden");
}

// show layout
function showLayout(layout) {
  layout.classList.remove("hidden");
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

// data

let topMenuList = [
  {
    title: "Trang chủ",
    href: "javascript:void(0)",
    onClick: "showContent('info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "courseInfo",
    subItems: [
      {
        href: "#classInfo",
        title: "Thông tin khai giảng",
      },
      {
        href: "#seminar",
        title: "Thông tin Seminar",
      },
      {
        href: "#company",
        title: "Thông tin công ty quan tâm",
      },
    ],
  },
  {
    title: "Thông tin môn học",
    href: "javascript:void(0)",
    onClick: "showContent('info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "info",
    subItems: [
      {
        href: "#summaryVN",
        title: "Mô tả tóm tắt học phần (tiếng Việt) (*)",
      },
      {
        href: "#summaryEN",
        title: "Mô tả tóm tắt học phần (tiếng Anh) (*)",
      },
      {
        href: "#contentVN",
        title: "Nội dung tóm tắt học phần (tiếng Việt) (*)",
      },
      {
        href: "#contentEN",
        title: "Nội dung tóm tắt học phần (tiếng Anh) (*)",
      },
      {
        href: "#reference",
        title: "Sách tham khảo",
      },
    ],
  },
  {
    title: "Các công nghệ web",
    href: "javascript:void(0)",
    onClick: "showContent('web-tech')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "web-tech",
    subItems: [
      {
        href: "#frontend",
        title: "1. Frontend (Giao diện người dùng)",
      },
      {
        href: "#backend",
        title: "2. Backend (Máy chủ và xử lý dữ liệu)",
      },
      {
        href: "#database",
        title: "3. Cơ sở dữ liệu",
      },
      {
        href: "#api",
        title: "4. API và Tích hợp dịch vụ",
      },
      {
        href: "#devops",
        title: "5. DevOps và Triển khai",
      },
      {
        href: "#security",
        title: "6. Bảo mật",
      },
      {
        href: "#testing",
        title: "7. Testing và Debugging",
      },
      {
        href: "#optimization",
        title: "8. Performance Optimization",
      },
      {
        href: "#authentication",
        title: "9. User Authentication & Authorization",
      },
    ],
  },
  {
    title: "Thông tin sinh viên",
    href: "javascript:void(0)",
    onClick: "showContent('student-info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "student-info",
    subItems: [
      {
        href: "#academic-info",
        title: "Curriculum vitae (CV)",
      },
      {
        href: "#projects-info",
        title: "Các dự án đã tham gia",
      },
      {
        href: "#hobbies-info",
        title: "Sinh hoạt cộng đồng",
      },
    ],
  },
];

// reset content
const resetContent = [
  {
    title: "Trang chủ",
    href: "javascript:void(0)",
    onClick: "showContent('info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "courseInfo",
    subItems: [
      {
        href: "#classInfo",
        title: "Thông tin khai giảng",
      },
      {
        href: "#seminar",
        title: "Thông tin Seminar",
      },
      {
        href: "#company",
        title: "Thông tin công ty quan tâm",
      },
    ],
  },
  {
    title: "Thông tin môn học",
    href: "javascript:void(0)",
    onClick: "showContent('info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "info",
    subItems: [
      {
        href: "#summaryVN",
        title: "Mô tả tóm tắt học phần (tiếng Việt) (*)",
      },
      {
        href: "#summaryEN",
        title: "Mô tả tóm tắt học phần (tiếng Anh) (*)",
      },
      {
        href: "#contentVN",
        title: "Nội dung tóm tắt học phần (tiếng Việt) (*)",
      },
      {
        href: "#contentEN",
        title: "Nội dung tóm tắt học phần (tiếng Anh) (*)",
      },
      {
        href: "#reference",
        title: "Sách tham khảo",
      },
    ],
  },
  {
    title: "Các công nghệ web",
    href: "javascript:void(0)",
    onClick: "showContent('web-tech')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "web-tech",
    subItems: [
      {
        href: "#frontend",
        title: "1. Frontend (Giao diện người dùng)",
      },
      {
        href: "#backend",
        title: "2. Backend (Máy chủ và xử lý dữ liệu)",
      },
      {
        href: "#database",
        title: "3. Cơ sở dữ liệu",
      },
      {
        href: "#api",
        title: "4. API và Tích hợp dịch vụ",
      },
      {
        href: "#devops",
        title: "5. DevOps và Triển khai",
      },
      {
        href: "#security",
        title: "6. Bảo mật",
      },
      {
        href: "#testing",
        title: "7. Testing và Debugging",
      },
      {
        href: "#optimization",
        title: "8. Performance Optimization",
      },
      {
        href: "#authentication",
        title: "9. User Authentication & Authorization",
      },
    ],
  },
  {
    title: "Thông tin sinh viên",
    href: "javascript:void(0)",
    onClick: "showContent('student-info')",
    class: "w3-bar-item w3-button dynamic-item",
    sectionId: "student-info",
    subItems: [
      {
        href: "#academic-info",
        title: "Thông tin học tập",
      },
      {
        href: "#skills-info",
        title: "Kĩ năng",
      },
      {
        href: "#projects-info",
        title: "Dự án",
      },
      {
        href: "#hobbies-info",
        title: "Sở thích",
      },
    ],
  },
];
// Function to show content and update button style
function showContent(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".w3-container");
  sections.forEach((section) => section.classList.add("hidden"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".w3-bar-item");
  buttons.forEach((button) => button.classList.remove("active"));

  // Show selected section
  document.getElementById(sectionId).classList.remove("hidden");

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = "";
  if (sectionId === "admin-page") {
    getMenuTop();
    hiddenLayout(document.querySelector(".ql-toolbar"));
    hiddenLayout(document.querySelector("#editor"));
    hiddenLayout(document.querySelector(".admin-menu-top-help"));
    hiddenLayout(document.querySelector(".admin-menu-top-review"));
  } else {
    topMenuList.forEach((item) => {
      if (item.sectionId === sectionId) {
        sidebar.innerHTML = `
          <h4 class="w3-bar-item"><b>${item.title}</b></h4>
          ${item.subItems
            .map(
              (subItem) =>
                `<a class="w3-bar-item w3-button w3-hover-black" href="${subItem.href}">${subItem.title}</a>`
            )
            .join("")}
        `;
      }
    });
  }
  event.target.classList.add("active");
}

//  get random id of div element
function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// update menu top when click in admin page
function updateMenuTop() {
  const menuTop = document.querySelector(".top-menu-dynamic");
  Array.from(menuTop.querySelectorAll(".dynamic-item")).forEach((item) =>
    item.remove()
  );
  topMenuList.forEach((navItem) => {
    if (navItem.title !== "Trang chủ") {
      const menuItem = document.createElement("a");
      menuItem.href = navItem.href;
      menuItem.className = navItem.class;
      menuItem.textContent = navItem.title;
      menuItem.setAttribute("onclick", navItem.onClick);
      menuTop.appendChild(menuItem);
    }
  });
}

// get menu top when click in admin page
function getMenuTop() {
  const listMenuTop = document.querySelector(".admin-menu-top-wrap");
  listMenuTop.innerHTML = topMenuList
    .map((item) => {
      if (item.title === "Trang chủ")
        return `
            <div class="admin-menu-top-item">
              <div class="admin-menu-top-text space">
                ${item.title}
              </div>
              <div class="admin-menu-top-view space">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space">               
                <div class="button" style="visibility: hidden;">
                  <i class="fa-solid fa-pen fa-edit-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space">
                 <div class="button" style="visibility: hidden;">
                  <i class="fa-solid fa-x fa-delete-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">                
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-1"></i>
                </div>
              </div>
            </div>
    `;
      else {
        return `
            <div class="admin-menu-top-item">
              <div class="admin-menu-top-text space">
                ${item.title}
              </div>
              <div class="admin-menu-top-view space">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space">               
                <div class="button">
                  <i class="fa-solid fa-pen fa-edit-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space">
                 <div class="button">
                  <i class="fa-solid fa-x fa-delete-1"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">                
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-1"></i>
                </div>
              </div>
            </div>
    `;
      }
    })
    .join("");
  document.querySelector("#admin-page .header").innerHTML =
    "Admin menu top: Chỉnh sửa menu top";
  if (document.querySelector(".button-ok")) {
    hiddenLayout(document.querySelector(".button-ok"));
  }
}

// variables
let itemPosition;
let oldTitle;
let parentTitle = "";
let href = "";
let demoStr1 = "";
let demoStr2 = "";
let arraySubSection = [];
let buttonPosition;
let largeTitle = "";
let contentFix = {};

// update sidebar
function updateSidebar(currentText) {
  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = `
         <h4 class="w3-bar-item"><b>${currentText}</b></h4>
          ${topMenuList
            .filter((item) => item.title === currentText)[0]
            .subItems.map(
              (subItem) =>
                `<a class="w3-bar-item w3-button w3-hover-black" href="${subItem.href}">${subItem.title}</a>`
            )
            .join("")}
      `;
}

// edit-1
function addText(button) {
  // console.log(button);
  const input = button.previousElementSibling;
  const newText = input.value.trim();
  // console.log(newText);

  if (newText) {
    const textDiv = itemPosition.querySelector(".admin-menu-top-text");
    textDiv.textContent = newText;
    const foundIndex = topMenuList.findIndex((item) => item.title === oldTitle);
    if (foundIndex !== -1) {
      topMenuList[foundIndex].title = newText;
    } else {
      topMenuList.push({
        title: newText,
        href: `#${newText}`,
        onClick: `show${newText}()`,
        className: "dynamic-item",
      });
    }
    button.parentElement.remove();
    const editButton = itemPosition.querySelector(
      ".admin-menu-top-edit .button"
    );
    // console.log(editButton);
    editButton.style.visibility = "visible";
    updateMenuTop();
  }
}

// create-1
function addTextV2(button) {
  const input = button.previousElementSibling;
  const newText = input.value.trim();

  if (newText) {
    const menuTop = document.querySelector(".admin-menu-top-wrap");
    const newItemDiv = document.createElement("div");
    newItemDiv.className = "admin-menu-top-item";
    newItemDiv.innerHTML = `
      <div class="admin-menu-top-text space">${newText}</div>
      <div class="admin-menu-top-view space">
        <div class="button">
          <i class="fa-solid fa-eye fa-view-1"></i>
        </div>
      </div>
      <div class="admin-menu-top-edit space">
        <div class="button">
          <i class="fa-solid fa-pen fa-edit-1"></i>
        </div>
      </div>
      <div class="admin-menu-top-delete space">
        <div class="button">
          <i class="fa-solid fa-x fa-delete-1"></i>
        </div>
      </div>
      <div class="admin-menu-top-create space">
        <div class="button">
          <i class="fa-solid fa-plus fa-create-1"></i>
        </div>
      </div>
    `;

    menuTop.appendChild(newItemDiv);
    button.parentElement.remove();
    // itemPosition.remove();
    const editButton = itemPosition.querySelector(
      ".admin-menu-top-create .button"
    );
    // console.log(editButton);
    editButton.style.visibility = "visible";

    const mainContent = document.querySelector("#content-container");
    let childContent = document.createElement("div");
    demoStr1 = generateRandomString();
    demoStr2 = generateRandomString();
    childContent.id = demoStr1;
    childContent.classList = "w3-container w3-padding-64 hidden";
    childContent.innerHTML = `
      <div class="container">
        <div class="header">${newText}</div>
        <div id="${demoStr2}">
          Bạn vừa thêm mới mục này, hãy thêm nội dung bên trang Admin page
        </div>
      </div>
    `;
    mainContent.appendChild(childContent);

    topMenuList.push({
      title: newText,
      href: "javascript:void(0)",
      onClick: `showContent("${demoStr1}")`,
      class: "w3-bar-item w3-button dynamic-item",
      sectionId: `${demoStr1}`,
      subItems: [
        {
          href: `#${demoStr2}`,
          title: "Mục mới",
        },
      ],
    });
    updateMenuTop();
    // updateSidebar(newText);
  }
}

// edit-2
function addTextSidebar(button) {
  const input = button.previousElementSibling;
  const newText = input.value.trim();

  if (newText) {
    const textDiv = itemPosition.querySelector(".admin-menu-top-text");
    textDiv.textContent = newText;
    let found = false;
    let parentTitle = "";
    topMenuList.forEach((item) => {
      const subItemIndex = item.subItems.findIndex(
        (subItem) => subItem.title === oldTitle
      );

      if (subItemIndex !== -1) {
        item.subItems[subItemIndex].title = newText;
        href = item.subItems[subItemIndex].href;
        parentTitle = item.title;
        found = true;
      }
    });
    button.parentElement.remove();
    const editButton = itemPosition.querySelector(
      ".admin-menu-top-edit .button"
    );
    editButton.style.visibility = "visible";
    updateSidebar(parentTitle);
    const sectionElement = document.querySelector(href);
    const sectionHeader = sectionElement.querySelector(".section-header");
    sectionHeader.innerHTML = `${newText}`;
  }
}

// create-2
function addTextSidebarV2(button) {
  const input = button.previousElementSibling;
  const newText = input.value.trim();

  if (newText) {
    const menuTop = document.querySelector(".admin-menu-top-wrap");
    const newItemDiv = document.createElement("div");
    newItemDiv.className = "admin-menu-top-item";
    newItemDiv.innerHTML = `
      <div class="admin-menu-top-text space">${newText}</div>
      <div class="admin-menu-top-view space">
        <div class="button">
          <i class="fa-solid fa-eye fa-view-2"></i>
        </div>
      </div>
      <div class="admin-menu-top-edit space">
        <div class="button">
          <i class="fa-solid fa-pen fa-edit-2"></i>
        </div>
      </div>
      <div class="admin-menu-top-delete space">
        <div class="button">
          <i class="fa-solid fa-x fa-delete-2"></i>
        </div>
      </div>
      <div class="admin-menu-top-create space">
        <div class="button">
          <i class="fa-solid fa-plus fa-create-2"></i>
        </div>
      </div>
    `;

    menuTop.appendChild(newItemDiv);
    button.parentElement.remove();
    const editButton = itemPosition.querySelector(
      ".admin-menu-top-create .button"
    );
    demoStr1 = generateRandomString();
    editButton.style.visibility = "visible";
    const newSubItem = {
      title: newText,
      href: `#${demoStr1}`,
    };

    const parentItem = topMenuList.find((item) => item.title === parentTitle);

    if (parentItem) {
      parentItem.subItems.push(newSubItem);
      href = parentItem.sectionId;
    }
    updateSidebar(parentTitle);
    const parentElement = document.querySelector(`#${href} .container`);
    let sectionElement = document.createElement("div");
    sectionElement.id = demoStr1;
    let childElement = document.createElement("div");
    childElement.innerHTML = `
      <div class="section-header">
        ${newText}
      </div>
      <div class="section-content">Bạn vừa mới thêm mục này, tiếp tục thêm nội dung bên trang Admin page</div>
    `;
    childElement.style.marginTop = "20px";
    sectionElement.appendChild(childElement);
    parentElement.appendChild(sectionElement);
  }
}

// handle reset
const handleClick = () => {
  topMenuList = topMenuList.map((item) =>
    item.title === "Thông tin sinh viên"
      ? {
          title: "Thông tin sinh viên",
          href: "javascript:void(0)",
          onClick: "showContent('student-info')",
          class: "w3-bar-item w3-button dynamic-item",
          sectionId: "student-info",
          subItems: [
            {
              href: "#academic-info",
              title: "Curriculum vitae (CV)",
            },
            {
              href: "#projects-info",
              title: "Các dự án đã tham gia",
            },
            {
              href: "#hobbies-info",
              title: "Sinh hoạt cộng đồng",
            },
          ],
        }
      : item
  );
  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = `
         <h4 class="w3-bar-item"><b>Thông tin sinh viên</b></h4>
          ${topMenuList
            .filter((item) => item.title === "Thông tin sinh viên")[0]
            .subItems.map(
              (subItem) =>
                `<a class="w3-bar-item w3-button w3-hover-black" href="${subItem.href}">${subItem.title}</a>`
            )
            .join("")}
      `;
  const listMenuTop = document.querySelector(".admin-menu-top-wrap");
  listMenuTop.innerHTML = topMenuList
    .filter((item) => item.title === "Thông tin sinh viên")[0]
    .subItems.map(
      (subItem) =>
        `<div class="admin-menu-top-item">
              <div class="admin-menu-top-text space">
                ${subItem.title}
              </div>
              <div class="admin-menu-top-view space">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space">
                <div class="button">
                  <i class="fa-solid fa-pen fa-edit-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space">
                 <div class="button">
                  <i class="fa-solid fa-x fa-delete-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-2"></i>
                </div>
              </div>
            </div>`
    )
    .join("");
  const container = Array.from(document.querySelectorAll(".container")).find(
    (container) => {
      const header = container.querySelector(".header");
      return header && header.textContent.trim() === "Thông tin cá nhân";
    }
  );
  console.log(container);
  if (container) {
    const validIds = topMenuList
      .find((item) => item.title === "Thông tin sinh viên")
      .subItems.map((subItem) => subItem.href.replace("#", ""));
    console.log(validIds);
    const divsWithId = container.querySelectorAll("div[id]");
    console.log(divsWithId);
    divsWithId.forEach((div) => {
      const divId = div.id;
      console.log(divId);
      if (!validIds.includes(divId)) {
        div.remove();
      }
    });
  }
};

document
  .querySelector(".admin-menu-top-wrap")
  .addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("fa-delete-1")) {
      const item = target.closest(".admin-menu-top-item");
      const itemTextElement = item.querySelector(
        ".admin-menu-top-item .admin-menu-top-text"
      );
      const itemText = itemTextElement.textContent.trim();
      console.log(itemText);
      item.remove();
      topMenuList = topMenuList.filter((item) => item.title !== itemText);
      updateMenuTop();
    } else if (target.classList.contains("fa-edit-1")) {
      const itemDiv = target.closest(".admin-menu-top-item");
      itemPosition = itemDiv;
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      oldTitle = currentText;

      const inputContainer = document.createElement("div");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <input style="width: 100%" type="text" class="w3-input" value="${currentText}" placeholder="Nhập tên mới" />
    <button class="w3-button" onclick="addText(this)">OK</button>
  `;

      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.appendChild(inputContainer);
      const buttonEdit = target.closest(".admin-menu-top-edit");
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-create-1")) {
      const inputContainer = document.createElement("div");
      itemPosition = target.closest(".admin-menu-top-item");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <input style="width: 100%" type="text" class="w3-input" placeholder="Nhập tên mới" />
    <button class="w3-button" onclick="addTextV2(this)">OK</button>
  `;
      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.appendChild(inputContainer);
      const buttonEdit = target.closest(".admin-menu-top-create");
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-view-1")) {
      const itemDiv = target.closest(".admin-menu-top-item");
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      const listMenuTop = document.querySelector(".admin-menu-top-wrap");
      listMenuTop.innerHTML = topMenuList
        .filter((item) => item.title === currentText)[0]
        .subItems.map(
          (subItem) =>
            `<div class="admin-menu-top-item">
              <div class="admin-menu-top-text space">
                ${subItem.title}
              </div>
              <div class="admin-menu-top-view space">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space">               
                <div class="button">
                  <i class="fa-solid fa-pen fa-edit-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space">
                 <div class="button">
                  <i class="fa-solid fa-x fa-delete-2"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">                
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-2"></i>
                </div>
              </div>
            </div>`
        )
        .join("");
      const headerTitle = document.querySelector("#admin-page .header");
      if (currentText !== "Thông tin sinh viên")
        headerTitle.innerHTML = `Admin menu left: "${currentText}"`;
      else
        headerTitle.innerHTML = `
        <div  style="display: flex; align-items: center; justify-content: center">
          <div>
          Admin menu left: "${currentText}"
          </div>
          <div style="marginLeft: 16px">
            <button class="w3-button" onClick = "handleClick()">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>
      `;

      // console.log(headerTitle);
      updateSidebar(currentText);
    }
  });

// get href
const getHref = (subTitle) => {
  for (const menu of topMenuList) {
    const subItem = menu.subItems.find((item) => item.title === subTitle);
    if (subItem) {
      return subItem.href;
    }
  }
  return "";
};

document
  .querySelector(".admin-menu-top-wrap")
  .addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("fa-edit-2")) {
      const itemDiv = target.closest(".admin-menu-top-item");
      itemPosition = itemDiv;
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      oldTitle = currentText;

      const inputContainer = document.createElement("div");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <input style="width: 100%" type="text" class="w3-input" value="${currentText}" placeholder="Nhập tên mới" />
    <button class="w3-button" onclick="addTextSidebar(this)">OK</button>
  `;
      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.appendChild(inputContainer);
      const buttonEdit = target.closest(".admin-menu-top-edit");
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-delete-2")) {
      const item = target.closest(".admin-menu-top-item");
      const itemTextElement = item.querySelector(
        ".admin-menu-top-item .admin-menu-top-text"
      );
      const itemText = itemTextElement.textContent.trim();
      item.remove();
      let parentTitle = "";

      topMenuList = topMenuList
        .map((item) => {
          const hasMatchingSubItem = item.subItems.some(
            (subItem) => subItem.title === itemText
          );

          if (hasMatchingSubItem) {
            parentTitle = item.title;
          }
          return {
            ...item,
            subItems: item.subItems.filter(
              (subItem) => subItem.title !== itemText
            ),
          };
        })
        .filter((item) => item.subItems.length > 0 || item.title !== itemText);
      updateSidebar(parentTitle);
    } else if (target.classList.contains("fa-create-2")) {
      const item = target.closest(".admin-menu-top-item");
      const itemTextElement = item.querySelector(
        ".admin-menu-top-item .admin-menu-top-text"
      );
      const itemText = itemTextElement.textContent.trim();
      const foundItem = topMenuList.find((item) =>
        item.subItems.some((subItem) => subItem.title === itemText)
      );

      if (foundItem) {
        parentTitle = foundItem.title;
      }
      const inputContainer = document.createElement("div");
      itemPosition = target.closest(".admin-menu-top-item");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <input style="width: 100%" type="text" class="w3-input" placeholder="Nhập tên mới" />
    <button class="w3-button" onclick="addTextSidebarV2(this)">OK</button>
  `;
      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.appendChild(inputContainer);
      const buttonEdit = target.closest(".admin-menu-top-create");
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-view-2")) {
      const itemDiv = target.closest(".admin-menu-top-item");
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      oldTitle = currentText;
      href = getHref(currentText);
      const sidebarElement = document.getElementById("mySidebar");
      const targetLink = sidebarElement.querySelector(`a[href="${href}"]`);
      if (targetLink) {
        targetLink.classList.add("active");
      }
      const targetElement = document.querySelector(href);
      const elements = targetElement.querySelectorAll(".subSection-header");
      arraySubSection = Array.from(elements).map(
        (element) => element.textContent
      );
      const listMenuTop = document.querySelector(".admin-menu-top-wrap");
      if (arraySubSection.length > 0) {
        listMenuTop.innerHTML = arraySubSection
          .map(
            (subSection) =>
              `
          <div class="admin-menu-top-item">
              <div class="admin-menu-top-text space">
                ${subSection}
              </div>
              <div class="admin-menu-top-view space">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space">               
                <div class="button">
                  <i class="fa-solid fa-pen fa-edit-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space">
                 <div class="button">
                  <i class="fa-solid fa-x fa-delete-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">                
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-3"></i>
                </div>
              </div>
            </div>
          `
          )
          .join("");
      } else
        listMenuTop.innerHTML = `
      <div class="admin-menu-top-item">
              <div class="admin-menu-top-text space" style="visibility: hidden">
                
              </div>
              <div class="admin-menu-top-view space" style="visibility: hidden">
                <div class="button">
                  <i class="fa-solid fa-eye fa-view-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-edit space" style="visibility: hidden">               
                <div class="button">
                  <i class="fa-solid fa-pen fa-edit-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-delete space" style="visibility: hidden">
                 <div class="button">
                  <i class="fa-solid fa-x fa-delete-3"></i>
                </div>
              </div>
              <div class="admin-menu-top-create space">                
                 <div class="button">
                  <i class="fa-solid fa-plus fa-create-3"></i>
                </div>
              </div>
            </div>
      `;
      const headerTitle = document.querySelector("#admin-page .header");
      const largeHeaderElement = document
        .querySelector("#mySidebar h4")
        .textContent.trim();

      headerTitle.innerHTML = `Admin contents layout: "${largeHeaderElement}/${currentText}"`;
      document.querySelector(".admin-menu-top-help").classList.remove("hidden");
      updatePreviewLayout(currentText);
      largeTitle = largeHeaderElement;
      showLayout(document.querySelector(".admin-menu-top-review"));
    }
  });

const updatePreviewLayout = (currentText) => {
  const previewContainer = document.querySelector(".admin-menu-top-review");
  previewContainer.innerHTML = `
      <div class="section-header">
        ${currentText}
      </div>
      <div class="subSection-wrap">
        ${arraySubSection
          .map((item) => `<div class="subSection-item">${item}</div>`)
          .join("")}      
      </div>
    `;
};

function editTextSubSection(form) {
  const newName = form.newName.value;
  const borderWidth = form.borderWidth.value;
  const borderColor = form.borderColor.value;
  const index = arraySubSection.indexOf(parentTitle);
  if (index !== -1) {
    const textDiv = itemPosition.querySelector(".admin-menu-top-text");
    textDiv.textContent = newName;
    arraySubSection[index] = newName;
    updatePreviewLayout(oldTitle);
    const sectionItems = document.querySelectorAll(".subSection-item");
    sectionItems.forEach((item) => {
      if (item.textContent.trim() === newName) {
        item.style.setProperty("--border-color", `${borderColor}`);
        item.style.setProperty("--border-width", `${borderWidth}px`);
        item.classList.add("custom-border");
      }
    });
    const targetElement = document.querySelector(href);
    const subSectionHeaders =
      targetElement.querySelectorAll(".subSection-header");
    subSectionHeaders.forEach((header) => {
      if (header.textContent.trim() === parentTitle) {
        header.textContent = newName;
      }
    });
    buttonPosition.style.visibility = "visible";
    document.querySelector(".admin-menu-top-input").innerHTML = "";
  }
}

function addSubSection(button) {
  const input = button.previousElementSibling;
  const newText = input.value.trim();
  if (newText) {
    const menuTop = document.querySelector(".admin-menu-top-wrap");
    const newItemDiv = document.createElement("div");
    newItemDiv.className = "admin-menu-top-item";
    newItemDiv.innerHTML = `
      <div class="admin-menu-top-text space">${newText}</div>
      <div class="admin-menu-top-view space">
        <div class="button">
          <i class="fa-solid fa-eye fa-view-3"></i>
        </div>
      </div>
      <div class="admin-menu-top-edit space">
        <div class="button">
          <i class="fa-solid fa-pen fa-edit-3"></i>
        </div>
      </div>
      <div class="admin-menu-top-delete space">
        <div class="button">
          <i class="fa-solid fa-x fa-delete-3"></i>
        </div>
      </div>
      <div class="admin-menu-top-create space">
        <div class="button">
          <i class="fa-solid fa-plus fa-create-3"></i>
        </div>
      </div>
    `;
    arraySubSection.push(newText);
    menuTop.appendChild(newItemDiv);
    button.parentElement.remove();
    const editButton = itemPosition.querySelector(
      ".admin-menu-top-create .button"
    );
    editButton.style.visibility = "visible";
    updatePreviewLayout(oldTitle);
    const idElement = document.querySelector(href);
    const subSection = document.createElement("div");
    subSection.classList.add("subSection");
    const subSectionHeader = document.createElement("div");
    subSectionHeader.classList.add("subSection-header");
    subSectionHeader.textContent = newText;
    subSection.appendChild(subSectionHeader);
    idElement.appendChild(subSection);
  }
}

document
  .querySelector(".admin-menu-top-wrap")
  .addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("fa-delete-3")) {
      const item = target.closest(".admin-menu-top-item");
      const itemTextElement = item.querySelector(
        ".admin-menu-top-item .admin-menu-top-text"
      );
      const itemText = itemTextElement.textContent.trim();
      item.remove();
      const targetElement = document.querySelector(href);
      console.log(targetElement);
      const subSectionHeaders =
        targetElement.querySelectorAll(".subSection-header");
      subSectionHeaders.forEach((header) => {
        if (header.textContent.trim() === itemText) {
          const parentSection = header.closest(".subSection");
          parentSection.classList.remove("subSection");
          parentSection.style.display = "none";
        }
      });
      arraySubSection = arraySubSection.filter((item) => item !== itemText);
      if (arraySubSection.length === 0) {
        const listMenuTop = document.querySelector(".admin-menu-top-wrap");
        listMenuTop.innerHTML = `
        <div class="admin-menu-top-item">
                <div class="admin-menu-top-text space" style="visibility: hidden">
                  
                </div>
                <div class="admin-menu-top-view space" style="visibility: hidden">
                  <div class="button">
                    <i class="fa-solid fa-eye fa-view-3"></i>
                  </div>
                </div>
                <div class="admin-menu-top-edit space" style="visibility: hidden">               
                  <div class="button">
                    <i class="fa-solid fa-pen fa-edit-3"></i>
                  </div>
                </div>
                <div class="admin-menu-top-delete space" style="visibility: hidden">
                   <div class="button">
                    <i class="fa-solid fa-x fa-delete-3"></i>
                  </div>
                </div>
                <div class="admin-menu-top-create space">                
                   <div class="button">
                    <i class="fa-solid fa-plus fa-create-3"></i>
                  </div>
                </div>
              </div>
        `;
      }
      updatePreviewLayout(oldTitle);
    } else if (target.classList.contains("fa-edit-3")) {
      const itemDiv = target.closest(".admin-menu-top-item");
      itemPosition = itemDiv;
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      parentTitle = currentText;

      const inputContainer = document.createElement("div");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <form onsubmit="editTextSubSection(this); return false;">
    <label for="newName">Nhập tên mới:</label>
    <input style="width: 100%" type="text" value="${currentText}" id="newName" name="newName" class="w3-input" placeholder="Nhập tên mới" />

    <label for="borderWidth">Nhập độ dày viền (border-width):</label>
    <input style="width: 100%" value="2" type="text" id="borderWidth" name="borderWidth" class="w3-input" placeholder="Nhập độ dày viền" />

    <label for="borderColor">Nhập màu viền (border-color):</label>
    <input style="width: 100%" value="black" type="text" id="borderColor" name="borderColor" class="w3-input" placeholder="Nhập màu viền" />

    <button type="submit"  class="w3-button">OK</button>
</form>
  `;
      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.insertBefore(inputContainer, adminReview.firstChild);
      const buttonEdit = target.closest(".admin-menu-top-edit");
      buttonPosition = buttonEdit;
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-create-3")) {
      const inputContainer = document.createElement("div");
      itemPosition = target.closest(".admin-menu-top-item");
      inputContainer.className = "input-container";
      inputContainer.innerHTML = `
    <input style="width: 100%" type="text" class="w3-input" placeholder="Nhập tên mới" />
    <button class="w3-button" onclick="addSubSection(this)">OK</button>
  `;
      const adminReview = document.querySelector(".admin-menu-top-input");
      adminReview.insertBefore(inputContainer, adminReview.firstChild);
      const buttonEdit = target.closest(".admin-menu-top-create");
      buttonEdit.style.visibility = "hidden";
    } else if (target.classList.contains("fa-view-3")) {
      hiddenLayout(document.querySelector(".admin-menu-top-help"));
      const itemDiv = target.closest(".admin-menu-top-item");
      const textDiv = itemDiv.querySelector(".admin-menu-top-text");
      const currentText = textDiv.textContent.trim();
      const subSection = Array.from(
        document.querySelectorAll(".subSection")
      ).find((section) => {
        const header = section.querySelector(".subSection-header");
        return header && header.textContent.trim() === currentText;
      });
      const nonHeaderElements = Array.from(subSection.children).filter(
        (child) => !child.classList.contains("subSection-header")
      );
      contentFix = nonHeaderElements.map((child) => ({
        element: child,
        content: child.textContent.trim(),
      }));

      // update header of admin page
      const headerTitle = document.querySelector("#admin-page .header");
      headerTitle.innerHTML = `Admin contents: "${largeTitle}/${oldTitle}/${currentText}"`;

      // update edit box
      showLayout(document.querySelector(".ql-toolbar"));
      showLayout(document.querySelector("#editor"));
      quill.clipboard.dangerouslyPasteHTML(
        contentFix
          .map((item) => item.content.replace(/\n/g, "<br>"))
          .join("<br>")
      );

      // handle button when save edit
      if (!document.querySelector(".button-ok")) {
        const buttonOk = document.createElement("button");
        buttonOk.classList.add("w3-button", "button-ok");
        buttonOk.textContent = "Ấn để lưu nội dung";
        buttonOk.addEventListener("click", function () {
          const quillHtml = quill.root.innerHTML;
          document.querySelector(".preview-layout-content").innerHTML =
            quillHtml;
          console.log(subSection);
          subSection.innerHTML = `
        <div class="subSection">
          <div class="subSection-header">
          <strong>${currentText} </strong> 
          </div>
          <div>
            ${quillHtml}
          </div>
        </div>
        `;
        });
        document.querySelector(".admin-menu-top").appendChild(buttonOk);
      } else showLayout(document.querySelector(".button-ok"));

      // update preview layout
      const previewContainer = document.querySelector(".admin-menu-top-review");
      previewContainer.innerHTML = `
      <div class="section-header">
        ${oldTitle}
      </div>
      <div style="padding: 8px 16px; border: 2px solid black" class="preview-layout-content">
      ${contentFix
        .map(
          (item) =>
            `
          <div>${item.content.replace(/\n/g, "<br>")}</div>
        `
        )
        .join("")}
      </div>
      `;
      // hidden table to edit or view
      document.querySelector(".admin-menu-top-wrap").innerHTML = "";
    }
  });

// resize quill editor with toolbar
const toolbar = document.querySelector(".ql-toolbar");
const editorElement = document.querySelector("#editor");
const observer = new ResizeObserver(() => {
  const toolbarWidth = toolbar.offsetWidth;
  editorElement.style.width = `${toolbarWidth}px`;
});

observer.observe(toolbar);
