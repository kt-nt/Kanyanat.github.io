// =========================================================
// DRAWING GALLERY
// Digital: assets/images/drawing/digital/
// Non-Digital: assets/images/drawing/non-digital/
// =========================================================

const digitalDrawingFiles = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "38.jpg",
    "39.jpg",
    "40.jpg",
    "41.jpg",
    "42.jpg",
    "43.jpg",
    "44.jpg",
    "45.jpg",
    "46.jpg",
    "47.jpg",
    "48.jpg",
    "49.jpg",
    "50.jpg",
    "51.jpg",
    "52.jpg",
    "53.jpg",
    "54.jpg",
    "55.jpg",
    "56.jpg",
    "57.jpg",
    "58.jpg",
    "59.jpg",
    "60.jpg"
];

const nonDigitalDrawingFiles = [
    "1.jpg",
    "1.5.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.1.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg"
];

const drawingItems = [
    ...digitalDrawingFiles.map((fileName) => ({
        type: "digital",
        label: "Digital",
        src: `./assets/images/drawing/digital/${fileName}`
    })),
    ...nonDigitalDrawingFiles.map((fileName) => ({
        type: "non-digital",
        label: "Non-Digital",
        src: `./assets/images/drawing/non-digital/${fileName}`
    }))
];

const drawingGallery = document.getElementById("drawingGallery");
const loadMoreDrawingsButton = document.getElementById("loadMoreDrawings");
const drawingModal = document.getElementById("drawingModal");
const drawingModalImage = document.getElementById("drawingModalImage");
const drawingModalClose = document.getElementById("drawingModalClose");
const drawingFilterButtons = document.querySelectorAll(".drawing-filter-btn");

let visibleDrawings = 12;
const drawingsPerLoad = 12;
let currentDrawingFilter = "all";

function getFilteredDrawings() {
    if (currentDrawingFilter === "all") {
        return drawingItems;
    }

    return drawingItems.filter(
        (item) => item.type === currentDrawingFilter
    );
}

function openDrawingModal(src, alt) {
    if (!drawingModal || !drawingModalImage) return;

    drawingModalImage.src = src;
    drawingModalImage.alt = alt;
    drawingModal.classList.add("open");
    drawingModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeDrawingModal() {
    if (!drawingModal || !drawingModalImage) return;

    drawingModal.classList.remove("open");
    drawingModal.setAttribute("aria-hidden", "true");
    drawingModalImage.src = "";
    document.body.classList.remove("modal-open");
}

function renderDrawingGallery() {
    if (!drawingGallery) return;

    const filteredDrawings = getFilteredDrawings();

    drawingGallery.innerHTML = "";

    filteredDrawings
        .slice(0, visibleDrawings)
        .forEach((drawing, index) => {
            const artworkNumber = index + 1;

            const item = document.createElement("button");
            item.type = "button";
            item.className = "drawing-item";
            item.setAttribute(
                "aria-label",
                `ดูผลงานวาด ${drawing.label} ชิ้นที่ ${artworkNumber}`
            );

            item.innerHTML = `
                <img
                    src="${drawing.src}"
                    alt="${drawing.label} drawing artwork ${artworkNumber} by Kanyanat Tonok"
                    loading="lazy">

                <span class="drawing-overlay">
                    <span>${drawing.label.toUpperCase()}</span>
                    <strong>#${String(artworkNumber).padStart(2, "0")}</strong>
                </span>
            `;

            item.addEventListener("click", () => {
                openDrawingModal(
                    drawing.src,
                    `${drawing.label} drawing artwork ${artworkNumber} by Kanyanat Tonok`
                );
            });

            drawingGallery.appendChild(item);
        });

    if (loadMoreDrawingsButton) {
        const remaining = filteredDrawings.length - visibleDrawings;

        if (remaining <= 0) {
            loadMoreDrawingsButton.style.display = "none";
        } else {
            loadMoreDrawingsButton.style.display = "inline-flex";
            loadMoreDrawingsButton.textContent =
                `View More Artworks (${remaining})`;
        }
    }
}

drawingFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        drawingFilterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        currentDrawingFilter = button.dataset.drawingFilter;
        visibleDrawings = 12;
        renderDrawingGallery();
    });
});

if (loadMoreDrawingsButton) {
    loadMoreDrawingsButton.addEventListener("click", () => {
        visibleDrawings += drawingsPerLoad;
        renderDrawingGallery();
    });
}

if (drawingModalClose) {
    drawingModalClose.addEventListener("click", closeDrawingModal);
}

if (drawingModal) {
    drawingModal.addEventListener("click", (event) => {
        if (event.target === drawingModal) {
            closeDrawingModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDrawingModal();
    }
});

renderDrawingGallery();
