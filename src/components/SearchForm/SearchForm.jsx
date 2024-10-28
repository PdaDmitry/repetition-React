import css from './SearchForm.module.css';

export function SearchForm({ onSearchTopic }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === '') {
      alert('Please enter search term!');
      return;
    }
    onSearchTopic(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="topic"
        placeholder="Search articles..."
        className={css.searchInput}
      />
      <button>Search articles</button>
    </form>
  );
}
