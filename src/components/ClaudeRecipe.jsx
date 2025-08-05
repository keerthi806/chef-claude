import ReactMarkdown from 'react-markdown';
import './ClaudeRecipe.css';

export default function ClaudeRecipe({recipe, ref}) {

  return (
    <section className="recipe-container" aria-live='polite' ref={ref}>
      <h2>From Chef Claude:</h2>
      <ReactMarkdown>
        {recipe}
      </ReactMarkdown>
    </section>
  );
}