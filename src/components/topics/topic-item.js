import { Link } from "react-router-dom";

function TopicItem({ topic }) {
    return (
        <div className="topic-item">
            <Link to={`/topics/${topic.id}`} className="topic-item-name">{topic.name}</Link>
            <p className='topic-item-delete-btn'>X</p>
        </div>
    );
}

export default TopicItem;