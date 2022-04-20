import React, { useState } from 'react';


const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }


  return (
    <div className="create">
      <h2>Add a new blog </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={ (e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange = { (e) => setBody(e.target.value) }
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Loading ...</button>}
      </form>

    </div>
  );
}

export default Create;
