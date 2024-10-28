const BlogPosts = ({title, content}) => {
  return (
    <div>
      <div className="post">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPosts;
