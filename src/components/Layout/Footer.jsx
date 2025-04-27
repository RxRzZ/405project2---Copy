import '../../styles/components/footer.css';

export default function Footer() {
    return (
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} TaskMaster - A simple task management app</p>
      </footer>
    );
  }