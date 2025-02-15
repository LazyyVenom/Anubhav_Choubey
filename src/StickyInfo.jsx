import './StickyInfo.css';
import anubhavImage from './assets/anubhav.png';

export default function StickyInfo() {
    return (
        <div className="sticky_info">
            <img src={anubhavImage} alt="Anubhav" />
            <h1>Anubhav Choubey</h1>
            <p>At this point tell me your requirements there is chance I can do it or I will learn a way to do it.</p>
        </div>
    )
}