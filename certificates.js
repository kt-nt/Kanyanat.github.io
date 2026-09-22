const portfolioItems = [

    {
        title: "กิจกรรมแนะแนวการศึกษาและอาชีพด้านทันตกรรม",
        organization: "คลินิกทันตกรรมเอสซี สาขาบ้านบึง จังหวัดชลบุรี",
        date: "27 มีนาคม 2569",
        category: "dentistry",
        description: "เรียนรู้บรรยากาศการทำงานจริงภายในคลินิกทันตกรรม รวมถึงการทดลองและการสังเกตการทำงานภายในคลินิก",
        activityImages: [
            "./assets/activities/images/คลีนิคSC.jpg",
            "./assets/activities/images/คลีนิคSC1.jpg",
            "./assets/activities/images/พิมพ์ฟัน.jpg",
            "./assets/activities/images/คู่.jpg"
        ],
        certificate: "./assets/certificates/images/dentistry-guidance-2569.jpg",
        pdf: null
    },

    {
        title: "Fabrication Laboratory: IoT & Robot with Mecanum Wheels",
        organization: "EEC Automation Park, Burapha University",
        date: "25 January 2025",
        category: "technology",
        description: "กิจกรรมภาคปฏิบัติด้านหุ่นยนต์ การประกอบวงจร และการทำงานร่วมกันเป็นทีม",
        activityImages: [],
        certificate: "./assets/certificates/images/automation-park-robot-2025.jpg",
        pdf: null
    },

    {
        title: "เทคโนโลยีอินเตอร์เน็ตทุกสรรพสิ่งและการประยุกต์ใช้งาน",
        organization: "กิจกรรมอบรมและปฏิบัติการด้านเทคโนโลยี",
        date: "2569",
        category: "technology",
        description: "เรียนรู้และทดลองการประยุกต์ใช้งานเทคโนโลยี Internet of Things (IoT) ผ่านกิจกรรมภาคปฏิบัติ",
        activityImages: [
            "./assets/activities/images/รวม.jpg",
            "./assets/activities/images/แอค.jpg"
        ],
        certificate: null,
        pdf: null
    },

    {
        title: "พื้นฐานการควบคุมอัตโนมัติด้วย Programmable Logic Controller",
        organization: "คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
        date: "24–25 มกราคม 2569",
        category: "technology",
        description: "ผ่านการอบรมเชิงปฏิบัติการพื้นฐานการควบคุมอัตโนมัติด้วย PLC ในกิจกรรมค่ายพัฒนาความเป็นเลิศด้าน Robotic และ AI",
        activityImages: [
            "./assets/activities/images/รวมPLC.jpg",
            "./assets/activities/images/แข่งคู่.jpg"
        ],
        certificate: "./assets/certificates/images/เกียรติบัตรPLC.jpg",
        pdf: null
    },

    {
        title: "ปัญญาประดิษฐ์พื้นฐานร่วมกับข้อมูลด้านความมั่นคงปลอดภัยทางไซเบอร์",
        organization: "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        date: "5 กรกฎาคม 2569",
        category: "technology",
        description: "เรียนรู้พื้นฐานปัญญาประดิษฐ์และแนวคิดด้านความมั่นคงปลอดภัยทางไซเบอร์",
        activityImages: [],
        certificate: "./assets/certificates/images/kmitl-ai-cyber-2569.png",
        pdf: null
    },

    {
        title: "PLC ขั้นพื้นฐาน",
        organization: "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        date: "5 กรกฎาคม 2569",
        category: "technology",
        description: "ฝึกเรียนรู้พื้นฐาน Programmable Logic Controller และแนวคิดการควบคุมระบบอัตโนมัติ",
        activityImages: [],
        certificate: "./assets/certificates/images/kmitl-plc-2569.png",
        pdf: null
    },

    {
        title: "กิจกรรม Open House และบูธการเรียนรู้",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "2569",
        category: "activity",
        description: "ร่วมจัดบูธ ให้คำแนะนำ และถ่ายทอดความรู้ด้านวงจรและเทคโนโลยีให้ผู้เข้าร่วมกิจกรรม",
        activityImages: [
            "./assets/activities/images/openhouse.jpg",
            "./assets/activities/images/บูธ.jpg",
            "./assets/activities/images/บูธ1.jpg"
        ],
        certificate: null,
        pdf: null
    },

    {
        title: "กิจกรรมชุมนุม",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "กิจกรรมชุมนุม",
        category: "activity",
        categoryLabel: "กิจกรรมชุมนุม",
        description: "ทดลองทำหน้าที่สอนและถ่ายทอดความรู้ให้น้อง ๆ ภายในกิจกรรมชุมนุม",
        activityImages: [
            "./assets/activities/images/สอน.jpg"
        ],
        certificate: null,
        pdf: null
    },

    {
        title: "งานศิลปหัตถกรรมนักเรียน ครั้งที่ 73",
        organization: "สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาชลบุรี ระยอง",
        date: "19–23 มกราคม 2569",
        category: "competition",
        description: "ร่วมปฏิบัติหน้าที่ในฝ่ายเอกสารของศูนย์การแข่งขันกิจกรรมคอมพิวเตอร์ งานศิลปหัตถกรรมนักเรียน ครั้งที่ 73",
        activityImages: [
            "./assets/activities/images/staffศิลปหัตถกรรม.jpg"
        ],
        certificate: "./assets/certificates/images/ครั้งที่73.jpg",
        pdf: null
    },

    {
        title: "กิจกรรมกีฬาสี",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "กิจกรรมโรงเรียน",
        category: "activity",
        description: "ร่วมกิจกรรมกีฬาสีทั้งดรัมเมเยอร์ ขบวนพาเหรด และสแตนด์เชียร์ ฝึกความรับผิดชอบ ความกล้าแสดงออก และการทำงานร่วมกันเป็นทีม",
        activityImages: [
            "./assets/activities/images/ดรัมเมเยอร์.jpg",
            "./assets/activities/images/ดรัมเดิน.jpg",
            "./assets/activities/images/แสตนเชียร์ ม.2.jpg"
        ],
        certificate: null,
        pdf: null
    },

    {
        title: "Smart and Safe Digital Life",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "20 สิงหาคม 2569",
        category: "technology",
        description: "เรียนรู้การใช้เทคโนโลยีดิจิทัลอย่างปลอดภัยและเหมาะสม",
        activityImages: [],
        certificate: "./assets/certificates/images/smart-safe-digital-2569.jpg",
        pdf: null
    },

    {
        title: "กิจกรรมวีดิทัศน์ — แต่งคำประพันธ์โดยใช้ AI",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "24 กรกฎาคม 2569",
        category: "competition",
        description: "ประยุกต์ใช้ AI ร่วมกับความคิดสร้างสรรค์ในการจัดทำผลงานภาษาไทย",
        activityImages: [],
        certificate: "./assets/certificates/images/ai-poetry-2569.jpg",
        pdf: null
    },

    {
        title: "การแข่งขันคิดเลขเร็ว ระดับมัธยมศึกษาตอนปลาย",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "13 กรกฎาคม 2569",
        category: "competition",
        description: "เข้าร่วมการแข่งขันด้านทักษะการคิดคำนวณและความรวดเร็วในการแก้โจทย์",
        activityImages: [],
        certificate: "./assets/certificates/images/fast-calculation-2569.png",
        pdf: null
    },

    {
        title: "อบรมเชิงปฏิบัติการเกมไขปริศนาตัวเลข (SUDOKU)",
        organization: "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",
        date: "13 กรกฎาคม 2569",
        category: "academic",
        description: "ฝึกการคิดเชิงตรรกะ การวิเคราะห์ และการแก้ปัญหาผ่านเกมซูโดกุ",
        activityImages: [],
        certificate: "./assets/certificates/images/sudoku-2569.jpg",
        pdf: null
    },

    {
        title: "รายวิชาเพิ่มเติม การป้องกันการทุจริต",
        organization: "สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ",
        date: "21 กรกฎาคม 2568",
        category: "academic",
        description: "เรียนรู้เกี่ยวกับการป้องกันการทุจริต จริยธรรม และหน้าที่ของพลเมือง",
        activityImages: [],
        certificate: "./assets/certificates/images/anti-corruption-2568.jpg",
        pdf: null
    },

    {
        title: "โครงการส่งเสริมการเรียนรู้หน้าที่พลเมืองดิจิทัล หลักสูตรอุ่นใจไซเบอร์",
        organization: "NCSA • กรมสุขภาพจิต • KMUTT • AIS",
        date: "30 ตุลาคม 2568",
        category: "training",
        description: "เรียนรู้การเป็นพลเมืองดิจิทัลและการใช้อินเทอร์เน็ตอย่างปลอดภัย",
        activityImages: [],
        certificate: "./assets/certificates/images/cyber-citizen-2568.jpg",
        pdf: null
    }

];

const certificateGrid = document.getElementById("certificateGrid");

function safeImageTag(src, alt, className = "") {
    return `
        <img
            src="${src}"
            alt="${alt}"
            class="${className}"
            loading="lazy"
            onerror="this.closest('.activity-photo-item, .certificate-image-wrap')?.remove();">
    `;
}

function renderPortfolioItems(filter = "all") {
    if (!certificateGrid) return;

    certificateGrid.innerHTML = "";

    const filteredItems = portfolioItems.filter(item =>
        filter === "all" || item.category === filter
    );

    filteredItems.forEach(item => {
        const card = document.createElement("article");
        card.className = "activity-card";

        const activityImages = (item.activityImages || [])
            .map((image, index) => `
                <button
                    type="button"
                    class="activity-photo-item"
                    data-image="${image}"
                    aria-label="ดูรูปกิจกรรม ${index + 1}">
                    ${safeImageTag(
                        image,
                        `${item.title} - รูปกิจกรรม ${index + 1}`,
                        "activity-photo"
                    )}
                </button>
            `)
            .join("");

        const activityBlock = item.activityImages?.length
            ? `
                <div class="activity-block">
                    <div class="activity-block-title">ACTIVITY PHOTOS</div>
                    <div class="activity-photo-grid">
                        ${activityImages}
                    </div>
                </div>
            `
            : "";

        const certificateBlock = item.certificate
            ? `
                <div class="activity-block">
                    <div class="activity-block-title">CERTIFICATE</div>

                    <div class="certificate-image-wrap">
                        <button
                            type="button"
                            class="certificate-preview-button"
                            data-image="${item.certificate}"
                            aria-label="ดูเกียรติบัตร">
                            ${safeImageTag(
                                item.certificate,
                                item.title,
                                "activity-certificate-image"
                            )}
                        </button>

                        <a
                            href="${item.certificate}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="cert-button">
                            🔍 View Certificate
                        </a>
                    </div>
                </div>
            `
            : `
                <div class="activity-no-certificate">
                    <span>✦</span>
                    กิจกรรมนี้ไม่มีเกียรติบัตร
                </div>
            `;

        const pdfButton = item.pdf
            ? `
                <a
                    href="${item.pdf}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cert-button">
                    📄 View PDF
                </a>
            `
            : "";

        card.innerHTML = `
            <div class="activity-card-head">
                <span class="cert-category">${item.categoryLabel || item.category}</span>

                <h3>${item.title}</h3>

                <p class="activity-organization">
                    ${item.organization}
                </p>

                <div class="cert-date">
                    ${item.date}
                </div>

                <p class="activity-description">
                    ${item.description || ""}
                </p>
            </div>

            ${activityBlock}
            ${certificateBlock}

            ${pdfButton ? `
                <div class="activity-pdf-wrap">
                    ${pdfButton}
                </div>
            ` : ""}
        `;

        certificateGrid.appendChild(card);
    });

    bindActivityPreview();
}

function bindActivityPreview() {
    document
        .querySelectorAll("[data-image]")
        .forEach(button => {
            button.addEventListener("click", () => {
                const image = button.dataset.image;
                if (!image) return;

                const modal = document.getElementById("activityImageModal");
                const modalImage = document.getElementById("activityModalImage");

                if (!modal || !modalImage) return;

                modalImage.src = image;
                modal.classList.add("open");
                document.body.classList.add("modal-open");
            });
        });
}

renderPortfolioItems("all");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderPortfolioItems(button.dataset.filter);
    });
});

const activityModal = document.getElementById("activityImageModal");
const activityModalClose = document.getElementById("activityModalClose");

if (activityModalClose) {
    activityModalClose.addEventListener("click", () => {
        activityModal.classList.remove("open");
        document.body.classList.remove("modal-open");
    });
}

if (activityModal) {
    activityModal.addEventListener("click", event => {
        if (event.target === activityModal) {
            activityModal.classList.remove("open");
            document.body.classList.remove("modal-open");
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && activityModal) {
        activityModal.classList.remove("open");
        document.body.classList.remove("modal-open");
    }
});
