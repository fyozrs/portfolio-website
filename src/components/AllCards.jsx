import TopicCard from '../components/TopicCard'
import '../css/AllCards.css'

const descriptionMe = 'Software Engineering and Information Systems student @ FCSE, based in Skopje. I spend my days learning programming fundamentals and my free time playing around with motion design in After Effects. Currently looking to build my first few software projects!'
const educationPar = 'FCSE in Skopje'

const AllCards = () => (
    <div className='card-container'>
        <TopicCard id='tpc-crd-1' title="About" description={descriptionMe} />
        <TopicCard id='tpc-crd-2' title="Education" role="2025 — Present" description={educationPar} />
    </div>
);

export default AllCards;