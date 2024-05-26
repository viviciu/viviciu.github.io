
export default function BlogPost({ metadata }) {
    return (
      <div>
        <h2>{metadata.title}</h2>
        <p>{metadata.readTime}</p>
        <p>{metadata.dateCreated}</p>
        <ul>
          {metadata.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }