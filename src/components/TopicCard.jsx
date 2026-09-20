import '../css/TopicCard.css'

const TopicCard = (props) => (
    <div id='topic-card'>
        <div id='title-role'>
            <h3>{props.title}</h3>
            <h4>{props.role}</h4>
        </div>
        <p>{props.description}</p>
    </div>
);


export default TopicCard;