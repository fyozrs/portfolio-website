import TopicCard from '../components/TopicCard'
import '../css/AllCards.css'

const descriptionMe = 'Software Engineering and Information Systems student @ FCSE. I spend my days learning programming fundamentals and my free time playing around with motion design in After Effects. Currently looking to build my first few software projects!'

const AllCards = () => {
    return (
        <div className='card-container'>
            <TopicCard title="About" description={descriptionMe} />
            <TopicCard title="Education" name="Mila" description="Something" />
        </div>
    )
}

export default AllCards;