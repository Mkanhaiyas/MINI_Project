import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="titles">CONTINUOUS ASSESMENT</div>
        <div className="para">
          <p>
            Assessment plays an important role in determining student
            achievement in the classroom. Web-based assessment allows teachers
            to design assessments develop a question bank and provide formative
            or summative tests online. Teachers and students can use the results
            that have been generated automatically to do a reflection in order
            to improve student achievement. This system also allows students to
            communicate online with teachers in relation to the subject taught
            and provide immediate feedback. Web-based assessment is the best way
            to identify the needs of students and to encourage them to move
            forward, provided the teacher is able to link students to good
            sources and references for learning. The purpose of this study is to
            develop a Web-based Assessment in Teaching and Learning Management
            System, using the Internet as a medium of teaching and learning
            assessment which helps teachers to manage and prepare test questions
            and assess student learning.
          </p>
        </div>
        <div className="image">
          <img src="study.jpg" alt="study" className="img2" />
        </div>
      </div>
    </section>
  );
}

export default Blog;
