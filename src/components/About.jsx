import '../css/About.css'

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getName() {
        return this.name + ' ' + this.surname;
    }
}

const Mila = new Person('Mila', 'Kostovska');
const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas atque distinctio nihil pariatur mollitia! Quidem fugiat nihil a voluptate, quia corrupti ab mollitia possimus sequi iste, ea eius eaque!'

const About = () => {
    return (
        <div id='about'>
            <h3>About</h3>
            <p>{Mila.getName()}</p>
            <p>{Lorem}</p>
        </div>
    );
};

export default About;