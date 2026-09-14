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

const About = () => {
    return (
        <div id='about'>
            <h2>About</h2>
            <p>{Mila.getName()}</p>
        </div>
    )
}

export default About;