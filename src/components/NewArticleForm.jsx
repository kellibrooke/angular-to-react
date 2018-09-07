import React from 'react';

function NewArticleForm() {

  function handleNewArticleSubmission(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleNewArticleSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Article Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='photoPath'
          placeholder='Article Photo Path'
          ref={(input) => {_photoPath = input;}}/>
          <input
            type='text'
            id='url'
            placeholder='Article URL'
            ref={(input) => {_url = input;}}/>
          <select
            id='category'
            ref={(select) => {_category = select;}}>
            <option
              value='latest'>Latest</option>
            <option
              value='month'>Most Popular This Month</option>
            <option
              value='week'>Most Popular This Week</option>
            <option
              value='today'>Most Popular Today</option>
            <option
              value='recent'>Most Recent</option>
          </select>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}
