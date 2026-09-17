import '../css/TopicCard.css'

const TopicCard = (props) => {
    return (
        <div id='about'>
            <h3>{props.title}</h3>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default TopicCard;