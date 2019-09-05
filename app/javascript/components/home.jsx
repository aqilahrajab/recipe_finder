import React from 'react'

 class Home extends React.Component{

    constructor() {
        super();

    }

  getPosts(){
            var request = new XMLHttpRequest();

            request.addEventListener("load", function(){
            const responseData = JSON.parse( this.responseText );
            console.log( responseData );
        });

    request.open("GET", '/recipes.json');
    request.send();
  }

  render() {
    return (
      <div>
        <p>wow APP</p>
        <button onClick={()=>{this.getPosts()}}>get posts</button>
      </div>
    );
  }
}

export default Home;