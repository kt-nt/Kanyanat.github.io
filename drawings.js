// =========================================================
// DRAWING GALLERY
// รูปผลงานอยู่ใน assets/images/drawing/digital/
// ตอนนี้มี 1.jpg ถึง 60.jpg
// ถ้าเพิ่มรูปใหม่ เช่น 61.jpg ให้เปลี่ยน totalDrawings เป็น 61
// =========================================================

const totalDrawings = 60;
const drawingBasePath = "./assets/images/drawing/digital/";

const drawingFiles = Array.from(
    { length: totalDrawings },
    (_, index) => `${index + 1}.jpg`
);

const drawingGallery = document.getElementById("drawingGallery");
const loadMoreDrawingsButton = document.getElementById("loadMoreDrawings");
const drawingModal = document.getElementById("drawingModal");
const drawingModalImage = document.getElementById("drawingModalImage");
const drawingModalClose = document.getElementById("drawingModalClose");

let visibleDrawings = 12;
const drawingsPerLoad = 12;

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

    drawingGallery.innerHTML = "";

    drawingFiles
        .slice(0, visibleDrawings)
        .forEach((fileName, index) => {
            const imageNumber = index + 1;
            const fullPath = drawingBasePath + fileName;

            const item = document.createElement("button");
            item.type = "button";
            item.className = "drawing-item";
            item.setAttribute("aria-label", `ดูผลงานวาดชิ้นที่ ${imageNumber}`);

            item.innerHTML = `
                <img
                    src="${fullPath}"
                    alt="Drawing artwork ${imageNumber} by Kanyanat Tonok"
                    loading="lazy">
                <span class="drawing-overlay">
                    <span>VIEW ARTWORK</span>
                    <strong>#${String(imageNumber).padStart(2, "0")}</strong>
                </span>
            `;

            item.addEventListener("click", () => {
                openDrawingModal(
                    fullPath,
                    `Drawing artwork ${imageNumber} by Kanyanat Tonok`
                );
            });

            drawingGallery.appendChild(item);
        });

    if (loadMoreDrawingsButton) {
        const remaining = drawingFiles.length - visibleDrawings;

        if (remaining <= 0) {
            loadMoreDrawingsButton.style.display = "none";
        } else {
            loadMoreDrawingsButton.style.display = "inline-flex";
            loadMoreDrawingsButton.textContent =
                `View More Artworks (${remaining})`;
        }
    }
}

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
