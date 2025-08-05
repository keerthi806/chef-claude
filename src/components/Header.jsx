import ChefClaudeIcon from '../assets/chef-claude-icon.png';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <img src={ChefClaudeIcon} alt="chef-claude-icon" className='chef-claude-icon'/>
      <h2 className='header-title'>Chef Claude</h2>
    </header>
  );
}