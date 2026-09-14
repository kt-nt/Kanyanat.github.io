const certificates = [

    {
        title:
            "กิจกรรมแนะแนวการศึกษาและอาชีพด้านทันตกรรม",

        organization:
            "คลินิกทันตกรรมเอสซี สาขาบ้านบึง จังหวัดชลบุรี",

        date:
            "27 มีนาคม 2569",

        category:
            "dentistry",

        image:
            "./assets/certificates/images/dentistry-guidance-2569.jpg",

        pdf:
            null
    },


    {
        title:
            "ปัญญาประดิษฐ์พื้นฐานร่วมกับข้อมูลด้านความมั่นคงปลอดภัยทางไซเบอร์",

        organization:
            "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",

        date:
            "5 กรกฎาคม 2569",

        category:
            "technology",

        image:
            "./assets/certificates/images/kmitl-ai-cyber-2569.png",

        pdf:
            null
    },


    {
        title:
            "PLC ขั้นพื้นฐาน",

        organization:
            "คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",

        date:
            "5 กรกฎาคม 2569",

        category:
            "technology",

        image:
            "./assets/certificates/images/kmitl-plc-2569.png",

        pdf:
            null
    },


    {
        title:
            "Fabrication Laboratory: IoT & Robot with Mecanum Wheels",

        organization:
            "EEC Automation Park, Burapha University",

        date:
            "25 January 2025",

        category:
            "technology",

        image:
            "./assets/certificates/images/automation-park-robot-2025.jpg",

        pdf:
            null
    },


    {
        title:
            "Smart and Safe Digital Life",

        organization:
            "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",

        date:
            "20 สิงหาคม 2569",

        category:
            "technology",

        image:
            "./assets/certificates/images/smart-safe-digital-2569.jpg",

        pdf:
            null
    },


    {
        title:
            "กิจกรรมวีดิทัศน์ — แต่งคำประพันธ์โดยใช้ AI",

        organization:
            "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",

        date:
            "24 กรกฎาคม 2569",

        category:
            "competition",

        image:
            "./assets/certificates/images/ai-poetry-2569.jpg",

        pdf:
            null
    },


    {
        title:
            "การแข่งขันคิดเลขเร็ว ระดับมัธยมศึกษาตอนปลาย",

        organization:
            "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",

        date:
            "13 กรกฎาคม 2569",

        category:
            "competition",

        image:
            "./assets/certificates/images/fast-calculation-2569.png",

        pdf:
            null
    },


    {
        title:
            "อบรมเชิงปฏิบัติการเกมไขปริศนาตัวเลข (SUDOKU)",

        organization:
            "โรงเรียนบ้านบึง “อุตสาหกรรมนุเคราะห์”",

        date:
            "13 กรกฎาคม 2569",

        category:
            "academic",

        image:
            "./assets/certificates/images/sudoku-2569.jpg",

        pdf:
            null
    },


    {
        title:
            "รายวิชาเพิ่มเติม การป้องกันการทุจริต",

        organization:
            "สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ",

        date:
            "21 กรกฎาคม 2568",

        category:
            "academic",

        image:
            "./assets/certificates/images/anti-corruption-2568.jpg",

        pdf:
            null
    },


    {
        title:
            "โครงการส่งเสริมการเรียนรู้หน้าที่พลเมืองดิจิทัล หลักสูตรอุ่นใจไซเบอร์",

        organization:
            "NCSA • กรมสุขภาพจิต • KMUTT • AIS",

        date:
            "30 ตุลาคม 2568",

        category:
            "training",

        image:
            "./assets/certificates/images/cyber-citizen-2568.jpg",

        pdf:
            null
    }

];



const certificateGrid =
    document.getElementById("certificateGrid");



function renderCertificates(filter = "all") {

    if (!certificateGrid) {
        return;
    }


    certificateGrid.innerHTML = "";


    const filteredCertificates =
        certificates.filter(cert => {

            return (
                filter === "all" ||
                cert.category === filter
            );

        });



    filteredCertificates.forEach(cert => {


        const card =
            document.createElement("article");


        card.className =
            "certificate-card";


        let pdfButton = "";


        if (cert.pdf) {

            pdfButton = `

                <a
                    class="cert-button"
                    href="${cert.pdf}"
                    target="_blank"
                    rel="noopener noreferrer">

                    📄 View PDF

                </a>

            `;

        }



        card.innerHTML = `

            <a
                href="${cert.image}"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-image-link">

                <img
                    src="${cert.image}"
                    class="certificate-image"
                    alt="${cert.title}"
                    loading="lazy">

            </a>


            <div class="certificate-info">


                <span class="cert-category">
                    ${cert.category}
                </span>


                <h3>
                    ${cert.title}
                </h3>


                <p>
                    ${cert.organization}
                </p>


                <div class="cert-date">
                    ${cert.date}
                </div>


                <div class="cert-buttons">


                    <a
                        class="cert-button"
                        href="${cert.image}"
                        target="_blank"
                        rel="noopener noreferrer">

                        🔍 View Certificate

                    </a>


                    ${pdfButton}


                </div>


            </div>

        `;


        certificateGrid.appendChild(card);

    });

}



renderCertificates("all");



const filterButtons =
    document.querySelectorAll(".filter-btn");



filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        renderCertificates(filter);

    });

});
