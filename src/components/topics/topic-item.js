import { Link } from "react-router-dom";

function TopicItem({ topic, deleteHandler }) {
    

    return (
        <div className="topic-item">
            <Link to={`/topics/${topic.id}`} className="topic-item-name">{topic.name}</Link>
            <p onClick={deleteHandler} className='topic-item-delete-btn'>
                <i className="bi bi-trash"></i>
            </p>
        </div>
    );
}

export default TopicItem;