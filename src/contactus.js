export default function contactUs() {
    const contactWrapper = document.createElement('div');
    const intro = document.createElement('h2');
    const phone = document.createElement('p');
    const address = document.createElement('p');
    const openHours = document.createElement('p');

    intro.textContent = "Greetings from Bob: Feel free to reach us anytime!";
    phone.textContent = "1-800-5555";
    address.textContent = "1 Candy Drive, TX";
    openHours.textContent = "Mon-Fri 10AM-8PM, Sat-Sun 10AM-7PM";
    const contactInfo = [intro, phone, address, openHours];

    contactWrapper.append(...contactInfo);
    content.appendChild(contactWrapper);
}

