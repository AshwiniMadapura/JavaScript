const studentContainer=document.querySelector(".students-container");
// studentContainer.style.border="2px solid red";

const person = {
    firstName:"Rachel",
    lastName:"Green",
    quote: "Try Try Try untill you succeed",
    skills: ["HTML","Css","Java Script"],
    imgURL: "https://all-free-download.com/free-vector/download/girl_avatar_template_face_side_sketch_cartoon_character_6849757.html",

    getFullname(){
        return `${this.firstName} ${this.lastName}`
    },

    getSkills(){
        const skillsHTML =this.skills.map(skill => `<li>${skill}</li>`);
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    }
}

studentContainer.innerHTML =`
<article class="student-card">
    <img src=${person.imgURL} />
    <h2> ${person.getFullname()}</h2>
    <blockquote> ${person.quote}</blockquote>
    <h3>Skills</h3>
    <ul> ${person.getSkills()}</ul>
</article>
`

person.age=30;
// console.log(person.skills[1] + " is the skill of "+person.getFullname());
console.log(person.getSkills());
// //by calling object
// console.log(person.firstName+ " "+person.lastName);
// //by calling method
// console.log(person.getFullname());