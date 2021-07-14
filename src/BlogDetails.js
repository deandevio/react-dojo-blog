import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`http://localhost:5000/blogs/${id}`);
  const history = useHistory();

  const deleteBlog = () => {
    fetch(`http://localhost:5000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteBlog}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
