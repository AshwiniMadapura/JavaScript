const studentContainer=document.querySelector(".students-container");
// studentContainer.style.border="2px solid red";

const person = {
    firstName:"Rachel",
    lastName:"Green",
    quote: "Try Try Try untill you succeed",
    skills: ["HTML","Css","Java Script"],
    imgURL: "C:/VsPrjct/JavaScript/img/prof1.jpg",

    getFullname(){
        return `${this.firstName} ${this.lastName}`
    },

    getSkills(){
        const skillsHTML =this.skills.map(skill => `<li>${skill}</li>`);
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    },

    getPersonHTML(){
        const personHTML= `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2> ${this.getFullname()}</h2>
            <blockquote> ${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul> ${this.getSkills()}</ul>
        </article>
        `
        return personHTML;

    }
}

for(let index=0; index<3; index++){
studentContainer.innerHTML+=person.getPersonHTML();
}

// studentContainer.innerHTML =`
// <article class="student-card">
//     <img src=${person.imgURL} />
//     <h2> ${person.getFullname()}</h2>
//     <blockquote> ${person.quote}</blockquote>
//     <h3>Skills</h3>
//     <ul> ${person.getSkills()}</ul>
// </article>
// `;

// person.age=30;
// console.log(person.skills[1] + " is the skill of "+person.getFullname());
// console.log(person.getSkills());
// //by calling object
// console.log(person.firstName+ " "+person.lastName);
// //by calling method
// console.log(person.getFullname());