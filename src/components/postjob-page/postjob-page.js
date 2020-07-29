import React, { Component,useState, useEffect } from 'react';

import './postjob-page.css'
import axios from 'axios';

class PostjobPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      position: null,
      company: null,
      type_of_job: null,
      category: null,
      logo: null,
      url: null,
      description: null,
      email: null
    };
}

// location: "Santo Domingo",
// position: "Desing freelancer",
// company: "GBM",
// type_of_job: "money",
// category: "Design",
// logo: "ok",
// url: "ok",
// description: "description",

// const [articleId, setArticleId] = useState(null);

//     useEffect(() => {
//         // POST request using axios inside useEffect React hook
//         const article = { title: 'React Hooks POST Request Example' };
//         axios.post('https://reqres.in/api/articles', article)
//             .then(response => setArticleId(response.data.id));

//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);

  render() {
    return(
        <h3>hola</h3>
    );
  }
}

export default PostjobPage;
