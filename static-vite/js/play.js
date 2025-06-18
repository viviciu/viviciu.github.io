// Items array (copied from items.js, trimmed for brevity; add all items as needed)
const items = [
  {
    id: "visionProImg",
    name: "",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/comp_edit-DSC07941.jpg.webp",
    category: "photo",
    fileType: "webp",
    categorySpecific: "",
  },
  {
    id: "redRender-4BoardStool",
    name: "",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/comp_041125_exploded-larger.mp4.webm",
    category: "3d",
    fileType: "webm",
    categorySpecific: "",
  },
  // ... (add all items from items.js here)
];

const categories = [
  { label: "All", value: null },
  { label: "Code", value: "code" },
  { label: "Photo", value: "photo" },
  { label: "Cinematography", value: "video" },
  { label: "Graphic", value: "graphic" },
  { label: "3D", value: "3d" },
  { label: "Motion", value: "motion" },
  { label: "Product", value: "product" },
  { label: "Sketch", value: "sketch" },
];

let selectedLabel = null;
let clickedImg = null;
let currentIndex = 0;

function renderFilters() {
  const filterContainer = document.getElementById("play-filters");
  filterContainer.innerHTML = categories
    .map(
      (cat, i) => `
      <div class="inline-block mr-2 mb-2 align-top">
        <input type="radio" name="category" id="${cat.value || "all"}" class="appearance-none hidden" ${selectedLabel === cat.value ? "checked" : ""} tabindex="-1" />
        <label class="checkbox-label-checked${selectedLabel === cat.value ? " clicked" : ""} cursor-pointer" for="${cat.value || "all"}">${cat.label}${i < categories.length - 1 ? "," : ""}</label>
      </div>
    `
    )
    .join("");
  // Add event listeners
  categories.forEach((cat) => {
    document.getElementById(cat.value || "all").addEventListener("change", () => {
      selectedLabel = cat.value;
      renderGrid();
      renderFilters();
    });
    document.querySelector(`label[for='${cat.value || "all"}']`).addEventListener("click", () => {
      selectedLabel = cat.value;
      renderGrid();
      renderFilters();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById("play-grid");
  const filtered = items.filter(
    (item) => !selectedLabel || selectedLabel === item.category
  );
  grid.innerHTML = filtered
    .map((item, idx) => {
      if (item.fileType === "webp") {
        return `<div class="item"><div class="justify-center relative group text-cap"><img src="${item.url}" alt="Item ${item.id}" class="w-full h-full object-cover translate-y-0 transition group-hover:translate-y-2 cursor-pointer" width="500" height="500" data-idx="${idx}" /></div></div>`;
      } else if (item.fileType === "mp4" || item.fileType === "webm") {
        return `<div class="item"><div class="justify-center relative group text-cap"><video class="w-full h-full object-cover translate-y-0 transition group-hover:translate-y-2 cursor-pointer" width="500" height="500" data-idx="${idx}" autoplay loop muted playsinline><source src="${item.url}" type="video/${item.fileType}" />Your browser does not support the video tag.</video></div></div>`;
      } else {
        return "";
      }
    })
    .join("");
  // Add click listeners for modal
  Array.from(grid.querySelectorAll("img,video")).forEach((el, idx) => {
    el.addEventListener("click", () => {
      openModal(filtered[idx], idx, filtered);
    });
  });
}

function openModal(item, idx, filtered) {
  clickedImg = item;
  currentIndex = idx;
  const modal = document.getElementById("play-modal");
  modal.style.display = "flex";
  renderModal(filtered);
}

function closeModal() {
  document.getElementById("play-modal").style.display = "none";
  clickedImg = null;
}

function handleNext(filtered) {
  currentIndex = (currentIndex + 1) % filtered.length;
  clickedImg = filtered[currentIndex];
  renderModal(filtered);
}

function handlePrev(filtered) {
  currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
  clickedImg = filtered[currentIndex];
  renderModal(filtered);
}

function renderModal(filtered) {
  const modalContent = document.getElementById("play-modal-content");
  if (!clickedImg) return;
  if (clickedImg.fileType === "webp") {
    modalContent.innerHTML = `<img src="${clickedImg.url}" alt="Modal Image" class="max-h-[84vh] cursor-pointer" style="cursor:e-resize;" />`;
    modalContent.querySelector("img").onclick = (e) => {
      const clickX = e.clientX - e.target.getBoundingClientRect().left;
      const halfWidth = e.target.clientWidth / 2;
      if (clickX > halfWidth) {
        handleNext(filtered);
      } else {
        handlePrev(filtered);
      }
    };
    modalContent.querySelector("img").onmousemove = (e) => {
      const clickX = e.clientX - e.target.getBoundingClientRect().left;
      const halfWidth = e.target.clientWidth / 2;
      e.target.style.cursor = clickX > halfWidth ? "e-resize" : "w-resize";
    };
  } else if (clickedImg.fileType === "webm" || clickedImg.fileType === "mp4") {
    modalContent.innerHTML = `<video class="max-h-[84vh] cursor-pointer" autoplay loop muted playsinline><source src="${clickedImg.url}" type="video/${clickedImg.fileType}" />Your browser does not support the video tag.</video>`;
    modalContent.querySelector("video").onclick = (e) => {
      const clickX = e.clientX - e.target.getBoundingClientRect().left;
      const halfWidth = e.target.clientWidth / 2;
      if (clickX > halfWidth) {
        handleNext(filtered);
      } else {
        handlePrev(filtered);
      }
    };
    modalContent.querySelector("video").onmousemove = (e) => {
      const clickX = e.clientX - e.target.getBoundingClientRect().left;
      const halfWidth = e.target.clientWidth / 2;
      e.target.style.cursor = clickX > halfWidth ? "e-resize" : "w-resize";
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGrid();
  // Modal close
  document.getElementById("play-modal").addEventListener("click", (e) => {
    if (e.target.id === "play-modal") closeModal();
  });
}); 