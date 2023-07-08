export default function homepage() {
    const aboutUsContainer = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = "About Us";
    const img = document.createElement('img');
    img.setAttribute('src', "https://media.istockphoto.com/id/1200207445/photo/the-olde-time-candy-shop.jpg?s=612x612&w=0&k=20&c=qZXsTpOo2Zh1muEVNqF1UDU2SePAOqHQbALSTODMz18=");
    const paragraph = document.createElement('p');
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus quisquam, odit delectus consectetur eaque, quos molestias nostrum dolore animi debitis deserunt quia natus nulla. Accusamus odit natus accusantium ad?";

    aboutUsContainer.appendChild(header);
    aboutUsContainer.appendChild(img);
    aboutUsContainer.appendChild(paragraph);

    content.appendChild(aboutUsContainer);
}
