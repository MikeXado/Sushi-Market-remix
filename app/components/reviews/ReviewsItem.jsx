function ReviewsItem({ comment }) {
  return (
    <div className="reviews-item">
      <div className="reviews-item__client-info client-info">
        {comment.title} /{" "}
        <span className="reviews-item__date">{comment.date}</span>
      </div>
      <div className="reviews-item__description">{comment.desc}</div>
    </div>
  );
}

export default ReviewsItem;
