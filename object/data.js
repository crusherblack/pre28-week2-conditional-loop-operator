const bookList = document.getElementById("book-list");

//array of object

const courses = [
  {
    title: "JavaScript untuk Pemula",
    desc: "Pas buat kamu yang pengen belajar tentang apa itu JavaScript.",
    img: "https://storage.dumbways.microgen.id/microgen-lms1586588410220/course/9tlw2pmaiddwdw-js-cover.webp",
  },
  {
    title: "HTML & CSS Fundamental",
    desc: "Panduan lengkap untuk membuat aplikasi WEB frontend dengan HTML & CSS untuk",
    img: "https://storage.dumbways.microgen.id/microgen-lms1586588410220/course/640ag5ra2k5HTML%20&%20CSS.webp",
  },
  {
    title: "Git untuk Pemula",
    desc: "Belajar tentang GIT untuk pemula.",
    img: "https://storage.dumbways.microgen.id/microgen-lms1586588410220/course/x84lebGitbanner.png",
  },
];

let printCourseList = [];

for (let course of courses) {
  printCourseList.push(`
        <li>
            <h2>${course.title}</h2>
            <p>${course.desc}</p>
            <img src=${course.img} style="height: 200px; width: 300px; object-fit:contain; border-radius: 5px" />
        </li>
    `);
}

bookList.innerHTML = printCourseList.join("");
