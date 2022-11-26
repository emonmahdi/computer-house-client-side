import React, { useEffect, useState } from "react";

import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="blog-section">
      <div className="container">
        <div className="section-title-blog">
          <h3>Blog For Programmers</h3>
        </div>
        <div className="row">
          {blogs.map((blog) => {
            const { title, description, img, publish, reference } = blog;
            return (
              <div className="col-md-10 mx-auto" key={title}>
                <div className="single-blog">
                  <div className="row d-flex align-items-center border p-3 mb-4">
                    <div className="col-md-4">
                      <img
                        src={img}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8 text-start">
                      <h4 className="mb-1">{title}</h4>
                      <div className="mb-1">
                        <span className="text-secondary">
                          Published: {publish}
                        </span>
                      </div>
                      <p>
                        {description}
                      </p>
                      <button className="btn btn-dark mt-1">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
