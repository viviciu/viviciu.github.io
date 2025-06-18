const items = [
  {
    id: "elysium",
    name: "Lunar Gala: Elysium",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/comp_elysiumLaunchReel-5x4.mov.webm",
    fileType: "webm",
    category: "Generative Design Systems, Brand, Motion, UI | UX",
    categorySpecific: "",
  },
  {
    id: "touchdesigner",
    name: "Touchdesigner Experiments",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/dune-trimmed-cover-thumbnail.mov.webm",
    fileType: "webm",
    category: "Generative Design",
    categorySpecific: "some generative procedural animations.",
  },
  {
    id: "playful-vs-practical",
    name: "Playful vs. Practical",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/comp_cover-pickup-playfulpractical.mp4.webm",
    fileType: "webm",
    category: "Industrial Design",
    categorySpecific: "a synergy of language, form, and context.",
  },
  {
    id: "typography-animation",
    name: "Kinetic type animation",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/comp_ligatures%2Bending-noaudio.mov.webm",
    fileType: "webm",
    category: "Motion",
    categorySpecific: "a study in time and motion narrating a typeface.",
  },
  {
    id: "touchdesigner",
    name: "",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_particles_noiseSculpting.0.mov.webm",
    fileType: "webm",
    category: "",
    categorySpecific: "some generative procedural animations.",
  },
  {
    id: "spatula",
    name: "Spatula",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0053-trim-cover.MP4.webm",
    fileType: "webm",
    category: "Industrial Design",
    categorySpecific: "",
  },
  {
    id: "liminal",
    name: "Lunar Gala: Liminal",
    url: "/imgs/lg-home-COVER.webp",
    fileType: "img",
    category: "Creative Code, Brand",
    categorySpecific: "a realm where the very essence of self and time finds itself in flux.",
  },
  {
    id: "bumble",
    name: "Bumble Sessions",
    url: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bubmlesessions-cover.png",
    fileType: "img",
    category: "UI | UX, Design Systems",
    categorySpecific: "",
  },
  {
    id: "cmini-poster",
    name: "Dirty Dozen Poster",
    url: "https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/dirtyDozen/ohrjjkyqzw79yl4mknyq",
    fileType: "img",
    category: "Brand",
    categorySpecific: "an exercise in type hierarchy.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("work-grid");
  grid.innerHTML = items
    .map((item) => {
      let media = "";
      if (item.fileType === "img") {
        media = `<img src="${item.url}" alt="${item.name}" class="w-full h-full object-cover pb-[0.6rem]" width="500" height="500" />`;
      } else if (item.fileType === "mp4") {
        media = `<video class="w-full h-full object-cover pb-[0.6rem]" width="500" height="500" autoplay loop muted playsinline><source src="${item.url}" type="video/mp4" />Your browser does not support the video tag.</video>`;
      } else if (item.fileType === "webm") {
        media = `<video class="w-full h-full object-cover pb-[0.6rem]" width="500" height="500" autoplay loop muted playsinline><source src="${item.url}" type="video/webm" />Your browser does not support the video tag.</video>`;
      }
      return `
        <div class="break-inside-avoid item space-y-2">
          <a href="work/${item.id}.html">
            <div class="flex flex-col justify-center relative group ${item.name ? 'pb-[1rem]' : ''} text-[1.55rem] leading-[1.55rem] translate-y-0 ">
              ${media}
              <div class="">
                <p class="w-[70%] md:text-p lg:leading-[1.55rem] text-[1rem] leading-[1rem]">
                  ${item.name ? item.name.replace(/\n/g, '<br>') : ''}
                </p>
                ${item.category ? `<div class="text-[1rem] leading-[1rem] md:text-p tracking-tight text-gray-300">${item.category}</div>` : ''}
              </div>
            </div>
          </a>
        </div>
      `;
    })
    .join("");
}); 